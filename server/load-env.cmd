@echo off

if not exist "%ENV%" (
    echo ERROR: Environment file not found ^'%ENV%^'
    exit /b 1
)

for /F "usebackq tokens=1,* delims==" %%A in ("%ENV%") do (
    if not "%%A:~0,1%"=="#" (
        set "%%A=%%B"
    )
)

exit /b 0
