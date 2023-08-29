import pegaArquivo from "./index.js";
import fs from 'fs';
const caminho = process.argv;

async function processaTexto(argumentos) {

    const caminho = argumentos[2]
    
    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho)
        console.log("lista de arquivos", resultado);
    
    } else if(fs.lstatSync(caminho).isDirectory()){
        
        const arquivos = await fs.promises.readdir(caminho)
        
        arquivos.forEach(async (nomeDeArquivo) => {
            
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            
            console.log(`${caminho}/${nomeDeArquivo}`)
            console.log(lista)
        })
        // console.log(arquivos)
        
    }
}
processaTexto(caminho);