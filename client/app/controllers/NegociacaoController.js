class NegociacaoController {
    adiciona(event) {
        event.preventDefault(); //cancelando a submissao do formulario
        //o bind mantém o document como seu contexto this usando a variavel $
        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));
    }
}