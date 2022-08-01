// Bài tập 1: Tìm số nguyên dương nhỏ nhất
// input: number
// output: i sao cho 
function xem(){
    number = +document.getElementById('number').value;
    let sum = 0;
    let count = 0;
    while(sum < number){
        count++
        sum = sum + count
        
    }
    result = "<p> Số nguyên dương nhỏ nhất là: " + count + "</p>";
    document.getElementById('result').innerHTML = result;

}

// bài tập 2

function tinhTong(){
    numberX = +document.getElementById('numberX').value;
    numberN = +document.getElementById('numberN').value;
    
    let sum = 0;
    for (i = 1;i <= numberN; i++ ){
       
        sum += Math.pow(numberX, i);
    
    }
   document.getElementById('tagTong').innerHTML = "<p>Tổng: " + sum + "</p>";
}

// Bài tập 3
 function giaiThua(){
    numberN = +document.getElementById('nhapN').value;
    let F = 1;
    for(i = 1; i <= numberN; i++){
        F *= i;
    }
    result = "<p>Giai thừa của " + numberN + " là " + F + "</p>";
    document.getElementById('tagGiaiThua').innerHTML = result;
 }

//  bài tập 4