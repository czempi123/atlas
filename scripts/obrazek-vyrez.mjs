// Vyřízne z originálu obdélník a zmenší ho na delší stranu 1280 px. Pro obraz, na kterém je to podstatné malé
// (lodě pod uchem číše), takže by je deska s celým snímkem neukázala.
// Použití: node scripts/obrazek-vyrez.mjs <originál mimo repozitář> <public/obrazky/soubor.jpg> <vlevo> <nahoře> <šířka> <výška>
// Čísla jsou pixely originálu. Co skript s obrazem udělal, zapiš k obrázku v src/data/zdroje.yaml.
import sharp from 'sharp';

const [zdroj, cil, ...cisla] = process.argv.slice(2);
const [left, top, width, height] = cisla.map(Number);
if (!zdroj || !cil || cisla.length !== 4 || cisla.some((c) => !Number.isFinite(Number(c)))) {
  console.error('Použití: node scripts/obrazek-vyrez.mjs <originál> <cíl.jpg> <vlevo> <nahoře> <šířka> <výška>');
  process.exit(1);
}
const info = await sharp(zdroj)
  .extract({ left, top, width, height })
  .resize({ width: 1280, height: 1280, fit: 'inside' })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(cil);
console.log(`${cil}: ${info.width} × ${info.height} px, výřez ${left}, ${top}, ${width} × ${height} z originálu`);
