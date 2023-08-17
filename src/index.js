import fs from 'fs';

function extractlinks(text){
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...text.matchAll(regex)] ;
  const results = capturas.map(captura => ({[captura[1]]: captura[2]}));
  console.log(results)
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(erro.code = 'não há arquivo no diretório');
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    extractlinks(texto);
  } catch (erro) { 
    trataErro(erro)
  } 
}


// promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro)
// }

pegaArquivo('./arquivos/texto.md');

export default pegaArquivo;
// \[[^[\]]*?\]