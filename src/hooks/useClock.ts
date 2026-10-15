import { useEffect, useRef, useState } from 'react'

/** True when the user asked the OS to minimise motion. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/** True while the browser tab is visible. */
export function usePageVisible() {
  const [visible, setVisible] = useState(() => typeof document === 'undefined' || !document.hidden)

  useEffect(() => {
    const onChange = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])

  return visible
}

interface ClockOptions {
  running: boolean
  duration: number
  onDone?: () => void
}

/**
 * Elapsed-milliseconds clock. Counts up while `running`, and on reaching `duration`
 * resets to 0 and calls `onDone` (so a looping demo simply keeps running).
 */
export function useClock({ running, duration, onDone }: ClockOptions) {
  const [elapsed, setElapsed] = useState(0)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    if (!running) return
    let last = performance.now()
    const id = window.setInterval(() => {
      const now = performance.now()
      const delta = now - last
      last = now
      setElapsed((prev) => {
        const next = prev + delta
        if (next >= duration) {
          // Defer so we never set parent state during this component's updater.
          window.setTimeout(() => doneRef.current?.(), 0)
          return 0
        }
        return next
      })
    }, 40)
    return () => window.clearInterval(id)
  }, [running, duration])

  return { elapsed, reset: () => setElapsed(0) }
}

/** Substring of `text` revealed between `start` and `end` (ms) of a timeline. */
export function typed(text: string, elapsed: number, start: number, end: number) {
  if (elapsed <= start) return ''
  const p = Math.min(1, (elapsed - start) / (end - start))
  return text.slice(0, Math.round(text.length * p))
}
