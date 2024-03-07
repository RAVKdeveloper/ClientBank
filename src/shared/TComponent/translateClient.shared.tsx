import { FC, memo } from 'react'

import { useTranslation } from '../../i18n/i18n.instance'


interface Props {
    str: string,
    lng: string
}

// eslint-disable-next-line react/display-name
const TComponent: FC<Props> = memo(async ({ str, lng }) => {

    const { t } = await useTranslation(lng)

    return (
        <>
          {
            t(str)
          }
        </>
    )
}) 

export default TComponent