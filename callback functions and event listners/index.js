 /*

// what is callback function in javascript 


setTimeout(function(){
 
    console.log("timer")

} , 5000)

function x(y){
   console.log("X");
   y();
}

x(function y(){
    console.log("y")
})


// javascrit is  a synchronus and single threaded lamguage 

// blocking the main thread 
*/




// powers of callbacks 


// deep about event listners 

// closures demo with event listners 

// scope demo with evnet listner 

// garbage collections and removeeventlistner 


function attacheventlistener(){
    let count = 0;
    document.getElementById("clickme")
    .addEventListener("click", function xyz(){
        console.log("button clicked" ,++count ); 
    
    })
    
}
attacheventlistener();

