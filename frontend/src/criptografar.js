const criptografar = (chave, texto) => {
    let aux = ''
    let txtCifrado = ''
    let c = ""
    for (let i = 0; i < texto.length; i++) {
        aux = ''
        let code = texto.charCodeAt(i) + chave
        c = aux + code
        c = String.fromCharCode(c)
        txtCifrado += c;
    }
    return txtCifrado
}

export default criptografar