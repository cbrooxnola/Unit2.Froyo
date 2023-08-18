let input = window.prompt('Please enter your orders, separated by commas');
let arr = input.split(',');
//console.log(arr);
let table = {};
for (let i = 0; i < arr.length; i++){
 if (table.hasOwnProperty(arr[i])){
    table[arr[i]] += 1;
  }
  else {
    table[arr[i]] = 1;
  }
}
console.log(table);