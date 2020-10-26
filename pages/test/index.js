import Head from 'next/head'
import getProcess from 'next/config'

export default function Home() {
  console.log(getProcess())

  return (
    <div>
        Test
    </div>
  )
}
