class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //o bind mantém o document como seu contexto this usando a variavel $
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault(); //cancelando a submissao do formulario

        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));
    }
}