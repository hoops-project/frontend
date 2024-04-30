import { S } from './Main.style.ts'
import BasicInput from '../../components/common/BasicInput/BasicInput.tsx'
import { useForm } from 'react-hook-form'
import { SignIn, SignUp } from '../../types/signIn.ts'
import SelectBoxSmall from '../../components/common/SelectBoxSmall/SelectBoxSmall.tsx'

export default function Main() {
  const { handleSubmit, control } = useForm<SignIn & SignUp>({
    defaultValues: {
      id: '',
      password: '',
    },
  })

  const handleSignUp = (data: SignUp) => {
    console.log(data)
  }

  return (
    <S.Container>
      메인 페이지
      <form onSubmit={handleSubmit(handleSignUp)}>
        <BasicInput
          name='password'
          control={control}
          type='password'
          placeholder='비번'
        />
      </form>
      <SelectBoxSmall
        name={'dd'}
        options={['안녕하세요 저는 오신웅입니다.', 'vv']}
      />
    </S.Container>
  )
}
