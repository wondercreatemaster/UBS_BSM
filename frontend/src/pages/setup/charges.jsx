import { useState } from "react";
import { Box, Card, CardActions, CardContent, Checkbox, Divider, Fab, FormControl, FormControlLabel, Grid, InputAdornment, MenuItem, OutlinedInput, Pagination, Paper, Radio, RadioGroup, Select, Tab, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Add, Close, Delete, Done, Edit, Print } from "@mui/icons-material";
import TextMaskCustom from "components/AccountNoInput";


const Charges = () =>
{
  const [currentTab, setCurrentTab] = useState('1');
  const [viewMode, setViewMode] = useState(true);

  const handleTabChange = (event, newValue) =>
  {
    setCurrentTab(newValue);
  };

  const handleEditButton = () =>
  {
    setViewMode(false);
    setCurrentTab('1');
  }

  const handleDoneButton = () =>
  {
    setViewMode(true)
  }

  const handleCloseButton = () =>
  {
    setViewMode(true)
  }

  return (
    <Card>
      <CardContent>
        <TabContext value={currentTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
              <Tab label="Charges" value="1" />
              <Tab label="Setting" value="2" />
              <Tab label="Listing" value="3" disabled={!viewMode} />
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
                      disabled={viewMode}
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
                      disabled={viewMode}
                      value="By Fixed Rate"
                    >
                      <MenuItem value="By Fixed Rate">By Fixed Rate</MenuItem>
                      <MenuItem value="APARTMENT">Apartment</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>Charge by</Typography>
                    <Select
                      margin='dense'
                      disabled={viewMode}
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
                      disabled={viewMode}
                      type='number'
                    />
                  </Grid>
                  <Grid item className="grid grid-cols-6 items-center">
                    <Typography>
                      Tax Percentage
                    </Typography>
                    <OutlinedInput
                      endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      disabled={viewMode}
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
                      disabled={viewMode}
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
                      disabled={viewMode}
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
                      disabled={viewMode}
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
                      disabled={viewMode}
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
            <TabPanel value="3">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Charge Code</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Calculate Method</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <Typography className='text-center p-5'>No Data</Typography>
                  {/* <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody> */}
                </Table>
              </TableContainer>
            </TabPanel>
          </Box>
        </TabContext>
      </CardContent>
      {viewMode ? (
        <CardActions disableSpacing className='px-[30px] pb-[20px]'>
          <Pagination count={10} color="primary" shape="rounded" />
          <Box className="ml-auto flex gap-2">
            <Fab size='medium' color='primary'>
              <Add />
            </Fab>
            <Fab size='medium' color='info' onClick={handleEditButton}>
              <Edit />
            </Fab>
            <Fab size='medium' color='error'>
              <Delete />
            </Fab>
            <Fab size='medium' color='success'>
              <Print />
            </Fab>
          </Box>
        </CardActions>
      ) : (
        <CardActions disableSpacing className='px-[30px] pb-[20px]'>
          <Box className='ml-auto flex gap-2'>
            <Fab size='medium' color='inherit' onClick={handleCloseButton}>
              <Close />
            </Fab>
            <Fab size='medium' color='primary' onClick={handleDoneButton}>
              <Done />
            </Fab>
          </Box>
        </CardActions>
      )}
    </Card>
  )
}

export default Charges