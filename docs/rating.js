"use strict";

const ratingOne = document.querySelector(".span1").addEventListener("click", function(){
    this.classList.replace("bg-slate-700", "bg-slate-500")
    document.querySelector(".span2").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span3").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span4").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span5").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".finalMessage").textContent = "You selected 1 out of 5"
})

const ratingTwo = document.querySelector(".span2").addEventListener("click", function(){
    this.classList.replace("bg-slate-700", "bg-slate-500")
    document.querySelector(".span1").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span3").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span4").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span5").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".finalMessage").textContent = "You selected 2 out of 5"
})

const ratingThree = document.querySelector(".span3").addEventListener("click", function(){
    this.classList.replace("bg-slate-700", "bg-slate-500")
    document.querySelector(".span1").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span2").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span4").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span5").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".finalMessage").textContent = "You selected 3 out of 5"
})

const ratingFour = document.querySelector(".span4").addEventListener("click", function(){
    this.classList.replace("bg-slate-700", "bg-slate-500")
    document.querySelector(".span2").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span3").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span1").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span5").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".finalMessage").textContent = "You selected 4 out of 5"
})

const ratingFive = document.querySelector(".span5").addEventListener("click", function(){
    this.classList.replace("bg-slate-700", "bg-slate-500")
    document.querySelector(".span2").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span3").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span4").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".span1").classList.replace("bg-slate-500", "bg-slate-700")
    document.querySelector(".finalMessage").textContent = "You selected 5 out of 5"
})

document.querySelector("button").addEventListener("click", function(){
    document.querySelector(".first").classList.add("hidden")
    document.querySelector(".second").classList.replace("hidden", "block")
})