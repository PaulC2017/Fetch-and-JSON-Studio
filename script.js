window.addEventListener("load", function() {
    let json = [];

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const astronaut = document.getElementById("astronaut");
            json.forEach(function(astro) {
                astronaut.innerHTML = astronaut.innerHTML + `

            <div class="astronaut">
               <div>
               <h3>
               ${astro.firstName} ${astro.lastName}
               </h3>

               <ul>
                    <li>Hours in space: ${astro.hoursInSpace}</li>
                    <li>Active: ${astro.active}</li>
                    <li>Skills: ${astro.skills}</li>
                </ul>
                </div>
                <img class ="avatar" src=${astro.picture} height=250></img>
            </div>
         `;

            });


        });
    });


});

//
