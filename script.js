console.log('working')

function scrollToContact() {
    let contactSection = document.getElementById('contact-section');

    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToSkills() {
    let skillsSection = document.getElementById('skills-section');

    if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToEducation() {
    let educationSection = document.getElementById('education-section');

    if (educationSection) {
        educationSection.scrollIntoView({ behavior: 'smooth' });
    }
}