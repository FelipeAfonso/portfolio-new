/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export const Who = () => {
  return (
    <section class={tw`min-h-screen flex flex-col items-start justify-start`}>
      <div
        class={tw`absolute h-full w-full right-0`}
        style={{
          background:
            'linear-gradient(-150deg, rgb(55 48 163) 10%, transparent 10%)',
        }}
      />
      <h2 class={tw`text-3xl font-bold my-4`}>About me</h2>
      <div class={tw`flex flex-col items-start justify-center`}></div>
    </section>
  )
}
