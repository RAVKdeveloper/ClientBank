import { useEffect, useState } from 'react'

export function useSize(): boolean {

    const [ isMobile, setIsMobile ] = useState<boolean>(false)

    const resizeFn = () => {
        const value = window.matchMedia('(max-width: 750px)').matches
    
        if(value) setIsMobile(true)
        
        if(!value) setIsMobile(false)
    }

    useEffect(() => {

    window.addEventListener('resize', resizeFn);

    return () => window.removeEventListener('resize', resizeFn)

    }, [])

    return isMobile

}