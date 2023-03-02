let content_1 = document.querySelector(".content-1");
let content_2 = document.querySelector(".content-2");
let container = document.querySelector(".container");
content_1.addEventListener("mouseover", () => {
    console.log(1);
    container.classList.remove("active-2");
    container.classList.add("active-1");
});

content_2.addEventListener("mouseover", () => {
    console.log(1);
    container.classList.remove("active-1");
    container.classList.add("active-2");
});
