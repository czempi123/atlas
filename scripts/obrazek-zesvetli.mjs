// Zmenší obraz na delší stranu 1280 px a zesvětlí ho gamou (tmavá olejomalba je v duotónu desky skoro černá).
// Použití: node scripts/obrazek-zesvetli.mjs <originál mimo repozitář> <public/obrazky/soubor.jpg> <gama, např. 1.9>
// Gama 1 obraz jen zmenší. Co skript s obrazem udělal, zapiš k obrázku v src/data/zdroje.yaml.
import sharp from 'sharp';

const [zdroj, cil, gamaText = '1'] = process.argv.slice(2);
if (!zdroj || !cil) {
  console.error('Použití: node scripts/obrazek-zesvetli.mjs <originál> <cíl.jpg> <gama>');
  process.exit(1);
}
const gama = Number(gamaText);
const { data, info } = await sharp(zdroj)
  .resize({ width: 1280, height: 1280, fit: 'inside' })
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const prevod = new Uint8Array(256);
for (let i = 0; i < 256; i++) prevod[i] = Math.round(255 * Math.pow(i / 255, 1 / gama));
for (let i = 0; i < data.length; i++) data[i] = prevod[data[i]];
await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(cil);
const stat = await sharp(cil).stats();
console.log(`${cil}: ${info.width} × ${info.height} px, gama ${gama}, průměrný jas ${stat.channels.map((k) => Math.round(k.mean)).join('/')}`);
