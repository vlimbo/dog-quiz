// variables
const img = document.querySelector(".main__img");
const btns = document.querySelectorAll(".main__btn");

// data structure
const dogs = [
  { breed: "German Shepard", img: "dogs/german.webp" },
  { breed: "Bulldog", img: "dogs/bulldog.webp" },
  { breed: "English Setter", img: "dogss/dog1" },
];

// functions
const generateQuestion = () => {
  let dogIndex = 0;

  img.src = dogs[dogIndex].img;

  for (let btn of btns) {
    btn.textContent = dogs[dogIndex].breed;
    dogIndex++;
  }
};

const correct = () => {};
