const forms = document.pests;


forms.addEventListener("submit", (e)=>{
       const total = document.getElementById("total");
        const goombas = document.getElementById("goombas").value;
        const bobombs = document.getElementById("bobombs").value;
        const cheeps = document.getElementById("cheepcheeps").value;
        let goombaCoins = "";
        let bobombCoins = "";
        let cheepCoins = "";
        let totalCoins = "";
    goombaCoins = 5 * goombas;
    bobombCoins = 7 * bobombs;
    cheepCoins = 11 * cheeps;
    totalCoins = goombaCoins + bobombCoins + cheepCoins;

    e.preventDefault();
    total.textContent = 'The total coins due for services render are: ' + totalCoins;
   
});

