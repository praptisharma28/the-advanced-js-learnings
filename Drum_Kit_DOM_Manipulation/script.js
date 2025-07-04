const drumButtonCount = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtonCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w": {
      let audio = new Audio("sounds/tom-1.mp3");
      audio.play().catch((e) => console.log("Audio play failed:", e));
      break;
    }
    case "a": {
      let audio = new Audio("sounds/tom-2.mp3");
      audio.play().catch((e) => console.log("Audio play failed:", e));
      break;
    }
    case "s": {
      let audio = new Audio("sounds/tom-3.mp3");
      audio.play().catch((e) => console.log("Audio play failed:", e));
      break;
    }
    case "d": {
      let audio = new Audio("sounds/tom-4.mp3");
      audio.play().catch((e) => console.log("Audio play failed:", e));
      break;
    }
    case "j": {
      let audio = new Audio("sounds/snare.mp3");
      audio.play().catch((e) => console.log("Audio play failed:", e));
      break;
    }
    case "k": {
      let audio = new Audio("sounds/crash.mp3");
      audio.play().catch((e) => console.log("Audio play failed:", e));
      break;
    }
    case "l": {
      let audio = new Audio("sounds/kick-bass.mp3");
      audio.play().catch((e) => console.log("Audio play failed:", e));
      break;
    }
    default: {
      console.log("No sound for key:", key);
    }
  }
}


function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
}
