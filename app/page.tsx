'use client';

import { FC } from 'react';

import { Alert } from '@mui/material';

import s from './page.module.css';


const HomePage: FC = () => {
  
  return (
    
    <main className={s.main}>
       <Alert severity='success' color='success'>Hell</Alert>
    </main>
  );
}

export default HomePage