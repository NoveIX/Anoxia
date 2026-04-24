@echo off
powershell -ExecutionPolicy Bypass -File "%~dp0source\mcsu.ps1" -Update
if errorlevel 1 (pause & exit /b 1)