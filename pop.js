//To access the show button element
let showbtn = document.getElementById("showbtn");

//To access the close button element
let closebtn = document.getElementById("closebtn");

// To access the popup element
let popup = document.querySelector(".popup");
let subp = document.getElementById(".sub-p");

// To show the popup on click
showbtn.addEventListener("click", () => {
    popup.computedStyleMap.display = "block";
    showbtn.style.display = "none";
    document.body.style.backgroundColor = "#9EA9B1";
    subp.style.display= "none";

});

// To close the  popup on click
closebtn.addEventListener("click" , () => {
    popup.style.display = "none";
    showbtn.style.display = "block";
    document.body.style.backgroundColor = "#09dbd450";
    subp.style.display = "block";
}) ;
