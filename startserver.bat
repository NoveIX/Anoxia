@echo off

:: To use a specific Java runtime, define the ANOXIA_JAVA variable below with the full path to java.exe.
:: set "ANOXIA_JAVA=C:\Program Files\Eclipse Adoptium\jre-17.0.18.8-hotspot\bin\java.exe"

:: To enable automatic restarts, set the ANOXIA_RESTART variable to true.
:: set "ANOXIA_RESTART=true"

:: To install the pack without starting the server, set the ANOXIA_INSTALL_ONLY variable to true.
:: set "ANOXIA_INSTALL_ONLY=true"



:: Set installer versions
set "JAVA_VER=17"
set "MC_VER=1.20.1"
set "FORGE_VER=47.4.10"

:: Set terminal title
set "SCRIPT_DIR=%~dp0"
if exist "%SCRIPT_DIR%version.txt" (
    set /p MPVER=<"%SCRIPT_DIR%version.txt"
    title Anoxia Server v%MPVER%
) else (
    title Anoxia Server
)

:: Change to script directory
cd /D "%SCRIPT_DIR%"
set "SERVER_INSTALLER=%SCRIPT_DIR%serverInstaller"

:: Check if installer exists
if not exist "%SERVER_INSTALLER%\installer.ps1" (
    echo ERROR: installer.ps1 not found!
    pause & exit /b 1
)

:: Check if Java is available, install it if missing, and set ANOXIA_JAVA variable
if not defined ANOXIA_JAVA (
    if not exist "%SCRIPT_DIR%java\bin\java.exe" (
        powershell -ExecutionPolicy Bypass ^
            -File "%SERVER_INSTALLER%\installer.ps1" ^
            -InstallJava ^
            -JavaVersion "%JAVA_VER%"
        if errorlevel 1 (pause & exit /b 1)
    )

    set "ANOXIA_JAVA=%SCRIPT_DIR%java\bin\java.exe"
)

:: Verify Java availability (file or PATH)
if exist "%ANOXIA_JAVA%" (
    rem Java found as direct executable path
) else (
    where %ANOXIA_JAVA% >nul 2>&1
    if errorlevel 1 (
        echo ERROR: Java not found ^( %ANOXIA_JAVA% ^)
        pause & exit /b 1
    )
)

:: Check Java version and parse the version string
for /f tokens^=2-5^ delims^=-_^" %%j in ('"%ANOXIA_JAVA%" -fullversion 2^>^&1') do set "RAW_VER=%%j"
for /f "tokens=1,2 delims=." %%a in ("%RAW_VER%") do (
    if "%%a"=="1" (
        set "JVER=%%b"
    ) else (
        set "JVER=%%a"
    )
)

:: Check Java version compatibility with required Minecraft version
if %JVER% lss %JAVA_VER% (
    echo Minecraft %MC_VER% requires Java %JAVA_VER% - found Java %JVER%
    pause & exit /b 1
)

:: Check if libraries directory exists, install if missing
if not exist "libraries" (
    powershell -ExecutionPolicy Bypass ^
        -File "%SERVER_INSTALLER%\installer.ps1" ^
        -InstallForge ^
        -JavaExe "%ANOXIA_JAVA%" ^
        -MinecraftVersion "%MC_VER%" ^
        -ForgeVersion "%FORGE_VER%"
    if errorlevel 1 (pause & exit /b 1)
)

:: Check if running in "Install Only" mode
if /i "%ANOXIA_INSTALL_ONLY%" == "true" (
    echo INFO: Install completed the Server will NOT start.
    goto :EOF
)

:START
:: Start server (auto-restart on crash)
"%ANOXIA_JAVA%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/%MC_VER%-%FORGE_VER%/win_args.txt nogui

:: Restart Server
if /i "%ANOXIA_RESTART%" == "true" (
    echo Restarting automatically in 10 seconds ^(press Ctrl + C to cancel^)
    timeout /t 10 /nobreak > NUL
    goto:START
)

pause
