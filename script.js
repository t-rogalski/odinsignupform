const labels = document.querySelectorAll("label");

const form = document.querySelector(".form-container");

labels.forEach((label) => {
    const input = label.nextElementSibling;

    const div = document.createElement("div");
    div.classList.add("labin");
    
    div.appendChild(label);
    div.appendChild(input);

    form.appendChild(div);
})


