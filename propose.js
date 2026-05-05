const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionDiv = document.getElementById('valentine-question');
const successDiv = document.getElementById('success-message');

let noCount = 0;
let yesFontSize = 18; // Initial font size

const noMessages = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Click the green one!",
    "The green one looks much nicer",
    "Stop that",
    "Think again!",
    "Surely not?",
    "Last chance!",
    "Seriously?",
    "Have a heart!",
    "Don't be so cold!",
    "Change of mind?",
    "You're breaking my heart",
    "Is that your final answer?",
    "Okay, I'm taking the day off",
];

noBtn.addEventListener('click', () => {
    noCount++;
    
    // 1. Change the "No" button text
    const messageIndex = Math.min(noCount, noMessages.length - 1);
    noBtn.innerText = noMessages[messageIndex];
    
    // 2. Make the "Yes" button bigger
    yesFontSize += 20; // Increase font size by 20px each click
    yesBtn.style.fontSize = `${yesFontSize}px`;
    yesBtn.style.padding = `${yesFontSize / 2}px ${yesFontSize}px`;
    
    // 3. Move the No button slightly or make it harder to click (Optional)
    // If you want it to move around, you could add random positioning here.
});

yesBtn.addEventListener('click', () => {
    questionDiv.classList.add('hidden');
    successDiv.classList.remove('hidden');
});