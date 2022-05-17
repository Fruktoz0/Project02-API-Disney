const input = document.getElementById("disneychar");
const button = document.getElementById("search");
const characters = document.querySelectorAll(".characters");

async function disneycharacters(){
    if (input.value == "") {
    const response = await fetch("https://api.disneyapi.dev/characters");

    const disneychars = await response.json();

    
    let output = "";

        disneychars.data.map((disneychar)=>{

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

        characters.innerHTML = output;
    }




else{

   const responsee = await fetch(`https://api.disneyapi.dev/characters/${input.value}`);

    const datas = await responsee.json();

    let output = "";

        output +=`

        <div class="character">
            <h4>${datas.name}</h4>
            <p>Film: ${datas.tvShows}</p>

            <div>
            <img src="${datas.imageUrl}" alt="picture"/>
            </div>



        </div>

        `;



      characters.innerHTML = output;

   }
}
button.addEventListener("click", disneycharacters);
