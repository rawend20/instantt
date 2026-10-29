
window.addEventListener(scroll,function(){
    var scrollValue = window.scrollY;
    var navebar = document.querySelector(".navebar");
    if(scrollValue>300){
        navebar.setAttribute("class","navbar md:navbar-expand bg-primary");

    }else{
        navebar.setAttribute("class","navbar md:navbar-expand bg-danger");

    }
});

 var mause = setInterval(myTimer,1000);
function myTimer(){
    var d = new Date();
    document.getElementById("demo").innerHTML= d;
}

function getData(){
    alert(123);
}