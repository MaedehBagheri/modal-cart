
const showModal=document.querySelector(".show-modal");
const modal =document.querySelector(".modal");
const backdrop =document.querySelector(".backdrop");
const close =document.querySelector(".close-modal");


function show(){
modal.style.opacity="3";
modal.style.transform ="translateY(2vh)";
backdrop.style.display="block";
modal.style.transition ="0.8s";

}


showModal.addEventListener("click",show);


function closeModal(){
    modal.style.opacity="0";
    modal.style.transform ="translateY(-100vh)";
    backdrop.style.display="none";
    modal.style.transition ="0.6s";
}


close.addEventListener("click",closeModal);