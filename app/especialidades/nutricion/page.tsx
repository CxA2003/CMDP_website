import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nutrición | Centro Médico Dental Peña - Rímac, Lima',
  description:
    'Servicio de Nutrición y Dietética en el Centro Médico Dental Peña, Rímac, Lima. Planes nutricionales personalizados, control de peso, alimentación saludable para toda la familia.',
}

const servicios = [
  {
    icon: '🥗',
    title: 'Consulta Nutricional',
    desc: 'Evaluación completa de tu estado nutricional y hábitos alimenticios.',
  },
  {
    icon: '📊',
    title: 'Plan Alimentario Personalizado',
    desc: 'Dietas diseñadas según tus objetivos, preferencias y condiciones de salud.',
  },
  {
    icon: '⚖️',
    title: 'Control de Peso',
    desc: 'Programas para pérdida o ganancia de peso de forma saludable y sostenible.',
  },
  {
    icon: '🩸',
    title: 'Nutrición para Enfermedades Crónicas',
    desc: 'Alimentación terapéutica para diabetes, hipertensión, colesterol alto y más.',
  },
  {
    icon: '🤰',
    title: 'Nutrición Materno-Infantil',
    desc: 'Guía nutricional para embarazo, lactancia y alimentación del niño.',
  },
  {
    icon: '🏋️',
    title: 'Nutrición Deportiva',
    desc: 'Optimiza tu rendimiento atlético con planes de alimentación especializados.',
  },
  {
    icon: '👴',
    title: 'Nutrición del Adulto Mayor',
    desc: 'Planes adaptados a las necesidades nutricionales de la tercera edad.',
  },
  {
    icon: '🧬',
    title: 'Análisis de Composición Corporal',
    desc: 'Medición de masa grasa, masa muscular e hidratación con equipos modernos.',
  },
]

export default function NutricionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-medical-blue to-blue-800 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-base leading-normal">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors no-underline">Inicio</Link>
            <span className="text-blue-300" aria-hidden="true">/</span>
            <span className="text-white font-medium">Nutrición</span>
          </nav>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
              🥗
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nutrición</h1>
              <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
                Alimentarte bien es la base de tu bienestar. Nuestras nutricionistas certificadas te guiarán hacia una alimentación saludable y equilibrada, adaptada a tu estilo de vida y objetivos personales.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2 text-white text-sm font-medium">
                🕐 Sábado: 14:00 - 19:00
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Nuestros Servicios de Nutrición</h2>
            <p className="section-subtitle text-center mx-auto">
              Planes nutricionales personalizados para cada etapa de tu vida.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s) => (
              <div key={s.title} className="card specialty-card hover:border-2 hover:border-health-green border-2 border-transparent">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Objetivos claros',
                desc: 'Establecemos metas realistas y alcanzables adaptadas a tu situación personal.',
              },
              {
                icon: '📱',
                title: 'Seguimiento continuo',
                desc: 'Monitoreo periódico de tu progreso con ajustes en el plan cuando sea necesario.',
              },
              {
                icon: '🍳',
                title: 'Recetas prácticas',
                desc: 'Te enseñamos a preparar comidas saludables, deliciosas y fáciles de hacer.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Agenda tu Consulta Nutricional</h2>
          <p className="text-blue-100 text-lg mb-8">Da el primer paso hacia una alimentación saludable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?especialidad=nutricion" className="btn-primary">
              Reservar Cita
            </Link>
            <a
              href="https://wa.me/51931876343?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20de%20Nutrici%C3%B3n"
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
