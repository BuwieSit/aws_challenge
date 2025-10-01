const missionSect = document.querySelector('.mission');
const blackHole = document.querySelector('.blackhole');
const cards = document.querySelectorAll('.card');

missionSect.addEventListener('mousemove', function(e) {
    const rect = missionSect.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = blackHole.offsetWidth;

    blackHole.style.opacity = '1';
    blackHole.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
});

cards.forEach(c => {
    c.addEventListener('mouseenter', () => {
        blackHole.style.width = '75px';
    });
    c.addEventListener('mouseleave', () => {
        blackHole.style.width = '150px';
    });
});
