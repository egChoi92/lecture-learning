import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'
import Layout from 'components/Layout';

export default function CSR() {
  const [time, setTime] = useState()
  console.log('time: ', time);

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  )
}

CSR.layout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
