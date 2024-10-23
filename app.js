// variables
const img = document.querySelector(".main__img");
const btns = document.querySelectorAll(".main__btn");
let dogIndex;
console.log(localStorage.getItem('dogIndex'));

if (localStorage.getItem('dogIndex') > 0) {
    dogIndex = localStorage.getItem('dogIndex');
} else {
    dogIndex = 0;
}

// data structure
const dogs = [
  { breed: "German Shepard", img: "dogs/german.webp" },
  { breed: "Bulldog", img: "dogs/bulldog.webp" },
  { breed: "English Setter", img: "dogs/dog1.webp" },
];


// functions
const generateQuestion = () => {
  let internalDogIndex = 0;

  img.src = dogs[dogIndex].img;

  for (let btn of btns) {
    btn.textContent = dogs[internalDogIndex].breed;
    internalDogIndex++;
  }
};

const correct = (answer) => answer === dogs[dogIndex].breed;

const disableBtns = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};


//event listeners
for (let btn of btns) {
  btn.addEventListener("click", () => {
    if (correct(btn.textContent)) {
      btn.style.background = "lightgreen";
    } else {
      btn.style.background = "lightpink";
      btns[dogIndex].style.background = "lightgreen";
    }
    disableBtns();
    dogIndex++;
    localStorage.setItem('dogIndex', dogIndex);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('worked');
    generateQuestion();
})
