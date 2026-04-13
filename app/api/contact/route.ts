import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  nombre: string
  telefono: string
  correo: string
  especialidad: string
  mensaje: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export async function POST(request: NextRequest) {
  try {
    // ── CSRF origin check (S4) ──────────────
    const origin = request.headers.get('origin') || ''
    const referer = request.headers.get('referer') || ''
    const host = request.headers.get('host') || ''

    // In production, verify the request comes from our own domain
    const isLocalhost = host.startsWith('localhost') || host.startsWith('127.0.0.1')
    if (!isLocalhost) {
      const allowedOrigin = `https://${host}`
      if (origin && origin !== allowedOrigin) {
        return NextResponse.json(
          { success: false, error: 'Solicitud no autorizada.' },
          { status: 403 }
        )
      }
      if (!origin && referer && !referer.startsWith(allowedOrigin)) {
        return NextResponse.json(
          { success: false, error: 'Solicitud no autorizada.' },
          { status: 403 }
        )
      }
    }

    const body: ContactFormData = await request.json()

    const { nombre, telefono, correo, especialidad, mensaje } = body

    // Validation
    if (!nombre || nombre.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Por favor ingrese su nombre completo.' },
        { status: 400 }
      )
    }

    if (!telefono || !validatePhone(telefono)) {
      return NextResponse.json(
        { success: false, error: 'Por favor ingrese un número de teléfono válido.' },
        { status: 400 }
      )
    }

    if (!correo || !validateEmail(correo)) {
      return NextResponse.json(
        { success: false, error: 'Por favor ingrese un correo electrónico válido.' },
        { status: 400 }
      )
    }

    const especialidadesValidas = [
      'odontologia',
      'medicina-general',
      'terapia-fisica',
      'nutricion',
      'psicologia',
    ]
    if (!especialidad || !especialidadesValidas.includes(especialidad)) {
      return NextResponse.json(
        { success: false, error: 'Por favor seleccione una especialidad.' },
        { status: 400 }
      )
    }

    if (!mensaje || mensaje.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Por favor ingrese un mensaje de al menos 10 caracteres.' },
        { status: 400 }
      )
    }

    const fecha = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })

    const especialidadLabels: Record<string, string> = {
      'odontologia': 'Odontología',
      'medicina-general': 'Medicina General',
      'terapia-fisica': 'Terapia Física',
      'nutricion': 'Nutrición',
      'psicologia': 'Psicología',
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 8px;">
          <div style="background: #0056b3; padding: 16px 24px; border-radius: 6px 6px 0 0;">
            <h2 style="color: white; margin: 0;">Nueva Solicitud de Cita</h2>
            <p style="color: #cde; margin: 4px 0 0;">Centro Médico Dental Peña</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 6px 6px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #555; width: 140px;"><strong>Fecha:</strong></td><td style="padding: 8px 0;">${fecha}</td></tr>
              <tr style="background:#f5f5f5;"><td style="padding: 8px 4px; color: #555;"><strong>Nombre:</strong></td><td style="padding: 8px 4px;">${nombre.trim()}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Teléfono:</strong></td><td style="padding: 8px 0;">${telefono.trim()}</td></tr>
              <tr style="background:#f5f5f5;"><td style="padding: 8px 4px; color: #555;"><strong>Correo:</strong></td><td style="padding: 8px 4px;">${correo.trim()}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Especialidad:</strong></td><td style="padding: 8px 0;">${especialidadLabels[especialidad]}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 12px; background: #f0f4ff; border-left: 4px solid #0056b3; border-radius: 4px;">
              <strong style="color: #555;">Mensaje:</strong>
              <p style="margin: 8px 0 0; white-space: pre-wrap;">${mensaje.trim()}</p>
            </div>
          </div>
        </div>
      `

    await transporter.sendMail({
      from: `"Web Centro Médico Dental Peña" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: correo.trim(),
      subject: `Nueva cita: ${nombre.trim()} — ${especialidadLabels[especialidad]}`,
      html: htmlBody,
    })

    return NextResponse.json(
      {
        success: true,
        message:
          '¡Gracias por contactarnos! Hemos recibido su solicitud y nos pondremos en contacto con usted a la brevedad para confirmar su cita.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      {
        success: false,
        error:
          'Ocurrió un error al procesar su solicitud. Por favor intente nuevamente o contáctenos por WhatsApp.',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Endpoint disponible. Use POST para enviar formulario de contacto.' },
    { status: 200 }
  )
}


