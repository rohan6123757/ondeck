let a = document.getElementById("menu");
a.addEventListener("click",function(){ 
    if (a.getAttribute("src")!="/Assets/Close.svg"){
        a.setAttribute("src","/Assets/Close.svg");
        document.getElementsByClassName("navbar")[0].classList.add("navbar_press");
        document.getElementsByClassName("navItems")[0].classList.add("pressed");
        document.getElementsByClassName("container_two")[0].classList.add("imgPress");
        // document.getElementsByClassName("navbar")[0].classList.remove("onPress");
        document.getElementById("logo").style.display="none"
    }else{
        a.setAttribute("src","/Assets/Menu.svg");
        // document.getElementsByClassName("navbar")[0].classList.add("onPress");
        document.getElementsByClassName("navbar")[0].classList.remove("navbar_press");
        document.getElementsByClassName("navItems")[0].classList.remove("pressed");
        document.getElementsByClassName("container_two")[0].classList.remove("imgPress");
        document.getElementById("logo").style.display="block"
    }
})