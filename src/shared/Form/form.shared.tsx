import { FC, ReactNode } from 'react'

import { Box } from '@mui/material'

import s from './style.module.css'


interface Props {
    children: ReactNode
}


export const FormBox: FC<Props> = ({ children }) => {

    return (

       <Box className={s.root}>
          {children}
       </Box>
    )
}