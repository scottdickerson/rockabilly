@echo off
TITLE Chrome Kiosk Mode
taskkill /f /im explorer.exe
start "" /AboveNormal "c:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --chrome-frame --kiosk -incognito --disable-pinch --overscroll-history-navigation=0 /max -fullscreen http://localhost:5000