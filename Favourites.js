let info=localStorage.getItem("items");
const data=JSON.parse(info);

console.log(data);
const add=document.getElementById("add");

// alert(add.innerHTML)
if(data.length!=0){
    add.innerHTML="";
}
for(let i=0;i<data.length;i++){
       
       let outer=document.createElement("div");
       let img=document.createElement("img");
       let p=document.createElement("p");
       let del=document.createElement("span");
       let detail=document.createElement("button");
   
     img.setAttribute("src",data[i].img);
     img.setAttribute("class","wid")
     detail.setAttribute("id","detail")
     p.innerHTML=data[i].name;
     del.setAttribute("class","scale")
     del.setAttribute("id","del");
     del.innerHTML="❤️";
     detail.innerHTML="Details"

     img.setAttribute("id","img");
     p.setAttribute("id","p")
     outer.setAttribute("id","outer")
     outer.appendChild(img);
     outer.appendChild(p);
     outer.appendChild(del);
     outer.appendChild(detail);
     add.appendChild(outer)

     del.onclick=(()=>{
         let arr=[];

         for(let i=0;i<data.length;i++){
             if(data[i].name===p.innerHTML){
                 continue;
             }
             arr.push(data[i]);
         }
         alert("remove from Favourites")
          add.removeChild(outer);
          localStorage.setItem("items",JSON.stringify(arr));


     })

     detail.onclick=((e)=>{
        const detail = {
          name : p.innerHTML,
          img:img.src
        }
             localStorage.setItem("detail",JSON.stringify(detail));
              location.href="Details.html"
      })





}