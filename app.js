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

const correct = (answer) => answer === dogs[0].breed;

//event listeners
for (let btn of btns) {
  btn.addEventListener("click", () => {
    if (correct(btn.textContent)) {
      btn.style.background = "lightgreen";
    } else {
      btn.style.background = "lightpink";
    }
  });
}
