/** @jsx h */
import { h, Fragment } from 'preact'
import { tw } from '@twind'
import { Landing } from 'components/sections/Landing.tsx'
import { Who } from 'components/sections/Who.tsx'

//eef2ff
//818cf8
export default function Home() {
  return (
    <Fragment>
      <head>
        <title>{'Felipe Afonso'}</title>
      </head>
      <div class={tw`xs:bg-indigo-50`}>
        <div class={tw`container px-4 mx-auto`}>
          <Landing />
          <Who />
        </div>
      </div>
    </Fragment>
  )
}
