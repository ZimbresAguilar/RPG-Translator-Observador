/*-----===VARIABLES===-----*/
const alfabeto = {
    "A": "aaa",
    "B": "bbb",
    "C": "ccc",
    "D": "ddd",
    "E": "eee",
    "F": "fff",
    "G": "ggg",
    "H": "hhh",
    "I": "iii",
    "J": "jjj",
    "K": "kkk",
    "L": "lll",
    "M": "mmm",
    "N": "nnn",
    "O": "ooo",
    "P": "ppp",
    "Q": "qqq",
    "R": "rrr",
    "S": "sss",
    "T": "ttt",
    "U": "uuu",
    "V": "vvv",
    "W": "www",
    "X": "xxx",
    "Y": "yyy",
    "Z": "zzz",
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
    let conteudoTraduzido = document.getElementById("conteudo-traduzido");

    if (lingua == "LinguaRPG") {
        for (let index = 0; index < conteudoTraduzir.length; index++) {
            
            for(let jIndex in alfabeto){
                if(conteudoTraduzir[index] == alfabeto[jIndex]){
                    conteudoTraduzidoJS.push(alfabeto[jIndex]);
                }

                console.log(conteudoTraduzir);
                console.log(conteudoTraduzidoJS);
            }
        }

        conteudoTraduzido.value = conteudoTraduzidoJS.join("");

        console.log(conteudoTraduzido.value = conteudoTraduzidoJS.join(""));
    }

});