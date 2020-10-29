import Head from 'next/head'
import getProcess from 'next/config'

function Test({data}){
return (<div>Test, {JSON.stringify(data)}</div>)
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const data = 'another fucking one test'

  // Pass data to the page via props
  return { props: { data } }
}

export default Test