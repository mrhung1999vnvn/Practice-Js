
//Random -> return decimal then * 20 to get number from 0 to 20
function Random(){
    return Math.random()*20;
}

var x=Random();
console.log(Math.floor(x)); //Lam tron xuong so gan nhat




function newRandom(min,max){
    var x=Math.random();
    return x*(max-min+1)+min+' '+x;
}
//To understand:
// Step 1: Random một số thập phân ngẫu nhiên
// Step 2: Lấy số random nhân với một số vd: *20=> sẽ output ra số 0<=x<20
// *Bonus: (max-min+1) => vd: 15-5 = 10 then +1 = 11 ==> output: 0<=x<11
// Step 3: Cộng với min để giá trị ouput ra năm trong khoảng min max đã cho

console.log(newRandom(5,15));