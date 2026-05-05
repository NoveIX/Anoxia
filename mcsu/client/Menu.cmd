@echo off
powershell -ExecutionPolicy Bypass -File "%~dp0..\source\app\Main.ps1" -Menu
if errorlevel 1 (pause & exit /b 1)
