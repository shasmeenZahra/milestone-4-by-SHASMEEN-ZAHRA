var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = " \n    <h2>Resume</h2>\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span></p>\n    <p><strong>email:</strong><span id=\"edit-edit\" class=\"editable\"> ").concat(email, " </span><p>\n    <p><strong>phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span><p>\n    <h3>Education</h3>\n    <p><strong>Education:</strong> <span id=\"edit-education\" class=\"editable\"> ").concat(education, " </span></p>\n    <h3 >Experience</h3>\n    <p><strong>Experience:</strong> <span id=\"edit-experience\" class=\"editable\"> ").concat(experience, " </span></p>\n    <h3>Skills</h3>\n    <p><strong>Skill:</strong> <span id=\"edit-skills\" class=\"editable\"> ").concat(skills, " </span></p>\n\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing ');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and the skills section
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    // Set the initial display state of the skills section
    if (skillsSection) {
        skillsSection.style.display = 'block'; // Initially visible
    }
    // Add event listener to toggle the skills section
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            // Toggle the display state of the skills section
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        });
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
