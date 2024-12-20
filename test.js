https://css-loaders.com/time/

loading



const odamlarqutisi = document.getElementById("odamlarqutisi"); 
const getUsersBtn = document.getElementById("get-users"); 
const qidiruvInput =document.getElementById("search") 
const select =document.getElementById("age") 
const selectSort=document.getElementById("sort") 
const reload =document.getElementById("reload"); 
let odamlart; 
 
 
async function getData() { 
    const javob = await fetch("https://randomuser.me/api/?results=100");  
    const data = await javob.json(); 
    const odamlar = data.results; 
    console.log(data) 
    odamlart=odamlar  
 
    odamchizish(odamlar) 
} 
 
getData() 
async function odamchizish(odamlar) { 
 
 
        odamlarqutisi.innerHTML = ""; 
 
        odamlar.forEach(odam => { 
            let odamKartasi =document.createElement("div") 
            odamKartasi.classList.add("namunaodam"); 
         odamKartasi.innerHTML = ` 
                 
                    <h1>${odam.name.first} ${odam.name.last}</h1> 
                    <h3>${odam.gender}</h3> 
                    <h3>${odam.dob.age} yosh</h3> 
                    <img class="rasm" src="${odam.picture.large}" alt="User Image"> 
                 
            `; 
            odamlarqutisi.appendChild(odamKartasi) 
        }); 
 
} 
 
getUsersBtn.addEventListener("click", ()=>{ 
    console.log("bhdshfsdj"); 
    odamchizish() 
}); 
 
 
qidiruvInput.addEventListener("input",()=>{ 
 
    let search=odamlart.filter(e=>e.name.first.toLocaleLowerCase().includes(qidiruvInput.value.toLocaleLowerCase().trim())); 
         odamchizish(search) 
}) 
 
 
 
select.addEventListener("change", () => { 
    if (select.value == "All") { 
        odamchizish(odamlart); 
    } else { 
        let search = odamlart.filter(e => e.dob.age.toString().includes(select.value)); 
        odamchizish(search); 
    } 
}); 
 
selectSort.addEventListener("click", () => { 
    if (selectSort.value == "A-Z") { 
        let changedPokemons = pokemons.sort((pk1, pk2) => pk1.name.localeCompare(pk2.name)); 
        pokimonView(changedPokemons); 
    } else { 
        let changedPokemons = pokemons.sort((pk1, pk2) => pk2.name.localeCompare(pk1.name)); 
        pokimonView(changedPokemons); 
    } 
}); 
 
 
reload.addEventListener("click",()=>{ 
    location.reload(); 
})