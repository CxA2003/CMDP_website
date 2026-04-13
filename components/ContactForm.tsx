'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

interface FormData {
  nombre: string
  telefono: string
  correo: string
  especialidad: string
  doctor: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  telefono?: string
  correo?: string
  especialidad?: string
  mensaje?: string
}

const initialFormData: FormData = {
  nombre: '',
  telefono: '',
  correo: '',
  especialidad: '',
  doctor: '',
  mensaje: '',
}

const especialidades = [
  { value: 'odontologia', label: '🦷 Odontología' },
  { value: 'medicina-general', label: '🩺 Medicina General' },
  { value: 'terapia-fisica', label: '🏃 Terapia Física' },
  { value: 'nutricion', label: '🥗 Nutrición' },
  { value: 'psicologia', label: '🧠 Psicología' },
]

const doctoresPorEspecialidad: Record<string, { value: string; label: string }[]> = {
  'odontologia': [
    { value: 'Dra. Veronika Peña Goya', label: 'Dra. Veronika Peña Goya' },
    { value: 'Dr. Carlos Tuesta Del Castillo', label: 'Dr. Carlos Tuesta Del Castillo' },
  ],
  'medicina-general': [
    { value: 'Dra. Susana Peña Goya', label: 'Dra. Susana Peña Goya' },
  ],
  'terapia-fisica': [
    { value: 'Lic. José Asparrin Zavala', label: 'Lic. José Asparrin Zavala' },
  ],
  'nutricion': [
    { value: 'Lic. Kristel Giuliane Delly Urteaga', label: 'Lic. Kristel Delly Urteaga' },
  ],
  'psicologia': [
    { value: 'Lic. María Laura Corrales Martinez', label: 'Lic. María Laura Corrales Martinez' },
  ],
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}


const especialidadesValidas = ['odontologia', 'medicina-general', 'terapia-fisica', 'nutricion', 'psicologia']

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  // Pre-fill from URL params: /contacto?especialidad=odontologia&doctor=Dra.+Veronika
  useEffect(() => {
    const esp = searchParams.get('especialidad') || ''
    const doc = searchParams.get('doctor') || ''
    if (esp && especialidadesValidas.includes(esp)) {
      const availableDoctors = doctoresPorEspecialidad[esp] ?? []
      setFormData((prev) => ({
        ...prev,
        especialidad: esp,
        doctor: doc || (availableDoctors.length === 1 ? availableDoctors[0].value : ''),
      }))
    }
  }, [searchParams])

  const doctoresDisponibles = formData.especialidad
    ? doctoresPorEspecialidad[formData.especialidad] ?? []
    : []

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim() || formData.nombre.trim().length < 2) {
      newErrors.nombre = 'Por favor ingrese su nombre completo.'
    }

    if (!formData.telefono.trim() || !validatePhone(formData.telefono)) {
      newErrors.telefono = 'Ingrese un número de teléfono válido (ej: 999 999 999).'
    }

    if (!formData.correo.trim() || !validateEmail(formData.correo)) {
      newErrors.correo = 'Ingrese un correo electrónico válido.'
    }

    if (!formData.especialidad) {
      newErrors.especialidad = 'Por favor seleccione una especialidad.'
    }

    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // When specialty changes, reset the doctor selection
    if (name === 'especialidad') {
      const newDoctors = doctoresPorEspecialidad[value] ?? []
      setFormData((prev) => ({
        ...prev,
        especialidad: value,
        doctor: newDoctors.length === 1 ? newDoctors[0].value : '',
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')
    setServerMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setServerMessage(data.message)
        setFormData(initialFormData)
        setErrors({})
      } else {
        setStatus('error')
        setServerMessage(data.error || 'Ocurrió un error. Por favor intente nuevamente.')
      }
    } catch {
      setStatus('error')
      setServerMessage(
        'No se pudo conectar con el servidor. Por favor contáctenos por WhatsApp o teléfono.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div
        className="text-center py-10"
        role="alert"
        aria-live="polite"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-health-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud enviada!</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-3 max-w-md mx-auto">
          {serverMessage}
        </p>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
          Recibirá un correo de confirmación con los detalles de su cita.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setStatus('idle')}
            className="btn-blue"
          >
            Enviar otro mensaje
          </button>
          <a
            href="https://wa.me/51931876343?text=Hola%2C%20ya%20envié%20el%20formulario%20y%20quería%20confirmar%20mi%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-health-green text-white font-semibold text-lg rounded-xl hover:bg-green-600 transition-colors min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirmar por WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de solicitud de cita"
    >
      {/* Error banner */}
      {status === 'error' && (
        <div
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
          role="alert"
          aria-live="assertive"
        >
          <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-700 text-base">{serverMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="md:col-span-2">
          <label htmlFor="nombre" className="form-label">
            Nombre completo <span className="text-red-500" aria-label="requerido">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: María García López"
            className={`form-input ${errors.nombre ? 'border-red-400 bg-red-50' : ''}`}
            aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            aria-invalid={!!errors.nombre}
            required
          />
          {errors.nombre && (
            <p id="nombre-error" className="mt-2 text-red-600 text-sm flex items-center gap-1" role="alert">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.nombre}
            </p>
          )}
        </div>

        {/* Telefono */}
        <div>
          <label htmlFor="telefono" className="form-label">
            Teléfono <span className="text-red-500" aria-label="requerido">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="999 999 999"
            className={`form-input ${errors.telefono ? 'border-red-400 bg-red-50' : ''}`}
            aria-describedby={errors.telefono ? 'telefono-error' : undefined}
            aria-invalid={!!errors.telefono}
            required
          />
          {errors.telefono && (
            <p id="telefono-error" className="mt-2 text-red-600 text-sm flex items-center gap-1" role="alert">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.telefono}
            </p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className="form-label">
            Correo electrónico <span className="text-red-500" aria-label="requerido">*</span>
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            className={`form-input ${errors.correo ? 'border-red-400 bg-red-50' : ''}`}
            aria-describedby={errors.correo ? 'correo-error' : undefined}
            aria-invalid={!!errors.correo}
            required
          />
          {errors.correo && (
            <p id="correo-error" className="mt-2 text-red-600 text-sm flex items-center gap-1" role="alert">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.correo}
            </p>
          )}
        </div>

        {/* Especialidad */}
        <div>
          <label htmlFor="especialidad" className="form-label">
            Especialidad <span className="text-red-500" aria-label="requerida">*</span>
          </label>
          <select
            id="especialidad"
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            className={`form-input ${errors.especialidad ? 'border-red-400 bg-red-50' : ''}`}
            aria-describedby={errors.especialidad ? 'especialidad-error' : undefined}
            aria-invalid={!!errors.especialidad}
            required
          >
            <option value="" disabled>Seleccione una especialidad</option>
            {especialidades.map((esp) => (
              <option key={esp.value} value={esp.value}>
                {esp.label}
              </option>
            ))}
          </select>
          {errors.especialidad && (
            <p id="especialidad-error" className="mt-2 text-red-600 text-sm flex items-center gap-1" role="alert">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.especialidad}
            </p>
          )}
        </div>

        {/* Doctor (conditional, shown when specialty is selected) */}
        {doctoresDisponibles.length > 0 && (
          <div>
            <label htmlFor="doctor" className="form-label">
              Doctor preferido
              {doctoresDisponibles.length === 1 && (
                <span className="ml-2 text-xs font-normal text-gray-400">(único disponible)</span>
              )}
            </label>
            {doctoresDisponibles.length === 1 ? (
              <input
                id="doctor"
                name="doctor"
                type="text"
                value={formData.doctor}
                readOnly
                className="form-input bg-gray-50 text-gray-600 cursor-default"
                aria-label="Doctor asignado automáticamente"
              />
            ) : (
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Sin preferencia</option>
                {doctoresDisponibles.map((doc) => (
                  <option key={doc.value} value={doc.value}>
                    {doc.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}


        {/* Mensaje */}
        <div className="md:col-span-2">
          <label htmlFor="mensaje" className="form-label">
            Mensaje <span className="text-red-500" aria-label="requerido">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntenos el motivo de su consulta, síntomas, o cualquier información que nos ayude a atenderle mejor..."
            className={`form-input resize-none ${errors.mensaje ? 'border-red-400 bg-red-50' : ''}`}
            aria-describedby={errors.mensaje ? 'mensaje-error' : 'mensaje-hint'}
            aria-invalid={!!errors.mensaje}
            required
          />
          {errors.mensaje ? (
            <p id="mensaje-error" className="mt-2 text-red-600 text-sm flex items-center gap-1" role="alert">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.mensaje}
            </p>
          ) : (
            <p id="mensaje-hint" className="mt-2 text-gray-400 text-sm">
              Mínimo 10 caracteres. Su información es confidencial.
            </p>
          )}
        </div>
      </div>


      {/* Privacy note */}
      <p className="mt-4 text-sm text-gray-500">
        <svg className="w-4 h-4 inline mr-1 text-health-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Sus datos son tratados con absoluta confidencialidad y nunca serán compartidos con terceros.
      </p>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-medical-blue text-white font-bold text-xl rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none transform hover:-translate-y-0.5 min-h-[60px]"
        aria-label={status === 'loading' ? 'Enviando su solicitud...' : 'Enviar solicitud de cita'}
      >
        {status === 'loading' ? (
          <>
            <svg
              className="w-6 h-6 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando solicitud...
          </>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Enviar Solicitud de Cita
          </>
        )}
      </button>

      <p className="mt-4 text-center text-gray-500 text-sm">
        O llámenos directamente al{' '}
        <a href="tel:+51931876343" className="text-medical-blue font-semibold hover:underline">
          +51 931 876 343
        </a>
      </p>
    </form>
  )
}
