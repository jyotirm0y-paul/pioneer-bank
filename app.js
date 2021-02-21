// submit area
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function () {
  const loginArea = document.getElementById("submit-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = 'block';
})

// deposit area
const depositbtn = document.getElementById('add-deposit');
depositbtn.addEventListener('click', function () {
  const depositAmount = getInputNumber('deposit-amaount');
  document.getElementById('deposit-amaount').value = "";
  updateSpanText('current-balance', depositAmount)
  updateSpanText('current-deposit', depositAmount)
})

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}

// withdraw
const withdrawBtn = document.getElementById('add-withdrow');
withdrawBtn.addEventListener('click', function () {
  const withdrawNumber = getInputNumber('withdrow-amount');
  updateSpanText('current-withdraw', withdrawNumber);
  updateSpanText('current-balance', -1 * withdrawNumber);
  document.getElementById('withdrow-amount').value = "";
})

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;
  const amountNumber = parseFloat(Amount);
  return amountNumber;
}