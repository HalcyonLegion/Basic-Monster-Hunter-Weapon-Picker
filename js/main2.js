const weapons = ["GREAT SWORD", "LONG SWORD", "HAMMER", "SWITCH AXE", "BOW", "LANCE", "GUN LANCE", "LIGHT BOWGUN", "HUNTING HORN", "DUAL BLADES", "HEAVY BOWGUN", "CHARGE BLADE", "INSECT GLAIVE", "SWORD & SHIELD"];
const weaponIds = ["greatSword", "longSword", "hammer", "switchAxe", "bow", "lance", "gunLance", "lightBowgun", "huntingHorn", "dualBlades", "heavyBowgun", "chargeBlade", "insectGlaive", "swordShield"];

document.querySelector('#check').addEventListener('click', spin);
document.querySelector('#speakResult').addEventListener('click', () => speak(document.querySelector('#results').innerText));

function spin() {
    const randomNumber = Math.floor(Math.random() * weapons.length);
    document.querySelector('#results').innerText = weapons[randomNumber];

    const selectedWeapon = weaponIds[randomNumber];
    const selectedWeaponImage = document.querySelector(`#${selectedWeapon}`).cloneNode(true); //<-- clone selected weapon

    const imageDisplay = document.querySelector("#image-display");
    
    while (imageDisplay.firstChild) { //<-- clear previous weapon image
        imageDisplay.firstChild.remove();
    }

    imageDisplay.appendChild(selectedWeaponImage);
}

function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.rate = 0.8;
    speech.pitch = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
}