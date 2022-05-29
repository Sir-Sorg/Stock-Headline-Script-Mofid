//------------------------------ Sina Orj Sar-Khat Bot ---------------------------
const milliseconds = 350

const orderInterval = setInterval(harvestSymbol, milliseconds);

function harvestSymbol() {
  let goToPurchase = document.querySelector("button.btn.btn-sm.btn-outline-success.btn-block.ml-1")
  goToPurchase.click();
  console.log('Purchase button clicked ➼')

  $("body").on('DOMSubtreeModified', "button.col-7.btn.btn-sm.btn-success.flex-grow-1.px-0", function () {
    console.log('Purchase process is starting ☸')
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
}

function end() {
  clearInterval(orderInterval)
  const shape = `
            88                                             88              
            88                                             ""              
            88                                                             
8b,dPPYba,  88,dPPYba,   ,adPPYba,   ,adPPYba, 8b,dPPYba,  88 8b,     ,d8  
88P'    "8a 88P'    "8a a8"     "8a a8P_____88 88P'   \`"8a 88  \`Y8, ,8P'   
88       d8 88       88 8b       d8 8PP""""""" 88       88 88    )888(     
88b,   ,a8" 88       88 "8a,   ,a8" "8b,   ,aa 88       88 88  ,d8" "8b,   
88\`YbbdP"'  88       88  \`"YbbdP"'   \`"Ybbd8"' 88       88 88 8P'     \`Y8  
88                                                                         
88     
By 𝙎𝙞𝙣𝙖 𝙊𝙧𝙟 - Version 𝑽1.1
------- Github: 𝙎𝙞𝙧-𝙎𝙤𝙧𝙜  LinkedIn: 𝙎𝙞𝙣𝙖 𝙊𝙧𝙤𝙟𝙡𝙤
`
  console.log(shape)
}
