import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ButtonSizes() {
  return (
    <Box sx={{ "& button": { m: 2 } }}>
      <div>
        <Button color="secondary" size="small">Small</Button>
        <Button color="primary" size="medium">Medium</Button>
        <Button color="error" size="large">Large</Button>
      </div>
      <div>
        <Button color="secondary" variant="outlined" size="small">
          Small
        </Button>
        <Button color="primary" variant="outlined" size="medium">
          Medium
        </Button>
        <Button color="error" variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button color="primary" variant="contained" size="small">
          Small
        </Button>
        <Button color="secondary" variant="contained" size="medium">
          Medium
        </Button>
        <Button color="error" variant="contained" size="large">
          Large
        </Button>
      </div>
    </Box>
  );
}
