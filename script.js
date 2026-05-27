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

function toggleSaturday() {
    const body = document.body;
    const title = document.getElementById('main-title');
    const btn = document.getElementById('saturday-btn');

    body.classList.toggle('saturday');

    if (body.classList.contains('saturday')) {
        title.innerHTML = "SolveTheCube: Party Mode! 🍬";
        btn.innerHTML = "Vanligt läge ☕";
    } else {
        title.innerHTML = "SolveTheCube 🧩";
        btn.innerHTML = "Aktivera Lördagsläge! 🎉";
    }
}

// INTERAKTIV KUB-ANIMATIONSDATA
const data = {
    '3x3': {
        moves: ["UTGÅNGSLÄGE", "F (Front medurs)", "R (Höger medurs)", "U (Topp medurs)"],
        explanations: [
            "Kuben är i sitt startskick.",
            "F-draget roterar framsidan och flyttar upp en vit kantbit.",
            "R-draget vrider högersidan uppåt för att förbereda nästa parning.",
            "U-draget roterar taket så att den vita biten möter rätt sidofärg."
        ],
        // Definierar färger för [TopFace, LeftFace, RightFace] i varje steg
        states: [
            ['s-yellow', 's-blue', 's-red'],
            ['s-yellow', 's-green', 's-blue'],
            ['s-orange', 's-blue', 's-white'],
            ['s-white', 's-red', 's-green']
        ],
        currentIdx: 0, interval: null
    },
    '2x2': {
        moves: ["UTGÅNGSLÄGE", "R (Höger medurs)", "U (Topp medurs)", "R' (Höger moturs)"],
        explanations: [
            "Startläge för fickkuben.",
            "Vi vrider upp högra lagret (R) för att hämta hörnbiten.",
            "Topplagret (U) roteras för att para ihop hörnbitarna.",
            "Vi drar ner högersidan (R') igen. Hörnet sitter nu perfekt!"
        ],
        states: [
            ['s-yellow', 's-blue', 's-red'],
            ['s-red', 's-yellow', 's-orange'],
            ['s-green', 's-white', 's-blue'],
            ['s-white', 's-blue', 's-orange']
        ],
        currentIdx: 0, interval: null
    }
};

function nextMove(type) {
    const cubeData = data[type];
    cubeData.currentIdx = (cubeData.currentIdx + 1) % cubeData.moves.length;
    
    document.getElementById(`notation-text-${type}`).innerText = cubeData.moves[cubeData.currentIdx];
    document.getElementById(`explanation-${type}`).innerText = cubeData.explanations[cubeData.currentIdx];
    
    // Uppdatera färgerna dynamiskt baserat på steget
    const currentColors = cubeData.states[cubeData.currentIdx];
    const cubeEl = document.getElementById(`cube-${type}`);
    
    const topStickers = cubeEl.querySelectorAll('.top-face .st');
    const leftStickers = cubeEl.querySelectorAll('.left-face .st');
    const rightStickers = cubeEl.querySelectorAll('.right-face .st');
    
    topStickers.forEach(el => { el.className = `st ${currentColors[0]}`; });
    leftStickers.forEach(el => { el.className = `st ${currentColors[1]}`; });
    rightStickers.forEach(el => { el.className = `st ${currentColors[2]}`; });
}

function toggleAuto(type) {
    const cubeData = data[type];
    if (cubeData.interval) {
        clearInterval(cubeData.interval);
        cubeData.interval = null;
    } else {
        cubeData.interval = setInterval(() => nextMove(type), 1500);
    }
}

// CHATBOT LOGIK
function toggleChat() {
    document.getElementById('chat-widget').classList.toggle('chat-closed');
}

function checkEnter(e) { if(e.key === 'Enter') sendChatMessage(); }

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const logs = document.getElementById('chat-logs');
    const text = input.value.trim();
    if(!text) return;

    logs.innerHTML += `<div class="msg user">${text}</div>`;
    input.value = '';
    logs.scrollTop = logs.scrollHeight;

    let reply = "Smart fråga! På presentationen kan du förklara att det viktiga är att förstå hur bitarna flyttar sig i rymden.";
    const low = text.toLowerCase();

    if(low.includes('kors') || low.includes('steg 1')) {
        reply = "Det vita korset är basen! Visa upp modellen under presentationen och förklara att kantbitens sidofärg måste matcha mittbiten.";
    } else if (low.includes('notation') || low.includes('drag') || low.includes('betyder')) {
        reply = "Här är din fusklapp: <strong>R</strong> = Höger medurs, <strong>U</strong> = Övre lagret (Taket), <strong>F</strong> = Fronten. En apostrof (') efter betyder att draget körs moturs.";
    }

    setTimeout(() => {
        logs.innerHTML += `<div class="msg bot">${reply}</div>`;
        logs.scrollTop = logs.scrollHeight;
    }, 300);
}
