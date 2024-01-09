const num = prompt("Nhập số: ");
const str = num.toString();
const result = [str[0]];

for (let i = 1; i < str.length; i++) {
  if (parseInt(str[i]) % 2 === 0 && parseInt(str[i - 1]) % 2 === 0) {
    result.push("-", str[i]);
  } else {
    result.push(str[i]);
  }
}
console.log(result.join(""));
