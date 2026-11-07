# Dlaczego osadzone filmy YouTube nie zawsze działają?

Kurs ma polskie filmy MP4 zapisane lokalnie, które działają **bez internetu** oraz zewnętrzne filmy YouTube od autorów (wymagają sieci).

1. Rozpakuj ZIP w normalnym folderze. Nie uruchamiaj HTML w podglądzie archiwum.
2. Uruchom `START_SERWER_WIDEO.py` (przez Python 3), a następnie otwórz wyświetlony adres `http://127.0.0.1:8765/`.
3. W kursie kliknij „Odtwórz fragment w kursie”. Domyślnie używany jest oficjalny odtwarzacz `youtube.com/embed` i polityka referrera `strict-origin-when-cross-origin`.
4. W module narzędzi możesz też użyć „Spróbuj alternatywnego odtwarzacza”, który przełącza na `youtube-nocookie.com/embed`.
5. Jeżeli YouTube wyświetla „Oglądaj w YouTube” lub odmowę odtwarzania, dany materiał albo środowisko przeglądarki nie pozwala na osadzanie. **Nie da się zagwarantować możliwości embed** i nie obchodzimy blokad. Skorzystaj z linku do oryginalnego filmu u autora.

**Nie włączaj polityk omijających zabezpieczenia przeglądarki.** Nie kopiujemy cudzych filmów do ZIP bez prawa do dystrybucji. Klipy lokalne są własnymi uproszczonymi animacjami, a nie pełnymi nagraniami lektorskimi.
