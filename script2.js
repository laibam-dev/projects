console.log("Laiba Mubeen");


let form = document.getElementById("sellerform");

let tableBody = document.getElementById("sellertable");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nm = document.getElementById("name").value;
    const em = document.getElementById("email").value;
    const ph = document.getElementById("phone").value;
    const cat = document.getElementById("categories").value;
    const addr = document.getElementById("address").value;

    if(nm === "" || em === "" || ph === "") {
        alert("Please fill out Name, Email, and Phone fields.");
        return;
    }

    const selectedServices = document.querySelectorAll('input[name="services"]:checked');
    const services = Array.from(selectedServices).map(cb => cb.value);


    let newRow = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.textContent = nm;
    newRow.appendChild(nameCell);

    let emailCell = document.createElement("td");
    emailCell.textContent = em;
    newRow.appendChild(emailCell);

    let phoneCell = document.createElement("td");
    phoneCell.textContent = ph;
    newRow.appendChild(phoneCell);

    let categoryCell = document.createElement("td");
    categoryCell.textContent = cat;
    newRow.appendChild(categoryCell);

    let addressCell = document.createElement("td");
    addressCell.textContent = addr;
    newRow.appendChild(addressCell);

    let servicesCell = document.createElement("td");
    servicesCell.textContent = services.join(", ");
    newRow.appendChild(servicesCell);

    let actionCell = document.createElement("td");

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginRight = "5px";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);
    newRow.appendChild(actionCell);

    tableBody.appendChild(newRow);

    form.reset();
    alert("Form submitted successfully!");

    deleteBtn.addEventListener("click", function() {
    let row = this.parentNode.parentNode;
    row.remove();
});


});
