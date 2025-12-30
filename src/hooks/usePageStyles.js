import { useLayoutEffect } from 'react'

const usePageStyles = (styles, key) => {
  useLayoutEffect(() => {
    const nodes = styles.map((content, index) => {
      const style = document.createElement('style')
      style.setAttribute('data-page-style', `${key}-${index}`)
      style.textContent = content
      document.head.appendChild(style)
      return style
    })

    return () => {
      nodes.forEach((node) => {
        node.remove()
      })
    }
  }, [key, styles])
}

export default usePageStyles
