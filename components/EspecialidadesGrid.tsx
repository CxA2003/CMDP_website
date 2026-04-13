import Link from 'next/link'

const especialidades = [
  {
    id: 'odontologia',
    title: 'Odontología',
    description:
      'Cuidado integral de tu salud bucal. Limpiezas, blanqueamientos, ortodoncia, implantes y más para toda la familia.',
    href: '/especialidades/odontologia',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9.5 2 7 4 7 6.5c0 1 .3 2 .8 2.8L7 15c0 2 1 4 2.5 4h1c.5 0 1-.3 1.3-.8L12 17l.2 1.2c.3.5.8.8 1.3.8h1C16 19 17 17 17 15l-.8-5.7c.5-.8.8-1.8.8-2.8C17 4 14.5 2 12 2z" />
      </svg>
    ),
    bgColor: 'bg-blue-50',
    iconColor: 'text-medical-blue',
    borderColor: 'hover:border-medical-blue',
    highlights: ['Limpieza dental', 'Ortodoncia', 'Implantes'],
  },
  {
    id: 'medicina-general',
    title: 'Medicina General',
    description:
      'Tu médico de cabecera para toda la familia. Consultas, chequeos preventivos y manejo de enfermedades.',
    href: '/especialidades/medicina-general',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    borderColor: 'hover:border-cyan-500',
    highlights: ['Chequeos preventivos', 'Enfermedades crónicas', 'Certificados médicos'],
  },
  {
    id: 'terapia-fisica',
    title: 'Terapia Física',
    description:
      'Recupera tu movilidad y alivia el dolor. Rehabilitación profesional para lesiones, cirugías y condiciones crónicas.',
    href: '/especialidades/terapia-fisica',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
    borderColor: 'hover:border-orange-400',
    highlights: ['Rehabilitación', 'Terapia manual', 'Electroterapia'],
  },
  {
    id: 'nutricion',
    title: 'Nutrición',
    description:
      'Planes alimentarios personalizados para alcanzar tu peso ideal y mejorar tu salud con una dieta equilibrada.',
    href: '/especialidades/nutricion',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    bgColor: 'bg-green-50',
    iconColor: 'text-health-green',
    borderColor: 'hover:border-health-green',
    highlights: ['Control de peso', 'Planes personalizados', 'Nutrición deportiva'],
  },
  {
    id: 'psicologia',
    title: 'Psicología',
    description:
      'Cuidamos tu salud mental con terapias individuales, familiares e infantiles. Tratamos ansiedad, depresión y más.',
    href: '/especialidades/psicologia',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-500',
    highlights: ['Terapia individual', 'Terapia familiar', 'Psicología infantil'],
  },
]

export default function EspecialidadesGrid() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
      role="list"
    >
      {especialidades.map((esp) => (
        <Link
          key={esp.id}
          href={esp.href}
          role="listitem"
          className={`group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent ${esp.borderColor} overflow-hidden specialty-card`}
          aria-label={`Ver especialidad: ${esp.title}`}
        >
          {/* Icon area */}
          <div className={`${esp.bgColor} p-6 flex items-center justify-center`}>
            <div className={`${esp.iconColor} transition-transform duration-300 group-hover:scale-110`}>
              {esp.icon}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-medical-blue transition-colors">
              {esp.title}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed mb-5 flex-1">{esp.description}</p>

            {/* Highlights */}
            <ul className="space-y-1.5 mb-5">
              {esp.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-health-green flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-1 text-medical-blue font-semibold text-base group-hover:gap-2 transition-all duration-200">
              Ver más
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
