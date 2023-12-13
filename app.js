const accordionSection = document.getElementsByClassName('container');
const labels = document.querySelectorAll('.label');

// makes each Q&A clickable in the accordion
for (let section of accordionSection) {
    section.addEventListener('click', function () {
        this.classList.toggle('active');
    })
}

// makes the accordion keyboard accessible
labels.forEach(label => {
    label.addEventListener('keydown', function (e){
        if (e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            this.parentNode.classList.toggle('active');
        }
    });
});
