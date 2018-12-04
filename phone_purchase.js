let bankMoney = 300;

let phonePrice = 80;
const accessoryPrice = 10;

const fullPricePhone= phonePrice + (0.08*phonePrice)
const fullPriceAccessory = accessoryPrice + (0.08*accessoryPrice)

function phonePurchase() {
    if (fullPricePhone < bankMoney) {
      console.log('Buying phone')
      bankMoney = bankMoney - fullPricePhone;
      return bankMoney;
    }
}

function accessoryPurchase() {
  if ((2 *fullPricePhone) < bankMoney) {
    console.log('Buy accessory too!')
    bankMoney = bankMoney - fullPriceAccessory;
  }
  return bankMoney;
}

function formatMoney() {
  bankMoney = '£' + bankMoney.toFixed(2)
}

phonePurchase()
accessoryPurchase()
formatMoney()
console.log('You have ' + bankMoney + ' remaining')
