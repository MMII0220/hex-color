document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');

  function generateColor(btn) {
    let homePage = document.querySelector('.main');

    btn.addEventListener('click', (el) => {
      let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        a = Math.floor(Math.random() * 256),
        aa = Math.floor(Math.random() * 256),
        aaa = Math.floor(Math.random() * 256),
        right = Math.floor(Math.random() * 255),
        left = Math.floor(Math.random() * 255);

      homePage.style.background = `linear-gradient(to right, #${r.toString(
        16
      )}${b.toString(16)}${g.toString(16)}, #${a.toString(16)}${a.toString(
        16
      )}${aa.toString(16)}${aaa.toString(16)})`;
    });
  }

  generateColor(button);
});

/* 
linear-gradient(to right, #${right.toString(
    16
  )}, #${left.toString(16)})
 */
