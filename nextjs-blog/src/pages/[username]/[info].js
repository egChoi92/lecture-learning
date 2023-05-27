import Head from 'next/head'
import { useEffect, useState } from 'react'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Layout from 'components/Layout';

export default function UsernameInfo() {
  const router = useRouter();
  const {username, info, uid} = router.query;
  const [name, setName] = useState();
  
  // useEffect(() => {
  //   fetch('/api/user'
  //     ).then(res => { 
  //       console.log('res: ', res);
  //       return res.json()
  //     }).then(data => {
  //       setName(data.name)
  //     })
  // }, [])

  useEffect(() => {
    if (uid) {
      fetch(`/api/user-info/${uid}`
        ).then(res => { 
          return res.json()
        }).then(data => {
          setName(data.name)
          console.log('data: ', name);
        })
      
    }
  }, [uid])

  return (
    <>
      <h1 className="title">{username} : {info}</h1>
      <p>Name: {name}</p>
    </>
  )
}

UsernameInfo.layout = function getLayout(page) {
  return(
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  ) 
}
 