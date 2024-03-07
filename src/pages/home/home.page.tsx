'use client';

import { FC } from 'react' 
import dynamic from 'next/dynamic' 

import { Layout } from '@/src/shared/Layout/layout'
 
const SizeWrapper = dynamic(() => import('@/src/shared/SizeWrapper/sizeWrapper'), { ssr: false })


const HomePage: FC = () => {

    return (
 
       <Layout>
        <SizeWrapper
          mobile={<section style={{ margin: 20 }}>mobile</section>}
          dekstop={<section style={{ margin: 20 }}>dekstop</section>}
        />
       </Layout>             
    )
}

export default HomePage