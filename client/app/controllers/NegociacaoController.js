class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //o bind mantém o document como seu contexto this usando a variavel $
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault(); //cancelando a submissao do formulario
        let data = new Date(...this._inputData.value.split('-').map((item, indice) => item - indice % 2));
        console.log(data);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));
    }
}