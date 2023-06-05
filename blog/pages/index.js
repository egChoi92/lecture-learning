import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link';
import Date from 'components/date';
// import { getSortedPostsData } from 'lib/posts';

/**
 * SSR 또는 SSG
 */
export async function getServerSideProps() {  // SSG 의 경우 함수명을 getStaticProps 로 변경

  /**
   * Node 함수(getSortedPostsData)를 import 하여 데이터 가져오기
   */  
  // const allPostsData = getSortedPostsData();
  // return {
  //   props: {
  //     allPostsData,
  //   },
  // }
  
  /**
   * API 통신하여 데이터 가져오기
   */
  const res = await fetch('http://localhost:3000/api/posts');
  const json = await res.json()
  return {
    props: {
      allPostsData: json,
    },
  }
}

export default function Home({allPostsData}) {  // SSR 또는 SSG 의 경우 data를 props 로 전달한다.
  /**
   * CSR
   */
  // const [allPostsData, setAllPostsData] = useState([])
  // useEffect(() => {
  //   fetch('./api/posts')
  //     .then((res) => {
  //       return res.json();  // Promise 로 반환
  //     })
  //     .then((json) => {
  //       setAllPostsData(json)
  //     })
  // }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I Love Javascript</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
