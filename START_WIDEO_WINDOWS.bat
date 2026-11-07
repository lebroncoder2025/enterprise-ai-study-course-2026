@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %ERRORLEVEL%==0 (py -3 START_SERWER_WIDEO.py) else (python START_SERWER_WIDEO.py)
pause
