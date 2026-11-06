"""Niewielki, prywatny serwer HTTP dla plików kursu; nasłuchuje wyłącznie localhost.
Do obejrzenia zewnętrznych filmów potrzebujesz Internetu.
"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os, socket, threading, webbrowser

os.chdir(Path(__file__).resolve().parent)
port = 8765
for n in range(port, port+30):
    try:
        server = ThreadingHTTPServer(('127.0.0.1', n), SimpleHTTPRequestHandler)
        port=n
        break
    except OSError:
        continue
else:
    raise SystemExit('Brak wolnego portu localhost. Zamknij inny serwer i sprobuj ponownie.')
url=f'http://127.0.0.1:{port}/START_TUTAJ.html#/start'
print('Kurs: ', url)
print('Polskie animacje dzialaja offline. YouTube wymaga internetu. Zatrzymaj serwer: Ctrl+C.')
threading.Timer(.7, lambda: webbrowser.open(url)).start()
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
