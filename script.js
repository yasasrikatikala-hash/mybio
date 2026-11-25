const menuButton = document.querySelector(".menu-btn");
        const navbar = document.querySelector("#navbar");
        const contactForm = document.querySelector("#contact-form");
        const formStatus = document.querySelector("#form-status");

        menuButton.addEventListener("click", () => {
            const isOpen = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", String(!isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
            navbar.classList.toggle("is-open", !isOpen);
        });

        navbar.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                navbar.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation menu");
            }
        });

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const subject = `Portfolio message from ${formData.get("name")}`;
            const body = [
                `Name: ${formData.get("name")}`,
                `Email: ${formData.get("email")}`,
                "",
                formData.get("message")
            ].join("\n");
            const mailto = `mailto:yasasrikatikala@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            formStatus.replaceChildren("Your email app should open with your message. If it doesn't, ");
            const fallbackLink = document.createElement("a");
            fallbackLink.href = mailto;
            fallbackLink.textContent = "open it here";
            formStatus.append(fallbackLink, ".");
            window.location.href = mailto;
        });
