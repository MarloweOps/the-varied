'use client'

import { useEffect, useRef } from 'react'

export default function CursorEffects() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Direct DOM manipulation — no state, no re-renders, smooth 60fps
    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`
        cursorRef.current.style.top = `${y}px`
        cursorRef.current.style.opacity = '1'
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.background =
          `radial-gradient(550px circle at ${x}px ${y}px, rgba(197, 164, 110, 0.055), transparent 80%)`
      }
    }

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
      if (spotlightRef.current) spotlightRef.current.style.background = 'none'
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      {/* Faint gold warmth that follows the cursor */}
      <div
        ref={spotlightRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Custom cursor — circle outline, slight transition lag */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '22px',
          height: '22px',
          border: '1px solid rgba(240, 237, 230, 0.22)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.07s ease, top 0.07s ease, opacity 0.3s ease',
        }}
      />
    </>
  )
}
