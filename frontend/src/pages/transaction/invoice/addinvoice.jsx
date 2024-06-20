import { useEffect, useState } from "react";

import { Search } from "@mui/icons-material";
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, Grid, IconButton, MenuItem, OutlinedInput, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import Breadcrumbs from "components/@extended/Breadcrumbs";

import MainCard from "components/MainCard";
import { APP_DEFAULT_PATH } from "config";
import formatDate from "utils/formatDate";
import axiosServices from "utils/axios";
import { calcmethods } from "utils/domains";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate } from "react-router";

const AddInvoice = () =>
{
  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Invoice', to: '/transaction/invoice' }, { title: 'Add' }];

  const navigate = useNavigate();

  const [units, setUnits] = useState([]);

  const [charges, setCharges] = useState([]);

  const [chargeCode, setChargeCode] = useState('')

  const [selectedUnit, setSelectedUnit] = useState({});

  const [invoiceNo, setInvoiceNo] = useState('');

  const [area, setArea] = useState(0);

  const [rate, setRate] = useState(0);

  const [selectedCharge, setSelectedCharge] = useState();

  const [docDate, setDocDate] = useState(dayjs())

  const [payterm, setPayterm] = useState(0)

  const [remark, setRemark] = useState('Invoice')

  const [incTenant, setIncTenant] = useState(false);

  useEffect(() =>
  {
    axiosServices.get('/api/charge/getAll')
      .then(res =>
      {
        setCharges([...res.data.charges])
        setChargeCode()
      })
    axiosServices.get('/api/invoice/getunits')
      .then(res => setUnits([...res.data.units]))
    axiosServices.get('/api/invoice/nextinvoiceno')
      .then(res => setInvoiceNo(res.data.InvoiceNo))
  }, [])

  useEffect(() =>
  {
    setSelectedCharge({ ...charges.filter(charge => charge.CHARCODE == chargeCode)[0] });
    if (chargeCode)
      setRemark(charges.filter(charge => charge.CHARCODE == chargeCode)[0]?.DESP + ' (' + docDate.format('DD/MM/YYYY') + ' - ' + docDate.add(1, 'month').add(-1, 'day').format('DD/MM/YYYY') + ')')
    if (charges.filter(charge => charge.CHARCODE == chargeCode)[0]?.CALMETHOD == 1)
      setArea(selectedUnit.AREA)
  }, [chargeCode])

  useEffect(() =>
  {
    setChargeCode('')
  }, [selectedUnit])

  const handleSubmit = () =>
  {
    let data = {
      INVDATE: new Date(docDate.toString()),
      INVDUEDATE: new Date(docDate.add(payterm, 'day').toString()),
      INTDATE: new Date(docDate.add(payterm, 'day').toString()),
      CHARRATE: rate,
      ISSDATE: new Date(),
      PAYTERM: payterm,
      INCTENANT: incTenant ? 1 : 0,
      REMARK: remark,
      CHARCODE: chargeCode,
      UNITNO: selectedUnit.UNITNO,
      QTY: selectedUnit.AREA,
      OWNERNO: selectedUnit.Owner.OWNERNO
    }
  }

  const [unitDlg, setUnitDlg] = useState(false);

  const columns = [
    { id: 'UNITNO', label: 'Unit No', minWidth: 150 },
    { id: 'PHCODE', label: 'Phase', minWidth: 120 },
    { id: 'HSECODE', label: 'Housing Type', minWidth: 150 },
    { id: 'OWNNAME', label: 'Owner Name', minWidth: 170 },
  ];

  return (
    <>
      <Breadcrumbs custom heading="Add Invoice" links={breadcrumbLinks} />
      <MainCard>
        <Grid container direction="column" className="p-5" spacing={3} >
          <Grid item className="grid grid-cols-8">
            <Typography className="text-xl">Invoice No</Typography>
            <Typography className="text-xl font-bold">{invoiceNo}</Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item className="grid grid-cols-8 gap-3 items-center">
            <Typography>Unit No</Typography>
            <OutlinedInput value={selectedUnit.UNITNO} />
            <IconButton onClick={() => setUnitDlg(true)}>
              <Search />
            </IconButton>

            <Dialog open={unitDlg} onClose={() => setUnitDlg(false)}>
              <DialogTitle>
                Select Unit
              </DialogTitle>
              <DialogContent>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {units
                        .map((unit) =>
                        {
                          return (
                            <TableRow hover role="checkbox" key={unit._id} onClick={() => setSelectedUnit(unit)}>
                              <TableCell>{unit.UNITNO}</TableCell>
                              <TableCell>{unit.PHCODE}</TableCell>
                              <TableCell>{unit.HSECODE}</TableCell>
                              <TableCell>{unit.Owner?.OWNNAME}</TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setUnitDlg(false)}>Cancel</Button>
                <Button onClick={() => setUnitDlg(false)}>OK</Button>
              </DialogActions>
            </Dialog>

            <Typography className="col-start-4">Issued Date</Typography>
            <Typography>{formatDate(new Date())}</Typography>
            <Typography className="col-start-7">Issued By</Typography>
            <Typography>UBS</Typography>
          </Grid>
          <Grid item className="grid grid-cols-8 gap-3">
            <Box className="col-span-6 grid grid-cols-6 gap-3">
              <Typography>Owner Name</Typography>
              <Typography>{selectedUnit.Owner?.OWNNAME}</Typography>

              <Typography className="col-start-1">Phase</Typography>
              <Typography>{selectedUnit.PHCODE}</Typography>

              <Typography className="col-start-1">Housing Type</Typography>
              <Typography className="col-span-4">{selectedUnit.HSECODE}</Typography>
              <FormControlLabel control={<Checkbox checked={incTenant} onChange={e => setIncTenant(e.target.checked)} />} label="Include Tenant" />
            </Box>
            <Box className="col-span-2 grid grid-cols-3 gap-3 border border-1 p-4 items-center">
              <Typography>Doc Date</Typography>
              <Box className="col-span-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker value={docDate} onChange={value => setDocDate(value)} renderInput={(params) => <TextField {...params} />} format='DD/MM/YYYY' />
                </LocalizationProvider>
              </Box>

              <Typography>Pay Term</Typography>
              <OutlinedInput type="number" className="col-span-2" value={payterm} onChange={e => setPayterm(e.target.value)} />

              <Typography>Due Date</Typography>
              <Typography>{docDate.add(payterm, 'day').format("DD/MM/YYYY")}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item className="grid grid-cols-8 gap-3">
            <Box className="col-span-4 grid grid-cols-4 gap-3 items-baseline">
              <Typography>Charge Code</Typography>
              <Select
                value={chargeCode}
                onChange={e => setChargeCode(e.target.value)}
                className="col-span-2"
              >
                {
                  charges.map(charge =>
                  {
                    return <MenuItem value={charge.CHARCODE} key={charge.CHARCODE}>{charge.DESP}</MenuItem>
                  })
                }
              </Select>
              <Typography>{Object.keys(calcmethods)[selectedCharge?.CALMETHOD - 1]}</Typography>

              {
                selectedCharge?.CALMETHOD == 3 ? '' :
                  <>
                    <Typography className="col-start-1">{selectedCharge?.CALMETHOD == 1 ? 'Area' : 'Quantity'}</Typography>
                    <OutlinedInput type="number" value={area} onChange={e => setArea(e.target.value)} disabled={selectedCharge?.CALMETHOD == 1} />

                    <Typography className="col-start-1">Charges Rate</Typography>
                    <OutlinedInput type="number" value={rate} onChange={e => setRate(e.target.value)} />
                  </>
              }

              <Typography className="col-start-1">Invoice Amount</Typography>
              <Typography>{area * rate}</Typography>
            </Box>
            <Box className="col-span-4 grid grid-cols-4 gap-3 items-baseline">
              <Typography>Remark</Typography>
              <Box className="col-span-3 border border-1 p-3">
                <Typography>{remark}</Typography>
              </Box>
            </Box>
          </Grid>
          <Divider />
          {
            selectedCharge?.CALMETHOD == 3 ?
              <Grid item className="grid grid-col-2 gap-3 items-baseline">
                <Box className="grid grid-cols-3 gap-3 items-baseline">
                  <Typography>Opening Date</Typography>
                  <Box className="col-span-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker format='DD/MM/YYYY' />
                    </LocalizationProvider>
                  </Box>
                </Box>
              </Grid>
              : ''
          }
          <Grid item className="flex justify-end gap-3">
            <Button variant="contained" color="inherit" onClick={() => navigate('/transaction/invoice')}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Grid>
        </Grid>
      </MainCard>
    </>

  )
}

export default AddInvoice;