class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); //o bind mantém o document como seu contexto this usando a variavel $
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault(); //cancelando a submissao do formulario
        let converte = new DateCoverter();

        let data = converte.paraData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        let diaMesAno = converte.paraTexto(negociacao.data);
        console.log(diaMesAno);

        // console.log(data);
        // console.log(parseInt(this._inputQuantidade.value));
        // console.log(parseFloat(this._inputValor.value));
    }
}