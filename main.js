
// let menuItem = document.getElementsByClassName('menu-item');
// let subMenu = document.getElementsByClassName('sub-menu');

// for (let i = 0; i < menuItem.length; i++) {
//     menuItem[i].addEventListener("mouseover", (e) => {
//         let target = e.target;
//         if (target.classList.contains("menu-item")) {
//             subMenu[i].style.display = "block";
//         } else {
//             subMenu[i].style.display = "none";
//         }
//     });
// }

let dropdownBtn = document.querySelector(".dropdown-button");
let dropDownList = document.querySelector('.dropdown-list');
let dropDownListItem = document.querySelectorAll('.dropdown-list-item');
let dropDownInput = document.querySelector('.dropdown-input-hidden');

dropdownBtn.addEventListener("click", function () {
   
    dropDownList.classList.toggle("active");

    for (let i = 0; i < dropDownListItem.length; i++) {
        dropDownListItem[i].addEventListener("click", function (e) {
            e.stopImmediatePropagation();
            
            dropDownList.classList.remove("active");
            dropDownInput.value = dropDownListItem[i].textContent;
            dropdownBtn.innerHTML = this.innerHTML;
        });
    }
});

document.addEventListener("keydown",(e)=>{
    if(e.key === "Tab"){
        dropDownList.classList.add("active")
    }else if(e.key === "Escape"){
        dropDownList.classList.remove   ("active")
    }
})