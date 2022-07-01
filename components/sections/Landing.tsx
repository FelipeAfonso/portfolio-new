/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export const Landing = () => {
  return (
    <div class={tw`flex flex-col justify-center items-center h-screen`}>
      <h1 class={tw`text-3xl sm:text-5xl`}>{`Hi! I'm Felipe Afonso,`}</h1>
      <h1 class={tw`text-3xl sm:text-5xl font-bold`}>
        <u
          style={{ textDecorationColor: 'rgb(55 48 163)' }}
        >{`Front end developer.`}</u>
      </h1>
    </div>
  )
}
