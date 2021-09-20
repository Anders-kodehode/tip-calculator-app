const buttons = document.getElementById('tip-input')
let inputBill = document.getElementById('inbill')
let people = document.getElementById('inpeople')
let customButton = document.querySelector('.incustom')
let resetButton = document.getElementsByClassName('.reset-btn')
let inputs = document.querySelectorAll('.infield')

inputs.forEach(element=>{
    element.addEventListener("change", ()=>{
        calculateAmount()
    })
})
buttons.addEventListener('click', (e)=> {
    toggleActiveButton(e)
})
customButton.addEventListener('change', (e)=> {
    toggleActiveButton(e)
})

let active_tip = 15

function handleError (action){
    let error = document.getElementsById('error')
    switch (action) {
        case 'add':
            error.innerText = "People can't be zero";
            people.classList.add('input-error');
            break

            default:
                return
    }
}

function toggleActiveButton(e){
    let btns = document.querySelectorAll('tip-btn')
    if(e.target.tagname = 'BUTTON'){
        btns.forEach(el=>el.classList.remove('btn-active'));
        e.target.classList.add('btn-active');
    }else if(e.target.tagName = 'INPUT'){
        btns.forEach(el=>el.classList.remove('btn-active'));
        e.target.classList.add('btn-active');
        active_tip = parseFloat(e.target.value) || 0;
    }
    calculateAmount()
}

function calculateAmount( ) {
    const tip = document.querySelector('incustom')
    const totalNum = document.querySelector('totalperson') 
    if(people.value === '0' || !people.value) {
        return handleError('add')
    }else{
        handleError('remove')
    }
    resetButton.classList.remove('disabled')

    const price = parseFloat(inputBill.value) / parseInt(people.value)
    const tip_amount = price * active_tip / 100
    const total = price + tip_amount

    tip.innerText = tip_amount.toFixed(2)
    totalNum.innerText = total.toFixed(2)
}

