import {div, turn, victoire, win, botplayeasy, botplay, XandO, whoWin} from "./script2.js";

let catChoice               = document.querySelectorAll("#choice img");
let choice                  = document.getElementById("choice");
let choiceName              = document.getElementById("takeName");
let catImg                  = document.querySelectorAll(".cat");
let food                    = document.querySelector("#food p");
let foodPourcent            = document.getElementById("food");
let know                    = document.querySelector("#know p");
let knowPourcent            = document.getElementById("know");
let happiness               = document.querySelector("#happiness p");
let happinessPourcent       = document.getElementById("happiness");
let entertainment           = document.querySelector("#entertainment p");
let entertainmentPourcent   = document.getElementById("entertainment");
let love                    = document.querySelector("#love p");
let lovePourcent            = document.getElementById("love");
let sleep                   = document.querySelector("#sleep p");
let sleepPourcent           = document.getElementById("sleep");
let nameValidator           = document.getElementById("buttonName");
let textarea                = document.getElementById("name");
let catZone                 = document.getElementById("catZone");
let h2                      = document.querySelector("h2");
let allbutton               = document.getElementById("btns");
export let link             = document.querySelectorAll(".action button");
export let chat             = document.getElementById("imgcat");
let body                    = document.querySelector("body");
let effect                  = document.getElementById("effect");
let outsideEvent            = document.getElementById("outside");
export let morpion          = document.getElementById("morpion");
let plante                  = document.getElementById("plante");
let bread                   = document.getElementById("bread");
let gift                    = document.getElementById("gift");
let brille                  = document.getElementById("brille");
let inside                  = document.getElementById("inside");
let planteOn                = false;
let breadOn                 = false;
let astroSign               = document.querySelectorAll("#signe img");
let astro                   = document.getElementById("astro");
// =====================
// Les stats de mon chat
// =====================
export function Cat() {
    this.type       = this.classList;
    this.food       = 50;
    this.know       = 10;
    this.sleep      = 50;
    this.happiness  = 50;
    this.entertain  = 50;
    this.love       = 50;
    this.Max        = 100;
    this.Min        = 0;
    this.astro      = false;
}
export let ave = new Cat();

function woCat() {
    ave.type = this.classList;
    for (let j = 0; j < catImg.length; j++){
        catImg[j].classList.add(ave.type);
    }
    choice.classList.toggle("hide");
    choiceName.classList.toggle("hide");
    affiche();
}

for (let i = 0 ; i < catChoice.length; i++){
    catChoice[i].addEventListener("click", woCat);
}

// ==========================
// le nom du chat et le signe 
// ==========================
function verifyName(event) {
    if (textarea.value.length > 1 && ave.astro){
        nameValidator.disabled = false;
        if (event.key === "Enter"){
            nameValidator.click();
        }
    } else {
        nameValidator.disabled = true;
    }
}
function validName() {
    choiceName.classList.toggle("hide");
    catZone.classList.toggle("hide");
    allbutton.classList.toggle("hide");
    h2.innerText = textarea.value;
    body.classList.add("bgBase");
    specialName();
}
function quelAstro() {
    ave.astro = this.classList;
    for (let a2 = 0; a2 < astroSign.length; a2++){
        astroSign[a2].classList.add("select");
    }
    this.classList.remove("select");
    verifyName();
}
for (let a = 0; a < astroSign.length; a++){
    astroSign[a].addEventListener("click", quelAstro)
}
function specialName() {
    if (textarea.value === "pikachu" || textarea.value === "Pikachu" || textarea.value === "pixel" || textarea.value === "Pixel" || textarea.value === "panda" || textarea.value === "Panda" || textarea.value === "carapuce" || textarea.value === "Carapuce" || textarea.value === "harry" || textarea.value === "Harry" || textarea.value === "harry potter" || textarea.value === "Harry Potter" || textarea.value === "miaouss" || textarea.value === "Miaouss" || textarea.value === "bulbizarre" || textarea.value === "Bulbizarre" || textarea.value === "merlin" || textarea.value === "Merlin" || textarea.value === "salameche" || textarea.value === "Salameche" || textarea.value === "dog" || textarea.value === "Dog" || textarea.value === "r2d2" || textarea.value === "R2D2" || textarea.value === "sherlock" || textarea.value === "Sherlock" || textarea.value === "nutella" || textarea.value === "Nutella" || textarea.value === "ghost" || textarea.value === "Ghost"){
        chat.src = "assets/img/glitch.gif";
        chat.classList.remove("margTop");
        setTimeout(base, 2000);
    }
    else{
        base()
    }
}
textarea.addEventListener("keyup", verifyName);
nameValidator.addEventListener("click", validName);
function affiche() {
    food.innerText                                  = "Faim " + ave.food + " %";
    know.innerText                                  = "Connaisance " + ave.know + " %";
    sleep.innerText                                 = "Energie " + ave.sleep + " %";
    happiness.innerText                             = "Joie " + ave.happiness + " %";
    entertainment.innerText                         = "Amusement " + ave.entertain + " %";
    love.innerText                                  = "Amour " + ave.love + " %";
    foodPourcent.style.backgroundSize               = "100% " + ave.food + "%";
    knowPourcent.style.backgroundSize               = "100% " + ave.know + "%";
    sleepPourcent.style.backgroundSize              = "100% " + ave.sleep + "%";
    happinessPourcent.style.backgroundSize          = "100% " + ave.happiness + "%";
    entertainmentPourcent.style.backgroundSize      = "100% " + ave.entertain + "%";
    lovePourcent.style.backgroundSize               = "100% " + ave.love + "%";
}
function baseAstro(){
    // ===========
    // signe astro
    // ===========
    if (ave.astro.value === "belier"){
        astro.src = "assets/img/signe/signe-pusheen/belier.gif";
        astro.style.top = "4%";
        astro.style.right = "10%";
    }
    else if (ave.astro.value === "taureau"){
        astro.src = "assets/img/signe/signe-pusheen/taureau.gif";
        astro.style.top = "4%";
        astro.style.right = "11%";
    }
    else if (ave.astro.value === "gemeaux"){
        astro.src = "assets/img/signe/signe-pusheen/gemeaux.gif";
        astro.style.top = "5%";
        astro.style.right = "11%";
    }
    else if (ave.astro.value === "cancer"){
        astro.src = "assets/img/signe/signe-pusheen/cancer.gif";
        astro.style.top = "2%";
        astro.style.right = "11%";
    }
    else if (ave.astro.value === "lion"){
        astro.src = "assets/img/signe/signe-pusheen/lion.gif";
        astro.style.top = "0%";
        astro.style.right = "11%";
    }
    else if (ave.astro.value === "vierge"){
        astro.src = "assets/img/signe/signe-pusheen/vierge.gif";
        astro.style.top = "1%";
        astro.style.right = "12%";
        astro.style.width = "9%";
    }
    else if (ave.astro.value === "balance"){
        astro.src = "assets/img/signe/signe-pusheen/balance.gif";
        astro.style.top = "2%";
        astro.style.right = "11%";
    }
    else if (ave.astro.value === "scorpion"){
        astro.src = "assets/img/signe/signe-pusheen/scorpion.gif";
        astro.style.top = "5%";
    }
    else if (ave.astro.value === "sagittaire"){
        astro.src = "assets/img/signe/signe-pusheen/sagittaire.gif";
        astro.style.top = "3%";
    }
    else if (ave.astro.value === "capricorne"){
        astro.src = "assets/img/signe/signe-pusheen/capricorne.gif";
        astro.style.top = "3%";
    }
    else if (ave.astro.value === "verseau"){
        astro.src = "assets/img/signe/signe-pusheen/verseau.gif";
        astro.style.top = "3%";
    }
    else if (ave.astro.value === "poisson"){
        astro.src = "assets/img/signe/signe-pusheen/poisson.gif";
        astro.style.top ="2%";
        astro.style.right = "12%";
        astro.style.width = "9%";
    }
    console.log(ave.astro);
}
export function base() {
    timeout = 2000;
    baseAstro();
    for (let l = 0; l < link.length; l++){
        link[l].disabled = false;
    }
    if (planteOn){
        plante.classList.remove("hide");
    }
    if (breadOn){
        bread.classList.remove("hide");
    }
    h2.style.color = "black";
    body.classList.add("bgBase");
    chat.classList.remove("smaller");
    chat.classList.remove("iceCream");
    body.classList.remove("bgMeat");
    body.classList.remove("bgCookie");
    body.classList.remove("bgFish");
    body.classList.remove("bgIceCream");
    body.classList.remove("bgPizza");
    body.classList.remove("bgRamen");
    body.classList.remove("bgRice");
    body.classList.remove("bgSushi");
    body.classList.remove("bgDonut");
    body.classList.remove("bgSleep");
    body.classList.remove("bgLearn");
    body.classList.remove("bgDance");
    chat.classList.add("margTop");
    astro.classList.remove("hide");
    stop = true;
    outsideEvent.classList.add("hide");
    outsideEvent.src = "assets/img/walk.gif";
    catZone.classList.remove("hide");
    allbutton.classList.remove("hide");
    stop = true;
    // ===================
    // easter egg et event
    // ===================
    if (ave.happiness < 25){
        chat.src = "assets/img/angry.gif";
    }
    else if (ave.sleep < 25){
        chat.src = "./assets/img/tired.gif";
        chat.classList.remove("margTop");
    }
    else if (ave.love < 25){
        chat.src = "./assets/img/triste.gif";
        chat.classList.remove("margTop");
    }
    else if (ave.food < 25){
        chat.src = "./assets/img/hungry.gif";
        chat.classList.remove("margTop");
        chat.classList.add("small")
    }
    else if (textarea.value === "pikachu" || textarea.value === "Pikachu"){
        chat.src = "assets/img/pikachu.gif";
        chat.classList.add("basic");
        ave.type.remove("invert");
        ave.type.add("pikachu");
        chat.classList.remove("margTop");
    }
    else if (textarea.value === "pixel" || textarea.value === "Pixel"){
        chat.src = "assets/img/pixel.png";
        chat.classList.remove("margTop");
    }
    else if (textarea.value === "panda" || textarea.value === "Panda"){
        chat.src = "assets/img/panda.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
        chat.classList.remove("margTop");
    }
    else if (textarea.value === "carapuce" || textarea.value === "Carapuce"){
        chat.src = "assets/img/carapuce.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "harry" || textarea.value === "Harry" || textarea.value === "harry potter" || textarea.value === "Harry Potter"){
        chat.src = "assets/img/harry.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "miaouss" || textarea.value === "Miaouss"){
        chat.src = "assets/img/miaous.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "bulbizarre" || textarea.value === "Bulbizarre"){
        chat.src = "assets/img/bulbizarre.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "merlin" || textarea.value === "Merlin"){
        chat.src = "assets/img/merlin.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "salameche" || textarea.value === "Salameche"){
        chat.src = "assets/img/salameche.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "dog" || textarea.value === "Dog"){
        chat.src = "assets/img/dog.gif";
        chat.classList.remove("margTop")
    }
    else if (textarea.value === "r2d2" || textarea.value === "R2D2"){
        chat.src = "assets/img/r2d2.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "sherlock" || textarea.value === "Sherlock"){
        chat.src = "assets/img/sherlock.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else if (textarea.value === "nutella" || textarea.value === "Nutella"){
        chat.src = "assets/img/nutella.gif";
        chat.classList.add("basic");
    }
    else if (textarea.value === "ghost" || textarea.value === "Ghost"){
        chat.src = "assets/img/ghost.gif";
        chat.classList.add("basic");
        chat.classList.add("smaller");
    }
    else {
        chat.src = "assets/img/base.png";
    }
    if (ave.food === 100 && ave.sleep === 100 && ave.happiness === 100 && ave.entertain === 100 && ave.love === 100){
        chat.src = "assets/img/win.gif";
        chat.classList.add("smaller");
    }

}
function endeffect() {
    effect.classList.add("hide");
    chat.src = "assets/img/base.png";
    chat.classList.remove("changement");
}
function duringeffect() {
    chat.src = "assets/img/after-drogue.gif";
    effect.classList.remove("hide");
    chat.classList.add("changement");
}
// ===========================
// le cadeau
// ===========================
function openGift() {
    let which = Math.floor(Math.random()*2)+1;
    gift.classList.add("what");
    for (let l = 0; l < link.length; l++){
        link[l].disabled = true;
    }
    setTimeout(function () {
        if (which === 1){
            inside.src = "assets/img/plante.png";
            planteOn = true;
        }
        else if (which === 2){
            inside.src = "assets/img/bread.png";
            breadOn = true;
        }
        inside.classList.remove("hide");
        brille.classList.remove("hide");
        gift.classList.remove("what");
    }, 3000)
    setTimeout(function () {
        gift.classList.add("hide");
        brille.classList.add("hide");
        inside.classList.add("hide");
        if (which === 1){
            plante.classList.remove("hide");
        }
        else if (which === 2){
            bread.classList.remove("hide");
        }
        base()
    }, 5000)
}
function addObject(){
    gift.classList.remove("hide");
    gift.addEventListener("click", openGift);
}
let timeout = 2000;
function special() {
    plante.classList.add("hide");
    bread.classList.add("hide");
    astro.classList.add("hide");
    chat.classList.remove("margTop");
}
function like() {
    chat.src = "assets/img/love-food.gif";
    chat.classList.add("smaller");
    for (let l = 0; l < link.length; l++){
        link[l].disabled = true;
    }
    setTimeout(base, 2000);
}
function dislike() {
    chat.src = "assets/img/dislike-food.gif";
    chat.classList.add("margTop")
    for (let l = 0; l < link.length; l++){
        link[l].disabled = true;
    }
    setTimeout(base, 2000);
}
function event() {
    if (chat.classList.value !== "basic"){
        chat.classList.remove("basic");
    }
    // ----------------------------
    // Event nourir
    // ----------------------------
    if(ave.food > 99 && this.textContent === "Donut" || ave.food > 99 && this.textContent === "Sushi" || ave.food > 99 && this.textContent === "Riz" || ave.food > 99 && this.textContent === "Ramen" || ave.food > 99 && this.textContent === "Pizza" || ave.food > 99 && this.textContent === "Glace" || ave.food > 99 && this.textContent === "Poisson" || ave.food > 99 && this.textContent === "Cookie" || ave.food > 99 && this.textContent === "Viande"){
        chat.src = "assets/img/too-big.gif";
        chat.classList.remove("margTop")
    }
    if(ave.Max > ave.food && ave.Min < ave.sleep){
        if(this.textContent === "Viande"){
            if (ave.sleep - 10 >= ave.Min && ave.food + 10 <= ave.Max){
                chat.src    = "assets/img/eat-meat.gif";
                special()
                body.classList.add("bgMeat");
                ave.food    += 10;
                ave.sleep   -= 10;
                if (ave.type.value === "basic"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "black"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Cookie"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 5 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-cookie.gif";
                body.classList.add("bgCookie");
                ave.food    += 5;
                ave.sleep   -= 15;
                if (ave.type.value === "contrast"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "ghost"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Poisson"){
            if (ave.sleep - 5 >= ave.Min && ave.food + 10 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-fish.gif";
                body.classList.add("bgFish");
                ave.food    += 10;
                ave.sleep   -= 5;
                if (ave.type.value === "roux"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "gray"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Glace"){
            if (ave.sleep - 20 >= ave.Min && ave.food + 5 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-iceCream.gif";
                body.classList.add("bgIceCream");
                ave.food    += 5;
                ave.sleep   -= 10;
                chat.classList.add("smaller");
                if (ave.type.value === "white"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "invert"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Pizza"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 30 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-pizza.gif";
                body.classList.add("bgPizza");
                ave.food    += 30;
                ave.sleep   -= 15;
                if (ave.type.value === "invert"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "roux"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Ramen"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 10 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-ramen.gif";
                body.classList.add("bgRamen");
                ave.food    += 10;
                ave.sleep   -= 10;
                if (ave.type.value === "ghost"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "basic"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Riz"){
            if (ave.sleep - 10 >= ave.Min && ave.food + 20 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-rice.gif";
                body.classList.add("bgRice");
                ave.food    += 20;
                ave.sleep   -= 10;
                chat.classList.add("smaller");
                if (ave.type.value === "sepia"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "contrast"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Sushi"){
            if (ave.sleep - 5 >= ave.Min && ave.food + 5 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-sushi.gif";
                body.classList.add("bgSushi");
                ave.food    += 5;
                ave.sleep   -= 5;
                if (ave.type.value === "gray"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "white"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
        if (this.textContent === "Donut"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 5 <= ave.Max){
                special()
                chat.src    = "assets/img/eat-donut.gif";
                body.classList.add("bgDonut");
                ave.food    += 5;
                ave.sleep   -= 15;
                if (ave.type.value === "black"){
                    if (ave.love + 15 <= 100){
                        ave.love += 15;
                    }
                    setTimeout(like, timeout + 2)
                }
                if (ave.type.value === "sepia"){
                    if (ave.love - 15 >= 0){
                        ave.love -= 15;
                    }
                    setTimeout(dislike, timeout + 2);
                }
            }else {
                chat.src = "assets/img/no.gif";
            }
        }
    }


    if (this.textContent === "CBD"){
        chat.src        = "assets/img/drogue.gif";
        ave.food        = 10;
        ave.know        = 10;
        ave.sleep       = 10;
        ave.happiness   = 100;
        ave.entertain   = 10;
        ave.love        = 10;
        setTimeout(endeffect, 10000);
        setTimeout(duringeffect, 2001);
    }
    // --------------------------
    // Event dormir
    // --------------------------
    if (this.textContent === "Dormir"){
        if (ave.sleep > 99){
            chat.src = "assets/img/too-sleep.gif";
            chat.classList.remove("margTop");
        }
        else if (ave.sleep < 100 && ave.food > 0 && ave.entertain >= 0 && ave.sleep + 20 <= 100 && ave.food - 10 >= 0 && ave.entertain - 5 >= 0 && ave.love - 5 >= 0){
            body.classList.add("bgSleep");
            h2.style.color = "white";
            let where = Math.floor(Math.random() * 5)+ 1;
            special()
            ave.sleep       += 20;
            ave.food        -= 10;
            ave.entertain   -= 5;
            ave.love        -= 5;
            switch (where) {
                case 1:
                    chat.src        = "assets/img/sleep.gif";
                    chat.classList.add("smaller");
                    break;
                case 2:
                    chat.src        = "assets/img/sleep-2.gif";
                    break;
                case 3:
                    chat.src        = "assets/img/sleep-3.gif";
                    break;
                case 4:
                    chat.src        = "assets/img/sleep-4.gif";
                    break;
                case 5:
                    chat.src        = "assets/img/sleep-5.gif";
                    break;
                default:
                    alert("Il y as un bug");
                    break;
            }
        }
        else {
            chat.src = "assets/img/no.gif";
        }
    }
    // -----------------------
    // Event apprendre
    // -----------------------
    if(this.textContent === "Étudier"){
        if (ave.know < 100 && ave.sleep > 0 && ave.entertain > 0 && ave.happiness > 0){
            if (ave.know < 50 && ave.sleep - 10 >= 0 && ave.entertain - 10 >= 0 && ave.happiness - 20 >=0){
                special()
                body.classList.add("bgLearn");
                h2.style.color  = "white";
                chat.src        = "assets/img/learn-1.gif";
                ave.know        += 10;
                ave.sleep       -= 10;
                ave.entertain   -= 10;
                ave.happiness   -= 20;
            }
            else if (ave.know >= 50 && ave.know < 75 && ave.sleep - 15 >= 0 && ave.entertain - 5 >= 0 && ave.happiness - 10 >= 0){
                special()
                body.classList.add("bgLearn");
                h2.style.color  = "white";
                chat.src        = "assets/img/learn-2.gif";
                ave.know        += 5;
                ave.sleep       -= 15;
                ave.entertain   -= 5;
                ave.happiness   -= 10;
            }
            else if (ave.know >= 75 && ave.know + 1 <= 100 && ave.sleep - 20 > 0 && ave.entertain - 2 > 0 && ave.happiness - 5 >= 0){
                special()
                body.classList.add("bgLearn");
                h2.style.color  = "white";
                chat.src        = "assets/img/learn-3.gif";
                ave.know        += 1;
                ave.sleep       -= 20;
                ave.entertain   -= 2;
                ave.happiness   -= 5;
                chat.classList.add("smaller");
            }
            else {
                chat.src = "assets/img/no.gif";
            }
        }
        else if(ave.know > 99){
            chat.src    = "assets/img/too-smart.gif";
            chat.classList.add("smaller");
            timeout     = 5000;
        }

    }
    // -----------------------
    // Event danser
    // -----------------------
    if (this.textContent === "Danser"){
        if (ave.entertain < 100 && ave.happiness < 100 && ave.sleep > 0 && ave.entertain + 20 <= 100 && ave.happiness + 20 <= 100 && ave.sleep - 10 >= 0){
            special()
            let how = Math.floor(Math.random() * 3) + 1;
            body.classList.add("bgDance");
            h2.style.color = "white";
            switch (how) {
                case 1:
                    chat.classList.add("smaller");
                    chat.src = "assets/img/dance.gif";
                    break;
                case 2:
                    chat.src = "assets/img/dance-2.gif";
                    break;
                case 3:
                    chat.src = "assets/img/dance-3.gif";
                    break;
                default:
                    alert("Il y as un bug");
                    break;
            }
            ave.entertain   += 20;
            ave.happiness   += 20;
            ave.sleep       -= 10;
        }
        else {
            chat.src = "assets/img/no.gif";
        }
    }
    for (let l = 0; l < link.length; l++){
        link[l].disabled = true;
    }
    // -------------------------
    // Event sortie
    // -------------------------
    if (this.textContent === "Sortir"){
        if (ave.sleep > 0 && ave.love < 100 && ave.entertain < 100 && ave.sleep - 10 >= 0 && ave.love + 15 <= 100 && ave.entertain + 15 <= 100){
            let where   = Math.floor(Math.random()*6)+1;
            let object  = Math.floor(Math.random()*100)+1;
            catZone.classList.add("hide");
            allbutton.classList.add("hide");
            timeout = 6000;
            special()
            outsideEvent.classList.add("during");
            body.classList.add("bgOutside")
            outsideEvent.classList.remove("hide");
            ave.sleep   -= 10;
            ave.love    += 15;
            ave.entertain += 15;
            setTimeout(function () {
                body.classList.remove("bgOutside");
                body.classList.remove("bgBase");
                switch (where) {
                    case 1:
                        outsideEvent.src = "assets/img/outside-1.gif";
                        break;
                    case 2:
                        outsideEvent.src = "assets/img/outside-2.gif";
                        break;
                    case 3:
                        outsideEvent.src = "assets/img/outside-3.gif";
                        break;
                    case 4:
                        outsideEvent.src = "assets/img/outside-4.gif";
                        break;
                    case 5:
                        outsideEvent.src = "assets/img/outside-5.gif";
                        break;
                    case 6:
                        outsideEvent.src = "assets/img/outside-6.gif";
                        break;
                }
            }, 1500)
            if (object >=1 && object <= 30){
                setTimeout(addObject,6000);
            }
        }
        else {
            chat.src = "assets/img/no.gif";
        }
    }
    // -------------------------
    // Event morpion
    // -------------------------
    if(this.textContent === "Tic Tac Toe"){
        if (ave.know + 15 <= 100 && ave.sleep - 10 >= 0 && ave.sleep > 0 && ave.know < 100){
            ave.know += 15;
            ave.sleep -= 10;
        }
        chat.src = "assets/img/thinking.gif";
        chat.classList.add('smaller');
        morpion.classList.remove("hide");
        for (let i = 0 ; i < div.length; i++){
            div[i].addEventListener("click", XandO);
        }
        setTimeout(function () {
            for (let l = 0; l < link.length; l++){
                link[l].disabled = true;
            }
            chat.src = "assets/img/thinking.gif";
            chat.classList.add('smaller');
        }, timeout + 1)
    }
    if (this.textContent === "Forcée a dormir"){
        if (ave.sleep === 0 ){
            ave.sleep = 20;
            ave.happiness = 10;
            body.classList.add("bgSleep");
            h2.style.color = "white";
            let where = Math.floor(Math.random() * 5)+ 1;
            special()
            switch (where) {
                case 1:
                    chat.src        = "assets/img/sleep.gif";
                    chat.classList.add("smaller");
                    break;
                case 2:
                    chat.src        = "assets/img/sleep-2.gif";
                    break;
                case 3:
                    chat.src        = "assets/img/sleep-3.gif";
                    break;
                case 4:
                    chat.src        = "assets/img/sleep-4.gif";
                    break;
                case 5:
                    chat.src        = "assets/img/sleep-5.gif";
                    break;
                default:
                    alert("Il y as un bug");
                    break;
            }
        }
        else {
            chat.src = "assets/img/no.gif";
        }
    }
    stop = false;
    affiche();
    if (this.textContent !== "Tic Tac Toe"){
        setTimeout(base, timeout);
    }
}
let stop = true;
function drag() {
        if (stop && ave.love + 10 <= 100){
            if (chat.classList.value !== "basic"){
                chat.classList.remove("basic");
            }
            chat.src    = "assets/img/love-2.gif";
            stop        = false;
            ave.love    += 10;
            affiche();
            for (let l = 0; l < link.length; l++){
                link[l].disabled = true;
            }
            setTimeout(base, 3000);

        }
}
function click() {
    if (stop  && ave.love + 10 <= 100){
        if (chat.classList.value !== "basic"){
            chat.classList.remove("basic");
        }
        chat.src    = "assets/img/love-1.gif";
        ave.love    += 10;
        stop        = false;
        affiche();
        for (let l = 0; l < link.length; l++){
            link[l].disabled = true;
        }
        chat.classList.add("smaller");
        setTimeout(base, 3000);
    }
}

chat.addEventListener("drag", drag);
chat.addEventListener("click", click);
for (let k = 0; k < link.length ; k++){
    link[k].addEventListener("click", event)
}

let konami = [];
let code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let right = false;
document.addEventListener("keydown",function (e) {
    konami.push(e.key)
    if (konami[0] === code[0] && konami[1] === code[1] && konami[2] === code[2] && konami[3] === code[3] && konami[4] === code[4] && konami[5] === code[5] && konami[6] === code[6] && konami[7] === code[7] && konami[9] === code[9] && konami.length === code.length){
        right = true;
    }
    if (konami.length >= code.length){
        konami.splice(0,1);
    }
    if (right){
        ave.food       = 100;
        ave.know       = 100;
        ave.sleep      = 100;
        ave.happiness  = 100;
        ave.entertain  = 100;
        ave.love       = 100;
        bread.classList.remove("hide");
        plante.classList.remove("hide");
        right = false;
        base();
        affiche();
    }
})