import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source =
  "C:/Users/Aravindhan/.cursor/projects/c-Users-Aravindhan-OneDrive-Desktop-Nexora/assets/c__Users_Aravindhan_AppData_Roaming_Cursor_User_workspaceStorage_7dcd7b9df572f6450cfba6cee6666d4e_images_image-c717c28c-adc8-4746-8111-369d4ee61064.png";

const outDir = path.join(root, "public/brand");
await mkdir(outDir, { recursive: true });

async function makeTransparent(input, output, threshold = 245) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > threshold && g > threshold && b > threshold) {
      data[i + 3] = 0;
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(output);
}

const markRegion = { left: 430, top: 28, width: 160, height: 160 };
const wordmarkRegion = { left: 365, top: 205, width: 280, height: 98 };
const faviconRegion = { left: 668, top: 338, width: 118, height: 118 };
const horizontalDarkRegion = { left: 0, top: 308, width: 505, height: 223 };
const stackedRegion = { left: 350, top: 20, width: 320, height: 245 };

await sharp(source).extract(markRegion).png().toFile(path.join(outDir, "logo-mark-raw.png"));
await makeTransparent(path.join(outDir, "logo-mark-raw.png"), path.join(outDir, "logo-mark.png"), 248);

await sharp(source).extract(wordmarkRegion).png().toFile(path.join(outDir, "logo-wordmark.png"));
await makeTransparent(path.join(outDir, "logo-wordmark.png"), path.join(outDir, "logo-wordmark-transparent.png"), 248);

await sharp(source).extract(horizontalDarkRegion).png().toFile(path.join(outDir, "logo-horizontal-dark.png"));
await sharp(source).extract(stackedRegion).png().toFile(path.join(outDir, "logo-stacked.png"));
await sharp(source).extract(faviconRegion).png().toFile(path.join(outDir, "favicon-source.png"));
await makeTransparent(path.join(outDir, "favicon-source.png"), path.join(outDir, "favicon.png"), 248);

const markMeta = await sharp(path.join(outDir, "logo-mark.png")).metadata();
const wordMeta = await sharp(path.join(outDir, "logo-wordmark-transparent.png")).metadata();
const markHeight = 36;
const markWidth = Math.round((markMeta.width / markMeta.height) * markHeight);
const wordHeight = 46;
const wordWidth = Math.round((wordMeta.width / wordMeta.height) * wordHeight);
const dividerWidth = 1;
const gap = 14;
const canvasWidth = markWidth + gap + dividerWidth + gap + wordWidth;
const canvasHeight = Math.max(markHeight, wordHeight);

const markResized = await sharp(path.join(outDir, "logo-mark.png"))
  .resize(markWidth, markHeight, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const wordResized = await sharp(path.join(outDir, "logo-wordmark-transparent.png"))
  .resize(wordWidth, wordHeight, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const divider = await sharp({
  create: {
    width: dividerWidth,
    height: Math.round(markHeight * 0.7),
    channels: 4,
    background: { r: 15, g: 23, b: 42, alpha: 0.2 },
  },
}).png().toBuffer();

await sharp({
  create: {
    width: canvasWidth,
    height: canvasHeight,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([
    { input: markResized, left: 0, top: Math.round((canvasHeight - markHeight) / 2) },
    { input: divider, left: markWidth + gap, top: Math.round((canvasHeight - markHeight * 0.7) / 2) },
    { input: wordResized, left: markWidth + gap + dividerWidth + gap, top: Math.round((canvasHeight - wordHeight) / 2) },
  ])
  .png()
  .toFile(path.join(outDir, "logo-horizontal-light.png"));

const ogMark = await sharp(path.join(outDir, "logo-mark.png"))
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const ogWord = await sharp(path.join(outDir, "logo-wordmark-transparent.png"))
  .resize(420, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const taglineSvg = Buffer.from(`
<svg width="1200" height="120" xmlns="http://www.w3.org/2000/svg">
  <text x="600" y="60" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#64748B">Building Scalable Digital Products</text>
</svg>
`);

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 248, g: 250, b: 252, alpha: 1 },
  },
})
  .composite([
    { input: ogMark, top: 130, left: 510 },
    { input: ogWord, top: 330, left: 390 },
    { input: taglineSvg, top: 420, left: 0 },
  ])
  .png()
  .toFile(path.join(outDir, "og-image.png"));

const faviconSizes = [16, 32, 48, 180, 512];
for (const size of faviconSizes) {
  await sharp(path.join(outDir, "favicon.png"))
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, `icon-${size}.png`));
}

console.log("Logo assets generated in public/brand/");
