import { useState } from "react";
import { Box, Card, CardActions, CardContent, Checkbox, Divider, Fab, FormControl, FormControlLabel, Grid, InputAdornment, MenuItem, OutlinedInput, Pagination, Paper, Radio, RadioGroup, Select, Tab, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Add, Close, Delete, Done, Edit, Print } from "@mui/icons-material";
import TextMaskCustom from "components/AccountNoInput";
import { calcmethods, carparktypes, intervaltypes, metercalcs, metertypes, status } from "utils/domains";

const ChargeView = ({ data }) => {
  const [currentTab, setCurrentTab] = useState('1');

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return <>
    <Grid container spacing={4} className="p-5">
      <Grid item md={6}>
        <Box className="p-[20px]">
          <Grid container spacing={2} direction='column'>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Charge Code</Typography>
              <Typography>{data.CHARCODE}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Charge Description</Typography>
              <Typography>{data.DESP}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Tax</Typography>
              <Typography>{data.TAXCODE}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Calculation Method</Typography>
              <Typography>{Object.keys(calcmethods)[data.CALMETHOD - 1]}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Charge by</Typography>
              <Typography>Value {
                (() => {
                  switch (data.CALMETHOD) {
                    case 1: return 'per area measurement';
                    case 3: return 'per metered unit';
                    case 5: return 'per selling price';
                    case 2:
                    case 4: return 'per unit'
                    default: return ''
                  }
                })()
              }</Typography>
            </Grid>
            {
              data.CALMETHOD == 3 ? (
                <>
                  <Grid item className="grid grid-cols-3 items-center">
                    <Typography>Meter Type</Typography>
                    <Typography>{metertypes[data.METERTYPE - 1]}</Typography>
                  </Grid>
                  <Grid item className="grid grid-cols-3 items-center">
                    <Typography>Meter Calculation</Typography>
                    <Typography>{metercalcs[data.METERCAL - 1]}</Typography>
                  </Grid>
                  <Grid item className="grid grid-cols-3 items-center">
                    <Typography>Minimum Charges</Typography>
                    <Typography>{data.MINCHAR}</Typography>
                  </Grid>
                  <Grid item className="grid grid-cols-3 items-center">
                    <Typography>Extra Charges</Typography>
                    <Typography>{data.EXTCHAR}</Typography>
                  </Grid>
                  <Grid item className="grid grid-cols-3 items-center">
                    <Typography>Intervals</Typography>
                    <Typography>{data.INTERVAL} {intervaltypes[data.INTTERM - 1]}</Typography>
                  </Grid>
                </>
              ) : ''
            }
            {
              data.CALMETHOD == 4 ? (
                <Grid item className="grid grid-cols-3 items-center">
                  <Typography>Car Park Type</Typography>
                  <Typography>{carparktypes[data.CPARKTYPE - 1]}</Typography>
                </Grid>
              ) : ''
            }
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>
                Rate
              </Typography>
              <Typography>
                RM {data.RATE}
              </Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>
                Tax Percentage
              </Typography>
              <Typography>
                {data.TAXPER && `${data.TAXPER} %`}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Reporting UOM</Typography>
              <Typography>{data.UOM}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Account No</Typography>
              <Typography>{data.ACCNO}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Status</Typography>
              <Typography>{status[data.STATUS - 1]}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className="p-[20px]">
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Typography className="font-bold">Late Interest Settings</Typography>
            </Grid>
            <Grid item className="grid grid-cols-3 items-center">
              <Typography>Charges Late Interest</Typography>
              <Typography>{data.LATECHAR == 1 ? "Yes" : "No"}</Typography>
            </Grid>
            <Grid item>
              <FormControlLabel control={<Checkbox checked={data.DEFLATEINT} />} label="Define Own Late Interest Rate" />
            </Grid>
            <Grid item>
              <Typography className="font-bold">Monthly Statement Settings</Typography>
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Show in monthly statement</Typography>
              <Typography>{data.SHOWMONTH == 1 ? "Yes" : "No"}</Typography>
            </Grid>
            <Grid item>
              <Typography className="font-bold">Invoice Billing Print Settings</Typography>
            </Grid>
            <Grid item>
              <Typography className="underline">Header Options</Typography>
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Display Financier & Ref No</Typography>
              <Typography>{data.SHOWFINCR == 1 ? "Yes" : "No"}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Display Solicitor & Ref No</Typography>
              <Typography>{data.SHOWSOLI == 1 ? "Yes" : "No"}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Display Insurance & Ref No</Typography>
              <Typography>{data.SHOWINSU == 1 ? "Yes" : "No"}</Typography>
            </Grid>
            <Grid item>
              <Typography className="underline">Remarks Options</Typography>
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Auto Generate Remarks?</Typography>
              <Typography>{data.GENREMARK == 1 ? "Yes" : "No"}</Typography>
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Remarks Setting</Typography>
              <Typography>Remarks Setting</Typography>
            </Grid>
            <Grid item>
              <FormControlLabel control={<Checkbox checked={data.WITHEND == 1} />} label="Generate End Range" />
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Duration</Typography>
              <Typography>{data.DURATION} {intervaltypes[data.DURTYPE - 1]}</Typography>
            </Grid>
            <Grid item>
              <Typography className="underline">Rounding Options</Typography>
            </Grid>
            <Grid item className="grid grid-cols-2 items-center">
              <Typography>Billing Price Rounded To</Typography>
              <Typography>{data.PRICEROUND > 0 ? data.PRICEROUND - 1 : 0}&nbsp;decimal places.</Typography>
            </Grid>
            <Grid item>
              <FormControlLabel control={<Checkbox checked={data.DEFLATEINT == 1} />} label="Activate Bank Negara Malaysia Rounding Mechanism" />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* </Box> */}
    </Grid>
  </>
}

export default ChargeView