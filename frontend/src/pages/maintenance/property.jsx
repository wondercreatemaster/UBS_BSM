import React, { useState } from 'react';
// material-ui
import { Add, Close, Delete, Done, Edit, Print, Search } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Grid, InputBase, Pagination, Paper, TextField, IconButton, CardContent, CardActions, CardHeader, Card, Box, Tab, Select, MenuItem, OutlinedInput, InputAdornment, Button, Fab } from '@mui/material';
import Typography from '@mui/material/Typography';

// project-imports
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage()
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
            <Grid container item md={4} direction="column" alignItems="flex-end" spacing={1}>

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
                          value="CONDO"
                        >
                          <MenuItem value="CONDO">CONDO</MenuItem>
                          <MenuItem value="Apartment">Apartment</MenuItem>
                        </Select>

                        <Typography>
                          Area
                        </Typography>
                        <OutlinedInput
                          endAdornment={<InputAdornment position="end">Sq.Feet</InputAdornment>}
                          disabled={viewMode}
                          type='number'
                        />

                        <Typography>
                          Selling Price
                        </Typography>
                        <OutlinedInput
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
                              <OutlinedInput fullWidth disabled={viewMode} />
                              <OutlinedInput fullWidth disabled={viewMode} />
                              <OutlinedInput fullWidth disabled={viewMode} />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className='grid grid-cols-6 gap-x-5 items-baseline'>
                        <Typography>
                          PostCode
                        </Typography>
                        <OutlinedInput
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
                          value="KUALA LUMPUR"
                        >
                          <MenuItem value="KUALA LUMPUR">KUALA LUMPUR</MenuItem>
                          <MenuItem value="Apartment">Apartment</MenuItem>
                        </Select>

                        <Typography>
                          Country
                        </Typography>
                        <Select
                          className='w-[100%]'
                          disabled={viewMode}
                          margin='dense'
                          value="MALEYSIA"
                        >
                          <MenuItem value="MALEYSIA">MALEYSIA</MenuItem>
                          <MenuItem value="Apartment">Apartment</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item className='grid grid-cols-6 gap-4 items-center'>
                        <Typography>Car Park</Typography>
                        <OutlinedInput className='col-span-5' disabled={viewMode} />
                      </Grid>
                      <Grid item className='grid grid-cols-6 gap-4 items-baseline'>
                        <Typography>Remark</Typography>
                        <TextField className='col-span-5' multiline minRows={5} disabled={viewMode} />
                      </Grid>
                      <Grid item className='grid grid-cols-6 gap-x-5 items-baseline'>
                        <Typography>Parcel No</Typography>
                        <OutlinedInput disabled={viewMode} />
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

    </>
  );
}
