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
    let conteudoTraduzir = document.getElementById("conteudo-traduzir").value.toUpperCase();
    let conteudoTraduzidoHTML = document.getElementById("conteudo-traduzido");

    if (lingua == "LinguaRPG") {
        for (let index = 0; index < conteudoTraduzir.length; index++) {
            if (conteudoTraduzir[index] in alfabeto) {
                conteudoTraduzidoJS.push(alfabeto[conteudoTraduzir[index]]);
            }
        }

        conteudoTraduzidoHTML.value = conteudoTraduzidoJS.join("");
    }
    else{
        let conteudoTraduzirSeparado = conteudoTraduzir.split(/(?=[A-Z])|[^A-Za-z ]/);
        
        for (let index = 0; index < conteudoTraduzirSeparado.length; index++) {
            if(alfabeto.hasOwnProperty(conteudoTraduzirSeparado[index])){
                conteudoTraduzidoJS.push(Object.keys(alfabeto)[index]);
            }
            
            console.log(conteudoTraduzirSeparado);
        }

        conteudoTraduzidoHTML.value = conteudoTraduzidoJS.join("");
    }
});