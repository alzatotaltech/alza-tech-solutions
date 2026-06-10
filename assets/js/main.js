const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.navlinks');if(toggle){toggle.addEventListener('click',()=>nav.classList.toggle('active'))}document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(f);const name=data.get('name')||'Website visitor';const service=data.get('service')||'IT Consultation';const msg=data.get('message')||'';const body=encodeURIComponent(`Name: ${name}\nCompany: ${data.get('company')||''}\nEmail: ${data.get('email')||''}\nMobile: ${data.get('mobile')||''}\nService: ${service}\nMessage: ${msg}`);window.location.href=`mailto:alzatotaltechsolutionsfzllc@gmail.com?subject=New website enquiry - ${encodeURIComponent(service)}&body=${body}`}));


// Live thumbnail enhancement
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".live-solution-visual").forEach((el, i) => {
    el.style.setProperty("--live-delay", `${(i % 5) * 0.25}s`);
    const ticker = el.querySelector(".live-title-strip");
    if (ticker) ticker.style.animationDuration = `${16 + (i % 6)}s`;
  });
});

// On-site WhatsApp-style enquiry chat widget
document.addEventListener("DOMContentLoaded", function () {
    const widget = document.getElementById("alzaChatWidget");
    if (!widget) return;

    const toggle = widget.querySelector(".alza-chat-toggle");
    const close = widget.querySelector(".alza-chat-close");
    const form = widget.querySelector("#alzaChatForm");
    const success = widget.querySelector("#alzaChatSuccess");
    const thread = widget.querySelector("#alzaChatThread");

    // Connect this to your backend / WhatsApp Business API endpoint.
    // Example: "/api/send-whatsapp-enquiry"
    // This keeps customers inside the website. It does NOT open WhatsApp.
    const WHATSAPP_BACKEND_ENDPOINT = "";

    function addBubble(message, type) {
        if (!thread) return;
        const bubble = document.createElement("div");
        bubble.className = "alza-chat-bubble " + type;
        bubble.textContent = message;
        thread.appendChild(bubble);
        thread.scrollTop = thread.scrollHeight;
    }

    toggle && toggle.addEventListener("click", function () {
        widget.classList.toggle("active");
    });

    close && close.addEventListener("click", function () {
        widget.classList.remove("active");
    });

    form && form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const data = new FormData(form);
        const payload = {
            name: (data.get("name") || "").toString().trim(),
            email: (data.get("email") || "").toString().trim(),
            mobile: (data.get("mobile") || "").toString().trim(),
            enquiry: (data.get("enquiry") || "").toString().trim(),
            page: window.location.href,
            submittedAt: new Date().toISOString()
        };

        addBubble(
            "Name: " + payload.name + "\nEmail: " + payload.email + "\nMobile: " + payload.mobile + "\nEnquiry: " + payload.enquiry,
            "customer"
        );

        form.classList.add("submitted");
        success && success.classList.add("show");

        if (!WHATSAPP_BACKEND_ENDPOINT) {
            addBubble("Enquiry captured on website. Connect backend endpoint to send this live to your WhatsApp Messenger.", "system");
            return;
        }

        try {
            const response = await fetch(WHATSAPP_BACKEND_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Failed to submit enquiry");

            addBubble("Submitted successfully. Our team will contact you shortly.", "agent");
        } catch (error) {
            addBubble("Your enquiry is recorded on this page, but live WhatsApp delivery needs backend configuration.", "system");
            console.error(error);
        }
    });
});

