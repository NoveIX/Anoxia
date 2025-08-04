@echo off
setlocal

set "targetFile=%TEMP%\NoveLib\MoonBase2_modpack_path.txt"

REM Check existence of txt file in temp
if not exist "%targetFile%" (
    echo Target file not found: %targetFile%
    exit /b 1
)

REM Read the PowerShell file path
for /f "usebackq delims=" %%A in ("%targetFile%") do set "scriptPath=%%A"

REM Controlla se lo script esiste
if not exist "%scriptPath%" (
    echo Script path not found: %scriptPath%
    exit /b 1
)

REM Run the script
powershell -ExecutionPolicy Bypass -File "%scriptPath%" -Update

endlocal
