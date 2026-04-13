import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-medical-blue via-blue-700 to-blue-900"
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-health-green/10 rounded-full" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-400/10 rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 bg-health-green rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-white font-medium text-sm tracking-wide">
                Rímac, Lima — Atendiendo desde 2000
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">25 años</span>
              <span className="block text-health-green">cuidando</span>
              <span className="block">al Rímac</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Atención médica y dental de calidad para toda tu familia. Especialistas comprometidos con tu bienestar en el corazón del Rímac.
            </p>

            {/* Specialties badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { label: 'Odontología', icon: '🦷' },
                { label: 'Medicina', icon: '🩺' },
                { label: 'Terapia Física', icon: '🏃' },
                { label: 'Nutrición', icon: '🥗' },
                { label: 'Psicología', icon: '🧠' },
              ].map((spec) => (
                <span
                  key={spec.label}
                  className="inline-flex items-center gap-1.5 bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20"
                >
                  <span aria-hidden="true">{spec.icon}</span>
                  {spec.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-health-green text-white font-bold text-xl rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-0.5 min-h-[60px]"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Reservar Cita
              </Link>
              <Link
                href="/especialidades/odontologia"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-white/70 text-white font-bold text-xl rounded-2xl hover:bg-white hover:text-medical-blue transition-all duration-300 min-h-[60px]"
              >
                Conocer Especialidades
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: '🏆',
                  stat: '25+',
                  label: 'Años de experiencia',
                  color: 'from-yellow-400/20 to-orange-400/10',
                },
                {
                  icon: '👨‍👩‍👧‍👦',
                  stat: 'Miles',
                  label: 'Pacientes atendidos',
                  color: 'from-green-400/20 to-teal-400/10',
                },
                {
                  icon: '🔬',
                  stat: '5',
                  label: 'Especialidades médicas',
                  color: 'from-blue-400/20 to-indigo-400/10',
                },
                {
                  icon: '⭐',
                  stat: '100%',
                  label: 'Compromiso con tu salud',
                  color: 'from-purple-400/20 to-pink-400/10',
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`bg-gradient-to-br ${card.color} backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center text-white`}
                >
                  <div className="text-4xl mb-3" aria-hidden="true">{card.icon}</div>
                  <div className="text-3xl font-bold mb-1">{card.stat}</div>
                  <div className="text-blue-100 text-sm font-medium">{card.label}</div>
                </div>
              ))}
            </div>

            {/* Quick contact */}
            <div className="mt-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <p className="text-white/80 text-sm mb-3 font-medium">Contáctenos directamente</p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+51931876343"
                  className="flex items-center gap-3 text-white hover:text-health-green transition-colors"
                >
                  <svg className="w-5 h-5 text-health-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold text-lg">+51 931 876 343</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-5 h-5 text-health-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-base">Av. Carlos Valderrama 469, Urb. El Bosque, Rímac, Lima</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Deslizar</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  )
}
