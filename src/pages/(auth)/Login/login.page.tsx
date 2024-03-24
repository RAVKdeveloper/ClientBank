import { FC } from 'react'

import { BackForm } from '@/src/shared/BackForm/backForm.shared'
import { FormBox } from '@/src/shared/Form/form.shared'
import SizeWrapper from '@/src/shared/SizeWrapper/sizeWrapper'
import { AuthForm } from '@/src/entitys/Forms/AuthForm/authForm.entity'
import { SafetyRules } from '@/src/entitys/SafetyRules'

const imageUrl =
  'https://esa-res.online.sberbank.ru/CMS/PRELOGINBANNERS/images/default/slide2_19122023.jpg'

const LoginPage: FC = () => {
  return (
    <main>
      <SizeWrapper
        dekstop={
          <>
            <BackForm image={imageUrl}>
              <FormBox>
                <AuthForm />
              </FormBox>
            </BackForm>
            <SafetyRules />
          </>
        }
        mobile={
          <>
            <FormBox>
              <AuthForm />
            </FormBox>
            <SafetyRules />
          </>
        }
      />
    </main>
  )
}

export default LoginPage
