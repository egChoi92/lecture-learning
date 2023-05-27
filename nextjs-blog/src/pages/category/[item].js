import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'

export default function CategorySlug() {

  return (
    <>
      <h1 className="title">category/[slug]</h1>
    </>
  )
}

CategorySlug.layout = function getLayout(page) {
  return <SubLayout>{page}</SubLayout>
}
