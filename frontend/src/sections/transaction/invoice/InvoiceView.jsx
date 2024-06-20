import { Box, Checkbox, Divider, FormControlLabel, Grid, Typography } from "@mui/material";
import { chargecodetypes } from "utils/domains";
import formatDate from "utils/formatDate";

const InvoiceView = ({ data }) =>
{
  return <Grid container direction="column" className="p-5" spacing={3} >
    <Grid item className="grid grid-cols-8">
      <Typography className="text-xl">Invoice No</Typography>
      <Typography className="text-xl">{data.INVNO}</Typography>
    </Grid>
    <Grid item>
      <Divider />
    </Grid>
    <Grid item className="grid grid-cols-8 gap-3">
      <Typography>Unit No</Typography>
      <Typography>{data.UNITNO}</Typography>
      <Typography className="col-start-4">Issued Date</Typography>
      <Typography>{formatDate(data.ISSDATE)}</Typography>
      <Typography className="col-start-7">Issued By</Typography>
      <Typography>{data.ISSBY}</Typography>
    </Grid>
    <Grid item className="grid grid-cols-8 gap-3">
      <Box className="col-span-6 grid grid-cols-6 gap-3">
        <Typography>Owner Name</Typography>
        <Typography>{data.Owner.OWNNAME}</Typography>

        <Typography className="col-start-1">Phase</Typography>
        <Typography>{data.Property.PHCODE}</Typography>

        <Typography className="col-start-1">Housing Type</Typography>
        <Typography className="col-span-4">{data.Property.HSECODE}</Typography>
        <FormControlLabel control={<Checkbox />} label="Include Tenant" />
      </Box>
      <Box className="col-span-2 grid grid-cols-2 gap-3 border border-1 p-4">
        <Typography>Doc Date</Typography>
        <Typography>{formatDate(data.INTDATE)}</Typography>

        <Typography>Pay Term</Typography>
        <Typography>{data.PAYTERM}</Typography>

        <Typography>Due Date</Typography>
        <Typography>{formatDate(data.INVDUEDATE)}</Typography>
      </Box>
    </Grid>
    <Grid item>
      <Divider />
    </Grid>
    <Grid item className="grid grid-cols-8 gap-3">
      <Box className="col-span-4 grid grid-cols-4 gap-3">
        <Typography>Charge Code</Typography>
        <Typography>{chargecodetypes[data.CHARCODE]}</Typography>

        <Typography className="col-start-1">Area</Typography>
        <Typography>{data.QTY}</Typography>

        <Typography className="col-start-1">Charges Rate</Typography>
        <Typography>{data.CHARRATE}</Typography>

        <Typography className="col-start-1">Invoice Amount</Typography>
        <Typography>{data.TOTAMT}</Typography>
      </Box>
      <Box className="col-span-4 grid grid-cols-4 gap-3 items-baseline">
        <Typography>Remark</Typography>
        <Box className="col-span-3 border border-1 p-3">
          <Typography>{data.REMARK}</Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
}

export default InvoiceView;