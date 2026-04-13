import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactForm from '@/components/ContactForm'
import ContactInfoCards from '@/components/ContactInfoCards'
import CallCard from '@/components/CallCard'
import MapEmbed from '@/components/MapEmbed'

export const metadata: Metadata = {
  title: 'Contacto | Centro Médico Dental Peña - Rímac, Lima',
  description:
    'Contáctenos para reservar su cita en el Centro Médico Dental Peña, Rímac, Lima. Llámenos al +51 931 876 343 o escríbanos por WhatsApp. Atención de lunes a sábado.',
}

export default function ContactoPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-medical-blue to-blue-800 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white font-semibold text-sm px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
              Contáctenos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reserva tu Cita
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Estamos aquí para atenderte. Completa el formulario, llámanos o escríbenos por WhatsApp y te responderemos a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfoCards />
        </div>
      </section>

      {/* Form + WhatsApp section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl font-bold text-medical-blue mb-2">Formulario de Contacto</h2>
                <p className="text-gray-600 text-base mb-8">Complete el formulario y nos pondremos en contacto con usted a la brevedad.</p>
                <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-400">Cargando formulario...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <div className="bg-health-green rounded-3xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">¿Prefiere WhatsApp?</h3>
                <p className="text-green-100 text-base mb-6">Escríbanos directamente y le responderemos de inmediato.</p>
                <a
                  href="https://wa.me/51931876343?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20el%20Centro%20M%C3%A9dico%20Dental%20Pe%C3%B1a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-health-green font-bold text-lg rounded-xl hover:bg-green-50 transition-colors min-h-[52px]"
                >
                  Abrir WhatsApp
                </a>
              </div>

              {/* Direct call */}
              <CallCard />
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Encuéntranos aquí</h2>
            <p className="text-gray-600 text-lg">Av. Carlos Valderrama 469, Urb. El Bosque, Rímac, Lima 15096</p>
          </div>
          <MapEmbed />
        </div>
      </section>
    </>
  )
}
