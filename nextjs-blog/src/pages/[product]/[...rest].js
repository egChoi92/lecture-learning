import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'

export default function FirstItem() {

  return (
    <>
      <h1 className="title">[slug]/[...slug]</h1>
    </>
  )
}

FirstItem.layout = function getLayout(page) {
  return <SubLayout>{page}</SubLayout>
}
