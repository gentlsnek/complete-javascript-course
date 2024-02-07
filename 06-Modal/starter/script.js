'use strict';


let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let hideModal = document.querySelector('.close-modal');
let showModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
} 


const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
   // modal.style.display = "block";
}



for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click', openModal);
}


hideModal.addEventListener('click', closeModal);


overlay.addEventListener('click', closeModal);
//console.log(showModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});