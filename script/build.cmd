@echo off
pwsh.exe -ExecutionPolicy Bypass -File "%~dp0build.ps1"
if errorlevel 1 (pause & exit /b 1)