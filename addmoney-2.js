document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money')
        return
    }
    if (pinNumber === 1234){
        const balance = getTexFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance

        // add to transcription history 
        const p = document.createElement('p');
        p.innerText = `Added:${addMoney} k.Balance: ${newBalance}`;
        console.log(p)

        // should be a common function
        document.getElementById('transrction-container').appendChild(p);

    }
    else{
        alert('failed to add money')

    }


}) 