'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterItem {
  id: string
  endValue: number
  suffix: string
  prefix: string
  label: string
  sublabel: string
  icon: string
  color: string
}

const counters: CounterItem[] = [
  {
    id: 'years',
    endValue: 25,
    suffix: '+',
    prefix: '',
    label: 'Años de Experiencia',
    sublabel: 'Cuidando la salud del Rímac desde 2000',
    icon: '🏆',
    color: 'text-medical-blue',
  },
  {
    id: 'specialties',
    endValue: 5,
    suffix: '',
    prefix: '',
    label: 'Especialidades Médicas',
    sublabel: 'Odontología, Medicina, Fisioterapia, Nutrición y Psicología',
    icon: '🔬',
    color: 'text-health-green',
  },
  {
    id: 'patients',
    endValue: 10,
    suffix: '000+',
    prefix: '',
    label: 'Pacientes Atendidos',
    sublabel: 'Familias que confían en nosotros',
    icon: '👨‍👩‍👧‍👦',
    color: 'text-medical-blue',
  },
  {
    id: 'satisfaction',
    endValue: 98,
    suffix: '%',
    prefix: '',
    label: 'Satisfacción',
    sublabel: 'De nuestros pacientes nos recomiendan',
    icon: '⭐',
    color: 'text-health-green',
  },
]

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    const startValue = 0

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [end, duration, shouldStart])

  return count
}

function Counter({ item }: { item: CounterItem }) {
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(item.endValue, 2000, hasStarted)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  return (
    <div
      ref={ref}
      className="text-center px-3 py-5 sm:px-6 sm:py-8 group"
      aria-label={`${item.prefix}${item.endValue}${item.suffix} ${item.label}`}
    >
      <div
        className="text-3xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
        aria-hidden="true"
      >
        {item.icon}
      </div>
      <div
        className={`text-counter font-bold mb-2 sm:mb-3 ${item.color} tabular-nums`}
        aria-hidden="true"
      >
        {item.prefix}
        {count}
        {item.suffix}
      </div>
      <h3 className="text-fluid-lg font-bold text-gray-900 mb-1 sm:mb-2">{item.label}</h3>
      <p className="text-gray-500 text-fluid-sm leading-snug mx-auto">{item.sublabel}</p>
    </div>
  )
}

export default function SocialProof() {
  return (
    <section
      className="py-16 bg-white border-b border-gray-100"
      aria-labelledby="social-proof-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-medical-blue font-semibold text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            Nuestra Trayectoria
          </span>
          <h2
            id="social-proof-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Números que hablan por sí solos
          </h2>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 divide-y xs:divide-x xs:divide-y lg:divide-y-0 divide-gray-100 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          {counters.map((counter) => (
            <Counter key={counter.id} item={counter} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              text: 'Profesionales Colegiados',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
              text: 'Equipos Modernos',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              text: 'Atención con Calidez',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              text: 'Ubicados en Rímac, Lima',
            },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                {badge.icon}
              </div>
              <span className="font-medium text-base">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
