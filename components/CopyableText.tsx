'use client'

import { useState, useCallback } from 'react'

interface CopyableTextProps {
  text: string
  displayText?: string
  className?: string
  children?: React.ReactNode
}

export default function CopyableText({ text, displayText, className = '', children }: CopyableTextProps) {
  const [showToast, setShowToast] = useState(false)

  const handleCopy = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(text)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    }
  }, [text])

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleCopy}
        className={`cursor-pointer text-left transition-colors ${className}`}
        title={`Copiar: ${text}`}
        aria-label={`Copiar ${text} al portapapeles`}
      >
        {children || displayText || text}
      </button>

      {/* Copy icon hint */}
      <svg
        className="w-3.5 h-3.5 ml-1.5 text-gray-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>

      {/* Toast notification */}
      <span
        className={`
          absolute -top-10 left-1/2 -translate-x-1/2 
          whitespace-nowrap px-3 py-1.5 
          bg-health-green text-white text-xs font-semibold 
          rounded-lg shadow-lg
          transition-all duration-300 pointer-events-none
          ${showToast
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-2 scale-95'}
        `}
        role="status"
        aria-live="polite"
      >
        ¡Copiado al Portapapeles!
        {/* Triangle pointer */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-health-green rotate-45" />
      </span>
    </span>
  )
}
