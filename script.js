const Menu_button = document.querySelector("#menu-button");
const List = document.querySelector(".items-container");
const first_card = document.querySelector(".first-card");
const ContinueButton = document.querySelectorAll('.continue')
const SelectButton = document.querySelectorAll(".unSelected");
const BackCards = document.querySelectorAll(".back");
const GotIt = document.querySelector(".gotIt")
const Done = document.querySelector(".success-card")
const BackProject = document.querySelector(".BackProject")
const BackProjectButton = document.querySelector(".buttons-container_backBtn")
const BodyCards = document.querySelector(".cards-container")

BackProjectButton.addEventListener("click", () => {
  BodyCards.classList.add('hideOperation')
  BackProject.classList.remove('hideOperation')
})

Menu_button.addEventListener("click", () => {
  if (List.classList.contains("hideMenu")) {
    List.classList.remove("hideMenu");
    first_card.classList.add("underMenu");
    Menu_button.src = "./images/icon-close-menu.svg";
  } else {
    List.classList.add("hideMenu");
    first_card.classList.remove("underMenu");
    Menu_button.src = "./images/icon-hamburger.svg";
  }
});
// const Operations = document.querySelectorAll(".operation");

SelectButton.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("selected");

    BackCards.forEach((BackCard) => {
      if (
        BackCard.childNodes[0].nextSibling.childNodes[0].nextSibling.classList.contains(
          "selected"
        )
      ) {
        BackCard.classList.add("border-select");
        BackCard.childNodes[7].classList.remove("hideOperation")
      } else {
        BackCard.classList.remove("border-select");
        BackCard.childNodes[7].classList.add("hideOperation")
      }
    });
  });
});

ContinueButton.forEach(btn => {
  btn.addEventListener('click', () => {
    BackProject.classList.add("hideOperation")
    Done.classList.remove("hideOperation")
  })
})

GotIt.addEventListener("click", () => {
  BodyCards.classList.remove('hideOperation')
})