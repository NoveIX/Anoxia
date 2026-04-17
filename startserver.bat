@echo off
title Anoxia Server

:: To use a specific Java runtime, define the JAVA variable below with the full path to java.exe.
:: set "ANOXIA_JAVA=C:\Program Files\Eclipse Adoptium\jre-17.0.18.8-hotspot\bin\java.exe"

:: To enable automatic restarts, set the ANOXIA_RESTART variable to true.
:: set "ANOXIA_RESTART=true"

:: To install the pack without starting the server, set the ANOXIA_INSTALL_ONLY variable to true.
:: set "ANOXIA_INSTALL_ONLY=true"


:: Set versions for installer to use
set "JAVA_VER=17"
set "MC_VER=1.20.1"
set "FORGE_VER=47.4.10"


:: Change to script directory
cd /D "%~dp0"
set "SCRIPT_DIR=%CD%"
set "SERVER_INSTALLER=%SCRIPT_DIR%\serverInstaller"

REM Check if installer exists
if not exist "%SERVER_INSTALLER%\installer.bat" (
    echo ERROR: file installer.bat not found!
    pause & exit /b 1
)

:: Check if java executable is defined, install java if not found, and set ANOXIA_JAVA variable
if not defined ANOXIA_JAVA (
    if not exist "%SCRIPT_DIR%\java\bin\java.exe" (
        powershell -ExecutionPolicy Bypass -File "%SERVER_INSTALLER%\installer.ps1" -InstallJava -JavaVer "%JAVA_VER%"
        if errorlevel 1 (pause & exit /b 1)
    )

    set "ANOXIA_JAVA=%SCRIPT_DIR%\java\bin\java.exe"
)

:: Check Java version
for /f tokens^=2-5^ delims^=.-_^" %%j in ('"%ANOXIA_JAVA%" -fullversion 2^>^&1') do set "jver=%%j"
if %jver% lss %JAVA_VER%  (
    echo Minecraft %MC_VER% requires Java %JAVA_VER% - found Java %jver%
    pause & exit /b 1
)

:: Check if libraries directory exists, if not, run installer to install forge and libraries
if not exist "libraries" (
    powershell -ExecutionPolicy Bypass -File "%SERVER_INSTALLER%\installer.ps1" -InstallForge -JavaExe "%ANOXIA_JAVA%" -MCVer %MC_VER% -ForgeVer %FORGE_VER%
    if errorlevel 1 (pause & exit /b 1)
)

:: Check if running in "Install Only" mode
if /i "%ANOXIA_INSTALL_ONLY%" == "true" (
    echo Install completed the Server will NOT start.
    goto :EOF
)

:START
:: Server Start or restart if crash handle on
"%ANOXIA_JAVA%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/%MC_VER%-%FORGE_VER%/win_args.txt nogui

:: Restart Server
if /i "%ANOXIA_RESTART%" == "true" (
    echo Restarting automatically in 10 seconds ^(press Ctrl + C to cancel^)
    timeout /t 10 /nobreak > NUL
    goto:START
)

pause
