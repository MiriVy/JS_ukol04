const selectPlan = planNumber => {
    for (i=1; i<4; i++) {
     document.querySelector(`#plan${i}`).classList.remove("plan--selected")
    }
    const planElement = document.querySelector(`#plan${planNumber}`)
    planElement.classList.add("plan--selected")
}

selectPlan(1)
selectPlan(2)
selectPlan(3)
