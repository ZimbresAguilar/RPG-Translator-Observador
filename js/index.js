/*-----===VARIABLES===-----*/
const alfabeto = {
    "A": "An",
    "B": "Bal",
    "C": "Cor",
    "D": "Dax",
    "E": "Erz",
    "F": "Fir",
    "G": "Gol",
    "H": "Hath",
    "I": "Ish",
    "J": "Jur",
    "K": "Kag",
    "L": "Liq",
    "M": "Mul",
    "N": "Nol",
    "O": "Olk",
    "P": "Paex",
    "Q": "Qen",
    "R": "Rak",
    "S": "Sar",
    "T": "Tor",
    "U": "Um",
    "V": "Vat",
    "W": "Wos",
    "X": "Xo",
    "Y": "Yil",
    "Z": "Zet",
    " ": " ",
    ".": ".",
    ",": ",",
    "!": "!",
    "?": "?",
}
const form = document.getElementById("form-tradutor-rpg");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let lingua = document.getElementById("lingua").value;
    let conteudoTraduzidoJS = [];
    let conteudoTraduzir = document.getElementById("conteudo-traduzir").value;
    let conteudoTraduzidoHTML = document.getElementById("conteudo-traduzido");

    if (lingua == "LinguaRPG") {
        for (let index = 0; index < conteudoTraduzir.length; index++) {
            
            for(let jIndex in alfabeto){
                if(conteudoTraduzir[index] == Object.keys(alfabeto)[jIndex]){
                    conteudoTraduzidoJS.push(alfabeto[jIndex]);
                }

                console.log(Object.keys(alfabeto)[jIndex]);
                console.log(conteudoTraduzir);
                console.log(conteudoTraduzidoJS);
            }
        }

        conteudoTraduzidoHTML.value = conteudoTraduzidoJS.join("");

        console.log(conteudoTraduzidoHTML.value = conteudoTraduzidoJS.join(""));
    }

});