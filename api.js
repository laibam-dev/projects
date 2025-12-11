const url = "https://jsonplaceholder.typicode.com/users"; 
const getbtn1 = document.getElementById("btn2");
const tbody = document.querySelector(".table1 tbody");



const fetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data", err);
    return [];
  }
};


getbtn1.addEventListener("click", async () => {
    alert("fetch data");
  const data = await fetchData();
  console.log(data);

  tbody.innerHTML = "";

  data.forEach(item => {
    const row = `<tr>
                   <td>${item.id}</td>
                   <td>${item.name}</td>
                   <td>${item.email}</td>
                 </tr>`;
    tbody.innerHTML += row;
  });
});
  

const getbtn3 = document.getElementById("btn3");
//const tbody = document.querySelector(".table1 tbody");

getbtn3.addEventListener("click", async () => {
  alert("update");
  const newdata = [
    { id: "11", name: "laiba mubeen", email: "laibamubeen678@gmail.com" },
    { id: "12", name: "rida", email: "ridasaleem678@gmail.com" },
    { id: "13", name: "Fakhra", email: "fakhra900787788999" }
  ];

  try {
    for (let item of newdata) {

      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      });

      const data = await res.json();
      console.log("Data created:", data);

      const row = `
        <tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.email}</td>
        </tr>`;

      tbody.innerHTML += row;
    }
  } catch (error) {
    console.error("Error creating data:", error);
  }
});



const putbtn = document.getElementById("btn4");
putbtn.addEventListener("click", async () => {

  
  const userId = 1;

  const updatedUser = {
    id: userId,
    name: "RIDA SLEEM",
    email: "saleem6789@gmail.com"
  };

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser)
    });

    const data = await res.json();
    console.log("Updated Data:", data);

        const rows = tbody.querySelectorAll("tr");
    rows.forEach(row => {
      if (row.children[0].textContent == data.id) {
        row.children[1].textContent = data.name;
        row.children[2].textContent = data.email;
      }
    });

  } catch (error) {
    console.error("Error Updating Data:", error);
  }

});









const patchbtn = document.getElementById("btn5");
patchbtn.addEventListener("click", async () => {

  
  const userId = 9;

  const updateddata = {

    email: "fakhra6789@gmail.com"
  };

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateddata)
    });

    const data = await res.json();
    console.log("Updated  specific Data:", data);

        const rows = tbody.querySelectorAll("tr");
    rows.forEach(row => {
      if (row.children[0].textContent == data.id) {
        
        row.children[2].textContent = data.email;
      }
    });

  } catch (error) {
    console.error("Error Updating Data:", error);
  }

});





const btnDelete = document.getElementById("btn6");
btnDelete.addEventListener("click", async () => {
  const userId = 10;

  try {
    const res = await fetch(`${url}/${userId}`, {
      method: "DELETE"
    });
    if (res.ok) {
      console.log(`User ${userId} deleted successfully`);
      const rows = tbody.querySelectorAll("tr");
      rows.forEach(row => {
        if (row.children[0].textContent == userId) {
          row.remove();
        }
      });
    } else {
      console.error("Error deleting user");
    }
  } catch (err) {
    console.error("Error in DELETE:", err);
  }
});
