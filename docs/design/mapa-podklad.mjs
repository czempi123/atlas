// Referenční generátor podkladové mapy ze schváleného návrhu P1 (docs/design.md, oddíl Mapa a čas).
// Natural Earth land-10m z balíčku world-atlas, projekce geoConicConformal (rovnoběžky 35° a 41°),
// vodní linky podél pobřeží a síť poledníků po 2°. Barvy bere z tokenů (--map-sea, --map-sea-line, --map-land, --map-coast).
// V P4 z něj vznikne sestavovací krok, který předpočítá geometrii pro výřez každého období.
// Závislosti: npm i d3-geo topojson-client world-atlas. Soubor tokens.json v návrhu obsahoval tokeny čtyř režimů (A/B × světlý/tmavý).

import fs from 'fs';
import * as d3 from 'd3-geo';
import * as topo from 'topojson-client';
const tok = JSON.parse(fs.readFileSync('../tok/tokens.json','utf8'));
const world = JSON.parse(fs.readFileSync('node_modules/world-atlas/land-10m.json','utf8'));
const land0 = topo.feature(world, world.objects.land);
const polys=[];
for (const f of (land0.features||[land0])) { const g=f.geometry||f; const arr=g.type==='MultiPolygon'?g.coordinates:[g.coordinates];
  for (const p of arr){ const b=d3.geoBounds({type:'Polygon',coordinates:p}); const [[x0,y0],[x1,y1]]=b; if (y1<25||y0>50) continue; const area=d3.geoArea({type:'Polygon',coordinates:p}); if (area>2*Math.PI) { console.error('big',area,b); continue;} if (x0<x1 && (x1<2||x0>45)) continue; polys.push(p);} }
const land={type:'MultiPolygon',coordinates:polys};
const cities = {"Athény":[23.727,37.984],"Korinth":[22.88,37.906],"Sparta":[22.43,37.07],"Théby":[23.32,38.32],"Delfy":[22.50,38.48],"Syrákúsy":[15.29,37.07],"Tarent":[17.24,40.47],"Elea":[15.15,40.16],"Stageira":[23.75,40.53],"Pella":[22.52,40.76],"Milétos":[27.28,37.53],"Efesos":[27.34,37.94],"Knidos":[27.37,36.69],"Eresos":[25.93,39.17],"Abdéra":[24.98,40.95],"Assos":[26.34,39.49],"Samos":[26.93,37.69],"Kyréné":[21.86,32.82],"Olympia":[21.63,37.64],"Potidaia":[23.33,40.19],"Délion":[23.64,38.36],"Amfipolis":[23.85,40.82],"Megara":[23.35,38.0],"Sinópé":[35.15,42.02],"Kition":[33.63,34.92]};
const crops = {
  desk:{W:1032,H:456,center:[21.6,38.2],scale:3050},
  phone:{W:390,H:330,center:[24.2,38.6],scale:2350},
  mini:{W:520,H:400,center:[23.6,39.4],scale:6300},
};
const out={};
for (const [name,c] of Object.entries(crops)) {
  const proj = d3.geoConicConformal().parallels([35,41]).rotate([-23,0]).center([c.center[0]+23-23, c.center[1]]).scale(c.scale).translate([c.W/2,c.H/2]);
  // center with rotate: use rotate lon, center lat
  proj.rotate([-c.center[0],0]).center([0,c.center[1]]);
  proj.clipExtent([[-20,-20],[c.W+20,c.H+20]]);
  const path = d3.geoPath(proj).digits(1);
  const d = path(land);
  const grat = d3.geoGraticule().step([2,2]);
  const gd = path(grat());
  out[name]={cities:{}};
  for (const [k,ll] of Object.entries(cities)) { const p=proj(ll); out[name].cities[k]=[Math.round(p[0]),Math.round(p[1])]; }
  for (const v of ['A','B']) for (const m of ['l','d']) {
    const t=tok[v][m];
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${c.W} ${c.H}" width="${c.W}" height="${c.H}">`+
    `<rect width="${c.W}" height="${c.H}" fill="${t.sea}"/>`+
    `<path d="${gd}" fill="none" stroke="${t.seaLine}" stroke-width="0.6" opacity="0.7"/>`+
    `<defs><path id="l" d="${d}"/></defs>`+
    `<use href="#l" fill="none" stroke="${t.seaLine}" stroke-width="16" stroke-linejoin="round" opacity="${m==="d"?0.16:0.28}"/>`+
    `<use href="#l" fill="none" stroke="${t.seaLine}" stroke-width="7" stroke-linejoin="round" opacity="${m==="d"?0.32:0.55}"/>`+
    `<use href="#l" fill="${t.land}" stroke="${t.coast}" stroke-width="0.9" stroke-linejoin="round"/>`+
    `</svg>`;
    fs.writeFileSync(`out/map-${name}-${v}${m}.svg`, svg);
  }
}
fs.writeFileSync('out/coords.json', JSON.stringify(out,null,0));
console.log(JSON.stringify(out.desk.cities)); console.log(JSON.stringify(out.phone.cities)); console.log(JSON.stringify(out.mini.cities));
