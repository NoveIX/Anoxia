@echo off
powershell -ExecutionPolicy Bypass -File "%~dp0\..\..\app\Main.ps1" -Update

REM Versioni Forge e Minecraft
SET "mcVer=1.20.1"
SET "forgeVer=47.4.0"

REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %* or
REM pass them to this script directly
java @user_jvm_args.txt @libraries\net\minecraftforge\forge\%mcVer%-%forgeVer%\unix_args.txt %*
pause