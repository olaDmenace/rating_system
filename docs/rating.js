"use strict";

let finalRating

const effectRating = (ratingElement) => {
    finalRating = ratingElement.getAttribute("data-rating")
    document.querySelectorAll(".rating").forEach((el) => {
        el.classList.replace("bg-slate-500", "bg-slate-700")
    })
    ratingElement.classList.replace("bg-slate-700", "bg-slate-500")
}

const buttonClick = () => {
    document.querySelector(".first").classList.add("hidden")
    document.querySelector(".second").classList.replace("hidden", "block")
    if (finalRating === undefined) {
        document.querySelector(".finalMessage").innerHTML = `No rating selection was made`
     } else {
    document.querySelector(".finalMessage").innerHTML = `You selected ${finalRating} out of 5`
    }
}