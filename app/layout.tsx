import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import CopyableText from '@/components/CopyableText'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Centro Médico Dental Peña | Rímac, Lima',
    template: '%s | Centro Médico Dental Peña',
  },
  description:
    'Centro Médico Dental Peña en Rímac, Lima. Más de 25 años brindando atención médica y dental de calidad. Especialidades: Odontología, Medicina General, Terapia Física, Nutrición y Psicología.',
  keywords: [
    'centro médico Rímac',
    'dental Rímac Lima',
    'odontología Rímac',
    'medicina general Rímac',
    'terapia física Lima',
    'nutrición Lima',
    'psicología Rímac',
    'Centro Médico Dental Peña',
    'clínica Rímac',
    'médico Rímac Lima',
  ],
  authors: [{ name: 'Centro Médico Dental Peña' }],
  creator: 'Centro Médico Dental Peña',
  publisher: 'Centro Médico Dental Peña',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://centromedicaldentalpena.com'),
  openGraph: {
    title: 'Centro Médico Dental Peña | Rímac, Lima',
    description:
      'Más de 25 años brindando atención médica y dental de calidad en el distrito de Rímac, Lima. Odontología, Medicina General, Terapia Física, Nutrición y Psicología.',
    url: 'https://centromedicaldentalpena.com',
    siteName: 'Centro Médico Dental Peña',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Centro Médico Dental Peña - Rímac, Lima',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro Médico Dental Peña | Rímac, Lima',
    description:
      'Más de 25 años brindando atención médica y dental de calidad en Rímac, Lima.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0056b3" />
        <meta name="geo.region" content="PE-LIM" />
        <meta name="geo.placename" content="Rímac, Lima, Perú" />
        <meta name="geo.position" content="-12.017877;-77.032592" />
        <meta name="ICBM" content="-12.017877, -77.032592" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Brand */}
              <div>
                <div className="mb-4">
                  <img
                    src="/logo.svg"
                    alt="Centro Médico Dental Peña"
                    className="h-24 w-auto"
                    width={96}
                    height={96}
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-400 text-base leading-relaxed">
                  Más de 25 años brindando atención médica y dental de calidad en el corazón del Rímac, Lima.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-2 group">
                    <svg className="w-5 h-5 text-health-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <CopyableText text="Av. Carlos Valderrama 469, Urb. El Bosque, Rímac, Lima 15096" />
                  </li>
                  <li className="flex items-start gap-2 group">
                    <svg className="w-5 h-5 text-health-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <CopyableText text="+51 931 876 343" />
                  </li>
                  <li className="flex items-start gap-2 group">
                    <svg className="w-5 h-5 text-health-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <CopyableText text="odontomedicperu@gmail.com" className="break-all" />
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Horario de Atención</h3>
                <ul className="space-y-2 text-base">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Lunes - Viernes</span>
                    <span className="text-white font-medium">8:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sábado</span>
                    <span className="text-white font-medium">8:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Domingo</span>
                    <span className="text-white font-medium">8:00 - 12:00</span>
                  </li>
                </ul>
                <div className="mt-5 p-3 bg-health-green/20 rounded-lg border border-health-green/30">
                  <p className="text-health-green font-semibold text-sm">Contáctenos: +51 931 876 343</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center">
                © {new Date().getFullYear()} Centro Médico Dental Peña. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm">
                Rímac, Lima, Perú
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
