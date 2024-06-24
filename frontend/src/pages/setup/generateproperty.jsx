import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import Breadcrumbs from "components/@extended/Breadcrumbs";
import { APP_DEFAULT_PATH } from "config";
import { useNavigate } from "react-router";
import MainCard from "components/MainCard";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { countries, phases, states, unittypes } from "utils/domains";
import { NumericFormat } from "react-number-format";
import axiosServices from "utils/axios";
import { openSnackbar } from "api/snackbar";
import { SpecChar, WithCharFloorNo, WithNumFloorNo, WithoutFloorNo } from "sections/setup/property/GeneratePropertyForm";

const NumberFormatCustom = React.forwardRef(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
      />
    );
  },
);

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const GenerateProperty = () => {
  const navigate = useNavigate();

  const [confirmDlg, setConfirmDlg] = useState(false)

  const [property, setProperty] = useState({});

  const [generateMethod, setGenerateMethod] = useState("with_num_floor_no");

  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Property', to: '/setup/property' }, { title: 'Generate' }];

  const setValue = (key, value) => {
    setProperty({ ...property, [key]: value })
  }

  const [UNITNOs, setUNITNOs] = useState([]);

  const [existUNITNOs, setExistUNITNOs] = useState([]);

  useEffect(() => {
    axiosServices.get('/api/property/getunitnos')
      .then(res => setExistUNITNOs(res.data.UNITNOs))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = () => {
    axiosServices.put('/api/property/generate', { property_details: property, UNITNOs })
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
          navigate('/setup/property')
        }
      })
      .catch(err => {
        console.log(err)
        openSnackbar({
          open: true,
          message: err,
          variant: 'alert',

          alert: {
            color: 'error'
          }
        })
      }
      )
  }

  return <>
    <Breadcrumbs custom heading="Generate Multiple Property" links={breadcrumbLinks} />
    <MainCard>
      <Grid container spacing={5} alignItems="baseline">
        <Grid item md={4} className="grid grid-row gap-3">
          <Box className="flex items-center justify-between">
            <Typography>Unit Description</Typography>
            <OutlinedInput className="w-[50%]" value={property.UNITDESP} onChange={e => setValue("UNITDESP", e.target.value)} />
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>Phase</Typography>
            <Select
              className="w-[50%]"
              onChange={e => setValue("PHCODE", e.target.value)}
              value={property.PHCODE}
            >
              {
                Object.keys(phases).map(key =>
                  <MenuItem value={key} key={key}>{phases[key]}</MenuItem>
                )
              }
            </Select>
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>House Type</Typography>
            <Select
              className="w-[50%]"
              onChange={e => setValue("HSECODE", e.target.value)}
              value={property.HSECODE}
            >
              {
                Object.keys(unittypes).map(key =>
                  <MenuItem value={key} key={key}>{unittypes[key]}</MenuItem>
                )
              }
            </Select>
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>Unit Type</Typography>
            <Select
              className="w-[50%]"
              onChange={e => setValue("UNITTYPE", e.target.value)}
              value={property.UNITTYPE}
            >
              {
                Object.keys(unittypes).map(key =>
                  <MenuItem value={key} key={key}>{unittypes[key]}</MenuItem>
                )
              }
            </Select>
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>Area</Typography>
            <TextField
              className="w-[50%]"
              value={property.AREA}
              onChange={e => setValue("AREA", e.target.value)}
              InputProps={{
                inputComponent: NumberFormatCustom,
                endAdornment: "Sq.Feet"
              }}
              variant="outlined"
            />
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>Selling Price</Typography>
            <TextField
              className="w-[50%]"
              value={property.SELLINGPRI}
              onChange={e => setValue("SELLINGPRI", e.target.value)}
              InputProps={{
                inputComponent: NumberFormatCustom,
                startAdornment: "RM"
              }}
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item md={4} className='grid grid-row gap-3'>
          <Box className="flex items-baseline justify-between">
            <Typography>Address</Typography>
            <Box className="w-[50%] grid grid-col gap-3">
              <OutlinedInput value={property.ADD1} onChange={e => setValue("ADD1", e.target.value)} />
              <OutlinedInput value={property.ADD2} onChange={e => setValue("ADD2", e.target.value)} />
              <OutlinedInput value={property.ADD3} onChange={e => setValue("ADD3", e.target.value)} />
            </Box>
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>PostCode</Typography>
            <TextField
              className="w-[50%]"
              value={property.POSTCODE}
              onChange={e => setValue("POSTCODE", e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>State</Typography>
            <Select
              className="w-[50%]"
              onChange={e => setValue("STATE", e.target.value)}
              value={property.STATE}
            >
              {
                Object.keys(states).map(key =>
                  <MenuItem value={key} key={key}>{states[key]}</MenuItem>
                )
              }
            </Select>
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>Country</Typography>
            <Select
              className="w-[50%]"
              onChange={e => setValue("COUNTRY", e.target.value)}
              value={property.COUNTRY}
            >
              {
                Object.keys(countries).map(key =>
                  <MenuItem value={key} key={key}>{countries[key]}</MenuItem>
                )
              }
            </Select>
          </Box>
        </Grid>
        <Grid item md={4} className="grid grid-rows-6 gap-3">
          <Box className="flex items-center justify-between">
            <Typography>Car Park</Typography>
            <OutlinedInput className="w-[50%]" value={property.CARPARK} onChange={e => setValue("CARPARK", e.target.value)} />
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>Remark</Typography>
            <OutlinedInput className="w-[50%]" value={property.REMARK} onChange={e => setValue("REMARK", e.target.value)} />
          </Box>
          <Box className="flex items-center justify-between">
            <Typography>Parcel No</Typography>
            <OutlinedInput className="w-[50%]" value={property.PARCELNO} onChange={e => setValue("PARCELNO", e.target.value)} />
          </Box>
        </Grid>
        <Grid item md={12}>
          <Divider />
        </Grid>

        <Grid item md={3}>
          <Box className="p-5 border-2 border-dashed">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Generate Unit By</FormLabel>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={generateMethod}
                onChange={e => setGenerateMethod(e.target.value)}
              >
                <FormControlLabel value="with_num_floor_no" control={<Radio />} label="With Numeric Floor No" />
                <FormControlLabel value="with_char_floor_no" control={<Radio />} label="With Character Floor No" />
                <FormControlLabel value="without_floor_no" control={<Radio />} label="Without Floor No" />
                <FormControlLabel value="spec_char" control={<Radio />} label="Special Character" />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item md={8}>
          {
            (() => {
              switch (generateMethod) {
                case "with_num_floor_no":
                  return <WithNumFloorNo setUNITNOs={setUNITNOs} />
                case "with_char_floor_no":
                  return <WithCharFloorNo setUNITNOs={setUNITNOs} />
                case "without_floor_no":
                  return <WithoutFloorNo setUNITNOs={setUNITNOs} />
                case "spec_char":
                  return <SpecChar setUNITNOs={setUNITNOs} />
              }
            })()
          }
        </Grid>
        <Grid item md={12}>
          <Box className="row-start-6 flex items-center justify-end gap-2 ">
            <Button variant="contained" color="inherit" onClick={() => navigate('/setup/property')}>Cancel</Button>
            <Button variant="contained" onClick={() => setConfirmDlg(true)}>Submit</Button>

            <Dialog open={confirmDlg} onClose={() => setConfirmDlg(false)}>
              <DialogTitle>
                Generate Multiple Unit No
              </DialogTitle>
              <DialogContent>
                {
                  UNITNOs.length > 0 && UNITNOs.map(UNITNO => <Typography key={UNITNO}>{UNITNO} {existUNITNOs.includes(UNITNO) && "- already exist!"}</Typography>)
                }
              </DialogContent>
              <DialogActions>
                <Button variant="contained" color="inherit" onClick={() => setConfirmDlg(false)}>Close</Button>
                <Button variant="contained" onClick={handleSubmit}>Confirm</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  </>
}

export default GenerateProperty;