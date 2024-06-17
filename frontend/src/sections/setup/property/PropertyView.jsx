import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import { cities, countries } from 'data/location';

// project-imports
import { ImagePath, getImageUrl } from 'utils/getImageUrl';
import { cities, countries as mapcountries } from 'data/location';
import { countries, states } from 'utils/domains';
import MapContainerStyled from 'components/third-party/map/MapContainerStyled';
import MarkersPopups from 'sections/map/MarkersPopups';
import { ThemeMode } from 'config';

// ==============================|| PRODUCT - VIEW ||============================== //

const mapConfiguration = {
  mapboxAccessToken: import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN,
  minZoom: 1
};

const MAPBOX_THEMES = {
  light: 'mapbox://styles/mapbox/light-v10',
  dark: 'mapbox://styles/mapbox/dark-v10',
  streets: 'mapbox://styles/mapbox/streets-v11',
  outdoors: 'mapbox://styles/mapbox/outdoors-v11',
  satellite: 'mapbox://styles/mapbox/satellite-v9',
  satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11'
};

export default function PropertyView({ data })
{
  const theme = useTheme();

  return (
    <Grid container spacing={5} sx={{ pl: { xs: 0, sm: 5, md: 6, lg: 10, xl: 12 } }}>
      <Grid item md={4} className='grid grid-row gap-4'>
        <Box className="flex justify-between">
          <Typography>Unit No </Typography>
          <Typography variant='h5'>{data.UNITNO}</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography>Unit Description </Typography>
          <Typography variant='h5'>{data.UNITDESP}</Typography>
        </Box><Box className="flex justify-between items-center">
          <Typography>Phase </Typography>
          <Typography variant='h5'>{data.PHCODE}</Typography>
        </Box><Box className="flex justify-between items-center">
          <Typography>House Type </Typography>
          <Typography variant='h5'>{data.HSECODE}</Typography>
        </Box>
        {/* </Grid>
      <Grid item md={3} className='grid grid-row gap-4'> */}
        <Box className="flex justify-between items-center">
          <Typography>Unit Type</Typography>
          <Typography variant="h5">{data.UNITTYPE}</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography>Area</Typography>
          <Typography variant="h5">{data.AREA} Sq.Feet</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography>Price</Typography>
          <Typography variant="h5">{data.SELLINGPRI}</Typography>
        </Box>
      </Grid>
      {/* <Grid item md={6} >
        <MapContainerStyled>
          <MarkersPopups
            {...mapConfiguration}
            data={mapcountries}
            mapStyle={theme.palette.mode === ThemeMode.DARK ? MAPBOX_THEMES.dark : MAPBOX_THEMES.light}
          />
        </MapContainerStyled>
      </Grid> */}
      <Grid item md={4} className='flex flex-col gap-4'>
        <Box className="flex justify-between items-center">
          <Typography>Country</Typography>
          <Typography variant="h5">{countries[data.COUNTRY]}</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography>State</Typography>
          <Typography variant="h5">{states[data.STATE]}</Typography>
        </Box>
        <Box className="flex justify-between items-baseline">
          <Typography>Address</Typography>
          <Box className="grid grid-row gap-4">
            <Typography variant='h5'>{data.ADD1}</Typography>
            <Typography variant='h5'>{data.ADD2}</Typography>
            <Typography variant='h5'>{data.ADD3}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4} className='flex flex-col gap-4'>
        <Box className="flex justify-between items-center">
          <Typography>Car Park</Typography>
          <Typography variant="h5">{states[data.CARPARK]}</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography>Remark</Typography>
          <Typography variant="h5">{states[data.REMARK]}</Typography>
        </Box>
        <Box className="flex justify-between items-center">
          <Typography>Parcel No</Typography>
          <Typography variant="h5">{states[data.PARCELNO]}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

PropertyView.propTypes = { data: PropTypes.any };
