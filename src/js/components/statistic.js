let step1Btn = document.querySelector("[data-step='addDomain']")
let step2BackBtn = document.querySelector("[data-step='backStep1']")
let step2 = document.querySelector(".quiz__step2")


console.log(step1Btn)
step1Btn.onclick = function () {
    step2.classList.add("quiz__step2--active")
}

step2BackBtn.onclick = function () {
    console.log(true)
    step2.classList.remove("quiz__step2--active")
}
