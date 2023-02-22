const el = document.getElementById("test")
const el1 = document.getElementById("test1")
const el2 = document.getElementById("test2")
const el3 = document.getElementById("test3")

function datewithslashes() {
    const date = new Date();
    let x = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    return x
}

let res = datewithslashes()

el.innerHTML = res
el1.innerHTML = res
el2.innerHTML = res
el3.innerHTML = res
