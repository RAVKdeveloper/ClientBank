import { FC, ReactNode } from 'react'
import Link from 'next/link'

import { Box } from '@mui/material'
import { Typography } from '@mui/material'

interface Props {
  label: string | ReactNode
  linkText?: string | ReactNode
  urlLink?: string
}

export const LabelFields: FC<Props> = ({ label, linkText, urlLink }) => {
  return (
    <Box
      sx={{ width: '100%', marginBottom: '8px' }}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography variant='subtitle1' sx={{ color: 'var(--color-black)' }}>
        {label}
      </Typography>
      {linkText && urlLink && (
        <Link href={urlLink}>
          <Typography
            sx={{ ':hover': { textDecoration: 'underline' }, color: 'var(--color-accent)' }}
          >
            {linkText}
          </Typography>
        </Link>
      )}
    </Box>
  )
}
