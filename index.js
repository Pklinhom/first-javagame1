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


let gpc = 1;

function incrementGem(){
    gem.innerHTML = parsedGem
    gem.innerHTML = Math.round(parsedGem += gpc);
}

function resetGem(){
    if (parsedGem >= 0){
        parsedGem -= parsedGem;
        gem.innerHTML = parsedGem;
    }
}

function buyClicker(){
    if (parsedGem >= parsedClickerCost){
        gem.innerHTML = Math.round(parsedGem -= parsedClickerCost);

        clickerLevel.innerHTML ++

        pasrsedClickerIncrease = parseFloat((pasrsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = pasrsedClickerIncrease
        gpc += pasrsedClickerIncrease

        parsedClickerCost *= 1.55;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}

function buyPickaxe(){
    if (parsedGem >= parsedPickaxeCost){
        gem.innerHTML = Math.round(parsedGem -= parsedPickaxeCost);

        pickaxeLevel.innerHTML ++

        pasrsedPickaxeIncrease = parseFloat((pasrsedPickaxeIncrease * 1.35).toFixed(2))
        pickaxeIncrease.innerHTML = pasrsedPickaxeIncrease
        gpc += pasrsedPickaxeIncrease

        parsedPickaxeCost *= 1.75;
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost)
    }
}