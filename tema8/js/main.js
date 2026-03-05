let figuras = document.querySelectorAll(".figurita");

figuras.forEach(function(fig){
    fig.addEventListener("click", function(){
        //alert("hiciste click en la figurita" + this.innerText);
        //this.style.background="orange";

        // Al hacer click le agregamos la clase "seleccionada" para cambiar el estilo
        this.classList.add("seleccionada")
    });
});