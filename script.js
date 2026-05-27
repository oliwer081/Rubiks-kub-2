// Funktion för att byta mellan 3x3 och 2x2 guiderna
function switchCube(cubeType) {
    const guide3x3 = document.getElementById('guide-3x3');
    const guide2x2 = document.getElementById('guide-2x2');
    const buttons = document.querySelectorAll('.nav-btn');

    // Nollställ aktiva knappar
    buttons.forEach(btn => btn.classList.remove('active'));

    if (cubeType === '3x3') {
        guide3x3.classList.remove('hidden');
        guide2x2.classList.add('hidden');
        buttons[0].classList.add('active');
    } else {
        guide2x2.classList.remove('hidden');
        guide3x3.classList.add('hidden');
        buttons[1].classList.add('active');
    }
}

// Funktion för lördagsläget
function toggleSaturday() {
    const body = document.body;
    const title = document.getElementById('main-title');
    const subtitle = document.getElementById('sub-title');
    const btn = document.getElementById('saturday-btn');

    body.classList.toggle('saturday');

    if (body.classList.contains('saturday')) {
        title.innerHTML = "LÖRDAGSKUBEN! 🍬🎉";
        subtitle.innerHTML = "Glöm stela algoritmer, nu kör vi lördagsgodis-metoden! Samma logik, mycket roligare stämning.";
        btn.innerHTML = "Tillbaka till vardagen ☕";
    } else {
        title.innerHTML = "Lär dig lösa Rubiks Kub 🧩";
        subtitle.innerHTML = "Pedagogiska guider steg-för-steg, helt utan att bara memorera blinda drag!";
        btn.innerHTML = "Ändra till lördag! 🎉";
    }
}
