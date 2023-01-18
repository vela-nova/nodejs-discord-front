const dateobj = new Date()

let dateYear = dateobj.getFullYear()
let maxYear = dateYear - 13
let i = 1
let k = 1

while (maxYear>1870){
    let newOption = new Option(maxYear, i)
    const select = document.querySelector('#selectYear')
    select.add(newOption, undefined)
    maxYear--
    i++
}

while (k<32){
    let newOption = new Option(k, k)
    const select = document.querySelector('#selectDay')
    select.add(newOption, undefined)
    k++
}