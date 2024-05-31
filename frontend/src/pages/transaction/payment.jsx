import { Add, Close, Delete, Done, Edit, Print, Search } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Checkbox, Divider, Fab, FormControlLabel, Grid, IconButton, InputAdornment, OutlinedInput, Pagination, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const Payment = () =>
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
    <Card>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item className="grid grid-cols-8 gap-x-4 items-center">
            <Typography>Unit No</Typography>
            <Box className="flex items-center">
              <TextField />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
            <Typography className="col-start-7">Next Receipt No</Typography>
            <TextField />
          </Grid>
          <Grid item className="grid grid-cols-8 gap-x-4 items-center">
            <Typography>Owner Name</Typography>
            <TextField className="col-span-6" />
          </Grid>
          <Grid item className="grid grid-cols-8 gap-x-4 items-baseline">
            <Typography>Co-Owner Name</Typography>
            <TextField className="col-span-6" multiline minRows={3} />
            <FormControlLabel control={<Checkbox />} label="Tenant" />
          </Grid>
          <Grid item className="grid grid-cols-8 gap-x-4 items-center">
            <Typography>Receipt No</Typography>
            <TextField />
          </Grid>
          <Grid item className="grid grid-cols-8 gap-x-4 items-center">
            <Typography>Receipt Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker format='DD/MM/YYYY' />
            </LocalizationProvider>
          </Grid>
          <Grid item className="grid grid-cols-8 gap-x-4 items-center">
            <Typography>Received Amount</Typography>
            <OutlinedInput
              startAdornment={<InputAdornment position="start">RM</InputAdornment>}
              disabled={viewMode}
              type='number'
            />
            <Typography className="col-start-5">Open Credit</Typography>
            <OutlinedInput
              startAdornment={<InputAdornment position="start">RM</InputAdornment>}
              disabled={viewMode}
              type='number'
            />
          </Grid>
          <Grid item className="flex justify-end gap-x-3">
            <Button variant="contained">Knock off bill</Button>
            <Button variant="contained">Reverse</Button>
          </Grid>
          <Grid item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Paid By</TableCell>
                    <TableCell>Paid Amount</TableCell>
                    <TableCell>Cheque/Credit Card No</TableCell>
                    <TableCell>Cheque/Expired Date</TableCell>
                    <TableCell>Outstation Charges</TableCell>
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
          <Grid item className="grid grid-cols-8 items-baseline gap-4">
            <Typography>Remark</Typography>
            <TextField className="col-span-3" multiline minRows={3} />
            <Box className='col-start-6 col-span-3 grid grid-cols-2 items-center gap-4'>
              <Typography>Gross Rec. Amt</Typography>
              <OutlinedInput
                startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                disabled={viewMode}
                type='number'
              />
              <Typography>Outstation Charges</Typography>
              <TextField type="number" />
              <Typography>Nett Rec. Amt</Typography>
              <OutlinedInput
                startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                disabled={viewMode}
                type='number'
              />
            </Box>
          </Grid>
          <Grid item className="grid grid-cols-8 items-center gap-x-4">
            <Typography>Cheque/Card Infomation</Typography>
            <TextField className="col-span-7" />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item className="grid grid-cols-8 items-center gap-x-4">
            <Typography>Created Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker format='DD/MM/YYYY' />
            </LocalizationProvider>
            <Typography className="col-start-5">Last Updated Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker format='DD/MM/YYYY' />
            </LocalizationProvider>
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
  )
}

export default Payment;