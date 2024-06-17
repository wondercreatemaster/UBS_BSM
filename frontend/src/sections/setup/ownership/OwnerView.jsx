import { useState } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';

// import { cities, countries } from 'data/location';

// project-imports
import { ImagePath, getImageUrl } from 'utils/getImageUrl';
import { cities, countries as mapcountries } from 'data/location';
import { countries, states } from 'utils/domains';
import { ThemeMode } from 'config';
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Grid, IconButton, Paper, Radio, RadioGroup, Tab, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Search } from '@mui/icons-material';

// ==============================|| PRODUCT - VIEW ||============================== //

export default function OwnerView({ data })
{
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState('1');

  const handleTabChange = (event, newValue) =>
  {
    setCurrentTab(newValue);
  };

  return (
    <Grid container spacing={3} alignItems="baseline" className='w-[90%] m-auto'>
      <Grid container md={4} direction="column" spacing={1}>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            Unit No
          </Typography>
          <Typography>
            Unit No
          </Typography>
        </Grid>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            Unit Description
          </Typography>
          <Typography>
            Unit Description
          </Typography>
        </Grid>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            Phase
          </Typography>
          <Typography>
            Phase
          </Typography>
        </Grid>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            House Type
          </Typography>
          <Typography>
            House Type
          </Typography>
        </Grid>
      </Grid>

      <Grid item md={8}>
        <TabContext value={currentTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
              <Tab label="Property" value="1" />
              <Tab label="Contact" value="2" />
              <Tab label="Employment" value="3" />
              <Tab label="Unit Details" value="4" />
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
                  <Typography>
                    Owned by
                  </Typography>

                  <Typography>
                    Ownership Date
                  </Typography>
                  <Typography>
                    Ownership Date
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Owner No.
                  </Typography>
                  <Typography>
                    Owner No.
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Owner Group
                  </Typography>
                  <Typography>
                    Owner Group
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Name
                  </Typography>
                  <Typography>
                    Name
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Old IC
                  </Typography>
                  <Typography>
                    Old IC
                  </Typography>

                  <Typography>
                    New IC
                  </Typography>
                  <Typography>
                    New IC
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Passport No.
                  </Typography>
                  <Typography>
                    Passport No.
                  </Typography>

                  <Typography>
                    Nationality
                  </Typography>
                  <Typography>
                    Nationality
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>Race</Typography>
                  <Typography>Race</Typography>

                  <Typography>Gender</Typography>
                  <Typography>Gender</Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>D.O.B</Typography>
                  <Typography>D.O.B</Typography>

                  <Typography>Material Status</Typography>
                  <Typography>Material Status</Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>Pay Term</Typography>
                  <Typography>Pay Term</Typography>

                  <Typography>Account No.</Typography>
                  <Typography>Account No.</Typography>
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
                  <Typography>
                    B/F Amt
                  </Typography>

                  <Typography>
                    Open Credit Amt
                  </Typography>
                  <Typography>
                    Open Credit Amt
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Outstanding Amt
                  </Typography>
                  <Typography>
                    Outstanding Amt
                  </Typography>

                  <Typography>
                    Deposit Balance
                  </Typography>
                  <Typography>
                    Deposit Balance
                  </Typography>
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
                  <Typography>
                    Preferred Mail Address
                  </Typography>
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
                    <Typography>
                      Address
                    </Typography>
                    <Typography>
                      Address
                    </Typography>
                    <Typography>
                      Address
                    </Typography>
                  </Box>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    PostCode
                  </Typography>
                  <Typography>
                    PostCode
                  </Typography>

                  <Typography>
                    State
                  </Typography>
                  <Typography>
                    State
                  </Typography>

                  <Typography>
                    Country
                  </Typography>
                  <Typography>
                    Country
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    (H)Telephone No.
                  </Typography>
                  <Typography>
                    (H)Telephone No.
                  </Typography>

                  <Typography>
                    (M)Telephone No.
                  </Typography>
                  <Typography>
                    (M)Telephone No.
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item className='grid grid-cols-6 gap-x-4'>
                  <Typography>
                    Remark
                  </Typography>
                  <Typography>
                    Remark
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value='3'>
            <Box className='p-[20px] grid grid-cols-6 gap-4'>
              <Typography>
                Occupation
              </Typography>
              <Typography>
                Occupation
              </Typography>

              <Typography>
                Employer
              </Typography>
              <Typography>
                Employer
              </Typography>

              <Typography>
                (O) Telephone No.
              </Typography>
              <Typography>
                (O) Telephone No.
              </Typography>

              <Typography>
                E-mail
              </Typography>
              <Typography>
                E-mail
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value='4'>
            <Box className='p-[20px]'>
              <Grid container spacing={2} direction='column'>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Unit Type
                  </Typography>
                  <Typography>
                    Unit Type
                  </Typography>

                  <Typography className='col-start-4'>
                    Area
                  </Typography>
                  <Typography className='col-start-4'>
                    Area
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Car Park No(s)
                  </Typography>
                  <Typography>
                    Car Park No(s)
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                  <Typography>
                    Remark
                  </Typography>
                  <Typography>
                    Remark
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                  <Typography>
                    Transfer Date
                  </Typography>
                  <Typography>
                    Transfer Date
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                  <Typography>
                    Parcel No
                  </Typography>
                  <Typography>
                    Parcel No
                  </Typography>
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
                    <Typography>Address</Typography>
                    <Typography>Address</Typography>
                    <Typography>Address</Typography>
                  </Box>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    PostCode
                  </Typography>
                  <Typography>
                    PostCode
                  </Typography>

                  <Typography>
                    State
                  </Typography>
                  <Typography>
                    State
                  </Typography>

                  <Typography>
                    Country
                  </Typography>
                  <Typography>
                    Country
                  </Typography>

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
                    <Typography>Financier</Typography>
                  </Box>
                  <Typography>Financier</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Fincr. Ref No</Typography>
                  <Typography>Fincr. Ref No</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Fincr. Tel No</Typography>
                  <Typography>Fincr. Tel No</Typography>

                  <Typography>Fincr. Branch</Typography>
                  <Typography>Fincr. Branch</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Solicitor</Typography>
                  <Box className='flex col-span-2 items-center gap-x-3'>
                    <Typography>Solicitor</Typography>
                  </Box>
                  <Typography>Solicitor</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Soli. Ref No</Typography>
                  <Box className='flex col-span-2 items-center gap-x-3'>
                    <Typography>Soli. Ref No</Typography>
                  </Box>
                  <Typography>Soli. Ref No</Typography>
                </Grid>
                <Grid item>
                  <Typography className='font-bold'>
                    Reference No.
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Electrical Bill Ref No</Typography>
                  <Typography>Electrical Bill Ref No</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Gas Bill Ref No</Typography>
                  <Typography>Gas Bill Ref No</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Water Bill Ref No</Typography>
                  <Typography>Water Bill Ref No</Typography>
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
                    <Typography>
                      Date Move In
                    </Typography>
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
                  <Typography>
                    Name
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Old IC
                  </Typography>
                  <Typography>
                    Old IC
                  </Typography>

                  <Typography>
                    New IC
                  </Typography>
                  <Typography>
                    New IC
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Passport No.
                  </Typography>
                  <Typography>
                    Passport No.
                  </Typography>

                  <Typography>
                    Nationality
                  </Typography>
                  <Typography>
                    Nationality
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Race
                  </Typography>
                  <Typography>
                    Race
                  </Typography>

                  <Typography>
                    Gender
                  </Typography>
                  <Typography>
                    Gender
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    D.O.B
                  </Typography>
                  <Typography>
                    D.O.B
                  </Typography>

                  <Typography>
                    Material Status
                  </Typography>
                  <Typography>
                    Material Status
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                  <Typography>
                    (H)Telephone No.
                  </Typography>
                  <Typography>
                    (H)Telephone No.
                  </Typography>

                  <Typography>
                    (M)Telephone No.
                  </Typography>
                  <Typography>
                    (M)Telephone No.
                  </Typography>
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
                  <Typography className='col-span-2'>Relationship</Typography>
                </Grid>
                <Grid item>
                  <Divider />
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
                  <Typography>Tenant No.</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                  <Typography>
                    Tenant Name
                  </Typography>
                  <Typography>
                    Tenant Name
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                  <Typography>Lease Start</Typography>
                  <Typography>Lease Start</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                  <Typography>Lease End</Typography>
                  <Typography>Lease End</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 gap-x-7'>
                  <Typography>Remark</Typography>
                  <Typography>Remark</Typography>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
}

OwnerView.propTypes = { data: PropTypes.any };
