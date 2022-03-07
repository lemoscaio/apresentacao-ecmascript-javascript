var x = 2; 
//global  
function funcao() { 
    //local
    console.log(x); 
    var x = 3;  
    console.log(x);
};