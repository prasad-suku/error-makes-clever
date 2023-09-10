document.getElementById("brands-left-activate").addEventListener("click",function(){
    document.querySelector(".brands-container").scrollBy({
        top:0,
        left:-200,
        behavior:"smooth"
    })
})

document.getElementById("brands-right-activate").addEventListener("click",function(){
    document.querySelector(".brands-container").scrollBy({
        top:0,
        left:200,
        behavior:"smooth"
    })
})