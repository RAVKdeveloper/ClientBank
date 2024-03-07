'use client';

import { FC, ReactElement } from 'react'

import { useSize } from './logic/useSize'


interface Props {
    mobile: ReactElement
    dekstop: ReactElement
}

const SizeWrapper: FC<Props> = ({ mobile, dekstop }) => {

    const isMobile = useSize()

    if(!isMobile) return dekstop

    if(isMobile) return mobile
}

export default SizeWrapper