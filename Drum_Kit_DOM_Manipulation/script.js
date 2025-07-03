var Lengthsofdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < Lengthsofdrumbutton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
