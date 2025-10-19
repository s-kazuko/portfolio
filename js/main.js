// 妖精が見え隠れするアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const fairy1 = document.querySelector(".fairy-wind");
  const fairy2 = document.querySelector(".fairy-light");
  const fairy3 = document.querySelector(".fairy-dream");
  const fairies = [fairy1, fairy2, fairy3];

  // 背景のサイズを取得する
  const contactBack = document.querySelector(".contact-back");

  function randomPosition(fairy) {
    const backRect = contactBack.getBoundingClientRect();
    const maxX = backRect.width - 200;
    const maxY = backRect.height - 200;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    fairy.style.left = `${x}px`;
    fairy.style.top = `${y}px`;
  }

  function fadeIn(fairy) {
    randomPosition(fairy);
    fairy.style.opacity = "0.2";
  }

  function fadeOut(fairy) {
    fairy.style.opacity = "0";
  }

  function loopFairySequentially() {
    fairies.forEach((fairy, index) => {
      const delay = index * 3000; // 3秒ずつずらす（表示3秒＋余白1秒）

      setTimeout(() => {
        fadeIn(fairy);

        setTimeout(() => {
          fadeOut(fairy);
        }, 2000); // 2秒後に消える
      }, delay);
    });
  }

  // 最初のループ開始
  loopFairySequentially();

  // 全体ループ（2秒表示＋1秒余白）× 妖精の数
  setInterval(loopFairySequentially, fairies.length * 3000);
});

// 星がキラキラするアニメーション
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#works .work-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        for (let i = 0; i < 100; i++) {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const d = Math.random() * 4;
          const s = Math.random() * 2 + 1.5;

          const star = document.createElement('div');
          star.classList.add('star');
          star.style.width = d + 'px';
          star.style.height = d + 'px';
          star.style.top = y + '%';
          star.style.left = x + '%';
          star.style.animationDuration = s + 's';

          card.appendChild(star);

          // 自動で消えるように
          setTimeout(() => {
            star.remove();
          }, s * 1000);
        }
    });
  });
});




