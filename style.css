/* SOLVETHECUBE.COM OFFICIELT TEMA */
:root {
    --bg-color: #ffffff;
    --text-color: #1e293b;
    --accent-color: #28a745;       /* SolveTheCube Grön */
    --accent-hover: #218838;
    --card-bg: #ffffff;
    --nav-bg: #f8fafc;
    --border-color: #e2e8f0;
    --text-secondary: #64748b;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}

header {
    text-align: center;
    padding: 3.5rem 1rem 2rem;
    background-color: #ffffff;
}

.header-container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    font-size: 3rem;
    margin: 0 0 12px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.03em;
}

h1 .dot {
    color: var(--accent-color);
}

#sub-title {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin: 0;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
}

nav {
    display: flex;
    justify-content: center;
    gap: 8px;
    background-color: var(--nav-bg);
    padding: 8px;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.nav-btn {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    padding: 10px 24px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.15s ease;
}

.nav-btn:hover {
    color: var(--text-color);
    background-color: #f1f5f9;
}

.nav-btn.active {
    background-color: #e2e8f0;
    color: var(--text-color);
}

.container {
    max-width: 760px;
    margin: 40px auto;
    padding: 0 20px 120px;
}

.step-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    padding: 0;
}

h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0f172a;
    margin-top: 0;
    margin-bottom: 12px;
}

.step-card p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #334155;
    margin-bottom: 30px;
}

.workspace {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 30px 0;
    background: #f8fafc;
    padding: 40px 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

/* INTERAKTIV ISOMETRISK KUB-CONTAINER */
.cube-container {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cube-view {
    position: relative;
    width: 100px;
    height: 100px;
    transform: scaleY(0.7) rotate(45deg);
}

.face-grid {
    position: absolute;
    width: 70px;
    height: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2.5px;
    background: #1e293b; /* Svart plastram mellan bitarna */
    padding: 2.5px;
    box-sizing: border-box;
    border-radius: 4px;
}

.mini-cube .face-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.top-face {
    transform: translate(-15px, -15px);
}
.left-face {
    transform: skewY(-30deg) scaleX(0.866) translate(-50px, 35px);
}
.right-face {
    transform: skewX(-30deg) scaleY(0.866) translate(35px, -50px);
}

/* FRÄSCHA LJUSA KUBFÄRGER */
.st {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    transition: background-color 0.25s ease;
}
.s-red { background-color: #ff3b30; }
.s-blue { background-color: #007aff; }
.s-orange { background-color: #ff9500; }
.s-green { background-color: #34c759; }
.s-white { background-color: #ffffff; border: 1px solid #cbd5e1; box-sizing: border-box; }
.s-yellow { background-color: #ffcc00; }

.control-panel {
    width: 100%;
    max-width: 360px;
}

.notation-display {
    font-size: 1.25rem;
    font-family: -apple-system, BlinkMacSystemFont, monospace;
    font-weight: 700;
    margin-bottom: 20px;
    background: #ffffff;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    text-align: center;
    color: #0f172a;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.btn-group {
    display: flex;
    gap: 12px;
    justify-content: center;
}

.action-btn {
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.15s ease;
}

.btn-primary {
    background-color: var(--accent-color);
    color: white;
}
.btn-primary:hover {
    background-color: var(--accent-hover);
}

.btn-secondary {
    background-color: #e2e8f0;
    color: #334155;
}
.btn-secondary:hover {
    background-color: #cbd5e1;
}

.instruction-box {
    background: #f1f5f9;
    padding: 16px 20px;
    border-radius: 8px;
    font-size: 1rem;
    color: #475569;
    line-height: 1.5;
}

/* MODERN PROFFSIG AI-CHATBUBBLA */
#chat-launcher {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background-color: var(--accent-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(40, 167, 69, 0.3);
    z-index: 1001;
    transition: transform 0.2s ease;
}
#chat-launcher:hover {
    transform: scale(1.05);
}

#chat-widget {
    position: fixed;
    bottom: 105px;
    right: 30px;
    width: 320px;
    height: 420px;
    background-color: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.12);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: bottom right;
}

.chat-closed {
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
}

#chat-header {
    background-color: #0f172a;
    color: white;
    padding: 16px;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-close-btn {
    cursor: pointer;
    font-size: 1.3rem;
    opacity: 0.7;
}
.chat-close-btn:hover { opacity: 1; }

#chat-logs {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #f8fafc;
}

.msg {
    padding: 10px 14px;
    border-radius: 8px;
    max-width: 80%;
    font-size: 0.9rem;
    line-height: 1.4;
}
.msg.bot {
    background-color: #ffffff;
    color: var(--text-color);
    align-self: flex-start;
    border: 1px solid var(--border-color);
}
.msg.user {
    background-color: var(--accent-color);
    color: white;
    align-self: flex-end;
}

#chat-input-container {
    display: flex;
    padding: 12px;
    background-color: #ffffff;
    border-top: 1px solid var(--border-color);
}

#chat-input {
    flex: 1;
    background: #f1f5f9;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 10px;
    border-radius: 6px;
    outline: none;
    font-size: 0.9rem;
}
#chat-input:focus {
    border-color: var(--accent-color);
    background: #ffffff;
}

#chat-input-container button {
    background: transparent;
    border: none;
    color: var(--accent-color);
    padding: 0 0 0 12px;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.95rem;
}

.hidden { display: none !important; }
footer { text-align: center; color: var(--text-secondary); opacity: 0.5; padding: 40px; font-size: 0.85rem; }
