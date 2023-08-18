let input = window.prompt('Please enter your orders, separated by commas');
let arr = input.split(',');
//console.log(arr);
// let table = {};
// for (let i = 0; i < arr.length; i++){
//  if (table.hasOwnProperty(arr[i])){
//     table[arr[i]] += 1;
//   }
//   else {
//     table[arr[i]] = 1;
//   }
// }
// console.log(table);
// function generateTable(){
//   const tbl = document.createElement('table');
//   const tblBody = document.createElement('tbody');
//   for (let i = 0; i < 2; i++){
//     const row = document.createElement('tr');
//     for (let j = 0; j < arr.length; j++){
//       const cell = document.createElement('td');
//       const cellText = document.createTextNode(arr[j]);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//     tblBody.appendChild(row);
//   }
//   tbl.appendChild(tblBody);
//   document.body.appendChild(tbl);
//   tbl.setAttribute('border', '2');
// }