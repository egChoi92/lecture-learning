import Head from 'next/head'
import SubLayout from 'components/SubLayout'
import Layout from 'components/Layout';

export async function getStaticProps() {
  console.log('server')

  return {
    props: { time: new Date().toISOString() },
  }
}

export default function SSG({ time }) {
  return (
    <h1 className="title">{time}</h1>
  )
}

SSG.layout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
