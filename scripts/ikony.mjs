// Převede ikony atributů z docs/design/atributy-ikony.json do jednoho SVG se symboly
// (public/ikony/atributy.svg). Spuštění: npm run ikony
import { readFileSync, writeFileSync } from 'node:fs';

const ikony = JSON.parse(readFileSync(new URL('../docs/design/atributy-ikony.json', import.meta.url), 'utf8'));
// Atributy tahu patří přímo na cestu: <use> z externího souboru nedědí atributy kořenového <svg>.
const tah = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
const symboly = Object.entries(ikony)
  .map(([id, d]) => `  <symbol id="${id}" viewBox="0 0 24 24"><path d="${d}" ${tah}/></symbol>`)
  .join('\n');
const svg = `<svg xmlns="http://www.w3.org/2000/svg">
<!-- Ikony atributů osobností (docs/design.md, oddíl Atributy). Generováno skriptem scripts/ikony.mjs; needitovat ručně. -->
${symboly}
</svg>
`;
writeFileSync(new URL('../public/ikony/atributy.svg', import.meta.url), svg);
console.log(`Ikony atributů: ${Object.keys(ikony).length} symbolů → public/ikony/atributy.svg`);
