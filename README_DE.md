# P5.js: PNG Export

[English](readme.md)

Zeichnet einen Kreis auf die Zeichenfläche und speichert den aktuellen
Frame als PNG-Datei, wenn du **s** drückst. Ein minimaler Ausgangspunkt,
um Bilder aus einem Sketch zu exportieren, z. B. für Druck oder
Dokumentation.

## Installation

Voraussetzungen: Visual Studio Code mit der Erweiterung Live Server und ein
Browser.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

Lizenz: MIT

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. **s** drücken, um den aktuellen Frame als `<zeitstempel>-out.png`
   herunterzuladen.

## Coding-Hilfe

- **`sketch.js` → `setup()`**: erstellt eine Zeichenfläche von 500×500. Das
  gespeicherte PNG verwendet die Pixeldichte des Bildschirms, auf einem
  Retina-Display ist es also 1000×1000 Pixel gross. Mit `pixelDensity(1)`
  wird es genau 500×500, mit einem höheren Wert grösser.
- **`draw()`**: zeichnet Hintergrund und Kreis. Diesen Teil durch eigene
  Zeichnungen ersetzen.
- **`keyPressed()`**: bei **s** lädt `save()` die Zeichenfläche herunter.
  Der Dateiname wird aus `Date.now()` gebildet, jede Datei bekommt also
  einen eigenen Namen. Für weitere Tasten zusätzliche `case`s ergänzen.
