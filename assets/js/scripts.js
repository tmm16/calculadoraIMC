$(function() {

    /*Adiciona uma mascara para a altura.*/
    $('#altura').mask('0.00');

    /*Ao apertar ENTER em altura, seleciona o campo peso*/
    $('#altura').on('keyup', function(k){
        if(k.keyCode == 13){
            $('#peso').focus();
        }
    });

    /*Aciona o botão*/
    $("#bt").on("click", function(e){

        /*Impede a atualização da página*/
        e.preventDefault();

        /*Recebe dados do usuário e calcula IMC*/
        var altura = $('#altura').val();
        var peso = $('#peso').val();
        var imc = peso / (altura * altura);

        /*Ajusta o sistema para aceitar virgula ou ponto*/
        altura = altura.replace(',','.');
        peso = peso.replace(',','.');
        /*Apresenta apenas duas casas decimais*/
        imc = imc.toFixed(2);

        /*Preenche resultado*/
        $('#resultado').html("Seu IMC é: "+imc+".");

        /*Preenche orientação e atualiza a imagem*/
        if(imc < 18.5) {
            $('#orientacao').html('Você está abaixo do peso!');
            $("#imagem").attr("src", "assets/images/abaixo.png");
        }
        else if(imc >= 18.5 && imc < 25) {
            $('#orientacao').html('Parabéns — você está em seu peso normal!');
            $("#imagem").attr("src", "assets/images/normal.png");
        }
        else if(imc >= 25 && imc < 30) {
            $('#orientacao').html('Você está acima de seu peso (sobrepeso).');
            $("#imagem").attr("src", "assets/images/sobrepeso.png");
        }
        else if(imc >= 30 && imc < 35) {
            $('#orientacao').html('Obesidade grau I.');
            $("#imagem").attr("src", "assets/images/obeso1.png");
        }
        else if(imc >= 35 && imc < 40) {
            $('#orientacao').html('Obesidade grau II.');
            $("#imagem").attr("src", "assets/images/obeso2.png");
        }
        else if(imc >= 40 && imc < 50) {
            $('#orientacao').html('Obesidade grau III.');
            $("#imagem").attr("src", "assets/images/obeso3.png");
        }
        else if(imc > 50) {
            $('#orientacao').html('Obesidade grau IV.');
            $("#imagem").attr("src", "assets/images/obeso4.png");
        }
        else {
            $('#resultado').html('Impossível calcular');
            $('#orientacao').html('Informe os valores');
        }

    });

});