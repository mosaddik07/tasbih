const counterInput = document.getElementById('counter_input');
const count = document.getElementById('count');
const reset = document.getElementById('resetButton');
let countNumber = 0;

alert('Press "Enter" or "Space" to start counting the Tasbih.');

window.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === "Enter") {
        count.classList.add("hover_effect")
        count.click();

        setTimeout(() => {
            count.classList.remove('hover_effect');
        }, 200);
    }
})
count.addEventListener('click', () => {
    countNumber++;
    counterInput.innerHTML = countNumber;
})
reset.addEventListener('click', () => {
    let reset = confirm("Are you sure you want to reset?");

    if (reset) {
        countNumber = 0;
        counterInput.innerHTML = 0;
    }
})