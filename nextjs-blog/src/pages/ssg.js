import Head from 'next/head'
import SubLayout from 'components/SubLayout'

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
  return <SubLayout>{page}</SubLayout>
}
