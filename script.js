//let range = document.querySelector('#range')
const ta = document.querySelector("textarea");


//range.addEventListener("change", function(e) {
//    let wght = e.currentTarget.value;
////    alert(wght);
//    ta.setAttribute("style", `font-variation-settings: "grad" ${wght}`);
//});

addEventListener("mousemove", (e) => {
//    let wght = e.currentTarget.value;
//    alert(e.pageX / window.innerWidth);
    let ratio = e.pageX / window.innerWidth;
    ta.setAttribute("style", `font-variation-settings: "grad" ${
        Math.min(
            Math.max(
                5 * ratio - .2,
                0
            ),
            1
        )
    }`);
});