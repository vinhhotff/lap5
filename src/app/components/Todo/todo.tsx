import { Button } from '@mui/material'
import React from 'react'

const Todo = ({name}:{name:string}) => {
  return (
    <div>
         <Button style={{justifyContent:'start'}} fullWidth={true} >{name}</Button>

    </div>
  )
}

export default Todo;
