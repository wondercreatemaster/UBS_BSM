import { Search } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Checkbox, Divider, FormControlLabel, Grid, IconButton, MenuItem, Select, TextField, Typography } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"


const AutoGenerateBilling = () =>
{
  return (
    <Card>
      <CardContent className='p-[30px]'>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography className="font-bold">Choose which scheme setting to use</Typography>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>
              Scheme
            </Typography>
            <Select
              className='w-[100%]'
              margin='dense'
              value=""
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="APARTMENT">Apartment</MenuItem>
            </Select>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Recurring every</Typography>
            <TextField />
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Start Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker format='DD/MM/YYYY' />
            </LocalizationProvider>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography className="font-bold">Choose which date range</Typography>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Invoice Date From</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker format='DD/MM/YYYY' />
            </LocalizationProvider>
            <Typography>Recurring</Typography>
            <Box className='flex items-center gap-1'>
              <TextField type="number" />
              <Typography>Times.</Typography>
            </Box>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Date Range From</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker format='DD/MM/YYYY' />
            </LocalizationProvider>
            <Typography>To</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker format='DD/MM/YYYY' />
            </LocalizationProvider>
            <Button variant="contained">Check Dates</Button>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography className="font-bold">
              Choose which property
            </Typography>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Phase From</Typography>
            <Box className='flex items-center'>
              <TextField />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
            <FormControlLabel className="col-start-4" control={<Checkbox />} label="Apply Scheme Property" />
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Phase To</Typography>
            <Box className='flex items-center'>
              <TextField />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
            <Button className="flex items-center" variant="contained">Check Units</Button>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Housing Type From</Typography>
            <Box className='flex items-center'>
              <TextField />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Housing Type To</Typography>
            <Box className='flex items-center'>
              <TextField />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Unit No From</Typography>
            <Box className='flex items-center'>
              <TextField />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>Unit No To</Typography>
            <Box className='flex items-center'>
              <TextField />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography className="font-bold">Fill if using user define invoice no</Typography>
          </Grid>
          <Grid item className="grid grid-cols-6 items-center gap-x-4">
            <Typography>User Define No</Typography>
            <Box className="flex items-center gap-x-1">
              <TextField className="w-[20%]" />
              <TextField type="number" />
            </Box>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item className="grid grid-cols-6 items-baseline gap-x-4">
            <Typography>Remarks</Typography>
            <TextField className="col-span-5" multiline minRows={5} />
          </Grid>
          <Grid item className="flex items-center justify-between">
            <Button variant="contained">Check Failure List</Button>
            <Box className='flex items-center gap-x-3'>
                <Button variant="contained">Process</Button>
                <Button variant="contained">Clear</Button>
                <Button variant="contained">Close</Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AutoGenerateBilling