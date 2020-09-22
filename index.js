// 2 id icin iki var tanimlamasi


//rastgele sayi uretme fonk

function getRandomArbitrary(){
    let numb = Math.floor(Math.random() * 100);
    return numb;
}
window.onload = function (){
    getRandomArbitrary();
}

let sonuc;
    sonuc = getRandomArbitrary();
    console.log(sonuc);
   
var count = 0;
function calcul(){
    number = document.getElementById('number').value;
    number = Number(number);
    
    if(number<sonuc){
        alert("Please increase your number!!!");
        count+=1;
        if(sonuc-number<5) {
            document.getElementById('result').innerHTML= "You're very hot!!";
        }
    }
    else if(number>sonuc){
        alert("Please decrease your number!!!");
        count+=1;
        if(number-sonuc<5) {
            document.getElementById('result').innerHTML= "You're very hot!!";
        }
    }
    else{
        alert('Bravo');
        
    }
    console.log(count);
    document.getElementById('counter').innerHTML= String(count);

}



