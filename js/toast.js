const toaster = document.querySelector('.toaster');
const toast = document.querySelector('.toast');
const toastText = document.querySelector('.toast-description');

const getCatWakeUpTime = () => {
  db.collection("cat")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, " => ", doc.data());
      let currWakeUpTime = doc.data()["time"];
      toastText.innerText = `${currWakeUpTime}번`;
    });
  });
}

const toastAnimationStart = () => {
  toaster.classList.add("cursor-lock");
  toast.style.animationName = "toastJump";
};

const toastAnimationEnd = () => {
  toaster.classList.remove("cursor-lock");
  toast.style.animationName = "";
};

toaster.addEventListener('click', async () => {
  toastAnimationStart();
  const time = getCatWakeUpTime();
  console.log(time);
  setTimeout(() => {
    toastAnimationEnd();
  }, 4000)
})

