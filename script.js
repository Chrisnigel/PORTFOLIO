// Check when skills section is in view and add the "visible" class to animate the sliding effect
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const skills = document.querySelectorAll(".skill");

    // Function to detect if an element is in view
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Check when the skills section is in view
    window.addEventListener("scroll", () => {
        if (isElementInViewport(skillsSection)) {
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add("visible"); // Add the class to trigger sliding effect
                }, index * 200); // Delay for each skill
            });
        }
    });
});
