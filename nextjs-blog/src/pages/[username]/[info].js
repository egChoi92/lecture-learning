import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Layout from 'components/Layout';

export default function UsernameInfo() {
  const router = useRouter();
  const { username, info} = router.query;
  return (
    <>
      <h1 className="title">{username} : {info}</h1>
    </>
  )
}

UsernameInfo.layout = function getLayout(page) {
  return(
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  ) 
}
 