let carousel=document.getElementById("carousel");
let list=carousel.querySelector("ul");
let listElems=carousel.querySelectorAll("li");
let width=1800;
let count=1;
let position=0;


carousel.querySelector(".prev").onclick=function(){
position= Math.min(position+width*count,0);
list.style.marginLeft = position + 'px';
};

carousel.querySelector(".next").onclick=function(){
  position=Math.max(position-width*count,-width*(listElems.length-count));
  list.style.marginLeft = position + 'px';
};

