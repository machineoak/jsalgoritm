const livros = require("./listalivros");
const lowerValue = require("./lowervalue");

for(let atual = 0; atual < livros.length - 1; atual++){
    let lower = lowerValue(livros, atual);

    let livrosAtual = livros[atual];
    let livroLowerValue = livros[lower];

    livros[atual] = livroLowerValue
    livros[lower] = livrosAtual
}

console.log(livros);