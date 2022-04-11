
document.getElementById("number").innerHTML=1;
let num =document.getElementById("number").innerHTML;
let number=Number(num);
    function Check(){
        if(number>1){
            document.getElementById("number").style.color="green";
            }
            else{
            document.getElementById("number").style.color="black";
            }
    }
    function Decrease(){
       if(number>1){
           number--;
           document.getElementById("number").innerHTML=number.toString();
        Check();
       } 
    }
    function Reset(){
        number=1;
        document.getElementById("number").innerHTML=number.toString();
        Check();

    }
    function Increase(){
        number++;
        document.getElementById("number").innerHTML=number.toString();
        Check();
    }