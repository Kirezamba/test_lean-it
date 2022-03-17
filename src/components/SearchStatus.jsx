import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchStatus({ onSearch }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField onChange={onSearch} label="Search for name" id="fullWidth" variant="standard" />
    </Box>
  );
}
