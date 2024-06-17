import React, { useState } from 'react'

import { Add, Close, Delete, Done, Edit, Print, Search } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Grid, InputBase, Pagination, Paper, TextField, IconButton, CardContent, CardActions, CardHeader, Card, Box, Tab, Select, MenuItem, OutlinedInput, InputAdornment, Button, Fab, Divider, FormGroup, FormControlLabel, Checkbox, FormControl, RadioGroup, Radio, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Typography from '@mui/material/Typography';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextMaskCustom from 'components/AccountNoInput';

const OwnerShip = () =>
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
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginBottom: "1vh" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Units"
          inputProps={{ 'aria-label': 'search units' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>

      <Card>
        <CardHeader
          title="Unit No 0001"
        />
        <CardContent className='p-[30px]'>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid container md={4} direction="column" alignItems="flex-end" spacing={1}>

              <Grid item className='flex items-center gap-x-4'>
                <Typography>
                  Unit Description
                </Typography>
                <TextField className='w-[15vw]' margin='dense' disabled={viewMode} />
              </Grid>

              <Grid item className='flex items-center gap-x-4'>
                <Typography>
                  Phase
                </Typography>
                <Select
                  className='w-[15vw]'
                  margin='dense'
                  disabled={viewMode}
                  value="A"
                >
                  <MenuItem value="A">BLOCK A</MenuItem>
                  <MenuItem value="B">BLOCK B</MenuItem>
                  <MenuItem value="C">BLOCK C</MenuItem>
                </Select>
              </Grid>

              <Grid item className='flex items-center gap-x-4'>
                <Typography>
                  House Type
                </Typography>
                <Select
                  className='w-[15vw]'
                  margin='dense'
                  disabled={viewMode}
                  value="CONDO"
                >
                  <MenuItem value="CONDO">CONDO</MenuItem>
                  <MenuItem value="APARTMENT">Apartment</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid item md={8}>
              <TabContext value={currentTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                    <Tab label="Property" value="1" />
                    <Tab label="Contact" value="2" />
                    <Tab label="Employment" value="3" />
                    <Tab label="Unit Details" value="4" disabled={!viewMode} />
                    <Tab label="Financier & etc" value="5" />
                    <Tab label="Residents Profile" value="6" />
                    <Tab label="Verhicle Particulars" value="7" />
                    <Tab label="Tenant" value="8" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Box className="p-[20px]">
                    <Grid container spacing={2} direction="column">
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Owned by
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="Person"
                        >
                          <MenuItem value="Person">Person</MenuItem>
                          <MenuItem value="Company">Company</MenuItem>
                          <MenuItem value="Developer">Developer</MenuItem>
                        </Select>
                        <Typography>
                          Ownership Date
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker format='DD/MM/YYYY' />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Owner No.
                        </Typography>
                        <TextField />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Owner Group
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="Group"
                        >
                          <MenuItem value="Group">Group</MenuItem>
                          <MenuItem value="Company">Company</MenuItem>
                          <MenuItem value="Developer">Developer</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Name
                        </Typography>
                        <TextField />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Old IC
                        </Typography>
                        <TextField />
                        <Typography>
                          New IC
                        </Typography>
                        <TextField />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Passport No.
                        </Typography>
                        <TextField />
                        <Typography>
                          Nationality
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="MALAYSIAN"
                        >
                          <MenuItem value="MALAYSIAN">MALAYSIAN</MenuItem>
                          <MenuItem value="Company">Company</MenuItem>
                          <MenuItem value="Developer">Developer</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item>
                        <Divider />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>Race</Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="Unspecified"
                        >
                          <MenuItem value="Unspecified">Unspecified</MenuItem>
                          <MenuItem value="Malay">Malay</MenuItem>
                          <MenuItem value="Chinese">Chinese</MenuItem>
                          <MenuItem value="Indian">Indian</MenuItem>
                          <MenuItem value="Others">Others</MenuItem>
                        </Select>
                        <Typography>Gender</Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="Unspecified"
                        >
                          <MenuItem value="Unspecified">Unspecified</MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>D.O.B</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker format='DD/MM/YYYY' />
                        </LocalizationProvider>
                        <Typography>Material Status</Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="Unspecified"
                        >
                          <MenuItem value="Unspecified">Unspecified</MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>Pay Term</Typography>
                        <TextField type='number' />
                        <Typography>Account No.</Typography>
                        <OutlinedInput
                          name="textmask"
                          id="formatted-text-mask-input"
                          inputComponent={TextMaskCustom}
                        />
                      </Grid>
                      <Grid item>
                        <FormGroup>
                          <FormControlLabel control={<Checkbox />} label="Not Calculate Late Interest" />
                        </FormGroup>
                      </Grid>
                      <Grid item>
                        <Divider />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          B/F Amt
                        </Typography>
                        <TextField type='number' />
                        <Typography>
                          Open Credit Amt
                        </Typography>
                        <TextField type='number' />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Outstanding Amt
                        </Typography>
                        <TextField type='number' />
                        <Typography>
                          Deposit Balance
                        </Typography>
                        <TextField type='number' />
                      </Grid>
                      <Grid item className='flex justify-end items-center gap-x-5'>
                        <Button color='primary' variant='contained'>Co-Owner</Button>
                        <Button color='primary' variant='contained'>Sub Purchaser</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box className="p-[20px]">
                    <Grid container spacing={2} direction="column">
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Preferred Mail Address
                        </Typography>
                        <Select
                          className='w-[15vw]'
                          margin='dense'
                          disabled={viewMode}
                          value="Contact Address"
                        >
                          <MenuItem value="Contact Address">Contact Address</MenuItem>
                          <MenuItem value="APARTMENT">Apartment</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item>
                        <Typography className='font-bold'>
                          Contact Address
                        </Typography>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                        <Typography>
                          Address
                        </Typography>
                        <Box className='col-span-5 flex flex-col gap-3'>
                          <TextField fullWidth />
                          <TextField />
                          <TextField />
                        </Box>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          PostCode
                        </Typography>
                        <TextField type='number' />
                        <Typography>
                          State
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="KUALA LUMPUR"
                        >
                          <MenuItem value="KUALA LUMPUR">KUALA LUMPUR</MenuItem>
                          <MenuItem value="APARTMENT">Apartment</MenuItem>
                        </Select>
                        <Typography>
                          Country
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="MALAYSIA"
                        >
                          <MenuItem value="MALAYSIA">MALAYSIA</MenuItem>
                          <MenuItem value="APARTMENT">Apartment</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          (H)Telephone No.
                        </Typography>
                        <TextField />
                        <Typography>
                          (M)Telephone No.
                        </Typography>
                        <TextField />
                      </Grid>
                      <Grid item>
                        <Divider />
                      </Grid>
                      <Grid item className='grid grid-cols-6 gap-x-4'>
                        <Typography>
                          Remark
                        </Typography>
                        <TextField className='col-span-5' multiline minRows={5} />
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel value='3'>
                  <Box className='p-[20px] grid grid-cols-6 gap-4'>
                    <Typography>
                      Occupation
                    </Typography>
                    <TextField className='col-span-5' />
                    <Typography>
                      Employer
                    </Typography>
                    <TextField className='col-span-5' />
                    <Typography>
                      (O) Telephone No.
                    </Typography>
                    <TextField className='col-span-5' />
                    <Typography>
                      E-mail
                    </Typography>
                    <TextField className='col-span-5' />
                  </Box>
                </TabPanel>
                <TabPanel value='4'>
                  <Box className='p-[20px]'>
                    <Grid container spacing={2} direction='column'>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Unit Type
                        </Typography>
                        <TextField disabled={viewMode} />
                        <Typography className='col-start-4'>
                          Area
                        </Typography>
                        <OutlinedInput
                          endAdornment={<InputAdornment position="end">Sq.Feet</InputAdornment>}
                          disabled={viewMode}
                          type='number'
                        />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Car Park No(s)
                        </Typography>
                        <TextField className='col-span-5' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                        <Typography>
                          Remark
                        </Typography>
                        <TextField className='col-span-5' multiline minRows={5} />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                        <Typography>
                          Transfer Date
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker className='col-span-2 w-[100%]' format='DD/MM/YYYY' />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                        <Typography>
                          Parcel No
                        </Typography>
                        <TextField />
                      </Grid>
                      <Grid item>
                        <Divider />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                        <Typography className='font-bold'>Console Address</Typography>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                        <Typography>Address</Typography>
                        <Box className='col-span-5 flex flex-col gap-3'>
                          <TextField />
                          <TextField />
                          <TextField />
                        </Box>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          PostCode
                        </Typography>
                        <TextField type='number' />
                        <Typography>
                          State
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="KUALA LUMPUR"
                        >
                          <MenuItem value="KUALA LUMPUR">KUALA LUMPUR</MenuItem>
                          <MenuItem value="APARTMENT">Apartment</MenuItem>
                        </Select>
                        <Typography>
                          Country
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          disabled={viewMode}
                          value="MALAYSIA"
                        >
                          <MenuItem value="MALAYSIA">MALAYSIA</MenuItem>
                          <MenuItem value="APARTMENT">Apartment</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel value='5'>
                  <Box className='p-[20px]'>
                    <Grid container spacing={2} direction='column'>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Financier</Typography>
                        <Box className='flex col-span-2 items-center gap-x-3'>
                          <TextField />
                          <IconButton><Search /></IconButton>
                        </Box>
                        <TextField className='col-span-2' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Fincr. Ref No</Typography>
                        <TextField className='col-span-4' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Fincr. Tel No</Typography>
                        <TextField className='col-span-2' />
                        <Typography>Fincr. Branch</Typography>
                        <TextField className='col-span-2' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Solicitor</Typography>
                        <Box className='flex col-span-2 items-center gap-x-3'>
                          <TextField />
                          <IconButton><Search /></IconButton>
                        </Box>
                        <TextField className='col-span-2' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Soli. Ref No</Typography>
                        <Box className='flex col-span-2 items-center gap-x-3'>
                          <TextField />
                          <IconButton><Search /></IconButton>
                        </Box>
                        <TextField className='col-span-2' />
                      </Grid>
                      <Grid item>
                        <Typography className='font-bold'>
                          Reference No.
                        </Typography>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Electrical Bill Ref No</Typography>
                        <TextField />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Gas Bill Ref No</Typography>
                        <TextField />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Water Bill Ref No</Typography>
                        <TextField />
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel value='6'>
                  <Box className='p-[20px]'>
                    <Grid container spacing={2} direction="column">
                      <Grid item className='grid grid-cols-6 gap-x-5 items-baseline'>
                        <Typography>Resident Status</Typography>
                        <Box className="border p-2">
                          <FormControl>
                            <RadioGroup defaultValue="vacant">
                              <FormControlLabel value="vacant" control={<Radio />} label="Vacant" />
                              <FormControlLabel value="occupied" control={<Radio />} label="Occupied" />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                        <Typography>
                          Date Move In
                        </Typography>
                        <Box className="col-span-2">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format='DD/MM/YYYY' />
                          </LocalizationProvider>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Divider />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography className='font-bold'>
                          Resident Details
                        </Typography>
                        <FormControlLabel control={<Checkbox />} label="Same As Owner" labelPlacement="right" />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Name
                        </Typography>
                        <TextField className='col-span-5' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Old IC
                        </Typography>
                        <TextField />
                        <Typography>
                          New IC
                        </Typography>
                        <TextField />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Passport No.
                        </Typography>
                        <TextField />
                        <Typography>
                          Nationality
                        </Typography>
                        <Select
                          className='w-[15vw]'
                          margin='dense'
                          disabled={viewMode}
                          value="MALAYSIA"
                        >
                          <MenuItem value="Contact Address">Contact Address</MenuItem>
                          <MenuItem value="APARTMENT">Apartment</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Race
                        </Typography>
                        <Select
                          margin='dense'
                          disabled={viewMode}
                          value="Unspecified"
                        >
                          <MenuItem value="Unspecified">Unspecified</MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                        <Typography>
                          Gender
                        </Typography>
                        <Select
                          margin='dense'
                          disabled={viewMode}
                          value="Unspecified"
                        >
                          <MenuItem value="Unspecified">Unspecified</MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          D.O.B
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker format='DD/MM/YYYY' />
                        </LocalizationProvider>
                        <Typography>
                          Material Status
                        </Typography>
                        <Select
                          margin='dense'
                          disabled={viewMode}
                          value="Unspecified"
                        >
                          <MenuItem value="Unspecified">Unspecified</MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                        <Typography>
                          (H)Telephone No.
                        </Typography>
                        <TextField />
                        <Typography>
                          (M)Telephone No.
                        </Typography>
                        <TextField />
                      </Grid>
                      <Grid item className='grid grid-cols-12 items-center gap-x-7'>
                        <Typography className='col-span-2'>Relationship</Typography>
                        <FormControl className='col-span-5'>
                          <RadioGroup defaultValue="Tenant" row>
                            <FormControlLabel value="Tenant" control={<Radio />} label="Tenant" />
                            <FormControlLabel value="Relative" control={<Radio />} label="Relative" />
                            <FormControlLabel value="Others, please state" control={<Radio />} label="Others, please state" />
                          </RadioGroup>
                        </FormControl>
                        <TextField className='col-span-2' />
                      </Grid>
                      <Grid item>
                        <Divider />
                      </Grid>
                      <Grid item className='text-right'>
                        <Button variant='contained'>Other Occupants</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel value='7'>
                  <Box className='p-[20px]'>
                    <Grid container spacing={2} direction="column">
                      <Grid item>
                        <Typography className='font-bold'>Vehicle Particulars:-</Typography>
                      </Grid>
                      <Grid item>
                        <TableContainer component={Paper}>
                          <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Parking Bay No.</TableCell>
                                <TableCell>Vehicle No.</TableCell>
                                <TableCell>Access Card No.</TableCell>
                                <TableCell>Car Sticker No.</TableCell>
                                <TableCell>Valid Until</TableCell>
                                <TableCell>OwnerShip</TableCell>
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
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel value='8'>
                  <Box className='p-[20px]'>
                    <Grid container spacing={2} direction='column'>
                      <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                        <Typography>Tenant No.</Typography>
                        <TextField />
                        <IconButton>
                          <Search />
                        </IconButton>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                        <Typography>
                          Tenant Name
                        </Typography>
                        <TextField className='col-span-5' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                        <Typography>Lease Start</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker className='col-span-2' format='DD/MM/YYYY' />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                        <Typography>Lease End</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker className='col-span-2' format='DD/MM/YYYY' />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item className='grid grid-cols-6 gap-x-7'>
                        <Typography>Remark</Typography>
                        <TextField className='col-span-5' multiline minRows={5} />
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
              </TabContext>
            </Grid>
          </Grid>
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
      </Card >

    </>
  )
}

export default OwnerShip