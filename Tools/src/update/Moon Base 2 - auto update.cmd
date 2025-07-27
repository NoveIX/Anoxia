@echo off
setlocal

set "targetFile=%TEMP%\NoveLib\MoonBase2_ModpackPath.txt"

REM Verifica esistenza
if not exist "%targetFile%" (
    echo Target file not found: %targetFile%
    exit /b 1
)

REM Legge il percorso del file PowerShell
for /f "usebackq delims=" %%A in ("%targetFile%") do set "scriptPath=%%A"

REM Controlla se lo script esiste
if not exist "%scriptPath%" (
    echo Script path not found: %scriptPath%
    exit /b 1
)

REM Avvia lo script
powershell -ExecutionPolicy Bypass -File "%scriptPath%" -Update

endlocal
