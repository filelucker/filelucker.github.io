import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // 1. Process profile photo into a rounded portrait with emerald border
  const photoSize = 360;
  const photoRadius = 32;

  // Mask for rounded rect
  const maskSvg = Buffer.from(`
    <svg width="${photoSize}" height="${photoSize}">
      <rect width="${photoSize}" height="${photoSize}" rx="${photoRadius}" ry="${photoRadius}" fill="#fff"/>
    </svg>
  `);

  const profileBuffer = await sharp(path.join(publicDir, 'profile.jpg'))
    .resize(photoSize, photoSize, { fit: 'cover', position: 'top' })
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 2. Base SVG graphic with gradients, typography, and card accents
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b1120" />
          <stop offset="60%" stop-color="#090d16" />
          <stop offset="100%" stop-color="#030712" />
        </linearGradient>

        <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.1" />
        </linearGradient>

        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="50%" stop-color="#059669" />
          <stop offset="100%" stop-color="#0e7490" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

      <!-- Subtle Cyber Grid Background -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" stroke-width="0.7" stroke-opacity="0.08"/>
      </pattern>
      <rect width="${width}" height="${height}" fill="url(#grid)" />

      <!-- Glowing Ambient Circles -->
      <circle cx="150" cy="120" r="280" fill="url(#accentGlow)" filter="blur(60px)" />
      <circle cx="1020" cy="300" r="260" fill="url(#accentGlow)" filter="blur(70px)" />

      <!-- Outer Border -->
      <rect x="20" y="20" width="1160" height="590" rx="20" fill="none" stroke="#1f293d" stroke-width="2" />
      <rect x="20" y="20" width="1160" height="590" rx="20" fill="none" stroke="url(#borderGrad)" stroke-width="2" stroke-opacity="0.4" />

      <!-- Status Badge -->
      <g transform="translate(70, 70)">
        <rect width="240" height="34" rx="17" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.6"/>
        <circle cx="20" cy="17" r="5" fill="#10b981" />
        <circle cx="20" cy="17" r="9" fill="#10b981" fill-opacity="0.25" />
        <text x="36" y="22" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" letter-spacing="1">ACTIVE FOR CONSULTING</text>
      </g>

      <!-- Main Name -->
      <text x="70" y="175" fill="#f8fafc" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="52" font-weight="800" letter-spacing="-1">Md Moniruzzaman</text>

      <!-- Primary Title -->
      <text x="70" y="225" fill="#34d399" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="24" font-weight="700">Senior Mobile Engineer &amp; Systems Architect</text>

      <!-- Subtitle -->
      <text x="70" y="265" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="16">Mobile AI Engineer | POS Hardware &amp; FinTech Specialist</text>

      <!-- Scale Highlights / Metrics -->
      <g transform="translate(70, 315)">
        <!-- Metric 1 -->
        <rect x="0" y="0" width="180" height="66" rx="10" fill="#0f172a" fill-opacity="0.8" stroke="#1e293b" stroke-width="1.5" />
        <text x="16" y="28" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="800">10,000+</text>
        <text x="16" y="50" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">POS TERMINALS</text>

        <!-- Metric 2 -->
        <rect x="195" y="0" width="180" height="66" rx="10" fill="#0f172a" fill-opacity="0.8" stroke="#1e293b" stroke-width="1.5" />
        <text x="211" y="28" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="800">50M+ USERS</text>
        <text x="211" y="50" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">PRODUCTION SCALE</text>

        <!-- Metric 3 -->
        <rect x="390" y="0" width="180" height="66" rx="10" fill="#0f172a" fill-opacity="0.8" stroke="#1e293b" stroke-width="1.5" />
        <text x="406" y="28" fill="#a855f7" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="800">7+ YEARS</text>
        <text x="406" y="50" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">SYSTEMS DESIGN</text>
      </g>

      <!-- Tech Stack Badges -->
      <g transform="translate(70, 420)">
        <text x="0" y="0" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" letter-spacing="1">CORE SPECIALTIES:</text>
        
        <g transform="translate(0, 15)">
          <!-- Tag 1 -->
          <rect x="0" y="0" width="130" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <text x="12" y="18" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">LiteRT / ONNX</text>

          <!-- Tag 2 -->
          <rect x="140" y="0" width="150" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <text x="152" y="18" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">PCI-DSS Security</text>

          <!-- Tag 3 -->
          <rect x="300" y="0" width="150" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <text x="312" y="18" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">Offline-First WAL</text>

          <!-- Tag 4 -->
          <rect x="460" y="0" width="115" height="28" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <text x="472" y="18" fill="#cbd5e1" font-family="'JetBrains Mono', monospace" font-size="11">Kotlin / Swift</text>
        </g>
      </g>

      <!-- Bottom Domain Watermark -->
      <text x="70" y="555" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">filelucker.github.io</text>

      <!-- Photo Frame / Border -->
      <rect x="766" y="131" width="368" height="368" rx="36" fill="none" stroke="url(#borderGrad)" stroke-width="4" stroke-opacity="0.8" />
    </svg>
  `);

  const outputPath = path.join(publicDir, 'og-image.png');

  await sharp(svgOverlay)
    .composite([
      {
        input: profileBuffer,
        top: 135,
        left: 770
      }
    ])
    .png()
    .toFile(outputPath);

  console.log('Saved og-image.png (1200x630)');
}

createOgImage().catch(console.error);
