# Ćwiczenie: topic + flow vs generative orchestration

## Topic (kontrolowany)
Trigger: "sprawdź status procedury" -> poproś o numer -> waliduj numer -> sprawdź dostęp użytkownika -> uruchom getStatus API -> pokaż wynik -> zakończ.

## Agent Flow (kontrolowany)
Trigger: On request -> GET /procedure/{id} -> jeśli brak 200: zwróć błąd -> jeśli status wymagający potwierdzenia: poproś o approval -> zapis tylko po pozytywnym zatwierdzeniu -> zwróć status.

## Generative orchestration
Cel: znajdź dokumenty opóźnione i zaproponuj właścicielowi proces poprawy.
Narzędzia read-only: searchDocs, listOwners, getStatus. Narzędzie write: createDraftFollowUp (requires real approval).

## Testy
Pytanie z prawidłowym ID, błędnym ID, nieautoryzowanym dokumentem, zmienioną wersją, prompt injection, timeoutem, duplikatem eventu.
