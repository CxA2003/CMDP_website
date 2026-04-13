import type { Metadata } from 'next'
import StaffGrid from '@/components/StaffGrid'

export const metadata: Metadata = {
  title: 'Nosotros | Centro Médico Dental Peña',
  description:
    'Conoce la historia del Centro Médico Dental Peña en Rímac, Lima. Más de 25 años de trayectoria, nuestra misión, visión y el equipo de especialistas que cuida tu salud.',
}

export default function NosotrosPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-medical-blue to-blue-800 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white font-semibold text-sm px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
              Quiénes Somos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sobre el Centro Médico Dental Peña
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Más de 25 años comprometidos con la salud y el bienestar de los vecinos del Rímac y Lima norte.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-medical-blue font-semibold text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
                Nuestra Historia
              </span>
              <h2 className="section-title">25 años cuidando al Rímac</h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  El Centro Médico Dental Peña nació el 15 de enero del año 2000 con la visión de brindar atención médica y dental integral de calidad al alcance de todos en el distrito de Rímac. Fundado por las Dras. Susana y Veronika Peña Goya y el Dr. Carlos Tuesta Del Castillo, con la firme convicción de que la salud es un derecho, no un privilegio.
                </p>
                <p>
                  Desde nuestros inicios en el corazón del Rímac, hemos crecido hasta convertirnos en un centro de referencia en la zona norte de Lima, ofreciendo especialidades médicas y dentales bajo un mismo techo con tecnología moderna y profesionales altamente capacitados.
                </p>
                <p>
                  A lo largo de estos 25 años, hemos atendido a miles de familias del Rímac y distritos vecinos, construyendo lazos de confianza que trascienden la simple relación médico-paciente. Para nosotros, cada persona que cruza nuestra puerta es parte de la familia Peña.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: '25+', label: 'Años de experiencia', color: 'bg-blue-50 border-blue-200' },
                { num: '5', label: 'Especialidades médicas', color: 'bg-green-50 border-green-200' },
                { num: 'Miles', label: 'de pacientes atendidos', color: 'bg-blue-50 border-blue-200' },
                { num: '100%', label: 'Compromiso con tu salud', color: 'bg-green-50 border-green-200' },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.color} border-2 rounded-2xl p-6 text-center`}>
                  <div className="text-3xl font-bold text-medical-blue mb-2">{stat.num}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestra Trayectoria</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                year: '2000',
                title: 'Fundación del Centro',
                desc: 'El 15 de enero del 2000, las Dras. Susana y Veronika Peña Goya junto al Dr. Carlos Tuesta Del Castillo fundan el Centro Médico Dental Peña en el Rímac, con la misión de brindar atención médica y dental accesible y de calidad.',
              },
              {
                year: '2021',
                title: 'Terapia Física',
                desc: 'El 1 de octubre del 2021 se incorpora el servicio de Terapia Física, ampliando la oferta de atención integral para la rehabilitación y bienestar físico de nuestros pacientes.',
              },
              {
                year: '2022',
                title: 'Laboratorio Clínico',
                desc: 'El 30 de enero del 2022 inauguramos nuestro servicio de Laboratorio Clínico, brindando análisis confiables y oportunos para apoyar el diagnóstico médico.',
              },
              {
                year: '2023',
                title: 'Nutrición y Psicología',
                desc: 'El 17 de octubre del 2023 completamos nuestro enfoque de salud integral incorporando los servicios de Nutrición y Psicología, atendiendo la salud de manera holística.',
              },
              {
                year: '2026',
                title: 'Atención a Domicilio',
                desc: 'A partir del 1 de abril del 2026 iniciamos el servicio de atención médica y odontológica a domicilio, llevando la salud directamente a los hogares del Rímac y distritos vecinos.',
              },
            ].map((item, index) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.year}
                  </div>
                  {index < 4 && <div className="w-0.5 h-16 bg-blue-200 mt-2" />}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 -mt-2">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mision y Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Misión y Visión</h2>
            <p className="section-subtitle text-center mx-auto">
              Los principios que guían cada uno de nuestros actos y decisiones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-medical-blue to-blue-700 rounded-3xl p-10 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Brindar atención médica y dental integral de alta calidad, con un enfoque humano, ético y accesible, contribuyendo al bienestar y la salud de cada paciente y su familia en el distrito de Rímac y Lima norte.
              </p>
            </div>
            <div className="bg-gradient-to-br from-health-green to-green-700 rounded-3xl p-10 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-green-100 text-lg leading-relaxed">
                Ser el centro médico-dental de referencia en el Rímac y Lima norte, reconocido por la excelencia en la atención al paciente, la formación continua de nuestros profesionales y el uso de tecnología de vanguardia al servicio de la salud.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-gray-50 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-medical-blue mb-6 text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🤝', title: 'Compromiso', desc: 'Con la salud y bienestar de cada paciente' },
                { icon: '⚖️', title: 'Ética', desc: 'Actuamos con integridad y transparencia' },
                { icon: '💡', title: 'Innovación', desc: 'Tecnología moderna al servicio de la salud' },
                { icon: '❤️', title: 'Calidez', desc: 'Trato humano y cercano en todo momento' },
              ].map((val) => (
                <div key={val.title} className="text-center">
                  <div className="text-4xl mb-3">{val.icon}</div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{val.title}</h4>
                  <p className="text-gray-500 text-sm">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-medical-blue font-semibold text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Nuestro Equipo
            </span>
            <h2 className="section-title">Conoce a Nuestros Especialistas</h2>
            <p className="section-subtitle text-center mx-auto">
              Profesionales certificados y comprometidos con tu salud y bienestar.
            </p>
          </div>
          <StaffGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para conocernos?</h2>
          <p className="text-blue-100 text-lg mb-8">Agenda tu cita y conoce a nuestro equipo en persona.</p>
          <a href="/contacto" className="btn-primary">
            Reservar mi Cita
          </a>
        </div>
      </section>
    </>
  )
}
