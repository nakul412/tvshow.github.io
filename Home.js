

var Addcard=document.getElementById("add");
Addcard.setAttribute("id","Addcard")

var arr=[];
var rem=[];

var additem=[];

const gethero=async()=>{
      try{
           
          Addcard.innerHTML=""
        // rem.clear();
        arr=[];
          let superhero=document.getElementById("getdata").value;
          console.log(superhero)
          let data=await fetch(`https://www.superheroapi.com/api.php/411277127873205/search/${superhero}`);
          let d= await data.json();
          console.log(d)
          
          if(d.response=='success'){
           
            console.log(d.results[0].name)
            for(let i=0;i<d.results.length;i++){
                var name=d.results[i].name;
                var url=d.results[i].image.url;
                // console.log(url)
                
                if(arr.includes(name)){
                  continue;
                }

                arr.push(name)

               

           let outer=document.createElement("div");
           let side=document.createElement("div");
           let upper=document.createElement("div");
           let below=document.createElement("div");
           let nside=document.createElement("div");
            
           let img=document.createElement("img");
           let p=document.createElement("p");
           let detail=document.createElement("button");
           let add=document.createElement("button");
            
            p.innerHTML=name;
            

            p.setAttribute("id","text")
            img.setAttribute("src",url)
            img.setAttribute("id","img")
            nside.appendChild(upper);
            nside.appendChild(below);
            
            side.appendChild(img);
            upper.appendChild(p);
            below.appendChild(detail);
            below.appendChild(add);
            
            outer.appendChild(side);
            outer.appendChild(nside)
            
            outer.setAttribute("id","outer")
            
            side.setAttribute("id","side")
            nside.setAttribute("id","nside")
            
            upper.setAttribute("id","upper")
            
            below.setAttribute("id","below")

            detail.setAttribute("id","detail")

            detail.innerHTML="Details"
            add.innerHTML="Add to my Favourites 😍"

            add.setAttribute("id","add")

               Addcard.appendChild(outer);
               rem.push(outer);


               detail.onclick=((e)=>{
                const detail = {
                  name : p.innerHTML,
                  img:img.src
                }
                    //  outer.classList.add("out")
                     localStorage.setItem("detail",JSON.stringify(detail));
                      location.href="Details.html"
              })
              
              
              
              add.onclick=(()=>{
                 
                if(add.innerHTML==="Remove from my Favourites ❌"){
                    let arr=[];
                  //  alert("rem")
                  for(let i=0;i<additem.length;i++){
                      if(additem[i].name===p.innerHTML){
                          continue;
                      }
                      arr.push(additem[i]);
                  }
                  alert("removed from Favourites")
                   localStorage.setItem("items",JSON.stringify(arr));
                   add.innerHTML="Add to my Favourites 😍"
                   add.style.backgroundColor="green"
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
                 
                  if(i.name!=p.innerHTML && additem.includes(i.name)==false){
                    additem.push(i);
                  }
                  

                }
                   
                }
                additem.push(detail);
                alert("Added to Favourites")
                add.innerHTML="Remove from my Favourites ❌";
                add.style.backgroundColor= "rgb(255,87,63)"
                localStorage.setItem("items",JSON.stringify(additem));
              }

              })

          }
          }
      }
      catch{
         console.log("error");
      }
}

