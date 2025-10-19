$(function(){

  /*-------------------------------
  サムネイルを押されたときの処理
  ---------------------------------*/
  const thumbnails = document.querySelectorAll('.thumbnails img');
  const thumbnails2 = document.querySelectorAll('.thumbnails2 img');
  const mainImage = document.querySelector('.visual img');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = thumb.dataset.src;
        mainImage.style.width = '100%';
        mainImage.style.left = 0;
        mainImage.style.opacity = 1;
      }, 300);
    });
  });
  
  thumbnails2.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = thumb.dataset.src;
        mainImage.style.width = '30%';
        mainImage.style.left = '35%';
        mainImage.style.opacity = 1;
      }, 300);
    });
  });

});  
