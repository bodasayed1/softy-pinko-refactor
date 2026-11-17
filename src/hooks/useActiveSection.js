import { useEffect, useState } from 'react'

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      if (atBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      const line = window.innerHeight * 0.4
      const current = ids
        .filter((id) => {
          const section = document.getElementById(id)
          return section && section.getBoundingClientRect().top <= line
        })
        .pop()

      setActive(current || ids[0])
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return active
}

export default useActiveSection
