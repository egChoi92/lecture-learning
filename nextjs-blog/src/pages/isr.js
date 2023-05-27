import SubLayout from 'components/SubLayout'
import Head from 'next/head'

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
  return <SubLayout>{page}</SubLayout>
}