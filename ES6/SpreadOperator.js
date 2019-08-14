const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2=[...arr1];  // change this line
})();
console.log(arr2);


//Các spread Operator chỉ hoạt động khi đặt trong các argument của hàm hay trong mảng string như trên