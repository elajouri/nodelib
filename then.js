function promessa(bool) {
  const x = bool;
  return new Promise((resolve, reject) => {
    if (!x) {
      reject(new Error("falha na promessa"));
    } else {
      resolve("sucesso na promessa");
    }
  });
}
   
function exibeResposta(textoResult) {
  console.log(textoResult);
}
   
promessa(true)
.then((texto) => exibeResposta(texto))
   // sucesso na promessa