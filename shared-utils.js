// ========== SHARED DATA & UTILITIES ==========

const STUDENTS = [
  { id: 1, name: "ด.ช. ภูผา สดใส", num: 1, avatar: "🦁", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 2, name: "ด.ช. ก้องภพ ตั้งใจ", num: 2, avatar: "🐻", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 3, name: "ด.ญ. ใบบัว น่ารัก", num: 3, avatar: "🐰", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 4, name: "ด.ญ. มะนาว ยิ้มสวย", num: 4, avatar: "🐱", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 5, name: "ด.ช. วิน รวดเร็ว", num: 5, avatar: "🦊", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 6, name: "ด.ญ. ข้าวหอม ใจดี", num: 6, avatar: "🐼", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 7, name: "ด.ช. ต้นกล้า รักเรียน", num: 7, avatar: "🐸", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 8, name: "ด.ญ. ฟ้าใส เบิกบาน", num: 8, avatar: "🐥", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 9, name: "ด.ช. ปันปัน ช่างคิด", num: 9, avatar: "🐶", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 10, name: "ด.ญ. มีอา เบิกบาน", num: 10, avatar: "🐨", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 11, name: "ด.ช. อาร์ม กล้าหาญ", num: 11, avatar: "🐯", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 12, name: "ด.ญ. พลอย สดชื่น", num: 12, avatar: "🦄", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 13, name: "ด.ช. ธันวา มุ่งมั่น", num: 13, avatar: "🐼", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 14, name: "ด.ญ. แก้มใส ร่าเริง", num: 14, avatar: "🐨", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 15, name: "ด.ช. นที ช่างฝัน", num: 15, avatar: "🐬", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 16, name: "ด.ญ. น้ำหวาน ใจดี", num: 16, avatar: "🦋", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 17, name: "ด.ช. ภูมิพัฒน์ ขยันเรียน", num: 17, avatar: "🐘", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 18, name: "ด.ญ. พิมพ์ชนก ยิ้มหวาน", num: 18, avatar: "🐿️", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 19, name: "ด.ช. ภาคิน รักเพื่อน", num: 19, avatar: "🦊", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 20, name: "ด.ญ. ใบเตย สดใส", num: 20, avatar: "🐝", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 21, name: "ด.ช. รวิภาส ตั้งใจ", num: 21, avatar: "🦁", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 22, name: "ด.ญ. ขิมนภา อ่อนโยน", num: 22, avatar: "🐰", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 23, name: "ด.ช. ปรเมศวร์ กล้าคิด", num: 23, avatar: "🐺", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 24, name: "ด.ญ. ชมพูนุช น่ารัก", num: 24, avatar: "🐹", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 25, name: "ด.ช. กวิน รวดเร็ว", num: 25, avatar: "🐢", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 26, name: "ด.ญ. อัญชัน เบิกบาน", num: 26, avatar: "🦄", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 27, name: "ด.ช. ศุภกร มีน้ำใจ", num: 27, avatar: "🐲", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 28, name: "ด.ญ. มินตรา ช่างสังเกต", num: 28, avatar: "🐱", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 29, name: "ด.ช. เจษฎา สนุกสนาน", num: 29, avatar: "🐵", attended: false, time: "-", score1: "-", score2: "-", miss: 0 },
  { id: 30, name: "ด.ญ. ลลิตา รักการอ่าน", num: 30, avatar: "🐧", attended: false, time: "-", score1: "-", score2: "-", miss: 0 }
];

const VOWELS_POOL = [
  { char: "-ะ", name: "สระ อะ", type: "short", speech: "สระ อะ สระเสียงสั้น" },
  { char: "-า", name: "สระ อา", type: "long", speech: "สระ อา สระเสียงยาว" },
  { char: "-ิ", name: "สระ อิ", type: "short", speech: "สระ อิ สระเสียงสั้น" },
  { char: "-ี", name: "สระ อี", type: "long", speech: "สระ อี สระเสียงยาว" },
  { char: "-ึ", name: "สระ อึ", type: "short", speech: "สระ อึ สระเสียงสั้น" },
  { char: "-ื", name: "สระ อือ", type: "long", speech: "สระ อือ สระเสียงยาว" },
  { char: "-ุ", name: "สระ อุ", type: "short", speech: "สระ อุ สระเสียงสั้น" },
  { char: "-ู", name: "สระ อู", type: "long", speech: "สระ อู สระเสียงยาว" },
  { char: "เ-ะ", name: "สระ เอะ", type: "short", speech: "สระ เอะ สระเสียงสั้น" },
  { char: "เ-", name: "สระ เอ", type: "long", speech: "สระ เอ สระเสียงยาว" },
  { char: "แ-ะ", name: "สระ แอะ", type: "short", speech: "สระ แอะ สระเสียงสั้น" },
  { char: "แ-", name: "สระ แอ", type: "long", speech: "สระ แอ สระเสียงยาว" },
  { char: "โ-ะ", name: "สระ โอะ", type: "short", speech: "สระ โอะ สระเสียงสั้น" },
  { char: "โ-", name: "สระ โอ", type: "long", speech: "สระ โอ สระเสียงยาว" }
];

let currentStudent = null;
const RESEARCH_SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyVSQFXCPTn1PsHVnz6f36ugGphZhwKS0VQnIZJuT_P0vaNrZ8PCD5Ho1VV-3XI3l1d_Q/exec';
const researchSessionId = `session-${Date.now()}`;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// ========== FUNCTIONS ==========

function sendResearchData(eventType, data = {}) {
  if (!RESEARCH_SHEET_WEB_APP_URL) return;
  const payload = {
    sessionId: researchSessionId,
    eventType,
    recordedAt: new Date().toISOString(),
    studentId: currentStudent?.id || '',
    studentNumber: currentStudent?.num || '',
    studentName: currentStudent?.name || '',
    ...data
  };
  fetch(RESEARCH_SHEET_WEB_APP_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload), keepalive: true
  }).catch(() => {});
}

function playTone(freq, duration = 0.15, type = 'sine') {
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function playSuccessSound() {
  playTone(523.25, 0.1); setTimeout(() => playTone(659.25, 0.1), 100);
  setTimeout(() => playTone(783.99, 0.15), 200); setTimeout(() => playTone(1046.50, 0.25), 300);
}

function playErrorSound() {
  playTone(220, 0.2, 'sawtooth'); setTimeout(() => playTone(164.81, 0.3, 'sawtooth'), 150);
}

function playStampSound() {
  playTone(330, 0.08, 'triangle'); setTimeout(() => playTone(880, 0.2, 'sine'), 80);
}

function speakThai(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'th-TH'; utterance.rate = 0.7; utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

function showToast(msg, icon = '💡') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  document.getElementById('toastMessage').innerText = msg; 
  document.getElementById('toastIcon').innerText = icon;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  setTimeout(() => toast.classList.add('opacity-0', 'pointer-events-none'), 2500);
}

function getStudentFromStorage() {
  const stored = localStorage.getItem('currentStudent');
  if (stored) {
    currentStudent = JSON.parse(stored);
    return currentStudent;
  }
  return null;
}

function saveStudentToStorage(student) {
  currentStudent = student;
  localStorage.setItem('currentStudent', JSON.stringify(student));
}

function clearStudentFromStorage() {
  currentStudent = null;
  localStorage.removeItem('currentStudent');
}
