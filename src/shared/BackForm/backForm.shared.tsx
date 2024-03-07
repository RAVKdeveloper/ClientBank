import { FC, ReactNode } from 'react'

import { Box } from '@mui/material'
import { Container } from '@mui/material'


interface Props {
    children: ReactNode,
    image: string
}


export const BackForm: FC<Props> = ({ children, image }) => {

    return (

        <Box 
         sx={{ 
            backgroundImage: `url(${image})`, 
            height: '755px',
            backgroundPosition: '100% 33.33333%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '0 32px' 
        }}
         > 
          <Container sx={{ maxWidth: '1296px', margin: '0 32px', paddingTop: '30px' }}>
            {children}
          </Container>
        </Box>
    )
}