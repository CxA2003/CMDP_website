@echo off
title Centro Médico Dental Peña - Compilar Producción
echo.
echo  ==========================================
echo   Centro Médico Dental Peña - Producción
echo  ==========================================
echo.
echo  Este script preparará y ejecutará una versión idéntica a la que corre
echo  en el servidor de hosting (modo producción).
echo.

echo  Paso 1: Instalando dependencias (si es necesario)...
call npm install

echo.
echo  Paso 2: Compilando el proyecto (esto puede tardar unos segundos)...
call npm run build

echo.
echo  Paso 3: Iniciando servidor en modo producción...
echo  La página estará disponible en: http://localhost:3000
echo  Presiona Ctrl+C para detener el servidor cuando termines.
echo.

:: Abrir el navegador tras 3 segundos
start /b cmd /c "timeout /t 3 >nul && start http://localhost:3000"

:: Iniciar el servidor Next.js en producción
call npm start

pause
