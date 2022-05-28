let goToPurchase = document.querySelector("button.btn.btn-sm.btn-outline-success.btn-block.ml-1")
goToPurchase.click();
console.log('Buy button clicked -')




$("body").on('DOMSubtreeModified', "button.col-7.btn.btn-sm.btn-success.flex-grow-1.px-0", function() {
  console.log('changed');
  buyThis()
});





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
}