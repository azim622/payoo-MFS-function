document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('cash-out-pin')
    // console.log('inside the handlar', cashOut , pinNumber)

    
    if(isNaN(cashOut)){
        alert('Failed to add money')
        return
    }

    if( pinNumber === 1234){
        const balance = getTexFieldValueById('account-balance')

        if(cashOut > balance){
            alert('you do not have sufficiant ballance')
            return
        }
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transcription history

        const div = document.createElement('div')
        div.classList.add('bg-yellow-300');
        div.innerHTML= `
           <h4 class="text-2xl font-bold"|>Cash Out</h4>
           <P>${cashOut} withdraw. New Balance ${newBalance}</P>

           `

           document.getElementById('transrction-container').appendChild(div)

    }
    else{
        alert('dhure gia mor')
    }


})
