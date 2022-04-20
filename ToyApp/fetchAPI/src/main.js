import ProductOptions from "./ProductOptions.js"

const dummyData = [
  {
    optionName: "더미 데이터",
    optionPrice: 10000,
    stock: 10
  },
  {
    optionName: "더미 데이터2",
    optionPrice: 10000,
    stock: 10
  },
  {
    optionName: "더미 뎅;터3",
    optionPrice: 10000,
    stock: 0
  }
]

const $target = document.querySelector("#app")
new ProductOptions ({
  $target,
  initialState: dummyData
})