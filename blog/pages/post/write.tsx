import Layout from "components/layout"
import Link from "next/link";
import { useRef, useState } from "react"

export default function Write() {
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);
  
  const [ showPost, setShowPost ] = useState(false); 

  const onSubmit = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch('/api/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          title,
          content,
        }) 
      })
      .then(res => {
        if (res.ok) {
          setShowPost(true);
          return res.json()
        }
        throw new Error(res.status)
      })
      .then(data => alert(data.message))
      .catch(error => alert(`Request Error: ${error}`))
    }
  }
  return (
    <Layout>
      <h1>Write a post</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="id" id="id" placeholder="id" required ref={idRef}/>
        <br />
        <input type="text" name="title" id="title" placeholder="title" required ref={titleRef}/>
        <br />
        <textarea name="content" id="content" placeholder="content" required ref={contentRef}></textarea>
        <br />
        <input type="submit" value='Create' />
      </form>
      {showPost && <Link href={`/posts/${idRef.current.value}`}>Created Post</Link>}
    </Layout>
  )
}
