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
    let conteudoTraduzir = document.getElementById("conteudo-traduzir").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let conteudoTraduzidoHTML = document.getElementById("conteudo-traduzido");

    if (lingua == "LinguaRPG") {
        conteudoTraduzir = conteudoTraduzir.toUpperCase();
        for (let index = 0; index < conteudoTraduzir.length; index++) {
            if (conteudoTraduzir[index] in alfabeto) {
                conteudoTraduzidoJS.push(alfabeto[conteudoTraduzir[index]]);
            }
        }

        conteudoTraduzidoHTML.value = conteudoTraduzidoJS.join("");
    }
    else{
        console.log(conteudoTraduzir);

        conteudoTraduzir = conteudoTraduzir.split(/([A-Z\s.,!?]+)/);

        console.log(conteudoTraduzir);
        
        for (let index = 0; index < conteudoTraduzir.length; index++) {
            if(alfabeto.hasOwnProperty(conteudoTraduzir[index])){
                conteudoTraduzidoJS.push(conteudoTraduzir[index]);
            }
            
            console.log(conteudoTraduzir);
        }

        conteudoTraduzidoHTML.value = conteudoTraduzidoJS.join("");
    }
});