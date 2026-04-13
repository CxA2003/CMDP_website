'use client'

import CopyableText from './CopyableText'

export default function CallCard() {
  return (
    <div className="bg-medical-blue rounded-3xl p-8 text-white text-center">
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
        <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3">Llámenos</h3>
      <p className="text-blue-100 text-base mb-4">Atención directa con nuestro equipo</p>
      <CopyableText
        text="+51 931 876 343"
        className="text-2xl font-bold text-white hover:text-blue-200"
      />
      <p className="text-blue-200 text-sm mt-2">Lun-Sáb: 8:00-19:00 | Dom: 8:00-12:00</p>
    </div>
  )
}
