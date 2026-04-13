import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import EspecialidadesGrid from '@/components/EspecialidadesGrid'
import SocialProof from '@/components/SocialProof'
import MapEmbed from '@/components/MapEmbed'

export const metadata: Metadata = {
  title: 'Inicio | Centro Médico Dental Peña - Rímac, Lima',
  description:
    'Centro Médico Dental Peña en Rímac, Lima. 25 años de experiencia en Odontología, Medicina General, Terapia Física, Nutrición y Psicología. Reserve su cita hoy.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Social proof counters */}
      <SocialProof />

      {/* Specialties grid */}
      <section id="especialidades" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-medical-blue font-semibold text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Nuestros Servicios
            </span>
            <h2 className="section-title">Especialidades Médicas</h2>
            <p className="section-subtitle text-center mx-auto">
              Atención integral para toda la familia con profesionales certificados y equipos modernos.
            </p>
          </div>
          <EspecialidadesGrid />
        </div>
      </section>

      {/* Why us section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-medical-blue font-semibold text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
                ¿Por qué elegirnos?
              </span>
              <h2 className="section-title">Comprometidos con tu salud y bienestar</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En el Centro Médico Dental Peña nos dedicamos a brindar atención médica de calidad con un enfoque humano y personalizado. Nuestro equipo de especialistas cuenta con años de experiencia y se mantiene constantemente actualizado.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: '🏥',
                    title: 'Instalaciones Modernas',
                    desc: 'Contamos con equipos de última tecnología para diagnóstico y tratamiento.',
                  },
                  {
                    icon: '👨‍⚕️',
                    title: 'Especialistas Certificados',
                    desc: 'Todos nuestros profesionales están colegiados y en constante actualización.',
                  },
                  {
                    icon: '💙',
                    title: 'Atención Personalizada',
                    desc: 'Tratamos a cada paciente de manera única, con calidez y respeto.',
                  },
                  {
                    icon: '📍',
                    title: 'Ubicación Accesible',
                    desc: 'Fácil acceso en el corazón del Rímac, cerca de transporte público.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-600 text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-medical-blue mb-6 text-center">Reserva tu cita</h3>
                <div className="space-y-4">
                  <a
                    href="/contacto"
                    className="w-full btn-blue flex items-center justify-center gap-3 text-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Reservar por formulario
                  </a>
                  <a
                    href="https://wa.me/51931876343?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20el%20Centro%20M%C3%A9dico%20Dental%20Pe%C3%B1a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-health-green text-white font-semibold text-lg rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg min-h-[52px]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Reservar por WhatsApp
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-center text-gray-500 text-sm mb-3">Llámenos directamente</p>
                  <a href="tel:+51931876343" className="flex items-center justify-center gap-2 text-medical-blue font-bold text-xl hover:text-blue-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +51 931 876 343
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-medical-blue font-semibold text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Ubicación
            </span>
            <h2 className="section-title">¿Cómo llegarnos?</h2>
            <p className="section-subtitle text-center mx-auto">
              Estamos ubicados en el distrito de Rímac, Lima. Fácil acceso en transporte público.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="space-y-5">
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📍</span>
                  <h3 className="font-bold text-gray-900 text-lg">Dirección</h3>
                </div>
                <p className="text-gray-600 text-base">Av. Carlos Valderrama 469, Urb. El Bosque, Rímac, Lima 15096</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🕐</span>
                  <h3 className="font-bold text-gray-900 text-lg">Horarios</h3>
                </div>
                <div className="space-y-1 text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lun - Sáb</span>
                    <span className="font-medium text-gray-800">8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Domingo</span>
                    <span className="font-medium text-gray-800">8:00 - 12:00</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🚌</span>
                  <h3 className="font-bold text-gray-900 text-lg">Cómo llegar</h3>
                </div>
                <p className="text-gray-600 text-base">Cercano a los principales paraderos del Rímac. A 5 minutos del Puente del Ejército.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu salud es nuestra prioridad
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            No esperes más para cuidar tu bienestar. Agenda tu cita hoy y recibe atención médica de calidad cerca de ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary text-lg px-10 py-4">
              Reservar Cita Ahora
            </a>
            <a href="/nosotros" className="btn-outline text-lg px-10 py-4">
              Conocer Nuestro Equipo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
