import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speed = 35) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    setOutput('')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return output
}
