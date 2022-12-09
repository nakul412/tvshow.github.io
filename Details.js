
let info=localStorage.getItem("detail");
const data=JSON.parse(info);

console.log(data);
var additem=[];
let outer=document.createElement("div");
let img=document.createElement("img");
let p=document.createElement("p");
let del=document.createElement("span")
del.setAttribute("class","scale")
del.setAttribute("id","del");
del.innerHTML="❤️";

img.setAttribute("src",data.img);
p.innerHTML=data.name;

img.setAttribute("id","img");
p.setAttribute("id","p")

outer.setAttribute("id","outer")


outer.appendChild(img);
outer.appendChild(p);
outer.appendChild(del);
del.onclick=(()=>{
                 
    if(del.innerHTML==="🤍"){
        let arr=[];

      for(let i=0;i<additem.length;i++){
          if(additem[i].name===p.innerHTML){
              continue;
          }
          arr.push(additem[i]);
      }
      alert("removed from Favourites")
       localStorage.setItem("items",JSON.stringify(arr));
       del.innerHTML="❤️"
    //    add.style.backgroundColor="green"
    }
    else{
      additem=[];
    const detail = {
      name : p.innerHTML,
      img:img.src
    }
    let info=localStorage.getItem("items");

    if(info!=undefined){
      
    const data=JSON.parse(info);
    console.log(data);

    for(let i of data){
     
      if(i.name!=p.innerHTML)
      additem.push(i);

    }
       
    }
    additem.push(detail);
    alert("Added to Favourites")
    del.innerHTML="🤍";
    // add.style.backgroundColor= "rgb(255,87,63)"
    localStorage.setItem("items",JSON.stringify(additem));
  }

  })
const add=document.getElementById("add");

add.appendChild(outer)