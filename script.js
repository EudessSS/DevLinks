function tooglemod(){
    // Pega o elemento HTML
    const html = document.documentElement

    //Faz a troca de Tema
    html.classList.toggle("light")

    //Faz a troca de avatar
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src","/DevLinks/assets/AVATAR-LIGHT.png")
        img.setAttribute("alt","Batman")
    }else{
        img.setAttribute("src","/DevLinks/assets/BATMAN EDITADO.png")
        img.setAttribute("alt","bruce wayne")
    }
    
    
}