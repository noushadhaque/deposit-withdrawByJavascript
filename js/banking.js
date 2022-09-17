// deposit amount

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    depositInput.value = '';

    const depositTotal = document.getElementById('deposit-total');
    const preDepositAmount = depositTotal.innerText;
    
    const newDepositTotal = parseFloat(preDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(newDepositAmount) + parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount;
})
+
// withdraw amount 

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;
    withdrawInput.value = '';

    const withdrawTotal = document.getElementById('withdraw-total');
    const preWithdrawAmount = withdrawTotal.innerText;

    const newWithdrawTotal = parseFloat(preWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = balanceTotal.innerText;

    const finalBalanceAmount = parseFloat(balanceTotalAmount) - parseFloat(newWithdrawTotal);
    balanceTotal.innerText = finalBalanceAmount;
})