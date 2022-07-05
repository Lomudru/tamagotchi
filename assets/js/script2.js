import {morpion, link, Cat, ave, chat, base} from "./script.js";

export let div = document.querySelectorAll(".case");
export let whoWin = document.getElementById("whoWin");
export let turn = 0;
export let victoire = false;
function restart() {
    for (let i = 0 ; i < div.length; i++){
        div[i].classList.replace("croix", "case");
        div[i].classList.replace("cercle", "case");
        chat.classList.remove("smaller");
        chat.src = "assets/img/base.png";
        victoire = false;
        whoWin.textContent = "";
        morpion.classList.add("hide");
        for (let l = 0; l < link.length; l++){
            link[l].disabled = false;
        }
    }
    base();
}
export function win(who){
    if (div[0].classList.value === who && div[1].classList.value === who && div[2].classList.value === who || div[3].classList.value === who && div[4].classList.value === who && div[5].classList.value === who || div[6].classList.value === who && div[7].classList.value === who && div[8].classList.value === who || div[0].classList.value === who && div[3].classList.value === who && div[6].classList.value === who || div[1].classList.value === who && div[4].classList.value === who && div[7].classList.value === who || div[2].classList.value === who && div[5].classList.value === who && div[8].classList.value === who || div[0].classList.value === who && div[4].classList.value === who && div[8].classList.value === who || div[2].classList.value === who && div[4].classList.value === who && div[6].classList.value === who){
        if (who === "cercle"){
            whoWin.textContent = "Ton chat a gagner";
        }
        else if(who === "croix"){
            whoWin.textContent = "Bravo, Tu as gagner";
        }
        setTimeout(restart, 5000);
        victoire = true;

    }
    else if(div[0].classList.value !== "case" && div[1].classList.value !== "case" && div[2].classList.value !== "case" && div[3].classList.value !== "case" && div[4].classList.value !== "case" && div[5].classList.value !== "case" && div[6].classList.value !== "case" && div[7].classList.value !== "case" && div[8].classList.value !== "case"){
        whoWin.textContent = "Égalité";
        victoire = true;
        setTimeout(restart, 5000);

    }
}
// morpion facile
export function botplayeasy() {
    let bot = Math.floor(Math.random()*8);
    if (bot === 0 && div[0].classList.value === "case"){
        div[0].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 1 && div[1].classList.value === "case"){
        div[1].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 2 && div[2].classList.value === "case"){
        div[2].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 3 && div[3].classList.value === "case"){
        div[3].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 4 && div[4].classList.value === "case"){
        div[4].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 5 && div[5].classList.value === "case"){
        div[5].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 6 && div[6].classList.value === "case"){
        div[6].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 7 && div[7].classList.value === "case"){
        div[7].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }
    else if (bot === 8 && div[8].classList.value === "case"){
        div[8].classList.replace("case","cercle");
        turn--;
        win("cercle");
    }

    else{
        botplayeasy();
    }

}
// morpion dur
export function botplay() {
    if (victoire === false){
        let bot = Math.floor(Math.random() * 8);
        console.log(bot)
        // --------------------------------------
        // Défense
        // --------------------------------------
        if (div[4].classList.value === "croix" && div[8].classList.value === "croix" && div[0].classList.value === "case" || div[1].classList.value === "croix" && div[2].classList.value === "croix" && div[0].classList.value === "case" || div[3].classList.value === "croix" && div[6].classList.value === "croix" && div[0].classList.value === "case"){
            bot = 0;
        }
        if (div[4].classList.value === "croix" && div[7].classList.value === "croix" && div[1].classList.value === "case" || div[0].classList.value === "croix" && div[2].classList.value === "croix" && div[1].classList.value === "case"){
            bot = 1;
        }
        if (div[4].classList.value === "croix" && div[6].classList.value === "croix" && div[2].classList.value === "case" || div[0].classList.value === "croix" && div[1].classList.value === "croix" && div[2].classList.value === "case" || div[5].classList.value === "croix" && div[8].classList.value === "croix" && div[2].classList.value === "case"){
            bot = 2;
        }
        if (div[0].classList.value === "croix" && div[6].classList.value === "croix" && div[3].classList.value === "case" || div[4].classList.value === "croix" && div[5].classList.value === "croix" && div[3].classList.value === "case"){
            bot = 3;
        }
        if (div[3].classList.value === "croix" && div[5].classList.value === "croix" && div[4].classList.value === "case" || div[0].classList.value === "croix" && div[8].classList.value === "croix" && div[4].classList.value === "case" || div[2].classList.value === "croix" && div[6].classList.value === "croix" && div[4].classList.value === "case"){
            bot = 4;
        }
        if (div[2].classList.value === "croix" && div[8].classList.value === "croix" && div[5].classList.value === "case" || div[3].classList.value === "croix" && div[4].classList.value === "croix" && div[5].classList.value === "case"){
            bot = 5;
        }
        if (div[4].classList.value === "croix" && div[2].classList.value === "croix" && div[6].classList.value === "case" || div[7].classList.value === "croix" && div[8].classList.value === "croix" && div[6].classList.value === "case" || div[3].classList.value === "croix" && div[0].classList.value === "croix" && div[6].classList.value === "case"){
            bot = 6;
        }
        if (div[4].classList.value === "croix" && div[1].classList.value === "croix" && div[7].classList.value === "case" || div[6].classList.value === "croix" && div[8].classList.value === "croix" && div[7].classList.value === "case"){
            bot = 7;
        }
        if (div[4].classList.value === "croix" && div[0].classList.value === "croix" && div[8].classList.value === "case" || div[6].classList.value === "croix" && div[7].classList.value === "croix" && div[8].classList.value === "case" || div[2].classList.value === "croix" && div[5].classList.value === "croix" && div[8].classList.value === "case"){
            bot = 8;
        }
        // --------------------------------------
        // Attaque
        // --------------------------------------
        if (div[4].classList.value === "cercle" && div[8].classList.value === "cercle" && div[0].classList.value === "case" || div[1].classList.value === "cercle" && div[2].classList.value === "cercle" && div[0].classList.value === "case" || div[3].classList.value === "cercle" && div[6].classList.value === "cercle" && div[0].classList.value === "case"){
            bot = 0;
        }
        if (div[4].classList.value === "cercle" && div[7].classList.value === "cercle" && div[1].classList.value === "case" || div[0].classList.value === "cercle" && div[2].classList.value === "cercle" && div[1].classList.value === "case"){
            bot = 1;
        }
        if (div[4].classList.value === "cercle" && div[6].classList.value === "cercle" && div[2].classList.value === "case" || div[0].classList.value === "cercle" && div[1].classList.value === "cercle" && div[2].classList.value === "case" || div[5].classList.value === "cercle" && div[8].classList.value === "cercle" && div[2].classList.value === "case"){
            bot = 2;
        }
        if (div[0].classList.value === "cercle" && div[6].classList.value === "cercle" && div[3].classList.value === "case" || div[4].classList.value === "cercle" && div[5].classList.value === "cercle" && div[3].classList.value === "case"){
            bot = 3;
        }
        if (div[3].classList.value === "cercle" && div[5].classList.value === "cercle" && div[4].classList.value === "case" || div[0].classList.value === "cercle" && div[8].classList.value === "cercle" && div[4].classList.value === "case" || div[2].classList.value === "cercle" && div[6].classList.value === "cercle" && div[4].classList.value === "case"){
            bot = 4;
        }
        if (div[2].classList.value === "cercle" && div[8].classList.value === "cercle" && div[5].classList.value === "case" || div[3].classList.value === "cercle" && div[4].classList.value === "cercle" && div[5].classList.value === "case"){
            bot = 5;
        }
        if (div[4].classList.value === "cercle" && div[2].classList.value === "cercle" && div[6].classList.value === "case" || div[7].classList.value === "cercle" && div[8].classList.value === "cercle" && div[6].classList.value === "case" || div[3].classList.value === "cercle" && div[0].classList.value === "cercle" && div[6].classList.value === "case"){
            bot = 6;
        }
        if (div[4].classList.value === "cercle" && div[1].classList.value === "cercle" && div[7].classList.value === "case" || div[6].classList.value === "cercle" && div[8].classList.value === "cercle" && div[7].classList.value === "case"){
            bot = 7;
        }
        if (div[4].classList.value === "cercle" && div[0].classList.value === "cercle" && div[8].classList.value === "case" || div[6].classList.value === "cercle" && div[7].classList.value === "cercle" && div[8].classList.value === "case" || div[2].classList.value === "cercle" && div[5].classList.value === "cercle" && div[8].classList.value === "case"){
            bot = 8;
        }
        if (null){
            alert("ya un bug");
        }
        // Si bot = 0
        else if (bot === 0 && div[0].classList.value === "case") {
            div[0].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        }
        // Si bot = 1
        else if (bot === 1 && div[1].classList.value === "case") {
            div[1].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        }
        // Si bot = 2
        else if (bot === 2 && div[2].classList.value === "case") {
            div[2].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        }
        // Si bot = 3
        else if (bot === 3 && div[3].classList.value === "case") {
            div[3].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        }
        // Si bot = 4
        else if (bot === 4 && div[4].classList.value === "case") {
            div[4].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        } else if (bot === 5 && div[5].classList.value === "case") {
            div[5].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        } else if (bot === 6 && div[6].classList.value === "case") {
            div[6].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        } else if (bot === 7 && div[7].classList.value === "case") {
            div[7].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        } else if (bot === 8 && div[8].classList.value === "case") {
            div[8].classList.replace("case", "cercle");
            turn--;
            win("cercle");
        } else {
            botplay();
        }
    }
}
export function XandO() {
    if (ave.know <= 50){
        if (this.classList.value === "case" && victoire === false){
            if(turn === 0){
                this.classList.replace("case","croix");
                turn++;
                win("croix");
            }
            if (turn === 1){
                setTimeout(botplayeasy, 3);
            }
        }
    }
    else {
        if (this.classList.value === "case" && victoire === false){
            if(turn === 0){
                this.classList.replace("case","croix");
                turn++;
                win("croix");
            }
            if (turn === 1){
                setTimeout(botplay, 3);
            }
        }
    }
}




