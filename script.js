
const uBox = document.getElementById("user-box");
const age = document.getElementById("age");
const sort = document.getElementById("sort");
const getU = document.getElementById("get-users");
const reload = document.getElementById("reload");
const serch = document.getElementById("search");
const loader = document.getElementById("loader");
const inp = document.getElementById("search");
const select = document.getElementById("age");
let users;


reload.addEventListener("click", () => {
    location.reload();
})





getU.addEventListener("click", async () => {
    const javob = await fetch("https://randomuser.me/api/?results=100");
    users = await javob.json();
    if (!javob.ok) {
        return usersView(users.results);
    } else {
        loader.style = "display: none; transition: 3s;"
        usersView(users.results);
    }
})


function usersView(user) {

    uBox.innerHTML = '';
    user.forEach(data => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <br><img class="person" src="${data.picture.large}"
                    alt=""><br><br><br>
                <h2>${data.name.title} ${data.name.first} ${data.name.last}</h2><br>
                <h3>Age: ${data.dob.age}</h3><br>
                <h3>Address: ${data.location.street.name}  ${data.location.street.number}</h3><br>
                <h3>Email: ${data.email}</h3><br>
                `;
        uBox.appendChild(div);
    })
}

inp.addEventListener("input", () => {
    const search = users.results.filter((e) =>
        e.name.first.toLowerCase().includes(inp.value.toLowerCase().trim()) ||
        e.name.last.toLowerCase().includes(inp.value.toLowerCase().trim())
    );
    usersView(search);
});

select.addEventListener("change", () => {
    if (select.value == "All") {
        usersView(users);
    } else if (select.value == "15-25") {
        const users1 = users.results.filter(e => e.dob.age >= 15 && e.dob.age<= 25);
        usersView(users1)
    } else if (select.value == "25-40") {
        const users1 = users.results.filter(e => e.dob.age >= 25 && e.dob.age<= 40);
        usersView(users1)
    } else if (select.value == "40-60") {
        const users1 = users.results.filter(e => e.dob.age >= 40 && e.dob.age<= 60);
        usersView(users1)
    } else if (select.value == "60") {
        const users1 = users.results.filter(e => e.dob.age >= 60);
        usersView(users1)
    }else{
        console.log(Error);
    }
});


sort.addEventListener("change", () => {
    if (sort.value == "A-Z") {
        let changed = [...users.results].sort((a, b) => a.name.first.localeCompare(b.name.first));
        usersView(changed);
    } else {
        let changed = [...users.results].sort((a, b) => b.name.first.localeCompare(a.name.first));
        usersView(changed);
    }
});