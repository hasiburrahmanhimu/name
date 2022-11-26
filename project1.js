var a=document.querySelector(".name");
var b=document.querySelector(".id");
var c=document.querySelector(".intake");
var d=document.querySelector(".section");
var e1=document.querySelector("#blood");
var f=document.querySelector("#dept");
var g=document.querySelector("#submit");
var i=document.querySelector(".sec2");
var j=document.querySelector(".name2");
var k=document.querySelector(".idcp");
var l=document.querySelector(".procp");
var m=document.querySelector(".intcp");
var n=document.querySelector(".bloodp");

g.addEventListener("click", (e) => {
    e.preventDefault();
    j.innerHTML=a.value;
    k.innerHTML=b.value;
    l.innerHTML=f.value;
    m.innerHTML=c.value;
    i.innerHTML=d.value;
    n.innerHTML=e1.value;
   
})