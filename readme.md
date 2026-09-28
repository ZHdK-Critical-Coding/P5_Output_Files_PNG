# P5.js: PNG Export

[Deutsch](README_DE.md)

Draws a circle on a canvas and saves the current frame as a PNG file when
you press **s**. A minimal starting point for exporting images from a
sketch, e.g. for print or documentation.

## Installation

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Press **s** to download the current frame as `<timestamp>-out.png`.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not used).

License: MIT

## Coding Help

- **`sketch.js` → `setup()`**: creates a 500×500 canvas. The saved PNG
  uses the screen's pixel density, so on a Retina display it is 1000×1000
  pixels. Add `pixelDensity(1)` for exactly 500×500, or a higher value for
  a larger file.
- **`draw()`**: draws the background and the circle. Replace this part
  with your own drawing.
- **`keyPressed()`**: on **s**, `save()` downloads the canvas. The file
  name is built from `Date.now()`, so every file gets a unique name. Add
  more `case`s for other keys.
