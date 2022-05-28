//------------------------------ Sina Orj Sar-Khat Bot ---------------------------
const milliseconds = 300
//↴ Hamishe bayad bishtar az 200 bashad !
const orderInterval = setInterval(harvestSymbol, milliseconds);

function harvestSymbol() {
  let goToPurchase = document.querySelector("button.btn.btn-sm.btn-outline-success.btn-block.ml-1")
  goToPurchase.click();
  console.log('Buy button clicked -')

  // $.when($("div.h6.mb-0.d-flex").text()).then(function () {
  //   console.log('Buy Started +')
  //   buyThis()
  // });

  $("body").on('DOMSubtreeModified', "button.col-7.btn.btn-sm.btn-success.flex-grow-1.px-0", function () {
    console.log('Buy Started +')
    buyThis()
  });
}

function buyThis() {

  const myCount = 5480;
  const myPrice = 2700;

  let orderCount = document.querySelector("#quantity input.dx-texteditor-input");
  orderCount.value = myCount;
  orderCount.dispatchEvent(new Event('input', { bubbles: true }));

  let orderPrice = document.querySelector("#price input.dx-texteditor-input");
  orderPrice.value = myPrice;
  orderPrice.dispatchEvent(new Event('input', { bubbles: true }));

  let buyButton = document.querySelector("button.col-7.btn.btn-sm.btn-success.flex-grow-1.px-0");
  buyButton.click()
  console.log("Purchase request sent ✔");

  return;
}

function by() {
  clearInterval(orderInterval)
}
