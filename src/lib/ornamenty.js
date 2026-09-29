// Ornamenty období pro PásObdobí. Převzato beze změny kresby z docs/design/ornamenty.js (schválený návrh P1).
// orn(i): cesty SVG pro segment 160 × 250 px (ornament v pásmu y 0–128); mini(i, w): přepínač výšky 26 px.
// @ts-nocheck
export class Ornamenty {
  mix(a, b, k) {
    const q = (h) => [1, 3, 5].map((j) => parseInt(h.slice(j, j + 2), 16));
    const A = q(a), B = q(b);
    return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * k).toString(16).padStart(2, '0')).join('');
  }
  orn(i) {
    const w = 160, zb = 128, cx = 80, L = [], S = [];
    const C = (x, y, r) => 'M' + (x - r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 0 ' + (2 * r) + ' 0a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0';
    const f = (n) => n.toFixed(1);
    if (i === 0) {
      for (let x = 0; x < w; x += 20) L.push('M' + x + ' 32V12H' + (x + 15) + 'V26H' + (x + 5) + 'V18H' + (x + 10) + 'V22M' + x + ' 32H' + (x + 20));
      const t = 44, H = 80, sx = 50;
      const P = [[-0.12, 0], [0.12, 0], [0.12, 0.1], [0.4, 0.26], [0.48, 0.48], [0.34, 0.76], [0.12, 0.93], [0.16, 1], [-0.16, 1], [-0.12, 0.93], [-0.34, 0.76], [-0.48, 0.48], [-0.4, 0.26], [-0.12, 0.1]];
      S.push('M' + P.map((q) => f(cx + q[0] * sx) + ' ' + f(t + q[1] * H)).join('L') + 'Z');
      L.push('M' + (cx - 6) + ' ' + (t + 6) + 'C' + (cx - 30) + ' ' + (t + 2) + ' ' + (cx - 30) + ' ' + (t + 20) + ' ' + (cx - 20) + ' ' + (t + 24));
      L.push('M' + (cx + 6) + ' ' + (t + 6) + 'C' + (cx + 30) + ' ' + (t + 2) + ' ' + (cx + 30) + ' ' + (t + 20) + ' ' + (cx + 20) + ' ' + (t + 24));
    } else if (i === 1) {
      for (let x = 4; x < w; x += 11) [8, 19, zb - 18, zb - 7].forEach((y) => S.push('M' + x + ' ' + y + 'h8v8h-8z'));
      L.push('M' + (cx - 34) + ' ' + (zb - 22) + 'V78A34 34 0 0 1 ' + (cx + 34) + ' 78V' + (zb - 22));
      L.push('M' + (cx - 24) + ' ' + (zb - 22) + 'V80A24 24 0 0 1 ' + (cx + 24) + ' 80V' + (zb - 22));
      S.push('M' + (cx - 5) + ' 40h10l-2 8h-6z');
    } else if (i === 2) {
      [cx - 48, cx - 15, cx + 18].forEach((x) => { L.push('M' + x + ' ' + zb + 'V78Q' + x + ' 54 ' + (x + 15) + ' 44Q' + (x + 30) + ' 54 ' + (x + 30) + ' 78V' + zb); L.push('M' + (x + 15) + ' 62V' + zb); });
      L.push(C(cx, 20, 14)); L.push(C(cx, 20, 6));
      for (let a = 0; a < 6; a++) { const an = a * Math.PI / 3; L.push('M' + f(cx + 6 * Math.cos(an)) + ' ' + f(20 + 6 * Math.sin(an)) + 'L' + f(cx + 14 * Math.cos(an)) + ' ' + f(20 + 14 * Math.sin(an))); }
    } else if (i === 3) {
      const vy = 32;
      L.push('M0 ' + vy + 'H' + w);
      for (let k = -6; k <= 6; k++) L.push('M' + (cx + k * 18) + ' ' + zb + 'L' + cx + ' ' + vy);
      [0, 10, 22, 38, 58].forEach((d) => L.push('M0 ' + (zb - d) + 'H' + w));
      S.push(C(cx, vy, 3));
    } else if (i === 4) {
      S.push(C(cx, 34, 15));
      for (let a = 0; a < 24; a++) { const an = a * Math.PI / 12; const r2 = a % 2 ? 62 : 110; L.push('M' + f(cx + 22 * Math.cos(an)) + ' ' + f(34 + 22 * Math.sin(an)) + 'L' + f(cx + r2 * Math.cos(an)) + ' ' + f(34 + r2 * Math.sin(an))); }
    } else if (i === 5) {
      const gear = (x, y, r, n) => { let d = ''; for (let k = 0; k < n * 4; k++) { const an = k * Math.PI * 2 / (n * 4); const rr = (k % 4 < 2) ? r + 5 : r; d += (k ? 'L' : 'M') + f(x + rr * Math.cos(an)) + ' ' + f(y + rr * Math.sin(an)); } return d + 'Z' + C(x, y, Math.round(r * 0.35)); };
      L.push(gear(cx - 22, 52, 24, 10)); L.push(gear(cx + 29, 86, 14, 7));
      L.push('M0 ' + (zb - 14) + 'H' + w + 'M0 ' + (zb - 6) + 'H' + w);
      for (let x = 4; x < w; x += 12) L.push('M' + x + ' ' + (zb - 18) + 'V' + (zb - 2));
    } else if (i === 6) {
      L.push(C(cx + 18, 58, 36));
      S.push('M0 ' + (zb - 8) + 'L' + w + ' 26L' + w + ' 42L0 ' + (zb + 8) + 'Z');
      S.push('M' + (cx - 52) + ' 14h20v20h-20z');
      L.push('M' + (cx - 60) + ' ' + (zb - 30) + 'L' + (cx + 70) + ' 6');
    } else {
      for (let x = 6; x < w; x += 12) for (let y = 8; y < zb; y += 12) S.push(C(x, y, 1.1));
      const N = [[24, 30], [70, 18], [120, 44], [48, 80], [100, 96], [140, 118], [20, 116]];
      [[0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [4, 5], [3, 6]].forEach((e) => L.push('M' + N[e[0]].join(' ') + 'L' + N[e[1]].join(' ')));
      N.forEach((n) => { S.push(C(n[0], n[1], 4)); L.push(C(n[0], n[1], 7)); });
    }
    return { solid: S.join(''), line: L.join('') };
  }
  mini(i, w) {
    const L = [], f = (n) => n.toFixed(1), cx = w / 2;
    if (i === 0) { for (let x = 0; x < w; x += 16) L.push('M' + x + ' 21V5H' + (x + 12) + 'V17H' + (x + 4) + 'V11H' + (x + 8) + 'V14M' + x + ' 21H' + (x + 16)); }
    else if (i === 1) { for (let x = 2; x < w; x += 7) { L.push('M' + x + ' 4h4v4h-4z'); L.push('M' + (x + 3) + ' 18h4v4h-4z'); } }
    else if (i === 2) { for (let x = 3; x < w; x += 15) L.push('M' + x + ' 26V14Q' + x + ' 6 ' + (x + 6) + ' 3Q' + (x + 12) + ' 6 ' + (x + 12) + ' 14V26'); }
    else if (i === 3) { L.push('M0 5H' + w); for (let k = -8; k <= 8; k++) L.push('M' + f(cx + k * 14) + ' 26L' + f(cx) + ' 5'); }
    else if (i === 4) { for (let a = 0; a < 16; a++) { const an = a * Math.PI / 8; L.push('M' + f(cx + 5 * Math.cos(an)) + ' ' + f(13 + 5 * Math.sin(an)) + 'L' + f(cx + 40 * Math.cos(an)) + ' ' + f(13 + 40 * Math.sin(an))); } }
    else if (i === 5) { L.push('M0 16H' + w + 'M0 21H' + w); for (let x = 2; x < w; x += 6) L.push('M' + x + ' 14V23'); }
    else if (i === 6) { for (let x = -26; x < w; x += 13) L.push('M' + x + ' 26L' + (x + 26) + ' 0'); }
    else { for (let x = 3; x < w; x += 6) for (let y = 4; y < 26; y += 6) L.push('M' + (x - 0.7) + ' ' + y + 'a0.7 0.7 0 1 0 1.4 0a0.7 0.7 0 1 0-1.4 0'); }
    return L.join('');
  }
}

export const ornamenty = new Ornamenty();
