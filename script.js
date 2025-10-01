const aboutSect = document.querySelector('.about');
const blackHole = document.querySelector('.blackhole');
const cards = document.querySelectorAll('.card');

aboutSect.addEventListener('mousemove', function(e) {
    const rect = aboutSect.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = blackHole.offsetWidth;
    blackHole.style.opacity = '1';
    blackHole.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
});
aboutSect.addEventListener('mouseleave', () => {
    blackHole.style.opacity = '0';
})

cards.forEach(c => {
    c.addEventListener('mouseenter', () => {
        blackHole.style.width = '75px';
    });
    c.addEventListener('mouseleave', () => {
        blackHole.style.width = '150px';
    });
});

const faqsWrapper = document.querySelectorAll('.faqs-question-wrapper');

faqsWrapper.forEach(faq => {
    faq.addEventListener('click', () => {
        const answer = faq.nextElementSibling; 

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.opacity = 0;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = 1;
        }
    });
});

const eventCard = document.querySelectorAll('.event-divider');
const eventPopup = document.querySelector('.event-popup');
const closeBtn = document.querySelector('.close-btn');

eventCard.forEach(card => {
    
    card.addEventListener('click', () => {
        console.log('clicked');
        eventPopup.classList.remove('hide');
        eventPopup.classList.add('show');
    });

});
closeBtn.addEventListener('click', () => {

    if (eventPopup.classList.contains('show')) {
        eventPopup.classList.add('hide');
        eventPopup.classList.remove('show');
    }

});
