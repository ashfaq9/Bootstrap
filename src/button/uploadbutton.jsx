import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";

export default function UploadButtons() {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          color="success"
          variant="outlined"
          component="label"
          startIcon={<SendIcon />}
        >
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Tooltip style={{ backgroundColor: "yellow" }} title="upload" arrow>
          <IconButton
            color="success"
            aria-label="upload picture"
            component="label"
            size="large"
          >
            <input hidden accept="pdf/*" type="file"  />
            <PhotoCamera />
          </IconButton>
        </Tooltip>
      </Stack>
        <br/>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <br/>
      <Stack direction="row" spacing={2}>
      <IconButton aria-label="delete" sx={{color:"red"}}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
    <br />
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" color="error" size="large">
        <DeleteIcon fontSize="inherit" color="inherit"/>
      </IconButton>

      <IconButton aria-label="delete" size="small" color="error">
        <DeleteIcon fontSize="small" color="inherit" />
      </IconButton>
      
      <IconButton aria-label="delete" size="large" color="error">
        <DeleteIcon color="inherit" />
      </IconButton>

      <IconButton aria-label="delete" size="large" color="error">
        <DeleteIcon fontSize="inherit" color="success"/>
      </IconButton>
    </Stack>
    </>
  );
}
