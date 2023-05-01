const upbtn = document.querySelector(".up-ward");
const dwnbtn = document.querySelector(".down-ward");
const carta = document.querySelectorAll(".car");
const arr = document.querySelectorAll(".arrow");

arr.forEach((cap, a) => {
  cap.style.transform = `translateY(${100 * a}%)`;
});
carta.forEach((cap, a) => {
  cap.style.transform = `translateY(${100 * a}%)`;
});

let pageOne = 0;

dwnbtn.addEventListener("click", () => {
  if (pageOne == arr.length - 1) {
    pageOne = 0;
  } else {
    pageOne++;
  }

  arr.forEach((cap, a) => {
    cap.style.transform = `translateY(${100 * (a - pageOne)}%)`;
  });
  carta.forEach((cap, a) => {
    cap.style.transform = `translateY(${-100 * (a - pageOne)}%)`;
  });
});

upbtn.addEventListener("click", () => {
  if (pageOne == 0) {
    pageOne = arr.length - 1;
  } else {
    pageOne--;
  }
  arr.forEach((cap, a) => {
    cap.style.transform = `translateY(${100 * (a - pageOne)}%)`;
  });
  carta.forEach((cap, a) => {
    cap.style.transform = `translateY(${-100 * (a - pageOne)}%)`;
  });
});
