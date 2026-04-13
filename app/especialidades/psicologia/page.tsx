import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Psicología | Centro Médico Dental Peña - Rímac, Lima',
  description:
    'Servicio de Psicología en el Centro Médico Dental Peña, Rímac, Lima. Terapia individual, familiar e infantil. Atención de ansiedad, depresión, estrés y más.',
}

const servicios = [
  {
    icon: '🧠',
    title: 'Terapia Individual',
    desc: 'Sesiones personalizadas para el tratamiento de ansiedad, depresión, estrés y más.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Terapia Familiar',
    desc: 'Fortalecemos los vínculos familiares y resolvemos conflictos con enfoque sistémico.',
  },
  {
    icon: '👫',
    title: 'Terapia de Pareja',
    desc: 'Mejoramos la comunicación y resolvemos conflictos en la relación de pareja.',
  },
  {
    icon: '👶',
    title: 'Psicología Infantil',
    desc: 'Atención especializada para niños con dificultades emocionales, conductuales y de aprendizaje.',
  },
  {
    icon: '😰',
    title: 'Tratamiento de Ansiedad',
    desc: 'Técnicas cognitivo-conductuales para el manejo de ataques de pánico y ansiedad generalizada.',
  },
  {
    icon: '😔',
    title: 'Tratamiento de Depresión',
    desc: 'Intervención psicológica especializada para la depresión leve, moderada y situacional.',
  },
  {
    icon: '😴',
    title: 'Trastornos del Sueño',
    desc: 'Diagnóstico y tratamiento del insomnio y otros problemas relacionados con el sueño.',
  },
  {
    icon: '💼',
    title: 'Estrés Laboral y Burnout',
    desc: 'Herramientas para manejar el agotamiento profesional y mejorar tu bienestar laboral.',
  },
  {
    icon: '🗣️',
    title: 'Terapia de Lenguaje',
    desc: 'Evaluación y tratamiento de trastornos del habla, lenguaje y comunicación en niños y adultos.',
  },
]

export default function PsicologiaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-medical-blue to-blue-800 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-base leading-normal">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors no-underline">Inicio</Link>
            <span className="text-blue-300" aria-hidden="true">/</span>
            <span className="text-white font-medium">Psicología</span>
          </nav>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
              🧠
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Psicología</h1>
              <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
                Tu salud mental importa tanto como tu salud física. Nuestros psicólogos certificados te acompañan con confidencialidad, empatía y técnicas basadas en evidencia para mejorar tu bienestar emocional.
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
            <h2 className="section-title">Nuestros Servicios de Psicología</h2>
            <p className="section-subtitle text-center mx-auto">
              Atención psicológica integral para el bienestar emocional de toda la familia.
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

      <section className="py-16 bg-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold text-medical-blue mb-6 text-center">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: '¿Mis sesiones son completamente confidenciales?',
                  a: 'Sí, toda información compartida en sesión es estrictamente confidencial. Solo se rompe la confidencialidad en casos de riesgo para la vida del paciente o de terceros, conforme a la ética profesional.',
                },
                {
                  q: '¿Cuántas sesiones necesitaré?',
                  a: 'Depende de cada persona y su situación. En la primera consulta evaluamos juntos el proceso y establecemos un plan de trabajo con objetivos claros.',
                },
                {
                  q: '¿Se puede asistir sin haber sido diagnosticado?',
                  a: 'Absolutamente. No es necesario tener un diagnóstico previo. Si sientes que necesitas apoyo emocional o simplemente quieres mejorar tu bienestar, puedes consultar.',
                },
                {
                  q: '¿Atienden a niños y adolescentes?',
                  a: 'Sí, contamos con psicólogos especializados en psicología infantil y adolescente, con enfoques lúdicos y adaptados a cada etapa del desarrollo.',
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pide tu Primera Consulta Psicológica</h2>
          <p className="text-blue-100 text-lg mb-8">El primer paso hacia el bienestar emocional es pedir ayuda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?especialidad=psicologia" className="btn-primary">
              Reservar Cita
            </Link>
            <a
              href="https://wa.me/51931876343?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20de%20Psicolog%C3%ADa"
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
