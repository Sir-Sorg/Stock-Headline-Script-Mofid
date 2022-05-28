//------------------------------ Sina Orj Sar-Khat Bot ---------------------------
const milliseconds = 300
//Hamishe bayad bishtar az 200 bashad !
const orderInterval = setInterval(harvestSymbol, milliseconds);

function harvestSymbol() {
  $("button.btn.btn-sm.btn-outline-success.btn-block.ml-1").click();
  setTimeout(buyThis,100)
}

function buyThis() {

  const myCount = 5480;
  const myPrice = 2700;

  let orderCount = document.querySelectorAll("#quantity input.dx-texteditor-input")[0];
  orderCount.value = myCount;
  orderCount.dispatchEvent(new Event('input', { bubbles: true }));

  let orderPrice = document.querySelectorAll("#price input.dx-texteditor-input")[0];
  orderPrice.value = myPrice;
  orderPrice.dispatchEvent(new Event('input', { bubbles: true }));

  $("button.col-7.btn.btn-sm.btn-success.flex-grow-1.px-0").click();
  console.log("Purchase request sent");
}

function by() {
  clearInterval(orderInterval)
}
