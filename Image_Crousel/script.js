document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-items");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const itemsLength = carouselItems.length;
  const firstItemClone = carouselItems[0].cloneNode(true);
  const lastItemClone = carouselItems[itemsLength - 1].cloneNode(true);
  const index = document.querySelector(".index");

  carousel.appendChild(firstItemClone);
  carousel.insertBefore(lastItemClone, carouselItems[0]);

  let currentIndex = 1;

  const renderItem = () => {
    console.log(currentIndex);
    carousel.style.transition = "transform 1s ease";
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.addEventListener("transitionend", () => {
      if (currentIndex === 0 || currentIndex === itemsLength + 1) {
        carousel.style.transition = "none";
      }
      if (currentIndex === 0) {
        currentIndex = itemsLength;
      } else if (currentIndex === itemsLength + 1) {
        currentIndex = 1;
      }

      carousel.style.transform = `translateX(
            -${currentIndex * 100}%
            )`;
      console.log(currentIndex);
    });
  };

  prevBtn.addEventListener("click", () => {
    --currentIndex;
    renderItem();
  });
  nextBtn.addEventListener("click", () => {
    ++currentIndex;
    renderItem();
  });

  renderItem();
});
