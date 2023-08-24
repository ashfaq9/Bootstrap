import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import ComboBox from './combobox';
import CountrySelect from './countryselect';
import Grouped from './grouped';
import BasicButtons from '../button/basicbutton';
import ButtonSizes from '../button/buttonsizes';
import Uploadbutton from '../button/uploadbutton';
import Complexbutton from '../button/complexbutton';
import  Buttongroup  from  '../button/buttongroup';
import Variantbutton from '../button/variantbutton';
import Loadingbutton from '../button/loadingbutton';
import Verticalgroup from '../button/verticalgroup';
import Checkbox from '../button/checkbox';
import Basicheckbox from '../checkbox/basiccheckbox';
import Color from  '../checkbox/color';
import Control from '../checkbox/control';


export default function TotalAvatars() {
    return (
        <>
        <AvatarGroup total={20} style={{margin:"20px"}}>
        <Tooltip title="Asbaq" arrow><Avatar alt="Remy Sharp" src="asba.jpg" /></Tooltip>
        <Tooltip title="Fayiz" arrow><Avatar alt="Travis Howard" src="fayiz.jpg" /></Tooltip>
        <Tooltip title="Razi" arrow><Avatar alt="Agnes Walker" src="razi.jpg" /></Tooltip>
        <Tooltip title="Shaheed" arrow><Avatar alt="Trevor Henderson" src="dark.png" /></Tooltip>
      </AvatarGroup>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      cursor="pointer"
      options={interns}
      getOptionDisabled={(option) =>
        option === interns[0] || option === interns[5]
      }
        sx={{ width: 500 ,backgroundColor:"yellow" }}
      renderInput={(params) => <TextField {...params} label="Interns" />}
    />
    <br/><ComboBox/><br/><CountrySelect/><br/><Grouped/>
    <hr/><center><BasicButtons/></center><hr/>
    <br/><ButtonSizes/><br/><Uploadbutton/><Complexbutton/> &nbsp; <br/><Buttongroup/><Variantbutton/><Loadingbutton/><Verticalgroup/><Checkbox/><Basicheckbox/><Color/><Control/>
      
    </>
  );
}

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const interns = [
  { label: 'Mahammad Hasbak', year: 1994 },
  { label: 'Mahammad Razi K A', year: 1972 },
  { label: 'Mahammad Shaheed M', year: 1974 },
  { label: 'Fayiz', year: 2008 },
  { label: 'Asif', year: 1957 },
  { label: "Asfan", year: 1993 },
  { label: 'Ruthesh', year: 1994 },
  { label: 'Naushad',year: 2003 }
];



