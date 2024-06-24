import { useState } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';

// import { cities, countries } from 'data/location';

// project-imports
import { ImagePath, getImageUrl } from 'utils/getImageUrl';
import { cities, countries as mapcountries } from 'data/location';
import { countries, genders, mstatus, ownertypes, premailtypes, states } from 'utils/domains';
import { ThemeMode } from 'config';
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Grid, IconButton, Paper, Radio, RadioGroup, Tab, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Search } from '@mui/icons-material';
import formatDate from 'utils/formatDate';

// ==============================|| PRODUCT - VIEW ||============================== //

export default function OwnerView({ data }) {
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState('1');

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Grid container spacing={3} alignItems="baseline" className='w-[90%] m-auto'>
      <Grid container md={3} direction="column" spacing={1}>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            Unit No
          </Typography>
          <Typography>
            {data.UNITNO}
          </Typography>
        </Grid>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            Unit Description
          </Typography>
          <Typography>
            {data.Property.UNITDESP}
          </Typography>
        </Grid>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            Phase
          </Typography>
          <Typography>
            {data.Property.PHCODE}
          </Typography>
        </Grid>

        <Grid item className='grid grid-cols-2 items-center gap-x-4'>
          <Typography>
            House Type
          </Typography>
          <Typography>
            {data.Property.HSECODE}
          </Typography>
        </Grid>
      </Grid>

      <Grid item md={9}>
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
                    {ownertypes[data.OWNEDBY]}
                  </Typography>

                  <Typography>
                    Ownership Date
                  </Typography>
                  <Typography>
                    {formatDate(data.OWNDATE)}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Owner No.
                  </Typography>
                  <Typography>
                    {data.OWNERNO}
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
                    {data.OWNNAME}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Old IC
                  </Typography>
                  <Typography>
                    {data.OLDIC}
                  </Typography>

                  <Typography>
                    New IC
                  </Typography>
                  <Typography>
                    {data.NEWIC}
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>
                    Passport No.
                  </Typography>
                  <Typography>
                    {data.PASSPORT}
                  </Typography>

                  <Typography>
                    Nationality
                  </Typography>
                  <Typography>
                    {countries[data.NATION]}
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>Race</Typography>
                  <Typography>Race</Typography>

                  <Typography>Gender</Typography>
                  <Typography>{genders[data.GENDER]}</Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>D.O.B</Typography>
                  <Typography>{data.DOB?.split('T')[0]}</Typography>

                  <Typography>Material Status</Typography>
                  <Typography>{data.MSTATUS}</Typography>
                </Grid>
                <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                  <Typography>Pay Term</Typography>
                  <Typography>{data.PAYTERM}</Typography>

                  <Typography>Account No.</Typography>
                  <Typography>{data.ACCOUNTNO}</Typography>
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
                    {premailtypes[data.PREMAILADD]}
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
                      {data.ADD1}
                    </Typography>
                    <Typography>
                      {data.ADD2}
                    </Typography>
                    <Typography>
                      {data.ADD3}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    PostCode
                  </Typography>
                  <Typography>
                    {data.POSTCODE}
                  </Typography>

                  <Typography>
                    State
                  </Typography>
                  <Typography>
                    {states[data.STATE]}
                  </Typography>

                  <Typography>
                    Country
                  </Typography>
                  <Typography>
                    {countries[data.COUNTRY]}
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    (H)Telephone No.
                  </Typography>
                  <Typography>
                    {data.HOMETEL}
                  </Typography>

                  <Typography>
                    (M)Telephone No.
                  </Typography>
                  <Typography>
                    {data.MONTEL}
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
                    {data.Property.REMARK}
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
                {data.OCCUP}
              </Typography>

              <Typography>
                Employer
              </Typography>
              <Typography>
                {data.EMPLOYER}
              </Typography>

              <Typography>
                (O) Telephone No.
              </Typography>
              <Typography>
                {data.OFFTEL}
              </Typography>

              <Typography>
                E-mail
              </Typography>
              <Typography>
                {data.EMAIL}
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
                    {data.Property.UNITTYPE}
                  </Typography>

                  <Typography className='col-start-4'>
                    Area
                  </Typography>
                  <Typography >
                    {data.Property.AREA} Sq.Feet
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Car Park No(s)
                  </Typography>
                  <Typography>
                    {data.Property.CARPARK}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                  <Typography>
                    Remark
                  </Typography>
                  <Typography>
                    {data.Property.REMARK}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                  <Typography>
                    Transfer Date
                  </Typography>
                  <Typography>
                    {data.TRANSDATE}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-baseline gap-x-5'>
                  <Typography>
                    Parcel No
                  </Typography>
                  <Typography>
                    {data.Property.PARCELNO}
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
                    <Typography>{data.Property.ADD1}</Typography>
                    <Typography>{data.Property.ADD2}</Typography>
                    <Typography>{data.Property.ADD3}</Typography>
                  </Box>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    PostCode
                  </Typography>
                  <Typography>
                    {data.Property.POSTCODE}
                  </Typography>

                  <Typography>
                    State
                  </Typography>
                  <Typography>
                    {states[data.Property.STATE]}
                  </Typography>

                  <Typography>
                    Country
                  </Typography>
                  <Typography>
                    {countries[data.Property.COUNTRY]}
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
                    <Typography>{data.SOLIREFNO}</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography className='font-bold'>
                    Reference No.
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Electrical Bill Ref No</Typography>
                  <Typography>{data.ELECREFNO}</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Gas Bill Ref No</Typography>
                  <Typography>{data.GASREFNO}</Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-3'>
                  <Typography>Water Bill Ref No</Typography>
                  <Typography>{data.WATERREFNO}</Typography>
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
                      {data.MOVEDATE}
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
                    {data.RESNAME}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Old IC
                  </Typography>
                  <Typography>
                    {data.RESOLDIC}
                  </Typography>

                  <Typography>
                    New IC
                  </Typography>
                  <Typography>
                    {data.RESNEWIC}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Passport No.
                  </Typography>
                  <Typography>
                    {data.RESPSPORT}
                  </Typography>

                  <Typography>
                    Nationality
                  </Typography>
                  <Typography>
                    {countries[data.RESNATION]}
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    Race
                  </Typography>
                  <Typography>
                    {data.RESETHIC}
                  </Typography>

                  <Typography>
                    Gender
                  </Typography>
                  <Typography>
                    {genders[data.RESGENDER]}
                  </Typography>

                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                  <Typography>
                    D.O.B
                  </Typography>
                  <Typography>
                    {data.RESDOB?.split('T')[0]}
                  </Typography>

                  <Typography>
                    Material Status
                  </Typography>
                  <Typography>
                    {mstatus[data.RESMSTATUS]}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                  <Typography>
                    (H)Telephone No.
                  </Typography>
                  <Typography>
                    {data.RESHOMETEL}
                  </Typography>

                  <Typography>
                    (M)Telephone No.
                  </Typography>
                  <Typography>
                    {data.RESMOBTEL}
                  </Typography>
                </Grid>
                <Grid item className='grid grid-cols-12 items-center gap-x-7'>
                  <Typography className='col-span-2'>Relationship</Typography>

                  <Typography className='col-span-2'>{data.RELATION}</Typography>
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
                  <Typography>{data.TENNO}</Typography>
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
