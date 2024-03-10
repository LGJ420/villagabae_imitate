const modalOpenButton = document.getElementsByClassName('modal2_btn');
const modalCloseButton = document.getElementsByClassName('modalCloseButton');
const modal = document.getElementsByClassName('modal_box2');

modalOpenButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
  
  modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });