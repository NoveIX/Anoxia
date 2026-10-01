@echo off

set "ENV_FILE=%~1"

if not defined ENV_FILE set "ENV_FILE=.env"

if not exist "%ENV_FILE%" (
    echo ERROR: Environment file not found ^'%ENV_FILE%^'
    exit /b 1
)

for /F "usebackq tokens=1,* delims==" %%A in ("%ENV_FILE%") do (
    if not "%%A:~0,1%"=="#" (
        set "%%A=%%B"
    )
)

exit /b 0
