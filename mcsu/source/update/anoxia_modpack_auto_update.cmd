@echo off

set "targetFile=%USERPROFILE%\NoveLib\anoxia_modpack_path.txt"

REM Check existence of txt file in temp
if not exist "%targetFile%" (
    echo Target file not found: %targetFile%
    pause & exit /b 1
)

REM Read the PowerShell file path
for /f "usebackq delims=" %%A in ("%targetFile%") do set "scriptPath=%%A"

REM Check if the script path is valid
if not exist "%scriptPath%" (
    echo Script path not found: %scriptPath%
    pause & exit /b 1
)

REM Run the script
powershell -ExecutionPolicy Bypass -File "%scriptPath%" -Update
if errorlevel 1 (pause & exit /b 1)
