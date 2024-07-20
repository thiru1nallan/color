const btn=document.getElementById("btn")
const color=document.getElementById("color")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
   
btn.addEventListener(click,changeBg()){
    let hexcolor='#'
for(let i=1;i<=6;i++){
    hexcolor+=randomHexvalue()
}    
wrap.style.backgroundColor=hexcolor
color.innerHTML=hexcolor
}
function randomHexvalue(){
    let index=math.floor(Math.random()*16)
    return hex[index]
}