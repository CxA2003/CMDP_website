import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terapia Física | Centro Médico Dental Peña - Rímac, Lima',
  description:
    'Servicio de Terapia Física y Rehabilitación en el Centro Médico Dental Peña, Rímac, Lima. Recuperación de lesiones, dolor crónico, rehabilitación post-operatoria.',
}

const servicios = [
  {
    icon: '🏃',
    title: 'Rehabilitación Física',
    desc: 'Recuperación integral tras lesiones musculoesqueléticas, fracturas y cirugías.',
  },
  {
    icon: '💪',
    title: 'Terapia Manual',
    desc: 'Técnicas manuales especializadas para aliviar el dolor y mejorar la movilidad.',
  },
  {
    icon: '⚡',
    title: 'Electroterapia',
    desc: 'Uso de corrientes eléctricas terapéuticas para reducir el dolor e inflamación.',
  },
  {
    icon: '🌡️',
    title: 'Termoterapia',
    desc: 'Aplicación de calor y frío para el tratamiento del dolor y la recuperación muscular.',
  },
  {
    icon: '🏊',
    title: 'Kinesiotaping',
    desc: 'Vendaje neuromuscular para soporte y rehabilitación de lesiones deportivas.',
  },
  {
    icon: '🧘',
    title: 'Ejercicio Terapéutico',
    desc: 'Programas personalizados de ejercicios para fortalecer y recuperar la función.',
  },
  {
    icon: '🦴',
    title: 'Fisioterapia Neurológica',
    desc: 'Rehabilitación para pacientes con secuelas de ACV, Parkinson y otras condiciones neurológicas.',
  },
  {
    icon: '👴',
    title: 'Fisioterapia Geriátrica',
    desc: 'Tratamiento especializado para adultos mayores: caídas, artrosis, osteoporosis.',
  },
]

export default function TerapiaFisicaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-medical-blue to-blue-800 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-base leading-normal">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors no-underline">Inicio</Link>
            <span className="text-blue-300" aria-hidden="true">/</span>
            <span className="text-white font-medium">Terapia Física</span>
          </nav>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
              🏃
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terapia Física</h1>
              <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
                Recupera tu movilidad y calidad de vida. Nuestros fisioterapeutas certificados diseñan programas personalizados para tu rehabilitación, combinando técnicas modernas con un trato humano y cálido.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2 text-white text-sm font-medium">
                🕐 Lun / Jue / Sáb: 9:00 - 13:00
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Nuestros Servicios de Terapia Física</h2>
            <p className="section-subtitle text-center mx-auto">
              Tratamientos especializados para recuperar tu función y bienestar físico.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s) => (
              <div key={s.title} className="card specialty-card hover:border-2 hover:border-medical-blue border-2 border-transparent">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-medical-blue mb-5">Condiciones que tratamos</h2>
              <ul className="space-y-3">
                {[
                  'Lumbago y dolor de espalda',
                  'Cervicalgia y torticolis',
                  'Lesiones deportivas',
                  'Tendinitis y bursitis',
                  'Post-operatorio de rodilla, cadera, hombro',
                  'Rehabilitación post-ACV',
                  'Artrosis y artritis',
                  'Fibromialgia',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-health-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-medical-blue rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-5">Proceso de atención</h2>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Evaluación inicial', desc: 'Diagnóstico completo de tu condición física y objetivos de recuperación.' },
                  { step: '2', title: 'Plan personalizado', desc: 'Diseñamos un programa de rehabilitación adaptado a tus necesidades.' },
                  { step: '3', title: 'Tratamiento', desc: 'Sesiones regulares con técnicas especializadas y seguimiento continuo.' },
                  { step: '4', title: 'Alta y prevención', desc: 'Ejercicios para casa y recomendaciones para evitar recaídas.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Agenda tu Sesión de Terapia Física</h2>
          <p className="text-blue-100 text-lg mb-8">Primera evaluación sin costo. Inicia tu recuperación hoy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?especialidad=terapia-fisica" className="btn-primary">
              Reservar Cita
            </Link>
            <a
              href="https://wa.me/51931876343?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20de%20Terapia%20F%C3%ADsica"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
