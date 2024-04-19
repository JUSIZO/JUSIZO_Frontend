const blinds = document.querySelectorAll(".window-blind");
const blindStep = ["12px", "62px", "112px", "162px", "212px"];
const windowBox = document.querySelector(".window-box");
const standardTimeInterval = 125;

const windowAnimationStart = () => {
  windowBox.classList.add("cursor-lock");
};

const windowAnimationEnd = () => {
  windowBox.classList.remove("cursor-lock");
};

const closeBlinds = () => {
  for (let index = 1; index < 5; index++) {
    setTimeout(() => {
      for (let i = index; i < 5; i++) {
        blinds[i].style.top = blindStep[index];
      }
    }, standardTimeInterval * index);
  }
};

const openBlinds = () => {
  for (let index = 3; index >= 0; index--) {
    setTimeout(() => {
      for (let i = 4; i > index; i--) {
        blinds[i].style.top = blindStep[index];
      }
    }, standardTimeInterval * (4 - index));
  }
};

windowBox.addEventListener("click", (e) => {
  windowBox.classList.toggle("closed");
  if (windowBox.classList.contains("closed")) {
    windowAnimationStart();
    closeBlinds();
    setTimeout(() => {
      windowAnimationEnd();
    },1000);
  } else {
    windowAnimationStart();
    openBlinds();
    setTimeout(() => {
      windowAnimationEnd();
    },1000);
  }
});