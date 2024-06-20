import { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Checkbox, Divider, Fab, FormControl, FormControlLabel, Grid, InputAdornment, MenuItem, OutlinedInput, Pagination, Paper, Radio, RadioGroup, Select, Tab, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab";

import Breadcrumbs from "components/@extended/Breadcrumbs";

import { APP_DEFAULT_PATH } from "config";
import { useNavigate, useParams } from "react-router";

import TextMaskCustom from "components/AccountNoInput";
import MainCard from "components/MainCard";
import { calcmethods } from "utils/domains";

const EditCharge = () =>
{
  const { id } = useParams();
  const [currentTab, setCurrentTab] = useState('1');

  const navigate = useNavigate()

  const handleTabChange = (event, newValue) =>
  {
    setCurrentTab(newValue);
  };
  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Charges', to: "/setup/charges" }, { title: 'Edit' }];

  return <>
    <Breadcrumbs custom heading="Edit Charge" links={breadcrumbLinks} />
    <MainCard>
      <TabContext value={currentTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Charges" value="1" />
            <Tab label="Setting" value="2" />
          </TabList>
          <TabPanel value="1">
            <Box className="p-[20px]">
              <Grid container spacing={2} direction='column'>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Charge Code</Typography>
                  <TextField />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Charge Description</Typography>
                  <TextField className="col-span-5" />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Tax</Typography>
                  <Select
                    className='w-[15vw]'
                    margin='dense'
                    value=""
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="APARTMENT">Apartment</MenuItem>
                  </Select>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Calculation Method</Typography>
                  <Select
                    className='w-[15vw]'
                    margin='dense'
                    value="By Fixed Rate"
                  >
                    {
                      Object.keys(calcmethods).map(method => (
                        <MenuItem key={method} value={method}>{method}</MenuItem>
                      ))
                    }
                  </Select>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Charge by</Typography>
                  <Select
                    margin='dense'
                    value="Value"
                  >
                    <MenuItem value="Value">By Fixed Rate</MenuItem>
                    <MenuItem value="APARTMENT">Apartment</MenuItem>
                  </Select>
                  <Typography>per unit</Typography>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>
                    Selling Price
                  </Typography>
                  <OutlinedInput
                    endAdornment={<InputAdornment position="end">RM</InputAdornment>}
                    type='number'
                  />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>
                    Tax Percentage
                  </Typography>
                  <OutlinedInput
                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                    type='number'
                  />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Reporting UOM</Typography>
                  <TextField />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Account No</Typography>
                  <OutlinedInput
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                  />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Status</Typography>
                  <Select
                    margin='dense'
                    value="Active"
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="APARTMENT">Apartment</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box className="p-[20px]">
              <Grid container spacing={2} direction='column'>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography className="font-bold">Late Interest Settings</Typography>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Charges Late Interest</Typography>
                  <FormControl>
                    <RadioGroup defaultValue="Yes" row>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControlLabel control={<Checkbox />} label="Define Own Late Interest Rate" />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography className="font-bold">Monthly Statement Settings</Typography>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Show in monthly statement</Typography>
                  <FormControl>
                    <RadioGroup defaultValue="Yes" row>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography className="font-bold">Invoice Billing Print Settings</Typography>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography className="underline">Header Options</Typography>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Display Financier & Ref No</Typography>
                  <FormControl>
                    <RadioGroup defaultValue="Yes" row>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Display Solicitor & Ref No</Typography>
                  <FormControl>
                    <RadioGroup defaultValue="Yes" row>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Display Insurance & Ref No</Typography>
                  <FormControl>
                    <RadioGroup defaultValue="Yes" row>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography className="underline">Remarks Options</Typography>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Auto Generate Remarks?</Typography>
                  <FormControl>
                    <RadioGroup defaultValue="Yes" row>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Remarks Setting</Typography>
                  <Select
                    className='w-[100%]'
                    margin='dense'
                    value="By Date"
                  >
                    <MenuItem value="By Date">By Date</MenuItem>
                    <MenuItem value="APARTMENT">Apartment</MenuItem>
                  </Select>
                </Grid>
                <Grid item>
                  <FormControlLabel control={<Checkbox />} label="Generate End Range" />
                </Grid>
                <Grid item className="grid grid-cols-6 items-center gap-x-4">
                  <Box className="flex justify-between items-center">
                    <Typography>Duration</Typography>
                    <TextField className="w-[80px]" type="number" />
                  </Box>
                  <Select
                    className='w-[100%]'
                    margin='dense'
                    value="Month(s) Forwards"
                  >
                    <MenuItem value="Month(s) Forwards">Month(s) Forwards</MenuItem>
                    <MenuItem value="APARTMENT">Apartment</MenuItem>
                  </Select>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography className="underline">Rounding Options</Typography>
                </Grid>
                <Grid item className="grid grid-cols-6 items-center">
                  <Typography>Billing Price Rounded To</Typography>
                  <Select
                    className='w-[100%]'
                    margin='dense'
                    value=""
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="APARTMENT">Apartment</MenuItem>
                  </Select>
                  <Typography>&nbsp;decimal places.</Typography>
                </Grid>
                <Grid item>
                  <FormControlLabel control={<Checkbox />} label="Activate Bank Negara Malaysia Rounding Mechanism" />
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </Box>
      </TabContext>
      <Box className="p-3 flex items-center justify-end gap-2">
        <Button variant="contained" color="inherit" onClick={() => navigate('/setup/charges')}>Cancel</Button>
        <Button variant="contained">Submit</Button>
      </Box>
    </MainCard>
  </>
}

export default EditCharge