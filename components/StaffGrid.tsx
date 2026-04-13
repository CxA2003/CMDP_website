import Link from 'next/link'
import staffData from '@/data/staff.json'

interface StaffMember {
  id: number
  nombre: string
  especialidad: string
  cmp: string
  foto: string
  horario: string
  descripcion: string
}

const especialidadSlug: Record<string, string> = {
  'Odontología': 'odontologia',
  'Medicina General': 'medicina-general',
  'Terapia Física': 'terapia-fisica',
  'Nutrición': 'nutricion',
  'Psicología': 'psicologia',
}

const especialidadColor: Record<string, string> = {
  Odontología: 'bg-blue-100 text-medical-blue',
  'Medicina General': 'bg-cyan-100 text-cyan-700',
  'Terapia Física': 'bg-orange-100 text-orange-700',
  Nutrición: 'bg-green-100 text-green-700',
  Psicología: 'bg-purple-100 text-purple-700',
}

const especialidadIcon: Record<string, string> = {
  Odontología: '🦷',
  'Medicina General': '🩺',
  'Terapia Física': '🏃',
  Nutrición: '🥗',
  Psicología: '🧠',
}

export default function StaffGrid() {
  const staff = staffData as StaffMember[]

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Equipo de especialistas"
    >
      {staff.map((member) => (
        <div
          key={member.id}
          role="listitem"
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-medical-blue/20 flex flex-col"
        >
          {/* Photo placeholder */}
          <div className="relative h-52 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
            {member.foto ? (
              // When real photo is provided, use next/image
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${member.foto})` }}
                role="img"
                aria-label={`Foto de ${member.nombre}`}
              />
            ) : (
              // Placeholder avatar
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center shadow-inner">
                  <svg
                    className="w-14 h-14 text-medical-blue/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <span className="text-4xl" aria-hidden="true">
                  {especialidadIcon[member.especialidad] || '👨‍⚕️'}
                </span>
              </div>
            )}

            {/* Specialty badge overlay */}
            <div className="absolute top-4 right-4">
              <span
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold ${
                  especialidadColor[member.especialidad] || 'bg-gray-100 text-gray-700'
                }`}
              >
                <span aria-hidden="true">{especialidadIcon[member.especialidad]}</span>
                {member.especialidad}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-medical-blue transition-colors">
              {member.nombre}
            </h3>

            {member.cmp && (
              <p className="text-sm text-gray-500 mb-3 font-medium">
                {member.especialidad === 'Odontología' ? 'COP' : 'CMP'}: {member.cmp}
              </p>
            )}

            <p className="text-gray-600 text-base leading-relaxed mb-5 flex-grow">{member.descripcion}</p>

            {/* Schedule */}
            <div className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3">
              <svg
                className="w-5 h-5 text-medical-blue flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Horario</p>
                {member.horario.split('|').map((slot, i) => (
                  <p key={i} className="text-base text-gray-700 font-medium">{slot.trim()}</p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/51931876343?text=${encodeURIComponent(`Hola, me gustaría reservar una cita de ${member.especialidad} con ${member.nombre}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-health-green text-white font-semibold text-base rounded-xl hover:bg-green-600 transition-colors min-h-[48px]"
              aria-label={`Reservar cita con ${member.nombre} por WhatsApp`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar por WhatsApp
            </a>
            <Link
              href={`/contacto?especialidad=${especialidadSlug[member.especialidad] || ''}&doctor=${encodeURIComponent(member.nombre)}`}
              className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 border border-gray-200 text-gray-600 font-medium text-sm rounded-xl hover:border-medical-blue hover:text-medical-blue transition-colors"
              aria-label={`Reservar cita con ${member.nombre} por formulario`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Reservar por formulario
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
