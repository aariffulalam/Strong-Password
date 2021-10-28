'use-strict';
const prompt=require("prompt-sync")() 
const ls1=["@","#","$","&"]; 
const ls2=["1","2","3","4","5","6","7","8","9","0"];
const ls3=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
const ls4=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
password=prompt("enter your password :-  ")
// console.log(ls1.includes("&"));
a=0
b=0
c=0
d=0
for (i of password){
    // console.log(password[i]);
    if (ls1.includes(i) ){
        a+=1
    }
    if(ls2.includes(i) ){
        b+=1
    }
    if (ls3.includes(i) ){
        c+=1
    }
    if(ls4.includes(i)){
        d+=1
    }
}
console.log(a,b,c,d);
if (a>=1 && b>=1 && c>=1 && d>=1 && password.length>=8 && password.length<=16){
    console.log(password,"          your passwor is strong");
}else{
    console.log("your password is week");
}