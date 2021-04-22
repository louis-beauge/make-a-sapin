let go = document.querySelector("button")
go.addEventListener("click", sapin);

function sapin(){
    let main = document.querySelector("main");
    let nbLignes = document.querySelector("input").value;
    let ligne = "";
    let nbEtoilesParLignes = 1;

    for(let i=0 ; i<nbLignes ; i++){
        ligne += "<div>";
        for(let j=0 ; j<nbEtoilesParLignes ; j++){
            //ligne += "<span>*</span>";
            ligne += `<span class="feuille">*</span>`;
        } 
        ligne += "</div>";

        //nbEtoilesParLignes += 2;
        if(i%3 == 2){
            nbEtoilesParLignes -= 2;
        } else{
            nbEtoilesParLignes += 3;
        }
    }
    main.innerHTML += ligne;

    let tronc = "";
    
    for(let i=0 ; i<3 ; i++){
        tronc += "<div>";
        for(let j=0 ; j<3 ; j++){
            //tronc += `<span>*</span>`;
            tronc += `<span class="tronc">*</span>`;
        }
    }

    main.innerHTML += tronc;
}