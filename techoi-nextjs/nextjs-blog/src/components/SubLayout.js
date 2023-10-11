import Link from 'next/link'
import Layout from './Layout'

export default function SubLayout({ children }) {
  return (
    <>
      <h1>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </h1>
      {children}
    </>
  )
}
