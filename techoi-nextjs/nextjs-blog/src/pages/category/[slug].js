import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Layout from 'components/Layout';

export default function CategorySlug() {
  const router = useRouter();
  const { slug, lang } = router.query; 

  return (
    <>
      <h1 className="title">Category {slug}</h1>
      <p>lang: {lang}</p>
    </>
  )
}

CategorySlug.layout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
