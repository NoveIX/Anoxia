@echo off
title Anoxia Server

:: To use a specific Java runtime, define the JAVA variable below with the full path to java.exe.
:: set ANOXIA_JAVA=C:\Program Files\Java\jdk-17\bin\java.exe

:: To disable automatic restarts, set the ANOXIA_RESTART variable to false.
:: set ANOXIA_RESTART=false

:: To install the pack without starting the server, set the ANOXIA_INSTALL_ONLY variable to true.
:: set ANOXIA_INSTALL_ONLY=true

set FORGE_VERSION=47.4.10
set INSTALLER="forge-1.20.1-%FORGE_VERSION%-installer.jar"
set FORGE_URL="https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-%FORGE_VERSION%/forge-1.20.1-%FORGE_VERSION%-installer.jar"

:JAVA
:: Set default Java
if not defined ANOXIA_JAVA (
    set ANOXIA_JAVA=java
)

:: Check Java is installed
"%ANOXIA_JAVA%" -version 1>nul 2>nul || (
   echo Minecraft 1.20.1 requires Java 17 - Java not found
   pause
   exit /b 1
)

:FORGE
:: Install or download Minecraft Forge
setlocal enabledelayedexpansion
cd /D "%~dp0"
if not exist "libraries" (
    echo Forge not installed, installing now.
    if not exist %INSTALLER% (
        echo No Forge installer found, downloading now.

            :: try curl
            where /q curl
            if %errorlevel%==0 (
                echo "DEBUG: (curl) Downloading from %FORGE_URL%"
                curl.exe -# -o "%INSTALLER%" -L "%FORGE_URL%"
            ) else (

                :: try bitsadmin
                where /q bitsadmin
                if %errorlevel%==0 (
                    echo "DEBUG: (bitsadmin) Downloading from %FORGE_URL%"
                    bitsadmin.exe /rawreturn /nowrap /transfer forgeinstaller /download /priority FOREGROUND %FORGE_URL% %INSTALLER%
                ) else (
                    echo "Neither powershell or curl or bitsadmin were found on your system. Please install one and try again"
                    pause
                    exit /b 1
                )
            )
        )

    echo Running Forge installer.
    "%ANOXIA_JAVA%" -jar %INSTALLER% -installServer
)

:: Create default server properties
if not exist "server.properties" (
    (
        echo allow-flight=true
        echo difficulty=hard
        echo enable-command-block=true
        echo motd=§3Project§r §2Anoxia§r §7Lunar§r §4Ruins§r
        echo max-tick-time=180000
    )> "server.properties"
)

:: End install only
if "%ANOXIA_INSTALL_ONLY%" == "true" (
    echo INSTALL_ONLY: complete
    goto:EOF
)

:: Check Java version
for /f tokens^=2-5^ delims^=.-_^" %%j in ('"%ANOXIA_JAVA%" -fullversion 2^>^&1') do set "jver=%%j"
if not %jver% geq 17  (
    echo Minecraft 1.20.1 requires Java 17 - found Java %jver%
    pause
    exit /b 1
)

:START
:: Server Start or restart if crash handle on
"%ANOXIA_JAVA%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-%FORGE_VERSION%/win_args.txt nogui

:: Restart Server
if "%ANOXIA_RESTART%" == "false" (
    goto:EOF
)

echo Restarting automatically in 10 seconds (press Ctrl + C to cancel)
timeout /t 10 /nobreak > NUL
goto:START