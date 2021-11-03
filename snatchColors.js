// 1) visit https: //access.mymind.com/colors
// 2) open jsconsole
// 3) paste the content of this file into it
// 4) press enter
// 5) paste the content of your clipboard into colors.json

copy(
  JSON.stringify(
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
  )
);