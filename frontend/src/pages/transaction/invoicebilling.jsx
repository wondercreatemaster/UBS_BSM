import { Add, Close, Delete, Done, Edit, Print, Search } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, CardHeader, Checkbox, Divider, Fab, FormControlLabel, Grid, IconButton, InputBase, MenuItem, Pagination, Paper, Select, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const InvoiceBilling = () =>
{
  const [viewMode, setViewMode] = useState(true);

  const handleEditButton = () =>
  {
    setViewMode(false);
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
          <Grid container spacing={2} direction="column">
            <Grid item className='grid grid-cols-8 items-center gap-x-4'>
              <Typography>Unit No</Typography>
              <Box className='flex items-center'>
                <TextField />
                <IconButton>
                  <Search />
                </IconButton>
              </Box>
              <Typography className="col-start-4">Issued Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker format='DD/MM/YYYY' />
              </LocalizationProvider>
              <Typography className="col-start-7">Issued By</Typography>
              <TextField />
            </Grid>
            <Grid item className="grid grid-cols-8 gap-x-4">
              <Box className="col-span-5 grid grid-cols-5 gap-4">
                <Typography>Owner Name</Typography>
                <Box className="col-span-4">
                  <TextField fullWidth />
                </Box>
                <Typography>Phase</Typography>
                <TextField className="col-span-3" />
                <Typography className="col-start-1">Housing Type</Typography>
                <TextField className="col-span-3" />
                <FormControlLabel control={<Checkbox />} label="Include Tenant" />
              </Box>
              <Box className="col-start-7 col-span-2 grid grid-cols-2 border p-3 items-center">
                <Typography>Doc Date</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker format='DD/MM/YYYY' />
                </LocalizationProvider>
                <Typography>Pay Term</Typography>
                <TextField type="number" />
                <Typography>Due Date</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker format='DD/MM/YYYY' />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item className="grid grid-cols-8 items-center gap-x-4">
              <Typography>Charge Code</Typography>
              <Select
                className='col-span-3 w-[100%]'
                margin='dense'
                disabled={viewMode}
                value="SERVICE CHARGES"
              >
                <MenuItem value="SERVICE CHARGES">SERVICE CHARGES</MenuItem>
                <MenuItem value="APARTMENT">Apartment</MenuItem>
              </Select>
              <TextField />
            </Grid>
            <Grid item className="grid grid-cols-8 items-baseline gap-x-4">
              <Box className="col-span-5 grid grid-cols-5 items-center gap-4">
                <Typography>Area</Typography>
                <TextField type="number" />
                <Typography className="col-start-1">Charges Rate</Typography>
                <TextField type="number" />
                <Typography className="col-start-1">Invoice Amount</Typography>
                <TextField type="number" />
              </Box>
              <Box className="col-span-3 grid grid-cols-3 items-baseline gap-x-4">
                <Typography>Remark</Typography>
                <TextField className="col-span-2" multiline minRows={3} />
              </Box>
            </Grid>
            <Grid item>
              <Divider />
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
  )
}

export default InvoiceBilling;