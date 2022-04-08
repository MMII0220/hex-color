document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');

  function generateColor(btn) {
    let homePage = document.querySelector('.main');

    btn.addEventListener('click', () => {
      let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        right = document.querySelector('.right'),
        left = document.querySelector('.left');

      left.textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

      right.textContent = `#${g.toString(16)}${b.toString(16)}${r.toString(
        16
      )}`;

      homePage.style.background = `linear-gradient(to right, #${r.toString(
        16
      )}${g.toString(16)}${b.toString(16)}, #${g.toString(16)}${b.toString(
        16
      )}${r.toString(16)})`;
    });
  }

  generateColor(button);
});

/* 
linear-gradient(to right, #${right.toString(
    16
  )}, #${left.toString(16)})
 */
