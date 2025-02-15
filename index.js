
const div = document.querySelector("div");

div.addEventListener("click",function (event){
    console.log("click is occured");
    console.log("e.target");
    console.log("e.target.id");
    console.log("e.target.className");
    console.log("e.target.innerHTML");
    console.log("e.target.innerText");
    console.log("e.target.textContent");

});

div.addEventListener("dblclick",function (){
    console.log("dblclick is occured");
});

div.addEventListener("mousedown",function (){
    console.log("mousedown is occured");
});

div.addEventListener("mouseup",function (){
    console.log("mouseup is occured");
});

div.addEventListener("mouseenter",function (){
    console.log("mousedown is occured");
});

div.addEventListener("mouseleave",function (){
    console.log("mouseleave is occured");
});

div.addEventListener("mousemove",function (){
    console.log("mousemove is occured");
});

div.addEventListener("mouseover",function (){
    console.log("mouseover is occured");
});

div.addEventListener("mousemove",function (e){
    // console.log("clientX = " + e.clientX + "clientX = " + e.clientY); -> compare to window.
    console.log("offsetX = " + e.offsetX + "offsetY = " + e.offsetY);
});