var changeBlock = document.querySelector('.change');
var changeBtn = document.querySelector('.change__button');
var changeBtnBefore = document.querySelector('.change__label--before');
var changeBtnAfter = document.querySelector('.change__label--after');
var changeToggled = 'change--switched';

changeBtn.addEventListener('click', function() {
  if (changeBlock.classList.contains(changeToggled)) {
    changeBlock.classList.remove(changeToggled);
  } else {
    changeBlock.classList.add(changeToggled);
  }
});

changeBtnBefore.addEventListener('click', function() {
    changeBlock.classList.remove(changeToggled);
});

changeBtnAfter.addEventListener('click', function() {
    changeBlock.classList.add(changeToggled);
});
