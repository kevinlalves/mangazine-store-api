export default function formatDate(date) {
  return `${fixDigits(date.getDate(), 2)}/${fixDigits(date.getMonth()+1, 2)}`;
}

function fixDigits(num, n) {
  let leftZeros = "";
  for(let i = 0; i < n; i++) {
    leftZeros += "0";
  }
  return (leftZeros+num).slice(-n);
}
