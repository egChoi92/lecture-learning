import Layout from "components/layout"
import { useRef } from "react"

export default function Write() {
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);

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
      .then(res => res.json())
      .then(data => alert(data.message))
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
    </Layout>
  )
}
