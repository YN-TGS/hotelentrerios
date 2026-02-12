@echo off
chcp 65001 >nul
echo.
echo ================================================
echo   Hotel Entre Rios - Deploy a GitHub Pages
echo ================================================
echo.

:: --- Configuracion ---
set GITHUB_USER=YN-TGS
set REPO_NAME=hotelentrerios
set REPO_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git
set CARPETA=%~dp0

echo [1/5] Inicializando repositorio Git...
cd /d "%CARPETA%"
git init
if errorlevel 1 goto :error

echo.
echo [2/5] Configurando repositorio remoto...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
if errorlevel 1 goto :error

echo.
echo [3/5] Agregando archivos...
git add .
if errorlevel 1 goto :error

echo.
echo [4/5] Creando commit inicial...
git commit -m "Sitio web Hotel Entre Rios - version inicial"
if errorlevel 1 goto :error

echo.
echo [5/5] Subiendo a GitHub (rama main)...
git branch -M main
git push -u origin main
if errorlevel 1 goto :error_push

echo.
echo ================================================
echo   LISTO! Archivos subidos correctamente.
echo.
echo   Ahora activa GitHub Pages en:
echo   https://github.com/%GITHUB_USER%/%REPO_NAME%/settings/pages
echo.
echo   Tu sitio estara disponible en:
echo   https://%GITHUB_USER%.github.io/%REPO_NAME%/
echo ================================================
echo.
pause
exit /b 0

:error
echo.
echo [ERROR] Algo salio mal en el paso anterior.
echo Verifica que Git este instalado correctamente.
pause
exit /b 1

:error_push
echo.
echo [ERROR] No se pudo subir a GitHub.
echo Posibles causas:
echo   1. El repositorio no existe en GitHub todavia.
echo      Crealo en: https://github.com/new
echo      Nombre: %REPO_NAME%  /  Visibilidad: Public
echo      (sin README ni .gitignore)
echo.
echo   2. No tienes sesion activa en Git.
echo      Ejecuta en Git Bash:
echo        git config --global user.email "gvilchesr@gmail.com"
echo        git config --global user.name "YN-TGS"
echo      Luego vuelve a ejecutar este script.
echo.
pause
exit /b 1
