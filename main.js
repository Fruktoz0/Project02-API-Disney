const input = document.getElementById("disneychar");
const button = document.getElementById("search");
const characters = document.querySelectorAll(".characters");

async function disneychar(){
    if (input.value == "") {
    const response = await fetch("https://api.disneyapi.dev/characters");

    const disneychars = await response.json();

    
    let output = "";

        disneychars.forEach((disneychar)=>{

            output +=`

            <div class="character">
                <h4>${disneychar.name}</h4>
                <p>Film: ${disneychar.tvShows}</p>

                <div>
                <img src="${disneychar.imageUrl}" alt="picture"/>
                </div>



            </div>

            `;
        })

    }
}

button.addEventListener("click", disneychar);
/*
else{



}*/