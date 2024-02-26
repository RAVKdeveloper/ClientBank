'use client';

import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Alert } from '@mui/material';

import s from './page.module.css';


const HomePage: FC = () => {

  const { t, i18n } = useTranslation()
  
  return (
    
    <main className={s.main}>
       <Alert severity='success' color='success'>{t('test')}</Alert>
    </main>
  );
}

export default HomePage