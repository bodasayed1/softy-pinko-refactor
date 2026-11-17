import { useEffect, useRef, useState } from 'react'

const CountUp = ({ end, duration = 2000 }) => {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min(Math.max((now - start) / duration, 0), 1)
          setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration])

  return <span ref={ref}>{value}</span>
}

export default CountUp
