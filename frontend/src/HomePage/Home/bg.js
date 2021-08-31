document.addEventListener("mousemove",per1)

function per1(e) {
this.querySelectorAll('.homeimg1').forEach(item => {
    const x = (window.innerWidth - e.pageX * 2) / 25;
    const y = (window.innerHeight - e.pageY * 2) / 25;
                
    item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })

    this.querySelectorAll('.homeimg2').forEach(item => {
        var a = (window.innerWidth - e.pageX * 2) / 25;
        var b = (window.innerHeight - e.pageY * 2) / 25;
        
        a = a*(-1)
        b = b*(-1)
        item.style.transform = `translateX(${a}px) translateY(${b}px)`;
        })
}