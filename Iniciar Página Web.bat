@echo off
title Centro Médico Dental Peña - Página Web
echo.
echo  ==========================================
echo   Centro Médico Dental Peña - Página Web
echo  ==========================================
echo.

:: Crear carpeta public si no existe y copiar el logo
if not exist public mkdir public
if exist logo.svg (
  xcopy /y logo.svg public\ >nul 2>&1
  echo  Logo copiado a public/
)

:: Limpiar caché anterior para asegurar compilación limpia
if exist .next (
  echo  Limpiando caché anterior...
  rmdir /s /q .next
)

echo  Iniciando servidor de desarrollo...
echo  La página se abrirá en: http://localhost:3000
echo.

:: Abrir el navegador tras 6 segundos
start /b cmd /c "timeout /t 6 >nul && start http://localhost:3000"

:: Iniciar el servidor Next.js
npm run dev

pause
