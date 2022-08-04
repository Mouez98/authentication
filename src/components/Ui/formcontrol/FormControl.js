import React from 'react'
import style from './FormControl.module.css'

const FormControl = ({children}) => {
  return (
    <div className={style.formControl}>
        {children}
    </div>
  )
}

export default FormControl