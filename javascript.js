const buttons = document.querySelectorAll('#button');

buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        btn.style.transform = 'scale(0.9)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('touchstart', event => {
        btn.style.transform = 'scale(0.9)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseup', event => {
        btn.style.transform = 'none';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('touchend', event => {
        btn.style.transform = 'none';
    })
})