import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export default function ColorCheckboxes() {
  return (
    <>
        <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />



    </div>
     <div>
     <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
     <Checkbox
       {...label}
       icon={<BookmarkBorderIcon />}
       checkedIcon={<BookmarkIcon />}
     />
     <Checkbox
       {...label}
       icon={<FileDownloadIcon />}
       checkedIcon={<FileDownloadIcon />}
     />
   </div>
    
    </>
    
  );
}
