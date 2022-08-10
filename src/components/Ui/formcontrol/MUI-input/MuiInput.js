import React from 'react'
import TextField from '@mui/material/TextField'
import { Alert } from '@mui/material'

const MuiInput = ({onChange,label,value,errorText,type,name}) => {
    console.log(errorText)
  return (
    <>
    <TextField
    onChange={onChange}
    color='info'
    name={name}
    label={label}
    value={value}
    variant="outlined"
    size="small"
    margin="dense"
    fullWidth
    type={`${type ? type: 'text'}`}
  />
  {errorText && errorText.length && <Alert severity="error">{errorText}</Alert>}
  
  </>
  )
}

export default MuiInput