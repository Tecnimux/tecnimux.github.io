const Nav_List = document.querySelector("#Nav_List");
const Opened= document.querySelector("#Opened");
const Closed= document.querySelector("#Closed");

Opened.addEventListener("click",()=> {
    Nav_List.classList.add("visible");
})
Closed.addEventListener("click", () => {
    Nav_List.classList.remove("visible");
})



$(document).ready(function() {
function showPopup(){
    $('.pop-up').addClass('show');
    $('.pop-up-wrap').addClass('show');
}

$("close").click(function(){
    $('.pop-up').removeClass('show');
    $('.pop-up-wrap').removeClass('show');
});

$(".btn-abrir").click(showPopup);

setTimeout(showPopup, 5000);

});