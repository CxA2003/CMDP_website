'use client'

import { useEffect, useRef } from 'react'

export default function MapEmbed() {
  const lat = -12.017877
  const lng = -77.032592
  const zoom = 17
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Prevent double-init in React strict mode
    if (mapInstanceRef.current) return

    // Load Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
    link.crossOrigin = ''
    document.head.appendChild(link)

    // Load Leaflet JS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
    script.crossOrigin = ''
    script.onload = () => {
      if (!mapRef.current || mapInstanceRef.current) return

      const L = (window as any).L

      // Initialize map
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
      }).setView([lat, lng], zoom)

      mapInstanceRef.current = map

      // OpenStreetMap tile layer (100% free, no API key)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      // Custom icon for the marker
      const icon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div style="
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            border: 3px solid #ffffff;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <svg style="transform: rotate(45deg); width: 16px; height: 16px;" viewBox="0 0 24 24" fill="white">
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" fill="none" stroke="white" stroke-width="2"/>
              <path d="M12 8v4m0 0v4m0-4h4m-4 0H8" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
      })

      // Add marker with popup
      const marker = L.marker([lat, lng], { icon }).addTo(map)

      marker
        .bindPopup(
          `<div style="font-family: system-ui, -apple-system, sans-serif; padding: 4px 2px; min-width: 200px;">
            <p style="font-weight: 700; font-size: 14px; margin: 0 0 4px 0; color: #1e293b;">
              Centro Médico Dental Peña
            </p>
            <p style="font-size: 12px; color: #64748b; margin: 0 0 8px 0; line-height: 1.4;">
              Av. Carlos Valderrama 469,<br/>Urb. El Bosque, Rímac, Lima 15096
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}"
               target="_blank"
               rel="noopener noreferrer"
               style="display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #2563eb; text-decoration: none;">
              📍 Cómo llegar
            </a>
          </div>`,
          { closeButton: true, maxWidth: 260 }
        )
        .openPopup()

      // Enable scroll zoom on click
      map.on('click', () => {
        map.scrollWheelZoom.enable()
      })

      // Handle resize
      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })
      resizeObserver.observe(mapRef.current!)
    }

    document.body.appendChild(script)

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="relative z-0">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div
          ref={mapRef}
          style={{ width: '100%', height: '400px' }}
          aria-label="Mapa mostrando la ubicación del Centro Médico Dental Peña en Av. Carlos Valderrama 469, Urb. El Bosque, Rímac, Lima"
        />
      </div>

      {/* Address overlay */}
      <div className="mt-4 flex items-start gap-3 bg-medical-blue/5 border border-medical-blue/20 rounded-xl px-5 py-4">
        <svg
          className="w-6 h-6 text-medical-blue flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div>
          <p className="font-bold text-gray-900 text-base">Centro Médico Dental Peña</p>
          <p className="text-gray-600 text-base">Av. Carlos Valderrama 469, Urb. El Bosque, Rímac, Lima 15096</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-medical-blue hover:text-blue-700 font-semibold text-sm transition-colors"
            aria-label="Obtener direcciones en Google Maps"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Cómo llegar en Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}
