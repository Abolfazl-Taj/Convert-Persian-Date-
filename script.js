let cal = document.getElementById("date")
let btn = document.querySelector(".go")
let demo = document.querySelector(".demo")

btn.addEventListener("click", ()=>{
    let endate= cal.value;
    let persiandate = new persianDate(new Date(`${endate}`)).format("YYYY-MM-DD");
    demo.classList.add("transition")
    demo.innerHTML= persiandate;
})

