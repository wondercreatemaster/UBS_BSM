import React, { useEffect, useState } from 'react'

import { Search } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Grid, InputBase, Pagination, Paper, TextField, IconButton, CardContent, CardActions, CardHeader, Card, Box, Tab, Select, MenuItem, OutlinedInput, InputAdornment, Button, Fab, Divider, FormGroup, FormControlLabel, Checkbox, FormControl, RadioGroup, Radio, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Dialog, DialogContent, MenuList, DialogActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextMaskCustom from 'components/AccountNoInput';
import { countries, mstatus, states } from 'utils/domains';

import Breadcrumbs from "components/@extended/Breadcrumbs"
import MainCard from "components/MainCard";
import { APP_DEFAULT_PATH } from "config";
import { useNavigate } from 'react-router';
import axiosServices from 'utils/axios';
import dayjs from 'dayjs';
import { openSnackbar } from 'api/snackbar';


const AddOwner = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const [property, setProperty] = useState();


  const SelectUNITNO = (UNITNO) => {
    axiosServices.post('/api/property/getpropertybyunitno', { UNITNO })
      .then(res => {
        setProperty(res.data.property)
        setUNITNOlistdlg(false);
      })
  }

  const updateOwner = (key, value) => {
    setOwner({ ...owner, [key]: value })
  }

  const [UNITNOlistdlg, setUNITNOlistdlg] = useState(true);

  const [owner, setOwner] = useState();
  const [UNITNOs, setUNITNOs] = useState([]);

  useEffect(() => {
    if (property)
      setOwner({
        "UNITNO": property.UNITNO,
        "OWNERNO": "01",
        "OWNNAME": "",
        "GENDER": 0,
        "ETHNIC": "",
        "OLDIC": "",
        "NEWIC": "",
        "PASSPORT": "",
        "DOB": null,
        "MSTATUS": null,
        "ADD1": "",
        "ADD2": "",
        "ADD3": "",
        "POSTCODE": "",
        "STATE": "",
        "COUNTRY": "",
        "HOMETEL": "",
        "OCCUP": "",
        "EMPLOYER": "",
        "OFFTEL": "",
        "OWNDATE": (new Date()).toString(),
        "COMPCODE": "",
        "BANKCODE": "",
        "DEPOSIT": 0,
        "TRANSDATE": null,
        "STATUS": 0,
        "CASENO": "",
        "PREMAILADD": 1,
        "PAYTERM": 0,
        "BADDEBT": 0,
        "OWNERCODE": null,
        "OWNEDBY": 1,
        "ROC": "",
        "PARCELNO": "",
        "ELECREFNO": "",
        "WATERREFNO": "",
        "GASREFNO": "",
        "DIRECTOR": "",
        "BUSITYPE": null,
        "SOLICODE": "",
        "BANKREFNO": "",
        "SOLIREFNO": "",
        "INSUREFNO": "",
        "EMAIL": "",
        "RESSTS": 1,
        "OWNER": 0,
        "RESNAME": "",
        "RESGENDER": 0,
        "RESETHNIC": "",
        "RESNEWIC": "",
        "RESOLDIC": "",
        "RESPSPORT": "",
        "RESDOB": null,
        "RESMSTATUS": "",
        "RESHOMETEL": "",
        "RESMOBTEL": "",
        "MOVEDATE": null,
        "NATION": "MY",
        "RESNATION": "",
        "RELATION": 0,
        "RELOTHER": "",
        "GRPCODE": "",
        "GLCODE": "",
        "TENNO": "",
        "LATEINT": null,
        "Property": {
          ...property
        }
      })
  }, [property])

  useEffect(() => {
    axiosServices.get('/api/owner/unownedunitnos')
      .then(res => {
        if (res.data.UNITNOs.length == 0) {
          openSnackbar({
            open: true,
            message: "Can't add new Owner!",
            variant: 'alert',
            alert: {
              color: 'error'
            }
          })
          navigate('/setup/ownership')
        }
        else
          setUNITNOs([...res.data.UNITNOs])
      })
  }, [])

  const handleSubmit = () => {
    axiosServices.post('/api/owner/add  ', { owner })
      .then(res => {
        if (res.data.success) {
          openSnackbar({
            open: true,
            message: "Successfully Added!",
            variant: 'alert',
            alert: {
              color: 'success'
            }
          })
          navigate('/setup/ownership')
        }
        else
          openSnackbar({
            open: true,
            message: "Unexpected error!",
            variant: 'alert',

            alert: {
              color: 'error'
            }
          })
      })
      .catch(err => openSnackbar({
        open: true,
        message: err,
        variant: 'alert',

        alert: {
          color: 'error'
        }
      }))
  }

  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Ownership', to: '/setup/ownership' }, { title: 'Add' }];
  return <>
    <Breadcrumbs custom heading="Add Owner" links={breadcrumbLinks} />

    <Dialog open={UNITNOlistdlg}>
      <DialogContent>
        <MenuList>
          {
            UNITNOs.map(UNITNO => <MenuItem key={UNITNO} onClick={() => SelectUNITNO(UNITNO)}>{UNITNO}</MenuItem>)
          }
        </MenuList>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => navigate("/setup/ownership")}>Cancel</Button>
      </DialogActions>
    </Dialog>

    <MainCard>
      {
        owner &&
        <>
          <Grid container spacing={3} alignItems="baseline" className='w-[90%] m-auto'>
            <Grid container md={3} direction="column" spacing={1}>

              <Grid item className='grid grid-cols-2 items-center gap-x-4'>
                <Typography>
                  Unit No
                </Typography>
                <Typography>
                  {property.UNITNO}
                </Typography>
              </Grid>

              <Grid item className='grid grid-cols-2 items-center gap-x-4'>
                <Typography>
                  Unit Description
                </Typography>
                <Typography>
                  {property.UNITDESP}
                </Typography>
              </Grid>

              <Grid item className='grid grid-cols-2 items-center gap-x-4'>
                <Typography>
                  Phase
                </Typography>
                <Typography>
                  {property.PHCODE}
                </Typography>
              </Grid>

              <Grid item className='grid grid-cols-2 items-center gap-x-4'>
                <Typography>
                  House Type
                </Typography>
                <Typography>
                  {property.HSECODE}
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
                    {/* <Tab label="Unit Details" value="4" /> */}
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
                          value={owner.OWNEDBY}
                          onChange={e => updateOwner("OWNEDBY", e.target.value)}
                        >
                          <MenuItem value={1}>Person</MenuItem>
                          <MenuItem value={2}>Company</MenuItem>
                          <MenuItem value={3}>Developer</MenuItem>
                        </Select>
                        <Typography>
                          Ownership Date
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={dayjs(new Date(owner.OWNDATE).toUTCString())}
                            onChange={value => updateOwner("OWNDATE", value.toDate())}
                            renderInput={(params) => <TextField {...params} />}
                            format='DD/MM/YYYY' />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Owner No.
                        </Typography>
                        <TextField value={owner.OWNERNO} disabled />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Owner Group
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'

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
                        <TextField value={owner.OWNNAME} onChange={e => updateOwner("OWNNAME", e.target.value)} />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Old IC
                        </Typography>
                        <TextField value={owner.OLDIC} onChange={e => updateOwner("OLDIC", e.target.value)} />
                        <Typography>
                          New IC
                        </Typography>
                        <TextField value={owner.NEWIC} onChange={e => updateOwner("NEWIC", e.target.value)} />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Passport No.
                        </Typography>
                        <TextField value={owner.PASSPORT} onChange={e => updateOwner("PASSPORT", e.target.value)} />
                        <Typography>
                          Nationality
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          value={owner.NATION}
                          onChange={e => updateOwner("NATION", e.target.value)}
                        >
                          {Object.keys(countries).map(key => <MenuItem value={key} key={key}>{countries[key]}</MenuItem>)}
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
                          value={owner.ETHNIC}
                          onChange={e => updateOwner("ETHNIC", e.target.value)}
                        >
                          <MenuItem value="">Unspecified</MenuItem>
                          <MenuItem value="Malay">Malay</MenuItem>
                          <MenuItem value="Chinese">Chinese</MenuItem>
                          <MenuItem value="Indian">Indian</MenuItem>
                          <MenuItem value="Others">Others</MenuItem>
                        </Select>
                        <Typography>Gender</Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          value={owner.GENDER}
                          onChange={e => updateOwner("GENDER", e.target.value)}
                        >
                          <MenuItem value={0}>Unspecified</MenuItem>
                          <MenuItem value={1}>Male</MenuItem>
                          <MenuItem value={2}>Female</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>D.O.B</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={owner.DOB && dayjs(new Date(owner.DOB).toUTCString())}
                            onChange={value => updateOwner("DOB", value.toDate())}
                            renderInput={(params) => <TextField {...params} />}
                            format='DD/MM/YYYY' />
                        </LocalizationProvider>
                        <Typography>Material Status</Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          value={owner.MSTATUS}
                          onChange={e => updateOwner("MSTATUS", e.target.value)}
                        >
                          <MenuItem value={null}>Unspecified</MenuItem>
                          <MenuItem value={2}>Male</MenuItem>
                          <MenuItem value={3}>Female</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>Pay Term</Typography>
                        <TextField type='number' value={owner.PAYTERM} onChange={e => updateOwner("PAYTERM", e.target.value)} />
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
                        <TextField type='number' disabled />
                        <Typography>
                          Open Credit Amt
                        </Typography>
                        <TextField type='number' disabled />
                      </Grid>
                      <Grid item className='grid grid-cols-4 items-center gap-x-5'>
                        <Typography>
                          Outstanding Amt
                        </Typography>
                        <TextField type='number' disabled />
                        <Typography>
                          Deposit Balance
                        </Typography>
                        <TextField type='number' disabled />
                      </Grid>
                      {/* <Grid item className='flex justify-end items-center gap-x-5'>
                      <Button color='primary' variant='contained'>Co-Owner</Button>
                      <Button color='primary' variant='contained'>Sub Purchaser</Button>
                    </Grid> */}
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
                          value={owner.PREMAILADD}
                          onChange={e => updateOwner("PREMAILADD", e.target.value)}
                        >
                          <MenuItem value={1}>Contact Address</MenuItem>
                          <MenuItem value={2}>Console Address</MenuItem>
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
                          <TextField fullWidth value={owner.ADD1} onChange={e => updateOwner('ADD1', e.target.value)} />
                          <TextField value={owner.ADD2} onChange={e => updateOwner('ADD2', e.target.value)} />
                          <TextField value={owner.ADD3} onChange={e => updateOwner('ADD3', e.target.value)} />
                        </Box>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          PostCode
                        </Typography>
                        <TextField value={owner.POSTCODE} onChange={e => updateOwner('POSTCODE', e.target.value)} />
                        <Typography>
                          State
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          value={owner.STATE}
                          onChange={e => updateOwner("STATE", e.target.value)}
                        >
                          {
                            Object.keys(states).map(key => <MenuItem key={key} value={key}>{states[key]}</MenuItem>)
                          }
                        </Select>
                        <Typography>
                          Country
                        </Typography>
                        <Select
                          className='w-[100%]'
                          margin='dense'
                          value={owner.COUNTRY}
                          onChange={e => updateOwner("COUNTRY", e.target.value)}
                        >
                          {
                            Object.keys(countries).map(key => <MenuItem key={key} value={key}>{countries[key]}</MenuItem>)
                          }
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          (H)Telephone No.
                        </Typography>
                        <TextField value={owner.HOMETEL} onChange={e => updateOwner('HOMETEL', e.target.value)} />
                        <Typography>
                          (M)Telephone No.
                        </Typography>
                        <TextField value={owner.HOMETEL} onChange={e => updateOwner('HOMETEL', e.target.value)} />
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
                    <TextField className='col-span-5' value={owner.OCCUP} onChange={e => updateOwner("OCCUP", e.target.value)} />
                    <Typography>
                      Employer
                    </Typography>
                    <TextField className='col-span-5' value={owner.EMPLOYER} onChange={e => updateOwner("EMPLOYER", e.target.value)} />
                    <Typography>
                      (O) Telephone No.
                    </Typography>
                    <TextField className='col-span-5' value={owner.OFFTEL} onChange={e => updateOwner("OFFTEL", e.target.value)} />
                    <Typography>
                      E-mail
                    </Typography>
                    <TextField className='col-span-5' value={owner.EMAIL} onChange={e => updateOwner("EMAIL", e.target.value)} />
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
                        <TextField className='col-span-2' disabled value="Not specified" />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Fincr. Ref No</Typography>
                        <TextField className='col-span-4' />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Fincr. Tel No</Typography>
                        <TextField className='col-span-2' />
                        <Typography>Fincr. Branch</Typography>
                        <TextField className='col-span-2' disabled />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Solicitor</Typography>
                        <Box className='flex col-span-2 items-center gap-x-3'>
                          <TextField />
                          <IconButton><Search /></IconButton>
                        </Box>
                        <TextField className='col-span-2' disabled value="Not specified" />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Soli. Ref No</Typography>
                        <TextField className='col-span-5' />
                      </Grid>

                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Insurance</Typography>
                        <Box className='flex col-span-2 items-center gap-x-3'>
                          <TextField />
                          <IconButton><Search /></IconButton>
                        </Box>
                        <TextField className='col-span-2' disabled value="Not specified" />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Insu. Ref No</Typography>
                        <TextField className='col-span-5' />
                      </Grid>


                      <Grid item>
                        <Typography className='font-bold'>
                          Reference No.
                        </Typography>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Electrical Bill Ref No</Typography>
                        <TextField value={owner.ELECREFNO} onChange={e => updateOwner("ELECREFNO", e.target.value)} />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Gas Bill Ref No</Typography>
                        <TextField value={owner.GASREFNO} onChange={e => updateOwner("GASREFNO", e.target.value)} />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-3'>
                        <Typography>Water Bill Ref No</Typography>
                        <TextField value={owner.WATERREFNO} onChange={e => updateOwner("WATERREFNO", e.target.value)} />
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
                            <RadioGroup value={owner.RESSTS} onChange={e => updateOwner("RESSTS", e.target.value)}>
                              <FormControlLabel value={1} control={<Radio />} label="Vacant" />
                              <FormControlLabel value={2} control={<Radio />} label="Occupied" />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                        <Typography>
                          Date Move In
                        </Typography>
                        <Box className="col-span-2">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format='DD/MM/YYYY' disabled={owner.RESSTS == 1} />
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
                        <FormControlLabel control={<Checkbox disabled={owner.RESSTS == 1} />} label="Same As Owner" labelPlacement="right" />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Name
                        </Typography>
                        <TextField className='col-span-5' disabled={owner.RESSTS == 1} value={owner.RESNAME} onChange={e => updateOwner("RESNAME", e.target.value)} />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Old IC
                        </Typography>
                        <TextField disabled={owner.RESSTS == 1} value={owner.RESOLDIC} onChange={e => updateOwner("RESOLDIC", e.target.value)} />
                        <Typography>
                          New IC
                        </Typography>
                        <TextField disabled={owner.RESSTS == 1} value={owner.RESNEWIC} onChange={e => updateOwner("RESNEWIC", e.target.value)} />
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Passport No.
                        </Typography>
                        <TextField disabled={owner.RESSTS == 1} value={owner.RESPSPORT} onChange={e => updateOwner("RESPSPORT", e.target.value)} />
                        <Typography>
                          Nationality
                        </Typography>
                        <Select
                          className='w-[15vw]'
                          disabled={owner.RESSTS == 1}
                          margin='dense'
                          value={owner.RESNATION}
                          onChange={e => updateOwner("RESNATION", e.target.value)}
                        >
                          {
                            Object.keys(countries).map(key => <MenuItem key={key} value={key}>{countries[key]}</MenuItem>)
                          }
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          Race
                        </Typography>
                        <Select
                          margin='dense'
                          disabled={owner.RESSTS == 1}
                          value={owner.RESETHNIC}
                          onChange={e => updateOwner("RESETHNIC", e.target.value)}
                        >
                          <MenuItem value="">Unspecified</MenuItem>
                          <MenuItem value="Malay">Malay</MenuItem>
                          <MenuItem value="Chinese">Chinese</MenuItem>
                          <MenuItem value="Indian">Indian</MenuItem>
                          <MenuItem value="Others">Others</MenuItem>
                        </Select>
                        <Typography>
                          Gender
                        </Typography>
                        <Select
                          margin='dense'
                          disabled={owner.RESSTS == 1}
                          value={owner.RESGENDER}
                          onChange={e => updateOwner("RESGENDER", e.target.value)}
                        >
                          <MenuItem value={0}>Unspecified</MenuItem>
                          <MenuItem value={1}>Male</MenuItem>
                          <MenuItem value={2}>Female</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-5'>
                        <Typography>
                          D.O.B
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            format='DD/MM/YYYY'
                            disabled={owner.RESSTS == 1}
                            value={dayjs(owner.RESDOB && new Date(owner.RESDOB).toUTCString())}
                            onChange={value => updateOwner("RESDOB", value.toDate())}
                          />
                        </LocalizationProvider>
                        <Typography>
                          Material Status
                        </Typography>
                        <Select
                          margin='dense'
                          value={owner.RESMSTATUS}
                          onChange={e => updateOwner('RESMSTATUS', e.target.value)}
                          disabled={owner.RESSTS == 1}
                        >
                          {
                            mstatus.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
                          }
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 items-center gap-x-7'>
                        <Typography>
                          (H)Telephone No.
                        </Typography>
                        <TextField value={owner.RESHOMETEL} onChange={e => updateOwner('RESHOMETEL', e.target.value)} disabled={owner.RESSTS == 1} />
                        <Typography>
                          (M)Telephone No.
                        </Typography>
                        <TextField value={owner.RESMOBTEL} onChange={e => updateOwner("RESMOBTEL", e.target.value)} disabled={owner.RESSTS == 1} />
                      </Grid>
                      <Grid item className='grid grid-cols-12 items-center gap-x-7'>
                        <Typography className='col-span-2'>Relationship</Typography>
                        <FormControl className='col-span-5' disabled={owner.RESSTS == 1}>
                          <RadioGroup value={owner.RELATION} onChange={e => updateOwner("RELATION", e.target.value)} row>
                            <FormControlLabel value={1} control={<Radio />} label="Tenant" />
                            <FormControlLabel value={2} control={<Radio />} label="Relative" />
                            <FormControlLabel value={3} control={<Radio />} label="Others, please state" />
                          </RadioGroup>
                        </FormControl>
                        <TextField className='col-span-2' disabled={owner.RESSTS == 1 || owner.RELATION != 3} />
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
                        <TextField className='col-span-5' disabled />
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
          <Divider />
          <Box className="p-3 flex items-center justify-end gap-2">
            <Button variant="contained" color="inherit" onClick={() => navigate('/setup/ownership')}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Box>
        </>
      }
    </MainCard>
  </>
}

export default AddOwner