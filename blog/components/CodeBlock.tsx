import SyntaxHighligter from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(target)
      alert('Copied to clipboard')
    } catch (error) {
      alert(`Copy failed: ${error}`)
    }
  }
  return (
    <button
      type="button"
      className={'absolute right-1 top-1 bg-gray-100 dark:text-gray-800 px-2'}
      onClick={handleCopy}
    >
      COPY
    </button>
  )
}
export default function CodeBlock({ children }) {
  return (
    <div className={'relative'}>
        <CopyButton target={children}/>
      <SyntaxHighligter showLineNumbers style={rainbow}>
        {children}
      </SyntaxHighligter>
    </div>
  )
}
