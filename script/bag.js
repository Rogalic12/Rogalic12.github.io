var k=0;
var show=false;

function count(x) {    
    k=k+1;
    document.getElementById("count").innerHTML=k;   
}

function baglistshow(){
   if (show==false) {
    document.getElementById("list").style.display="block";   
    show=true;
   }
   else{
    document.getElementById("list").style.display="none";   
    show=false;
   }
}

