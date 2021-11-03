const fs = require('fs');
const colors = require('.');
const items = colors.length;
const w = 200;
const itemH = 30;

const svg = `
  <svg viewBox="0 0 ${w} ${items * itemH}">
    ${colors.map((c, i) => {
      const width = w/c.colors.length;

      return c.colors.map((hex, j) => {
        return `<rect width="${width}" height="${itemH}" stroke="#fff" y="${i * itemH}" x="${j * width}" fill="${hex}" />`
      }).join('');
    }).join('')}
  </svg>
`;

fs.writeFileSync('./colors.svg', svg);
