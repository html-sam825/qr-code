const lengthp = document.querySelector("#length-number");
const UpperCase = document.querySelector("#UpperCase");
const LowerCase = document.querySelector("#LowerCase");
const number = document.querySelector("#numbers");
const Symbols = document.querySelector("#Symbols");
const passinp = document.querySelector("#pass-input");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");

console.log(lengthp.value);
console.log(UpperCase.checked);
console.log(LowerCase.checked);
console.log(number.checked);
console.log(Symbols.checked);

const UpperCasestr = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const LowerCasestr = "abcdefghijklmnopqrstuvwxyz";
const numberstr = "0123456789";
const Symbolsstr = "!@#$%^&*()_-+={}[]:;''<>,.?/";
let password = "";

generate.addEventListener("click", () => {
  let str = "";
  if (UpperCase.checked) {
    str += UpperCasestr;
  }

  if (LowerCase.checked) {
    str += LowerCasestr;
  }

  if (number.checked) {
    str += numberstr;
  }

  if (Symbols.checked) {
    str += Symbolsstr;
  }
  console.log(str, "str");

  for (let i = 0; i < lengthp.value; i++) {
    console.log(str.length, "str.length");
    let index = Math.floor(Math.random() * str.length);
    console.log(index, "index");
    console.log("mMath.random()", Math.random());
    console.log("Math.random()" * "str.length", Math.random() * str.length);
    console.log(
      "Math.floor(Math.random() * str.length)",
      Math.floor(Math.random() * str.length)
    );
    console.log(str[index]);
    password += str[index];
  }
  console.log(password, password);
  passinp.value = password;
});

copy.addEventListener("click", () => {
  if (passinp.value === "") {
    alert("Please Generate a Password First ");
  } else {
    const newEle = document.createElement("textarea");
    newEle.value = passinp.value;
    document.body.appendChild(newEle);
    newEle.select();
    document.execCommand("copy");
    alert("Password Copied to Clipboard");
    newEle.remove();
  }
});
