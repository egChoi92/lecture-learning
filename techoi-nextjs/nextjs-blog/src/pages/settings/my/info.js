import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Layout from 'components/Layout';

export async function getServerSideProps() {
  console.log('server')
  return {
    props: {}
  }
}

export default function MyInfo() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const {status = 'initial'} = router.query;
  return (
    <>
      <h1 className="title">My Info</h1>
      <p>
        Clicked : {String(clicked)} <br />
        Status : {status}
      </p>
      <button
        onClick={() => {
          setClicked(true);
          alert('Edit!!!');
          location.replace(`${router.pathname}?status=edit`)
        }}
      >
        Edit (location.replace)
      </button>
      <button
        onClick={() => {
          setClicked(true);
          alert('Edit!!!');
          router.push(`${router.pathname}?status=edit`)
        }}
      >
        Edit (router.push)
      </button>
      <button
        onClick={() => {
          setClicked(true);
          alert('Edit!!!');
          router.push(`${router.pathname}?status=edit`, undefined, {shallow: true})
        }}
      >
        Edit (shallow routing)
      </button>
    </>
  )
}

MyInfo.layout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
