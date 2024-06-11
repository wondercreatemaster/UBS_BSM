import React, { useEffect, useState } from 'react';
// material-ui
import { Add, Close, Delete, Done, Edit, Print, Search } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Grid, InputBase, Pagination, Paper, TextField, IconButton, CardContent, CardActions, CardHeader, Card, Box, Tab, Select, MenuItem, OutlinedInput, InputAdornment, Button, Fab, CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import axiosServices from 'utils/axios';
import { countries, phases, states, unittypes } from 'utils/domains';

// project-imports
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage()
{
  const [currentTab, setCurrentTab] = useState('1');
  const [viewMode, setViewMode] = useState(true);

  const [property, setProperty] = useState({});
  const [tempProperty, setTempProperty] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>
  {
    setIsLoading(true)
    axiosServices.get(`/api/property/${currentPage}`)
      .then(res =>
      {
        if (res.status !== 200)
          return;
        const { pages, content } = res.data
        setPages(pages);
        // setCurrentPage(currentPage);
        setProperty(content);
        setTempProperty(content);
        setIsLoading(false)
      })
  }, [currentPage])

  const handlePaginationChange = (event, value) =>
  {
    setCurrentPage(value)
  }

  const handleTabChange = (event, newValue) =>
  {
    setCurrentTab(newValue);
  };

  const handleEditButton = () =>
  {
    setTempProperty(property);
    setViewMode(false);
    setCurrentTab('1');
  }

  const handleAddButton = () =>
  {
    setTempProperty(property);
    setProperty({})
    setViewMode(false);
    setCurrentTab('1');
  }

  const handleDoneButton = () =>
  {
    axiosServices.put('/api/property/modify', property)
      .then(res =>
      {
        if (res.data.success)
          setTempProperty(property);
        setViewMode(true)
      })
      .catch(
        err => console.log(err)
      )
  }

  const handleCloseButton = () =>
  {
    setProperty(tempProperty);
    setViewMode(true);
  }

  const handlePropertyChange = (key, value) =>
  {
    setProperty({ ...property, [key]: value })
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
          title={property ? `Unit No: ${property["UNITNO"]}` : ''}
        />
        {isLoading ?
          <CardContent className='h-[40vh] flex items-center justify-center'>
            <CircularProgress />
          </CardContent> :
          pages == 0 ?
            <CardContent className='h-[40vh] flex items-center justify-center'>
              <Typography className='text-3xl'>
                No Property
              </Typography>
            </CardContent> :
            <>
              <CardContent className='p-[30px]'>
                <Grid container spacing={3} alignItems="flex-start">
                  <Grid container item md={4} direction="column" alignItems="flex-end" spacing={1}>

                    <Grid item className='flex items-center gap-x-4'>
                      <Typography>
                        Unit Description
                      </Typography>
                      <TextField
                        className='w-[15vw]'
                        margin='dense'
                        value={property["UNITDESP"]}
                        onChange={e => handlePropertyChange("UNITDESP", e.target.value)}
                        disabled={viewMode} />
                    </Grid>

                    <Grid item className='flex items-center gap-x-4'>
                      <Typography>
                        Phase
                      </Typography>
                      <Select
                        className='w-[15vw]'
                        margin='dense'
                        disabled={viewMode}
                        onChange={e => handlePropertyChange("PHCODE", e.target.value)}
                        value={property["PHCODE"]}
                      >
                        {
                          Object.keys(phases).map(key =>
                            <MenuItem value={key} key={key}>{phases[key]}</MenuItem>
                          )
                        }
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
                        onChange={e => handlePropertyChange("HSECODE", e.target, value)}
                        value={property["HSECODE"]}
                      >
                        {
                          Object.keys(unittypes).map(key =>
                            <MenuItem value={key} key={key}>{unittypes[key]}</MenuItem>
                          )
                        }
                      </Select>
                    </Grid>
                  </Grid>

                  <Grid item md={8}>
                    <TabContext value={currentTab}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                          <Tab label="Property" value="1" />
                          <Tab label="Owner History" value="2" disabled={!viewMode} />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <Box className="p-[20px]">
                          <Grid container spacing={2} direction="column">
                            <Grid item className='grid grid-cols-6 gap-x-5 items-baseline'>
                              <Typography>
                                Unit Type
                              </Typography>
                              <Select
                                className='w-[100%]'
                                margin='dense'
                                disabled={viewMode}
                                onChange={e => handlePropertyChange("UNITTYPE", e.target.value)}
                                value={property["UNITTYPE"]}
                              >
                                {
                                  Object.keys(unittypes).map(key =>
                                    <MenuItem value={key} key={key}>{unittypes[key]}</MenuItem>
                                  )
                                }
                              </Select>

                              <Typography>
                                Area
                              </Typography>
                              <OutlinedInput
                                value={property["AREA"]}
                                onChange={e => handlePropertyChange("AREA", e.target.value)}
                                endAdornment={<InputAdornment position="end">Sq.Feet</InputAdornment>}
                                disabled={viewMode}
                                type='number'
                              />

                              <Typography>
                                Selling Price
                              </Typography>
                              <OutlinedInput
                                value={property["SELLINGPRI"]}
                                onChange={e => handlePropertyChange("SELLINGPRI", e.target.value)}
                                endAdornment={<InputAdornment position="end">RM</InputAdornment>}
                                disabled={viewMode}
                                type='number'
                              />
                            </Grid>
                            <Grid item>
                              <Grid container spacing={2}>
                                <Grid item md={2}>
                                  <Typography>
                                    Address
                                  </Typography>
                                </Grid>
                                <Grid item md={10}>
                                  <Box className='flex flex-col gap-2'>
                                    <OutlinedInput value={property["ADD1"]} onChange={e => handlePropertyChange("ADD1", e.target.value)} fullWidth disabled={viewMode} />
                                    <OutlinedInput value={property["ADD2"]} onChange={e => handlePropertyChange("ADD2", e.target.value)} fullWidth disabled={viewMode} />
                                    <OutlinedInput value={property["ADD3"]} onChange={e => handlePropertyChange("ADD3", e.target.value)} fullWidth disabled={viewMode} />
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item className='grid grid-cols-6 gap-x-5 items-baseline'>
                              <Typography>
                                PostCode
                              </Typography>
                              <OutlinedInput
                                value={property["POSTCODE"]}
                                onChange={e => handlePropertyChange("POSTCODE", e.target.value)}
                                disabled={viewMode}
                                type='number'
                              />

                              <Typography>
                                State
                              </Typography>
                              <Select
                                className='w-[100%]'
                                disabled={viewMode}
                                margin='dense'
                                value={property["STATE"]}
                                onChange={e => handlePropertyChange("STATE", e.target.value)}
                              >
                                {
                                  Object.keys(states).map(key =>
                                    <MenuItem value={key} key={key}>{states[key]}</MenuItem>
                                  )
                                }
                              </Select>

                              <Typography>
                                Country
                              </Typography>
                              <Select
                                className='w-[100%]'
                                disabled={viewMode}
                                margin='dense'
                                onChange={e => handlePropertyChange("COUNTRY", e.target.value)}
                                value={property["COUNTRY"]}
                              >
                                {
                                  Object.keys(countries).map(key =>
                                    <MenuItem value={key} key={key}>{countries[key]}</MenuItem>
                                  )
                                }
                              </Select>
                            </Grid>
                            <Grid item className='grid grid-cols-6 gap-4 items-center'>
                              <Typography>Car Park</Typography>
                              <OutlinedInput
                                value={property["CARPARK"]}
                                onChange={e => handlePropertyChange("CARPARK", e.target.value)}
                                className='col-span-5'
                                disabled={viewMode} />
                            </Grid>
                            <Grid item className='grid grid-cols-6 gap-4 items-baseline'>
                              <Typography>Remark</Typography>
                              <TextField
                                value={property["REMARK"]}
                                onChange={e => handlePropertyChange("REMARK", e.target.value)}
                                className='col-span-5'
                                multiline
                                minRows={5}
                                disabled={viewMode} />
                            </Grid>
                            <Grid item className='grid grid-cols-6 gap-x-5 items-baseline'>
                              <Typography>Parcel No</Typography>
                              <OutlinedInput
                                value={property["PARCELNO"]}
                                onChange={e => handlePropertyChange("PARCELNO", e.target.value)}
                                disabled={viewMode} />
                            </Grid>
                          </Grid>
                        </Box>
                      </TabPanel>
                      <TabPanel value="2">
                        <Box className="w-[100%] text-center py-[100px]">
                          <Typography>
                            No History
                          </Typography>
                        </Box>
                      </TabPanel>
                    </TabContext>
                  </Grid>
                </Grid>
              </CardContent>
              {viewMode ? (
                <CardActions disableSpacing className='px-[30px] pb-[20px]'>
                  <Pagination count={pages} page={currentPage} onChange={handlePaginationChange} color="primary" shape="rounded" />
                  <Box className="ml-auto flex gap-2">
                    <Fab size='medium' color='primary' onClick={handleAddButton}>
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
            </>
        }
      </Card>

    </>
  );
}
