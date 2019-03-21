@echo off
TITLE Chrome Kiosk Mode
taskkill /f /im explorer.exe
start "" /AboveNormal "c:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --kiosk -fullscreen -incognito --disable-pinch --overscroll-history-navigation=0 /max http://localhost:5000