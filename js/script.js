
let num =document.getElementById("number").innerHTML;
let number=Number(num);
    console.log(number);

    function Check(){
        if(number>0){
            document.getElementById("number").style.color="green";
            }
            else if(number==0){
            document.getElementById("number").style.color="black";
            }
            else{
            document.getElementById("number").style.color="red";
            }
    }

    function Decrease(){
        number--;
        document.getElementById("number").innerHTML=number.toString();
        Check();
       
        
    }
    function Reset(){
        number=0;
        document.getElementById("number").innerHTML=number.toString();
        Check();

    }
    function Increase(){
        number++;
        document.getElementById("number").innerHTML=number.toString();
        Check();
    }