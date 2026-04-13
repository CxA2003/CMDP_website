'use client'

import CopyableText from './CopyableText'

export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-6">
      {/* Dirección */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-3 group">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-base">Dirección</h3>
        <CopyableText
          text="Av. Carlos Valderrama 469, Urb. El Bosque, Rímac, Lima 15096"
          className="text-gray-600 hover:text-medical-blue text-base"
        />
      </div>

      {/* Teléfono */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-3 group">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-base">Teléfono</h3>
        <CopyableText
          text="+51 931 876 343"
          className="text-medical-blue hover:text-blue-700 text-base font-medium"
        />
      </div>

      {/* Correo */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-3 group">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-base">Correo</h3>
        <CopyableText
          text="odontomedicperu@gmail.com"
          className="text-medical-blue hover:text-blue-700 text-sm font-medium break-all"
        />
      </div>

      {/* Horario (no copy needed) */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-base">Horario</h3>
        <p className="text-gray-600 text-base">Lun-Sáb: 8:00-19:00<br />Dom: 8:00-12:00</p>
      </div>
    </div>
  )
}
