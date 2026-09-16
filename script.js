
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const projectItem = button.closest(".project-item");

            projectItem.classList.toggle("open");

            if (projectItem.classList.contains("open")) {
                button.textContent = "Read Less";
            } else {
                button.textContent = "Read More";
            }
        });
    });
