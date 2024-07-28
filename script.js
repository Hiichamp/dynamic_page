function loadingpage(){
    var tl = gsap.timeline()


gsap.from(".line h1",{
    y:150,
    stagger:0.2,
    delay:0.5,
    duration:0.6

});
tl.from("#line1-part1",{
    opacity : 0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")

        var grow = 0;
        
        setInterval(function(){
            if(grow<100){
                grow++
                h5timer.innerHTML = grow++;
        
            }else{
        h5timer.innerHTML = grow
            }
        },30)
    },
});
tl.to('.line h2',{
    animationName : "anime",
    opacity:0,
})
tl.to("#loader",{
    opacity : 0,
    delay:2,
    duration:0.2,
});


tl.from("#page1",{
    y:1600,
ease:Power4,
opacity:0,
duration:0.6,
delay:0.2
})


tl.to("#loader",{
    display:"none"
});
tl.from("#nav",{
   opacity:0
})
tl.from("#hero1 h1,#hero2 h1 ,#hero3 h2,#hero4 h1 ",{
    y:120,
    stagger:0.2
})
}

loadingpage()

document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets. x,
        top:dets.y,

    })
   
})

function crsr(){
    
Shery.makeMagnet("#nav-part2 h4");
}
    
crsr()