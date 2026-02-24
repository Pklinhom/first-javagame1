let gem = document.querySelector('.gem-cost')
let parsedGem = parseFloat(gem.innerHTML)
//Clicker Let
let clickerCost = document.querySelector(".clicker-cost")
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector(".clicker-level");
let clickerIncrease = document.querySelector(".clicker-increase");
let pasrsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)
//Pickaxe Let
let pickaxeCost = document.querySelector(".pickaxe-cost")
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML)
let pickaxeLevel = document.querySelector(".pickaxe-level");
let pickaxeIncrease = document.querySelector(".pickaxe-increase");
let pasrsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

//Gem per Click
let gpc = 1;

//Gem per Second, passively get more gem with times
let gps = 0;

function incrementGem(){
    gem.innerHTML = parsedGem
    gem.innerHTML = Math.round(parsedGem += gpc);
}

setInterval(() => {
    parsedGem += gps / 10
    gem.innerHTML = Math.round(parsedGem)
}, 100)

//Reset Button
function resetGem(){
    if (parsedGem >= 0){
        parsedGem -= parsedGem;

        gps = 0;
        /*
        clickerCost = 10;
        clickerIncrease = 0;
        clickerLevel = 0;

        pickaxeCost = 150;
        pickaxeIncrease = 0;
        pickaxeLevel = 0;
        */
        gem.innerHTML = parsedGem;
    }
}

// Clicker Fucntion
function buyClicker(){
    if (parsedGem >= parsedClickerCost){
        gem.innerHTML = Math.round(parsedGem -= parsedClickerCost);

        clickerLevel.innerHTML ++;

        pasrsedClickerIncrease = parseFloat((pasrsedClickerIncrease * 1.05).toFixed(2));
        clickerIncrease.innerHTML = pasrsedClickerIncrease;
        gps += pasrsedClickerIncrease;

        parsedClickerCost *= 1.55;
        clickerCost.innerHTML = Math.round(parsedClickerCost);
    }
}
// Pickaxe Function
function buyPickaxe(){
    if (parsedGem >= parsedPickaxeCost){
        gem.innerHTML = Math.round(parsedGem -= parsedPickaxeCost);

        pickaxeLevel.innerHTML ++;
    
        pasrsedPickaxeIncrease = parseFloat((pasrsedPickaxeIncrease * 1.35).toFixed(2));
        pickaxeIncrease.innerHTML = pasrsedPickaxeIncrease;
        gps += pasrsedPickaxeIncrease;

        parsedPickaxeCost *= 1.75;
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost);
    }
}