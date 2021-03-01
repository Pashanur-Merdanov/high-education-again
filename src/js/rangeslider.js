const minAmountRange = document.getElementById("minAmountRange");
const maxAmountRange = document.getElementById("maxAmountRange");
const minAmount = document.getElementById("minAmount");
const maxAmount = document.getElementById("maxAmount");
const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");

function setMinValue() {
  let _this = minAmountRange,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(
    parseInt(_this.value),
    parseInt(maxAmountRange.value) - 1
  );

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  minAmount.value = _this.value;
}
setMinValue();

function setMaxValue() {
  var _this = maxAmountRange,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(
    parseInt(_this.value),
    parseInt(minAmountRange.value) + 1
  );

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";

  maxAmount.value = _this.value;
}

setMaxValue();

function controlMin(e) {
  if (minAmount.value <= 0) {
    minAmount.value = 0;
  }
}

function controlMax() {
  if (maxAmount.value >= 100000) {
    maxAmount.value = 100000;
  }
}




minAmountRange.addEventListener("input", setMinValue);
maxAmountRange.addEventListener("input", setMaxValue);

minAmount.addEventListener("input", controlMin);
maxAmount.addEventListener("input", controlMax);


numberS.forEach((el) => {
  el.oninput = () => {
    let number1 = parseFloat(numberS[0].value),
      number2 = parseFloat(numberS[1].value);

    if (number1 > number2) {
      let tmp = number1;
      numberS[0].value = number2;
      numberS[1].value = tmp;
    }

    minAmount.value = number1;
    maxAmount.value = number2;
  }
});

// minAmountRange.addEventListener("mouseover", function () {
//   thumbLeft.classList.add("hover");
// });
// minAmountRange.addEventListener("mouseout", function () {
//   thumbLeft.classList.remove("hover");
// });
// minAmountRange.addEventListener("mousedown", function () {
//   thumbLeft.classList.add("active");
// });
// minAmountRange.addEventListener("mouseup", function () {
//   thumbLeft.classList.remove("active");
// });

// maxAmountRange.addEventListener("mouseover", function () {
//   thumbRight.classList.add("hover");
// });
// maxAmountRange.addEventListener("mouseout", function () {
//   thumbRight.classList.remove("hover");
// });
// maxAmountRange.addEventListener("mousedown", function () {
//   thumbRight.classList.add("active");
// });
// maxAmountRange.addEventListener("mouseup", function () {
//   thumbRight.classList.remove("active");
// });
