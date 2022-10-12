
// I want a random Number between 1 and 14
// and then I want to equate that number to a weapon from monster hunter
const greatSword = document.querySelector('#greatSword')
const hammer = document.querySelector('#hammer')
const longSword = document.querySelector('#longSword')
const switchAxe = document.querySelector('#switchAxe')
const bow = document.querySelector('#bow')
const lance = document.querySelector('#lance')
const gunLance = document.querySelector('#gunLance')
const lightBowgun = document.querySelector('#lightBowgun')
const huntingHorn = document.querySelector('#huntingHorn')
const dualBlades = document.querySelector('#dualBlades')
const heavyBowgun = document.querySelector('#heavyBowgun')
const chargeBlade = document.querySelector('#chargeBlade')
const insectGlaive = document.querySelector('#insectGlaive')
const swordShield = document.querySelector('#swordShield')

document.querySelector('#check').addEventListener('click', spin)

function spin(min, max) {
    const weapons = Math.floor(Math.random() * (14 - 1 + 1) + 1)

document.querySelector('#results').innerText = `${weapons}`

if(weapons === 1){
     document.querySelector('#results').innerText = "GREAT SWORD"
     greatSword.classList.remove('hidden')
     hammer.classList.add('hidden')
     longSword.classList.add('hidden')
     switchAxe.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     swordShield.classList.add('hidden')
 }else if( weapons === 2){
    document.querySelector('#results').innerText = "LONG SWORD"
    longSword.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     switchAxe.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     swordShield.classList.add('hidden')
 }else if( weapons === 3)
 {   document.querySelector('#results').innerText = "HUNTING HORN"
    huntingHorn.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     switchAxe.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     swordShield.classList.add('hidden')
 }else if( weapons === 4){
    document.querySelector('#results').innerText = "SWORD & SHIELD"
    swordShield.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 5){
    document.querySelector('#results').innerText = "SWITCH AXE"
    switchAxe.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     swordShield.classList.add('hidden')
 }else if( weapons === 6){
    document.querySelector('#results').innerText = "INSECT GLAIVE"
    insectGlaive.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     swordShield.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 7){
    document.querySelector('#results').innerText = "GUNLANCE"
    gunLance.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     swordShield.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 8){
    document.querySelector('#results').innerText = "HAMMER"
    hammer.classList.remove('hidden')
     swordShield.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 9){
    document.querySelector('#results').innerText = "LANCE"
    lance.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     swordShield.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 10){
    document.querySelector('#results').innerText = "DUAL BLADES"
    dualBlades.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     swordShield.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 11){
    document.querySelector('#results').innerText = "CHARGE BLADE"
    chargeBlade.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     swordShield.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 12){
    document.querySelector('#results').innerText = "LIGHT BOWGUN"
    lightBowgun.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     swordShield.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else if( weapons === 13){
    document.querySelector('#results').innerText = "BOW"
    bow.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     swordShield.classList.add('hidden')
     gunLance.classList.add('hidden')
     heavyBowgun.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }else{
    document.querySelector('#results').innerText = "HEAVY BOWGUN"
    heavyBowgun.classList.remove('hidden')
     hammer.classList.add('hidden')
     greatSword.classList.add('hidden')
     huntingHorn.classList.add('hidden')
     bow.classList.add('hidden')
     gunLance.classList.add('hidden')
     swordShield.classList.add('hidden')
     lightBowgun.classList.add('hidden')
     longSword.classList.add('hidden')
     dualBlades.classList.add('hidden')
     chargeBlade.classList.add('hidden')
     insectGlaive.classList.add('hidden')
     lance.classList.add('hidden')
     switchAxe.classList.add('hidden')
 }
}