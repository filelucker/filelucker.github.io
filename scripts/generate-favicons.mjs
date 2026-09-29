import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');

// 1. High-resolution SVG for modern browsers with light/dark adaptive styling
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1726" />
      <stop offset="100%" stop-color="#05080f" />
    </linearGradient>
    <linearGradient id="mGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="50%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#064e3b" stop-opacity="0.3" />
    </linearGradient>
  </defs>

  <!-- Dark Cyber Rounded Background -->
  <rect width="32" height="32" rx="7.5" fill="url(#bgGrad)" />
  <rect x="0.6" y="0.6" width="30.8" height="30.8" rx="7" fill="none" stroke="url(#strokeGrad)" stroke-width="1.2" />

  <!-- Monogram M (Architectural Geometry) -->
  <path d="M 6.8 23.5 L 6.8 8.5 L 10.8 8.5 L 16 15.6 L 21.2 8.5 L 25.2 8.5 L 25.2 23.5 L 21.4 23.5 L 21.4 14.2 L 17.3 19.8 L 14.7 19.8 L 10.6 14.2 L 10.6 23.5 Z" fill="url(#mGrad)" />

  <!-- Active Pulse Status Dot (Signature emerald dot) -->
  <circle cx="25.5" cy="6.5" r="2.8" fill="#10b981" fill-opacity="0.3" />
  <circle cx="25.5" cy="6.5" r="1.8" fill="#10b981" />
  <circle cx="25.5" cy="6.5" r="0.9" fill="#ffffff" />
</svg>`;

// High-res SVG for generating 512x512, 192x192, 180x180, 32x32, 16x16
const svg512 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1726" />
      <stop offset="100%" stop-color="#05080f" />
    </linearGradient>
    <linearGradient id="mGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="50%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#064e3b" stop-opacity="0.3" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Dark Cyber Rounded Background -->
  <rect width="512" height="512" rx="120" fill="url(#bgGrad)" />
  <rect x="10" y="10" width="492" height="492" rx="112" fill="none" stroke="url(#strokeGrad)" stroke-width="18" />

  <!-- Monogram M (Architectural Geometry) -->
  <path d="M 108 376 L 108 136 L 172 136 L 256 250 L 340 136 L 404 136 L 404 376 L 342 376 L 342 227 L 277 317 L 235 317 L 170 227 L 170 376 Z" fill="url(#mGrad)" />

  <!-- Active Pulse Status Dot (Signature emerald dot) -->
  <circle cx="408" cy="104" r="44" fill="#10b981" fill-opacity="0.3" />
  <circle cx="408" cy="104" r="28" fill="#10b981" filter="url(#glow)" />
  <circle cx="408" cy="104" r="14" fill="#ffffff" />
</svg>`;

async function generate() {
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log('Saved favicon.svg');

  const svgBuffer = Buffer.from(svg512);

  // 1. Apple Touch Icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Saved apple-touch-icon.png (180x180)');

  // 2. Favicon 32x32
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Saved favicon-32x32.png');

  // 3. Favicon 16x16
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Saved favicon-16x16.png');

  // 4. Android / PWA Icons (192x192 & 512x512)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192x192.png'));
  console.log('Saved icon-192x192.png');

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512x512.png'));
  console.log('Saved icon-512x512.png');

  // 5. Create favicon.ico from 32x32 PNG
  // Simple valid ICO header with 1 PNG image (standard for modern browsers)
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // Number of images = 1

  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(32, 0); // Width
  icoEntry.writeUInt8(32, 1); // Height
  icoEntry.writeUInt8(0, 2);  // Palette colors
  icoEntry.writeUInt8(0, 3);  // Reserved
  icoEntry.writeUInt16LE(1, 4); // Color planes
  icoEntry.writeUInt16LE(32, 6); // Bits per pixel
  icoEntry.writeUInt32LE(png32.length, 8); // Image data size
  icoEntry.writeUInt32LE(22, 12); // Offset of data (6 + 16 = 22)

  const icoBuffer = Buffer.concat([icoHeader, icoEntry, png32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Saved favicon.ico');

  // 6. Web Manifest
  const manifest = {
    name: "Md Moniruzzaman Portfolio",
    short_name: "Moniruzzaman",
    description: "Senior Mobile Engineer, Mobile AI Engineer & Systems Architect",
    start_url: "/",
    display: "standalone",
    background_color: "#090d16",
    theme_color: "#090d16",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Saved site.webmanifest');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
