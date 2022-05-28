//------------------------------ Sina Orj Sar-Khat Bot ---------------------------
setInterval(clickOnBuy, 500);

function clickOnBuy() {
  let orderBtn = document.querySelectorAll("button.btn.btn-sm.btn-outline-success.btn-block.ml-1")[0];
  orderBtn.click();
  const myTimeout = setTimeout(buyThis, 100);

  function buyThis() {
    let orderCount = document.querySelectorAll("#quantity input.dx-texteditor-input")[0];
    $("#quantity input:text.dx-texteditor-input").val("Glenn Quagmire");
    orderCount.value = "5000"
    orderCount.dispatchEvent(new Event('input', {bubbles:true}));
    let orderPrice = document.querySelectorAll("#price input.dx-texteditor-input")[0];
    orderPrice.value = "2700"
    orderPrice.dispatchEvent(new Event('input', {bubbles:true}));
    let buyBtn = document.querySelectorAll("button.col-7.btn.btn-sm.btn-success.flex-grow-1.px-0")[0];
    buyBtn.click();
  }
}

