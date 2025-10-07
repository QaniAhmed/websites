const img = document.querySelector(".scroll-image");

window.addEventListener("scroll", () => {
  setTimeout(() => {
    const scrollTop = window.scrollY;
    const move = scrollTop * 0.2; // عدّل السرعة
    img.style.transform = `translate(-50%, -${move}px)`; // تحريك الصورة للأعلى أثناء السكروول
  }, 100);
});
const img_eng = document.querySelector(".scroll-image-eng");

window.addEventListener("scroll", () => {
  setTimeout(() => {
    console.log(screenY);
    const scrollTop = window.scrollY;
    const move = scrollTop * 0.1; // عدّل السرعة
    img_eng.style.transform = `translateY(-${move}px)`; // تحريك الصورة للأعلى أثناء السكروول
  }, 10);
});
