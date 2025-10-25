let istatus = document.querySelector("h5");
let add = document.querySelector("#add");

add.addEventListener("click",()=>{
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";

    let remove = document.querySelector("#remove");

    remove.addEventListener("click",()=>{
        istatus.innerHTML = "Removed";
        istatus.style.color = "red";
    });
});

