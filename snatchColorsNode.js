const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://access.mymind.com/colors');
  const colors = await page.evaluate(_ => {
    return Promise.resolve(
      Array.from(document.querySelectorAll('.color-block')).map($el => {
        return {
          name: $el.querySelector('.color-block__name').innerHTML,
          colors: [
            $el.style.getPropertyValue('--primary-color'),
            $el.style.getPropertyValue('--accent-color'),
            $el.style.getPropertyValue('--number-color'),
            $el.style.getPropertyValue('--number-color-4'),
          ].map(c => c.replace(/\s/g, '')).filter(c => c)
        }
      })
    );
  });
  await browser.close();
  fs.writeFileSync('./colors.json', JSON.stringify(colors));
})();