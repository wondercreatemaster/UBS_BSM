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
import { useNavigate, useParams } from "react-router";
import { openSnackbar } from "api/snackbar";

const AddInvoice = () => {
  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Invoice', to: '/transaction/invoice' }, { title: 'Add' }];

  const navigate = useNavigate();

  const [units, setUnits] = useState([]);

  const [charges, setCharges] = useState([]);

  const [chargeCode, setChargeCode] = useState('')

  const [selectedUnit, setSelectedUnit] = useState({});


  const [area, setArea] = useState(0);

  const [selectedCharge, setSelectedCharge] = useState();

  const [docDate, setDocDate] = useState(dayjs())

  const [remark, setRemark] = useState('Invoice')

  const [invoice, setInvoice] = useState({
    "INVDATE": (new Date()).toGMTString(),
    "INVDUEDATE": (new Date()).toGMTString(),
    "INTDATE": (new Date()).toGMTString(),
    "INVTYPE": 1,
    "ISSMETHOD": 1,
    "UNITNO": "",
    "OWNERNO": "01",
    "TOTAMT": 0,
    "TOTINT": 0,
    "TOTREC": 0,
    "PAYTERM": 0,
    "REMARK": "Invoice",
    "ISSDATE": (new Date()).toGMTString(),
    "ISSBY": "UBS",
    "STATUS": 1,
    "BDAMT": 0,
    "BDDATE": null,
    "PRINTED": 1,
    "CHARCODE": "",
    "QTY": 0,
    "CHARRATE": 0,
    "REMDATE1": null,
    "REMDATE2": null,
    "REMDATE3": null,
    "REMAMT1": null,
    "REMAMT2": null,
    "REMAMT3": null,
    "EXPORTED": "",
    "METER": "N",
    "MREFNO": "",
    "INCTENANT": 0,
    "TENNO": "",
    "BNMROUD": 0,
    "TAXCODE": "",
    "TAXDESP": "",
    "TAXPER": 0,
    "TAXAMT": 0,
    "TAXAMTINC": null,
    "RECKEY": "",
    "DEBINVNO": "",
    "REASON": "",
    "PRNCNTRL": "",
    "TENABLE": 0,
  });

  useEffect(() => {
    axiosServices.get('/api/charge/getAll')
      .then(res => {
        setCharges([...res.data.charges])
        setChargeCode()
      })
    axiosServices.get('/api/invoice/getunits')
      .then(res => setUnits([...res.data.units]))
    axiosServices.get('/api/invoice/nextinvoiceno')
      .then(res => updateInvoice("INVNO", res.data.InvoiceNo))
  }, [])

  useEffect(() => {
    if (invoice) {
      setSelectedUnit(units.find(unit => unit.UNITNO == invoice.UNITNO))
    }
  }, [invoice])

  useEffect(() => {
    setSelectedCharge({ ...charges.filter(charge => charge.CHARCODE == chargeCode)[0] });
    if (chargeCode)
      setRemark(charges.filter(charge => charge.CHARCODE == chargeCode)[0]?.DESP + ' (' + docDate.format('DD/MM/YYYY') + ' - ' + docDate.add(1, 'month').add(-1, 'day').format('DD/MM/YYYY') + ')')
    if (charges.filter(charge => charge.CHARCODE == chargeCode)[0]?.CALMETHOD == 1)
      setArea(selectedUnit.AREA)
  }, [chargeCode])

  useEffect(() => {
    setChargeCode('')
  }, [selectedUnit])

  const updateInvoice = (key, value) => {
    setInvoice({ ...invoice, [key]: value })
  }

  const handleSubmit = () => {
    axiosServices.post(`/api/invoice/add`, { invoice })
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
          navigate('/transaction/invoice')
        }
        else
          openSnackbar({
            open: true,
            message: "Unexpected Error!",
            variant: 'alert',
            alert: {
              color: 'error'
            }
          })
      })
      .catch(err => console.log(err))
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
        {
          invoice &&
          <Grid container direction="column" className="p-5" spacing={3} >
            <Grid item className="grid grid-cols-8">
              <Typography className="text-xl">Invoice No</Typography>
              <Typography className="text-xl font-bold">{invoice.INVNO}</Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item className="grid grid-cols-8 gap-3 items-center">
              <Typography>Unit No</Typography>
              <OutlinedInput value={selectedUnit?.UNITNO} />
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
                          .map((unit) => {
                            return (
                              <TableRow hover role="checkbox" key={unit._id} onClick={() => {
                                setSelectedUnit(unit)
                                updateInvoice("UNITNO", unit.UNITNO);
                              }}>
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
              <Typography>{formatDate(new Date(invoice.ISSDATE))}</Typography>
              <Typography className="col-start-7">Issued By</Typography>
              <Typography>{invoice.ISSBY}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-8 gap-3">
              <Box className="col-span-6 grid grid-cols-6 gap-3">
                <Typography>Owner Name</Typography>
                <Typography>{selectedUnit?.Owner?.OWNNAME}</Typography>

                <Typography className="col-start-1">Phase</Typography>
                <Typography>{selectedUnit?.PHCODE}</Typography>

                <Typography className="col-start-1">Housing Type</Typography>
                <Typography className="col-span-4">{selectedUnit?.HSECODE}</Typography>
                <FormControlLabel control={<Checkbox checked={invoice.INCTENANT == 1} onChange={e => updateInvoice("INCTENANT", e.target.checked ? 1 : 0)} />} label="Include Tenant" />
              </Box>
              <Box className="col-span-2 grid grid-cols-3 gap-3 border border-1 p-4 items-center">
                <Typography>Doc Date</Typography>
                <Box className="col-span-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={dayjs((new Date(invoice.INVDATE)).toGMTString())} onChange={value => updateInvoice("INVDATE", value.toDate())} renderInput={(params) => <TextField {...params} />} format='DD/MM/YYYY' />
                  </LocalizationProvider>
                </Box>

                <Typography>Pay Term</Typography>
                <OutlinedInput type="number" className="col-span-2" value={invoice.PAYTERM} onChange={e => updateInvoice("PAYTERM", e.target.value)} />

                <Typography>Due Date</Typography>
                <Typography>{dayjs((new Date(invoice.INVDATE)).toGMTString()).add(invoice.PAYTERM, 'day').format("DD/MM/YYYY")}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item className="grid grid-cols-8 gap-3">
              <Box className="col-span-4 grid grid-cols-4 gap-3 items-baseline">
                <Typography>Charge Code</Typography>
                <Select
                  value={charges.length && invoice.CHARCODE}
                  onChange={e => {
                    updateInvoice("CHARCODE", e.target.value)
                    setChargeCode(e.target.value)
                  }}
                  className="col-span-2"
                >
                  {
                    charges.map(charge => {
                      return <MenuItem value={charge.CHARCODE} key={charge.CHARCODE}>{charge.DESP}</MenuItem>
                    })
                  }
                </Select>
                <Typography>{Object.keys(calcmethods)[selectedCharge?.CALMETHOD - 1]}</Typography>

                {
                  selectedCharge?.CALMETHOD == 3 ? '' :
                    <>
                      <Typography className="col-start-1">{selectedCharge?.CALMETHOD == 1 ? 'Area' : 'Quantity'}</Typography>
                      <OutlinedInput type="number" value={invoice.QTY} onChange={e => updateInvoice("QTY", e.target.value)} disabled={selectedCharge?.CALMETHOD == 1} />

                      <Typography className="col-start-1">Charges Rate</Typography>
                      <OutlinedInput type="number" value={invoice.CHARRATE} onChange={e => updateInvoice("CHARRATE", e.target.value)} />
                    </>
                }

                <Typography className="col-start-1">Invoice Amount</Typography>
                <Typography>{(invoice.QTY * invoice.CHARRATE).toFixed(1)}</Typography>
              </Box>
              <Box className="col-span-4 grid grid-cols-4 gap-3 items-baseline">
                <Typography>Remark</Typography>
                <OutlinedInput className="col-span-3" multiline minRows={3} value={invoice.REMARK} onChange={e => updateInvoice("REMARK", e.target.value)} />
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
        }
      </MainCard >
    </>

  )
}

export default AddInvoice;