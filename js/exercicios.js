function ehPalindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/\s/g, ""); // Normaliza a palavra (minúsculas e sem espaços)
    return palavra === palavra.split("").reverse().join("");
}

let palavra = prompt('Insira palavra para checkar se é Palíndromo: ');
if(ehPalindromo(palavra)) {
    alert("É palíndromo!")
} else {
    alert('Não é palíndromo!')
}

