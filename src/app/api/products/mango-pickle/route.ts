import sharp from 'sharp';

export const dynamic = 'force-static';

export async function GET() {
  try {
    // Create a gradient background
    const width = 400;
    const height = 400;
    const svg = `
      <svg width="${width}" height="${height}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FF8C42;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFB566;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
          Mango Pickle
        </text>
      </svg>
    `;

    // Convert SVG to PNG and get it as an ArrayBuffer
    const pngBuffer = await sharp(Buffer.from(svg))
      .png()
      .toBuffer();

    // Return the PNG image
    return new Response(Buffer.from(pngBuffer).buffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch {
    return Response.error();
  }
}
