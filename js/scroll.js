
const header = document.getElementById("header");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;

    const headerHeight = header.getBoundingClientRect().height;

    console.log(headerHeight);

    if(scrollHeight > headerHeight) {
        header.classList.add("fixedheader");
    }

    else {
        header.classList.remove("fixedheader");
    }

});