let date = 1871
let i = 1

while (date<2021){
    let newOption = new Option(date, i)
    const select = document.querySelector('#selectYear')
    select.add(newOption, undefined)
    date++
    i++
}