function getInputFieldValueById(id){
    const inputvalue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputvalue)
    return inputNumber;
}

function getTexFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection-section').classList.add('hidden');
    // show the id

    document.getElementById(id).classList.remove('hidden');
}