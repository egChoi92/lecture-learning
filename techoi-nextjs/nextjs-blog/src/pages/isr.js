import Head from 'next/head'
import SubLayout from 'components/SubLayout'
import Layout from 'components/Layout';

export async function getStaticProps() {
  console.log('server')

  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  }
}

export default function ISR({ time }) {
  return (
    <h1 className="title">{time}</h1>
  )
}
ISR.layout = function getLayout(page) {
  <Layout>
    <SubLayout>{page}</SubLayout>
  </Layout>
}