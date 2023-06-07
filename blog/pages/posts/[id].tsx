import Layout from 'components/layout'
import Date from 'components/date'
import { getAllPostIds, getPostData } from 'lib/posts'
import utilStyles from 'styles/utils.module.css'
import { MDXRemote } from 'next-mdx-remote'
import CodeBlock from 'components/CodeBlock'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

const Button = ({children}) => {
  return (
    <button type="button" className={"bg-amber-800 dark:bg-amber-200 text-zinc-200 dark:text-zinc-800 px-4"} onClick={() => alert(`Thanks to ${children}`)}>{children}</button>
  )
}

const components = {Button, CodeBlock}

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components} />}
      </article>
    </Layout>
  )
}
