import { useEffect, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Checkbox, Divider, Fab, FormControl, FormControlLabel, Grid, InputAdornment, MenuItem, OutlinedInput, Pagination, Paper, Radio, RadioGroup, Select, Tab, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab";

import Breadcrumbs from "components/@extended/Breadcrumbs";

import { APP_DEFAULT_PATH } from "config";
import { useNavigate, useParams } from "react-router";

import TextMaskCustom from "components/AccountNoInput";
import MainCard from "components/MainCard";
import { calcmethods, intervaltypes } from "utils/domains";
import axiosServices from "utils/axios";
import { openSnackbar } from "api/snackbar";

const EditCharge = () => {
  const { id } = useParams();
  const [currentTab, setCurrentTab] = useState('1');

  const [charge, setCharge] = useState();

  useEffect(() => {
    axiosServices.get(`/api/charge/${id}`)
      .then(res => {
        setCharge(res.data.charge);
      })
      .catch(err => {
        openSnackbar({
          open: true,
          message: err,
          variant: 'alert',
          alert: {
            color: 'error'
          }
        })
      })
  }, [])

  const navigate = useNavigate()

  const updateCharge = (key, value) => {
    setCharge({ ...charge, [key]: value })
  }

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Charges', to: "/setup/charges" }, { title: 'Edit' }];

  const handleSubmit = () => {
    axiosServices.post(`/api/charge/modify/${id}`, { charge })
      .then(res => {
        if (res.data.success)
          openSnackbar({
            open: true,
            message: "Successfully Updated!",
            variant: 'alert',
            alert: {
              color: 'success'
            }
          })
        else
          openSnackbar({
            open: true,
            message: "Unexpected Error!",
            variant: 'alert',
            alert: {
              color: 'error'
            }
          })
      })
      .catch(err => console.log(err))
  }

  return <>
    <Breadcrumbs custom heading="Edit Charge" links={breadcrumbLinks} />
    {
      charge &&
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
                    <TextField disabled value={charge.CHARCODE} />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Charge Description</Typography>
                    <TextField className="col-span-5" value={charge.DESP} onChange={e => updateCharge("DESP", e.target.value)} />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Tax</Typography>
                    <Select
                      className='w-[15vw]'
                      margin='dense'
                      value=""
                      disabled
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
                      value={charge.CALMETHOD}
                      onChange={e => updateCharge('CALMETHOD', e.target.value)}
                    >
                      {
                        Object.keys(calcmethods).map((method, index) => (
                          <MenuItem key={method} value={index + 1}>{method}</MenuItem>
                        ))
                      }
                    </Select>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Charge by</Typography>
                    <Select
                      margin='dense'
                      value="Value"
                      disabled
                    >
                      <MenuItem value="Value">Value</MenuItem>
                      <MenuItem value="APARTMENT">Apartment</MenuItem>
                    </Select>
                    <Typography>
                      {
                        (() => {
                          switch (charge.CALMETHOD) {
                            case 1: return "per area measurement"
                            case 2:
                            case 4: return "per unit"
                            case 3: return "per metered unit"
                            case 5: return "per Selling Price"
                          }
                        })()
                      }
                    </Typography>
                  </Grid>
                  {
                    charge.CALMETHOD == 3 && <>
                      <Grid item className="grid grid-cols-6 items-center">
                        <Typography>Meter Type</Typography>
                        <Select
                          margin='dense'
                          value={charge.METERTYPE}
                          onChange={e => updateCharge("METERTYPE", e.target.value)}
                        >
                          <MenuItem value={1}>Electricity</MenuItem>
                          <MenuItem value={2}>Gas</MenuItem>
                          <MenuItem value={3}>Water</MenuItem>
                          <MenuItem value={4}>Un-specified</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className="grid grid-cols-6 items-center">
                        <Typography>Meter Calculation</Typography>
                        <Select
                          margin='dense'
                          value={charge.METERCAL}
                          onChange={e => updateCharge("METERCAL", e.target.value)}
                        >
                          <MenuItem value={1}>Flat Rate</MenuItem>
                          <MenuItem value={2}>Table Rate</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className="grid grid-cols-6 items-center">
                        <Typography>Minimum Charges</Typography>
                        <OutlinedInput value={charge.MINCHAR} onChange={e => updateCharge("MINCHAR", e.target.value)} type="number" />
                      </Grid>
                      <Grid item className="grid grid-cols-6 items-center">
                        <Typography>Extra Charges</Typography>
                        <OutlinedInput value={charge.EXTCHAR} onChange={e => updateCharge("EXTCHAR", e.target.value)} type="number" />
                      </Grid>
                      <Grid item className="grid grid-cols-6 items-center">
                        <Typography>Intervals</Typography>
                        <OutlinedInput value={charge.INTERVAL} onChange={e => updateCharge("INTERVAL", e.target.value)} type="number" />
                        <Select
                          margin='dense'
                          value={charge.INTTERM}
                          className="col-span-2"
                          onChange={e => updateCharge("INTTERM", e.target.value)}
                        >
                          {
                            intervaltypes.map((item, index) => <MenuItem key={item} value={index + 1}>{item}</MenuItem>)
                          }
                        </Select>
                      </Grid>
                    </>
                  }

                  {
                    charge.CALMETHOD == 4 && (
                      <Grid item className="grid grid-cols-6 items-center">
                        <Typography>Car Park Type</Typography>
                        <Select
                          margin="dense"
                          value={charge.CPARKTYPE}
                          onChange={e => updateCharge("CPARKTYPE", e.target.value)}
                        >
                          <MenuItem value={1}>Buy</MenuItem>
                          <MenuItem value={2}>Rent</MenuItem>
                          <MenuItem value={3}>Both</MenuItem>
                        </Select>
                      </Grid>
                    )
                  }
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>
                      Rate
                    </Typography>
                    <OutlinedInput
                      endAdornment={<InputAdornment position="end">RM</InputAdornment>}
                      type='number'
                      value={charge.RATE}
                      onChange={e => updateCharge("RATE", e.target.value)}
                    />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>
                      Tax Percentage
                    </Typography>
                    <OutlinedInput
                      endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      type='number'
                      value={charge.TAXPER}
                      onChange={e => updateCharge("TAXPER", e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Reporting UOM</Typography>
                    <TextField value={charge.UOM} onChange={e => updateCharge("UOM", e.target.value)} />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Account No</Typography>
                    <OutlinedInput
                      name="textmask"
                      id="formatted-text-mask-input"
                      inputComponent={TextMaskCustom}
                      value={charge.ACCNO}
                      onChange={e => updateCharge("ACCNO", e.target.value)}
                    />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Status</Typography>
                    <Select
                      margin='dense'
                      value={charge.STATUS}
                      onChange={e => updateCharge("STATUS", e.target.value)}
                    >
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={2}>Inactive</MenuItem>
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
                      <RadioGroup
                        value={charge.LATECHAR}
                        onChange={e => updateCharge("LATECHAR", e.target.value)}
                        row>
                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                        <FormControlLabel value={2} control={<Radio />} label="No" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControlLabel control={<Checkbox checked={charge.DEFLATEINT} onChange={e => updateCharge("DEFLATEINT", e.target.checked)} />} label="Define Own Late Interest Rate" />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography className="font-bold">Monthly Statement Settings</Typography>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Show in monthly statement</Typography>
                    <FormControl>
                      <RadioGroup
                        value={charge.SHOWMONTH}
                        onChange={e => updateCharge("SHOWMONTH", e.target.value)}
                        row>
                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                        <FormControlLabel value={2} control={<Radio />} label="No" />
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
                      <RadioGroup
                        value={charge.SHOWFINCR}
                        onChange={e => updateCharge("SHOWFINCR", e.target.value)}
                        row>
                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                        <FormControlLabel value={2} control={<Radio />} label="No" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Display Solicitor & Ref No</Typography>
                    <FormControl>
                      <RadioGroup
                        value={charge.SHOWSOLI}
                        onChange={e => updateCharge("SHOWSOLI", e.target.value)}
                        row>
                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                        <FormControlLabel value={2} control={<Radio />} label="No" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Display Insurance & Ref No</Typography>
                    <FormControl>
                      <RadioGroup
                        value={charge.SHOWINSU}
                        onChange={e => updateCharge('SHOWINSU', e.target.value)}
                        row>
                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                        <FormControlLabel value={2} control={<Radio />} label="No" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography className="underline">Remarks Options</Typography>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Auto Generate Remarks?</Typography>
                    <FormControl>
                      <RadioGroup
                        value={charge.GENREMARK}
                        onChange={e => updateCharge("GENREMARK", e.target.value)}
                        row>
                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                        <FormControlLabel value={2} control={<Radio />} label="No" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Remarks Setting</Typography>
                    <Select
                      className='w-[100%]'
                      margin='dense'
                      value={1}
                    >
                      <MenuItem value={1}>By Date</MenuItem>
                      <MenuItem value={2}>By Month</MenuItem>
                      <MenuItem value={3}>By Year</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <FormControlLabel control={<Checkbox checked={charge.WITHEND} onChange={e => updateCharge("WITHEND", e.target.value)} />} label="Generate End Range" />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center gap-x-4">
                    <Box className="flex justify-between items-center">
                      <Typography>Duration</Typography>
                      <TextField className="w-[80px]" type="number" value={charge.DURATION} onChange={e => updateCharge("DURATION", e.target.value)} />
                    </Box>
                    <Select
                      className='w-[100%]'
                      margin='dense'
                      value={charge.DURTYPE}
                      onChange={e => updateCharge("DURTYPE", e.target.value)}
                    >
                      {
                        intervaltypes.map((item, index) => <MenuItem key={item} value={index + 1}>{item}</MenuItem>)
                      }
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
                      value={charge.PRICEROUND}
                      onChange={e => updateCharge("PRICEROUND", e.target.value)}
                    >
                      <MenuItem value={1}>0</MenuItem>
                      <MenuItem value={2}>1</MenuItem>
                      <MenuItem value={3}>2</MenuItem>
                    </Select>
                    <Typography>&nbsp;decimal places.</Typography>
                  </Grid>
                  <Grid item>
                    <FormControlLabel control={<Checkbox checked={charge.BNMRND} onChange={e => updateCharge("BNMRND", e.target.checked)} />} label="Activate Bank Negara Malaysia Rounding Mechanism" />
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </Box>
        </TabContext>
        <Box className="p-3 flex items-center justify-end gap-2">
          <Button variant="contained" color="inherit" onClick={() => navigate('/setup/charges')}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
      </MainCard>
    }
  </>
}

export default EditCharge