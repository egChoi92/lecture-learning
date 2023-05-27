import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Layout from 'components/Layout';

export default function CartDate() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <h1 className="title">Cart {JSON.stringify(date)}</h1>
      <Link href="/cart/2022/05/11"><a>2022년 5월 11일로</a></Link>
      <button onClick={() => router.push('/cart/2022/05/21')}>2022년 5월 21일로</button>
    </>
  )
}

CartDate.layout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  ) 
}
