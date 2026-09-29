@echo off
setlocal

:: To use a specific Java runtime, define the JAVA_EXE variable below with the full path to java.exe.
:: set "JAVA_EXE=C:\Program Files\Eclipse Adoptium\jre-17.0.18.8-hotspot\bin\java.exe"

:: To enable automatic server restarts, set the SERVER_RESTART variable to true.
:: set "SERVER_RESTART=true"

:: To install the pack without starting the server, set the INSTALL_ONLY variable to true.
:: set "INSTALL_ONLY=true"



:: ==================================================================================== ::



:: Modpack root
set "ROOT=%~dp0"
set "ENV=%ROOT%server.env"
set "LOAD=%ROOT%server\load-env.cmd"
set "SETUP=%ROOT%server\setup.ps1"
cd /D "%ROOT%"

:: Check if load-env.cmd exists
if not exist "%LOAD%" (
    echo ERROR: file not found ^'%LOAD%^'
    pause & exit /b 1
)

:: Load server environment
call "%LOAD%" "%ENV%"
if errorlevel 1 (
    pause & exit /b 1
)

:: Terminal title
title %CONSOLE_TITLE% v%MODPACK_VERSION%

:: Check if setup.ps1 exists
if not exist "%SETUP%" (
    echo ERROR: file not found ^'%SETUP%^'
    pause & exit /b 1
)

:: Check if Java is available, install it if missing, and set JAVA_EXE variable
if not defined JAVA_EXE (
    if not exist "%ROOT%\java\windows\%JAVA_PACKAGE%\bin\java.exe" (
        powershell -ExecutionPolicy Bypass ^
            -File "%SETUP%" ^
            -InstallJava

        :: Powershell exit code
        if errorlevel 1 (
            pause & exit /b 1
        )
    )

    set "JAVA_EXE=%ROOT%\java\windows\%JAVA_PACKAGE%\bin\java.exe"
)

:: Verify Java availability (file or PATH)
if not exist "%JAVA_EXE%" (
    where "%JAVA_EXE%" >nul 2>&1
    if errorlevel 1 (
        echo ERROR: Java not found ^'%JAVA_EXE%^'
        pause & exit /b 1
    )
)

:: Check Java version and parse the version string
for /f tokens^=2-5^ delims^=-_^" %%j in ('"%JAVA_EXE%" -fullversion 2^>^&1') do set "RAW_VER=%%j"
for /f "tokens=1,2 delims=." %%a in ("%RAW_VER%") do (
    if "%%a"=="1" (
        set "CTX_VER=%%b"
    ) else (
        set "CTX_VER=%%a"
    )
)

:: Check Java version compatibility with required Minecraft version
if %CTX_VER% lss %JAVA_VERSION% (
    echo Minecraft %MINECRAFT_VERSION% requires Java %JAVA_VERSION% - found Java %CTX_VER%
    pause & exit /b 1
)

:: Check if libraries directory exists, install if missing
if not exist "libraries" (
    powershell -ExecutionPolicy Bypass ^
        -File "%SETUP%" ^
        -InstallModLoader

    :: Powershell exit code
    if errorlevel 1 (
        pause & exit /b 1
    )
)

:: Check if running in "Install Only" mode
if /i "%INSTALL_ONLY%" == "true" (
    echo INFO: Install completed the Server will NOT start.
    pause
    goto :EOF
)

:START
:: Start server (auto-restart on crash)
"%JAVA_EXE%" %JAVA_ARGS% @libraries/net/minecraftforge/forge/%MINECRAFT_VERSION%-%MINECRAFT_MOD_LOADER_VERSION%/win_args.txt nogui

:: Restart Server
if /i "%SERVER_RESTART%" == "true" (
    echo Restarting automatically in 10 seconds ^(press Ctrl + C to cancel^)
    timeout /t 10 /nobreak > NUL
    goto:START
)

pause
