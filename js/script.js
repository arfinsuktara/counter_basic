

let counter = document.querySelector(".counter")
//eikhaane dataset bolte html er data- attribute k bujhai
//console.log(counter.dataset.number);
//eikhaane dataset bolte html er data- attribute k bujhai

let x = counter.dataset.number
let count = 0;

//akhon count ta k counterUP name ekta function diye call krte hbe
function counterUP(){
//akhon count ta k counterUP name ekta function diye call krte hbe

//count++ mane eikhane count = 0 ta 1 kre barche
    count++
//count++ mane eikhane count = 0 ta 1 kre barche

//html e j counter ache ta InnerHTML diye nite hbe
    counter.innerHTML = count;
//html e j counter ache ta InnerHTML diye nite hbe

//eikhane if count mane 1  r x mane dataset.number
    if (count == x){
 //eikhane if count mane 1 r x mane dataset.number

//clearInterval er kaj hocche let stop variable k bondho kora
        clearInterval(stop);
 //clearInterval er kaj hocche let stop variable k bondho kora
    }


}
//setInterval counterUP function k call korar jonno ja 10 projonto cholbe
let stop = setInterval(function(){
    counterUP();
//setInterval counterUP function k call korar jonno  ja 10 projonto cholbe
    

}, 100);
   