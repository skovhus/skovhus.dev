'use client'

import { useEffect, useState } from 'react'

const holdDelayMs = 2800
const typingDelayMs = 90
const deletingDelayMs = 45
const nextPhraseDelayMs = 500

export function TypewriterPhrase({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charCount, setCharCount] = useState(phrases[0]?.length ?? 0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    setIsAnimating(true)
  }, [])

  useEffect(() => {
    if (!isAnimating) {
      return
    }

    const phrase = phrases[phraseIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>
    if (isDeleting) {
      if (charCount === 0) {
        timeout = setTimeout(() => {
          setPhraseIndex((phraseIndex + 1) % phrases.length)
          setIsDeleting(false)
        }, nextPhraseDelayMs)
      } else {
        timeout = setTimeout(() => setCharCount(charCount - 1), deletingDelayMs)
      }
    } else if (charCount === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), holdDelayMs)
    } else {
      timeout = setTimeout(() => setCharCount(charCount + 1), typingDelayMs)
    }
    return () => clearTimeout(timeout)
  }, [isAnimating, phrases, phraseIndex, charCount, isDeleting])

  return (
    <>
      {(phrases[phraseIndex] ?? '').slice(0, charCount)}
      <span className="blinking-cursor" aria-hidden="true">
        ▌
      </span>
    </>
  )
}
