// Struktur och flik-skifte
function switchCube(cubeType) {
    const g3 = document.getElementById('guide-3x3');
    const g2 = document.getElementById('guide-2x2');
    const b3 = document.getElementById('btn-3x3');
    const b2 = document.getElementById('btn-2x2');

    if (cubeType === '3x3') {
        g3.classList.remove('hidden');
        g2.classList.add('hidden');
        b3.classList.add('active');
        b2.classList.remove('active');
    } else {
        g2.classList.remove('hidden');
        g3.classList.add('hidden');
        b2.classList.add('active');
        b3.classList.remove('active');
    }
}

// Lördagstemat
function toggleSaturday() {
    const body = document.body;
    const title = document.getElementById('main-title');
    const subtitle = document.getElementById('sub-title');
    const btn = document.getElementById('saturday-btn');

    body.classList.toggle('saturday-theme');

    if (body.classList.contains('saturday-theme')) {
        title.innerHTML = "LÖRDAGSKUBEN! 🍬🥳";
        subtitle.innerHTML = "Nu kör vi presentationen i fest-mode! Samma geniala logik, men mycket roligare färger.";
        btn.innerHTML = "Tillbaka till måndag ☕";
    } else {
        title.innerHTML = "Kubsidan: Bemästra Rubiks Kub 🧩";
        subtitle.innerHTML = "Lär dig förstå kubens logik steg-för-steg med interaktiva 3D-visualiseringar.";
        btn.innerHTML = "Aktivera Lördagsläge! 🎉";
    }
}

// DYNAMISK ROTATIONS-LOGIK (CSS 3D-Motor)
const data = {
    '3x3': {
        moves: ["START", "F (Front)", "R (Höger)", "U (Topp)", "R' (Höger bakåt)", "U' (Topp bakåt)", "F' (Front bakåt)"],
        explanations: [
            "Kuben är i sitt utgångsläge. Redo att starta.",
            "F-draget vrider framsidan medurs. Det flyttar upp kantbiten.",
            "R-draget vrider högersidan medurs för att förbereda parningen.",
            "U-draget flyttar det övre lagret så att bitarna möts korrekt.",
            "R' återställer högersidan så att vi inte förstör bottenplattan.",
            "U' flyttar tillbaka taket i rätt position.",
            "F' stänger framsidan. Kolla nu! Det vita korset börjar ta form utan skador."
        ],
        rotations: [
            {x: -25, y: 45},  // Start
            {x: -25, y: 135}, // F
            {x: -115, y: 45}, // R
            {x: 65, y: 45},   // U
            {x: -25, y: -45}, // R'
            {x: -25, y: 15},  // U'
            {x: -25, y: 45}   // F'
        ],
        currentIdx: 0,
        interval: null
    },
    '2x2': {
        moves: ["START", "R (Höger)", "U (Topp)", "R' (Höger bakåt)"],
        explanations: [
            "Utgångsläge för 2x2. Alla bitar studeras.",
            "Vi lyfter upp högra hörnet (R) för att plocka upp den saknade vita biten.",
            "Vrid toppen (U) för att docka hörnbiten på rätt plats.",
            "Dra ner högersidan (R') igen. Nu är hörnet låst och sidofärgerna stämmer!"
        ],
        rotations: [
            {x: -25, y: 45},
            {x: -115, y: 45},
            {x: 65, y: 45},
            {x: -25, y: 45}
        ],
        currentIdx: 0,
        interval: null
    }
};

function nextMove(type) {
    const cubeData = data[type];
    cubeData.currentIdx = (cubeData.currentIdx + 1) % cubeData.moves.length;
    
    // Uppdatera texten
    document.getElementById(`notation-text-${type}`).innerText = cubeData.moves[cubeData.currentIdx];
    document.getElementById(`explanation-${type}`).innerText = cubeData.explanations[cubeData.currentIdx];
    
    // Utför den fysiska 3D-rotationen av kuben via CSS
    const rot = cubeData.rotations[cubeData.currentIdx];
    const cubeEl = document.getElementById(`cube-${type}`);
    cubeEl.style.transform = `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`;
}

function toggleAuto(type) {
    const cubeData = data[type];
    if (cubeData.interval) {
        clearInterval(cubeData.interval);
        cubeData.interval = null;
    } else {
        cubeData.interval = setInterval(() => {
            nextMove(type);
        }, 1500); // Byter drag automatiskt var 1.5 sekund
    }
}

// CHATBOT FUNKTIONER
function toggleChat() {
    document.getElementById('chat-widget').classList.toggle('chat-minimized');
}

function checkEnter(e) {
    if(e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const logs = document.getElementById('chat-logs');
    const text = input.value.trim();

    if(!text) return;

    // Skriv ut användarens meddelande
    logs.innerHTML += `<div class="msg user">${text}</div>`;
    input.value = '';
    logs.scrollTop = logs.scrollHeight;

    // AI Svar-logik
    let reply = "Intressant fråga! Under presentationen imorgon kan du förklara att det viktiga är att lära sig se mönster, inte bara memorera bokstäver.";
    const low = text.toLowerCase();

    if(low.includes('kors') || low.includes('steg 1')) {
        reply = "Det vita korset bygger basen! Det viktigaste tipset för presentationen är att visa hur kantbitens sidofärg måste matcha mittbiten.";
    } else if (low.includes('notation') || low.includes('vad betyder') || low.includes(' r ')) {
        reply = "Här är fusklappen inför presentationen: <strong>R</strong> = Höger medurs, <strong>L</strong> = Vänster, <strong>U</strong> = Övre lagret (Taket), <strong>F</strong> = Fronten. En apostrof (') efter betyder att draget görs bakåt (moturs).";
    } else if (low.includes('lördag')) {
        reply = "Lördagsläget ändrar hela sajtens CSS live! Det är perfekt att klicka på under presentationen för att visa prov på dynamisk design.";
    }

    setTimeout(() => {
        logs.innerHTML += `<div class="msg bot">${reply}</div>`;
        logs.scrollTop = logs.scrollHeight;
    }, 400);
}