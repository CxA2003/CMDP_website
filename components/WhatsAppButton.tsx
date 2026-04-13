'use client'

import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '51931876343'
const WHATSAPP_MESSAGE =
  'Hola, me gustaría reservar una cita en el Centro Médico Dental Peña'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1500)

    // Show tooltip briefly to draw attention
    const tooltipTimer = setTimeout(() => {
      setIsTooltipVisible(true)
      setTimeout(() => setIsTooltipVisible(false), 4000)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div
      id="whatsapp-floating-btn"
      className={`fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Tooltip */}
      <div
        className={`transition-all duration-300 ${
          isTooltipVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
        role="tooltip"
        id="whatsapp-tooltip"
      >
        <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg max-w-[220px] text-right relative">
          <p>¿Necesitas una cita? ¡Escríbenos!</p>
          {/* Arrow */}
          <div
            className="absolute right-4 -bottom-2 w-0 h-0"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid #111827',
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-16 h-16 bg-health-green hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110 whatsapp-pulse"
        aria-label="Contactar por WhatsApp para reservar una cita en el Centro Médico Dental Peña"
        aria-describedby="whatsapp-tooltip"
      >
        {/* WhatsApp SVG icon */}
        <svg
          className="w-9 h-9"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Ripple effect */}
        <span
          className="absolute inset-0 rounded-full bg-health-green animate-ping opacity-20"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
