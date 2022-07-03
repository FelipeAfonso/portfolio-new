/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export const Landing = () => {
  return (
    <section class={tw`flex justify-center items-center h-screen`}>
      <div
        class={tw`absolute h-full w-full left-0`}
        style={{
          background:
            'linear-gradient(120deg, rgb(55 48 163) 15%, transparent 15%)',
        }}
      />
      <div
        class={tw`absolute h-full right-0 w-full`}
        style={{
          background:
            'linear-gradient(150deg, transparent 90%, rgb(55 48 163) 90%)',
        }}
      />
      <div class={tw`flex flex-col items-start`}>
        <h1
          style={{ textDecorationColor: 'rgb(55 48 163)' }}
          class={tw`text-3xl sm:text-5xl`}
        >
          {`Hi! I'm Felipe Afonso,`}
          <br />
          <u>
            <b>{`Front end developer.`}</b>
          </u>
        </h1>
        <a
          href="#about"
          style={{ cursor: 'pointer' }}
          class={tw`text-center bg-indigo-700 rounded self-end font-semibold text-indigo-50 px-6 py-2 my-4`}
        >
          Who am I?
        </a>
      </div>
    </section>
  )
}
