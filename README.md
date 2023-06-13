# Aare.guru für BitBar

Die aktuelle Aare-Temperatur in deiner MacOS-Menuzeile jetzt in JavaScript.

Offizielles Plugin von [Aare.guru](https://aare.guru).

## Installation

- [BitBar](https://getbitbar.com) herunterladen und installieren.
- Installations-Link in die Adresszeile deines Browsers kopieren (Oder manuell die Datei `aareguru.5m.js` in dein BitBar-Plugins-Verzeichnis kopieren und dann mit `chmod +x aareguru.5m.js` ausführbar machen):

> `bitbar://openPlugin?src=https://github.com/RaphaelHaettich/aare.guru.bitbar.js/raw/master/aareguru.5m.php`

- Wenn das Script nicht funktioniert, den Path auf der ersten Zeile zu node anpassen.
- Du kannst uns vertrauen.
- Optional in der Datei deine Schmerzgrenze (Ab dieser Temperatur wechselt die Anzeige auf ein freundliches Grün) und einen anderen Ort konfigurieren; unterhalb der Zeile `// Configuration`.

## Datenquelle

Die Messdaten der Aare stammen vom [Bundesamt für Umwelt BAFU](https://www.hydrodaten.admin.ch).

Die [API](https://aareguru.existenz.ch) ist für die Webseite [Aare.guru](https://aare.guru) geschrieben.

## Verwandte Projekte

- Die originale Aare Guru Bitbar in PHP [aare.guru.bitbar](https://github.com/Aareguru/aare.guru.bitbar)
- Offizielle [Firefox-Extension](https://addons.mozilla.org/de/firefox/addon/aare-guru/)
- Offizielle [Chrome-Extension](https://chrome.google.com/webstore/detail/aareguru/oaicpaghidmlakfogpmjpopkjhncjjfe?hl=de)
- [CLI-Client](https://github.com/gexclaude/aaregurucli/)
- [MagiMagicMirror² Modul](https://github.com/buge/MMM-AareGuru)
- [LaMetric App](https://apps.lametric.com/apps/aare_temperatur_anzeige__daten_von_aare_guru_/8544)

## Lizenz

MIT
