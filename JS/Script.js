let screen= document.getElementById("screen");
buttons= document.querySelectorAll("button");
let screenValue='';
function error(){screen.value="ERROR"}
for( item of buttons){
    item.addEventListener('click', (e)=>{
    buttonText= e.target.innerText;
    if(buttonText=='X'){
        if(screenValue=="invalid"){
            screenValue="";}
        screenValue+=buttonText
        screen.value=screenValue;
        
       
    }
   // else if(substring(screenValue.length-1)=="+" && (buttonText=="+" || buttonText=="-" || buttonText=="/" || buttonText=="X")){
   //     screen.value=screenValue
   // }
    else if (buttonText=='AC'){
        screenValue="";
        screen.value="";
    }
    else if (buttonText=='='){
           screenValue=screenValue.replace(/X/, '*');
           try{
           screen.value=eval(screenValue);}
           catch(err){
               screen.value="invalid"
           }
           screenValue=screen.value;
           
   
    }
    else if (buttonText=="C"){
        if (screen.value=="")screenValue=""; 
        else if (screenValue=="invalid"){
            screenValue="" 
        screen.value=screenValue;}
        else {screen.value=screenValue.substring(0,screenValue.length-1);
        screenValue=screen.value;}
       

        
       

       
    }
    else if(screenValue=="invalid"){
        screenValue=""
        screenValue+=buttonText;
        screen.value=screenValue;
    }
    else{
        screenValue+=buttonText;
        screen.value=screenValue;
    }
    
})

}