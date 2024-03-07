import { FC, ReactNode, memo } from 'react'

import { useLanguage } from './logic/useLanguage.model' 


interface Props {
    lng: string,
    children: ReactNode
}


// eslint-disable-next-line react/display-name
export const LanguageWrapper: FC<Props> = memo(({ lng, children }) => {

    useLanguage(lng)

    return (

        <div>
          {children}
        </div>
    )
})