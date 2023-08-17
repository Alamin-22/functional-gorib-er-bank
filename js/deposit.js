

document.getElementById("btn-deposit").addEventListener("click", function(){
    const newDepositAmount = getInputValueById("deposit-filed");



    const previousDepositTotal= getTextElementValueById("Deposit-total");

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    
    setTextElementValueById("Deposit-total", newDepositTotal);



    const previousBalanceTotal= getTextElementValueById("balance-total");
    const newBalanceTotal= previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
})