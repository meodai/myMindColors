const fs = require('fs');
const colors = require('.');
const items = colors.length;
const w = 200;
const itemH = 30;
const padding = 10;
const h = ( itemH + padding * 2 ) * items;

const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
    ${colors.map((c, i) => {
      const width = w/c.colors.length;
      const top = i * (itemH + padding * 2);

      return c.colors.map((hex, j) => {
        return `<rect width="${width}" height="${itemH}" stroke="#fff" y="${top}" x="${j * width}" fill="${hex}" />`
      }).join('\n');
    }).join('\n')}
  </svg>
`;

fs.writeFileSync('./colors.svg', svg);
