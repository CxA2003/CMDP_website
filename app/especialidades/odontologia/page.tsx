import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Odontología | Centro Médico Dental Peña - Rímac, Lima',
  description:
    'Servicio de Odontología en el Centro Médico Dental Peña, Rímac, Lima. Limpieza dental, ortodoncia, implantes, blanqueamiento y más. Especialistas certificados.',
}

const servicios = [
  {
    icon: '🦷',
    title: 'Limpieza Dental Profesional',
    desc: 'Eliminación de placa bacteriana y sarro para mantener tus dientes sanos y brillantes.',
  },
  {
    icon: '😁',
    title: 'Blanqueamiento Dental',
    desc: 'Recupera el color natural de tus dientes con técnicas seguras y efectivas.',
  },
  {
    icon: '🔧',
    title: 'Restauraciones y Empastes estéticos',
    desc: 'Reparación de caries y daños dentales con materiales estéticos de alta calidad.',
  },
  {
    icon: '👑',
    title: 'Coronas y Puentes cerámicos libre de metal',
    desc: 'Restauración de dientes dañados o reemplazo de dientes perdidos con cerámica libre de metal.',
  },
  {
    icon: '📐',
    title: 'Ortodoncia fija y removible',
    desc: 'Corrección de la posición de los dientes con brackets fijos o alineadores removibles.',
  },
  {
    icon: '🏗️',
    title: 'Implantes Dentales',
    desc: 'Solución permanente y natural para el reemplazo de dientes perdidos.',
  },
  {
    icon: '🩺',
    title: 'Endodoncia',
    desc: 'Tratamiento del nervio dental para salvar dientes con infección profunda.',
  },
  {
    icon: '👶',
    title: 'Odontología Pediátrica',
    desc: 'Atención especializada y amigable para niños desde los primeros dientes.',
  },
]

export default function OdontologiaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-medical-blue to-blue-800 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-base leading-normal">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors no-underline">Inicio</Link>
            <span className="text-blue-300" aria-hidden="true">/</span>
            <span className="text-white font-medium">Odontología</span>
          </nav>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
              🦷
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Odontología</h1>
              <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
                Cuidamos la salud de tu boca con los más altos estándares de calidad. Nuestros odontólogos certificados usan tecnología moderna para brindarte la mejor atención dental en Rímac, Lima.
              </p>
              <p className="text-lg text-blue-200 max-w-3xl leading-relaxed mt-3 italic">
                "Cuidamos tu salud bucal de manera integral, con los más altos estándares de calidad, profesionalismo y dedicación en cada consulta."
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2 text-white text-sm font-medium">
                🕐 Lun - Sáb: 8:00 - 19:00 &nbsp;|&nbsp; Dom: 8:00 - 12:00
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Nuestros Servicios de Odontología</h2>
            <p className="section-subtitle text-center mx-auto">
              Atención dental integral para toda la familia, desde niños hasta adultos mayores.
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
            <h2 className="text-2xl font-bold text-medical-blue mb-6">¿Por qué elegir nuestra Odontología?</h2>
            <ul className="space-y-4">
              {[
                'Odontólogos con más de 10 años de experiencia y colegiados en el COP',
                'Equipos de rayos X digitales con mínima radiación',
                'Materiales certificados de primera calidad',
                'Atención para toda la familia: niños, adultos y adultos mayores',
                'Presupuestos sin compromiso y planes de pago accesibles',
                'Instalaciones esterilizadas con los más altos estándares de higiene',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-health-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Agenda tu Consulta Dental</h2>
          <p className="text-blue-100 text-lg mb-8">Evaluación inicial sin costo. Reserva tu cita hoy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?especialidad=odontologia" className="btn-primary">
              Reservar Cita
            </Link>
            <a
              href="https://wa.me/51931876343?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20de%20Odontolog%C3%ADa"
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
