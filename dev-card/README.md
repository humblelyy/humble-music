# HUMBLE React Bits-style Lanyard

This project uses the original source component supplied in `character-arms-crossed-2.zip`, rather than the simplified prototype. It uses a Three.js renderer and accepts the same configuration props as the source component.

## Run

1. Extract this folder.
2. Open it in VS Code.
3. In Terminal run:

```bash
npm install
npm run dev
```

Open the Vite localhost address. To create a production build: `npm run build`.

## Component configuration
`src/App.jsx` includes the requested props: front/back images, strap texture, image fit, card color, portrait orientation, glossy finish, radius, scale, anchor, strap length/color/width, silver metal, gravity, damping, elasticity, breeze, interactive dragging, and intro animation.

## Assets
- `public/character.png` — supplied character artwork
- `public/card-back.svg` — custom HUMBLE back design
- `public/band.svg` — strap texture

The source component is in `src/components/Lanyard.jsx`.


### Personal ID card links
- Portfolio QR code on the back: https://maheshmadhav.vercel.app/
- Clickable email and portfolio shortcuts are shown below the card.
- The logo is enlarged slightly while retaining the monochrome design.
