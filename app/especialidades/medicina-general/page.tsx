import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicina General | Centro Médico Dental Peña - Rímac, Lima',
  description:
    'Servicio de Medicina General en el Centro Médico Dental Peña, Rímac, Lima. Consultas médicas, chequeos preventivos, atención de enfermedades agudas y crónicas.',
}

const servicios = [
  {
    icon: '🩺',
    title: 'Consulta Médica General',
    desc: 'Evaluación integral de tu estado de salud con diagnóstico y tratamiento personalizado.',
  },
  {
    icon: '🔬',
    title: 'Chequeo Preventivo',
    desc: 'Revisiones periódicas para detectar y prevenir enfermedades a tiempo.',
  },
  {
    icon: '💊',
    title: 'Manejo de Enfermedades Crónicas',
    desc: 'Control y seguimiento de diabetes, hipertensión, colesterol y otras enfermedades crónicas.',
  },
  {
    icon: '🤒',
    title: 'Atención de Urgencias Menores',
    desc: 'Atención inmediata para infecciones, fiebres, dolores y otras urgencias menores.',
  },
  {
    icon: '📋',
    title: 'Certificados Médicos',
    desc: 'Emisión de certificados médicos para trabajo, deporte y trámites oficiales.',
  },
  {
    icon: '💉',
    title: 'Vacunación',
    desc: 'Plan de vacunación completo para niños, adultos y adultos mayores.',
  },
  {
    icon: '🧪',
    title: 'Solicitud de Exámenes',
    desc: 'Pedido e interpretación de análisis de sangre, orina, rayos X y ecografías.',
  },
  {
    icon: '👴',
    title: 'Atención al Adulto Mayor',
    desc: 'Cuidado especializado con enfoque geriátrico para pacientes de la tercera edad.',
  },
]

export default function MedicinaGeneralPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-medical-blue to-blue-800 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-base leading-normal">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors no-underline">Inicio</Link>
            <span className="text-blue-300" aria-hidden="true">/</span>
            <span className="text-white font-medium">Medicina General</span>
          </nav>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
              🩺
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Medicina General</h1>
              <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
                Tu primera línea de atención médica. Nuestros médicos generales están capacitados para atender una amplia variedad de condiciones de salud, desde enfermedades comunes hasta el manejo de condiciones crónicas.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2 text-white text-sm font-medium">
                🕐 Lun - Vie: 14:30 - 19:00 &nbsp;|&nbsp; Sáb: 8:00 - 12:00 &nbsp;|&nbsp; Dom: Cerrado
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Nuestros Servicios de Medicina General</h2>
            <p className="section-subtitle text-center mx-auto">
              Atención médica completa y preventiva para mantener tu salud en óptimas condiciones.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold text-medical-blue mb-6">Información importante</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">¿Qué traer a tu consulta?</h3>
                <ul className="space-y-2">
                  {[
                    'DNI o documento de identidad',
                    'Historial médico previo (si lo tiene)',
                    'Lista de medicamentos actuales',
                    'Resultados de exámenes anteriores',
                    'Tarjeta de seguro (si aplica)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-health-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Condiciones que tratamos</h3>
                <ul className="space-y-2">
                  {[
                    'Infecciones respiratorias y gripe',
                    'Diabetes y control glucémico',
                    'Hipertensión arterial',
                    'Gastritis y problemas digestivos',
                    'Alergias e infecciones en general',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-medical-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Agenda tu Consulta Médica</h2>
          <p className="text-blue-100 text-lg mb-8">Tu salud no puede esperar. Reserva tu cita hoy mismo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?especialidad=medicina-general" className="btn-primary">
              Reservar Cita
            </Link>
            <a
              href="https://wa.me/51931876343?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20de%20Medicina%20General"
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
