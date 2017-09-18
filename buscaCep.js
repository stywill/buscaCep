$(document).ready(function () {
    //Preenche os campos na a&#231;&#227;o "Blur" (mudar de campo)
    $("#cep").blur(function () {
        //inicia loader 

        document.getElementById('loading').style.display = '';
        $("#logradouro").val("...");
        $("#endereco").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#uf").val("...");
        $("#estado").val("...");
        // seta a variavel requisitada no campo cep
        var cepLimpo = $("#cep").val();
        //separa o '-' dos numeros
        var consulta = cepLimpo.replace("-", "");

        //Realiza a consulta
        /*Realiza a consulta atrav&#233;s do toolsweb passando o cep como parametro
         e informando que vamos consultar no tipo javascript
         */
        //$.getScript("http://www.isped.com.br/clientewebservice/clienteWebService.php?cep=" + consulta , function () {         

        $.getJSON("http://viacep.com.br/ws/" + consulta + "/json/?callback=?", function (resultadoCEP) {
            //fecha o loader
            //$(".box_3").fadeOut("slow");
            document.getElementById('loading').style.display = 'none';
            //unescape - Decodifica uma string codificada com o m&#233;todo escape.
            logradouro = unescape(resultadoCEP.tipoLogradouro);
            rua = resultadoCEP.logradouro;
            bairro = decodeURIComponent(resultadoCEP.bairro);
            //cidade = unescape(resultadoCEP.cidade);
            cidade = unescape(resultadoCEP.localidade);
            //uf = unescape(resultadoCEP.estado);
            uf = unescape(resultadoCEP.uf);

            // preenche os campos
            $("#logradouro").val(logradouro);
            //$("#endereco").val(logradouro + " " + rua);
            $("#endereco").val(rua);
            $("#bairro").val(bairro);
            $("#cidade").val(cidade);
            $("#uf").val(uf);
            $("#estado").val(uf);
        });
        /*
         $.ajax(
         {
         type: "POST",
         dataType: "json",
         url: "http://localhost:8088/ISPED/clientewebservice/clienteWebService.php",
         data: "cep=" + consulta,
         beforeSend: function () {
         // enquanto a função esta sendo processada, você
         // pode exibir na tela uma
         // msg de carregando
         },
         success: function (data) {
         console.log(data);
         var dados = data.split(",");
         $("#logradouro").val(dados[0]);
         $("#endereco").val(dados[1]);
         $("#bairro").val(data[2]);
         $("#cidade").val(data[3]);
         $("#uf").val(data[4]);
         if (data.uf) {
         $("#pais").val("Brasil");
         } else {
         $("#pais").val();
         }
         document.getElementById( 'loading' ).style.display = 'none';
         
         },
         error: function (txt) {
         // em caso de erro você pode dar um alert('erro');
         }
         });*/
    });
});

function buscaCepLinha(linha) {
    $("#cep" + linha).blur(function () {
        //inicia loader 

        document.getElementById('loading' + linha).style.display = '';
        $("#logradouro" + linha).val("...");
        $("#endereco" + linha).val("...");
        $("#bairro" + linha).val("...");
        $("#cidade" + linha).val("...");
        $("#uf" + linha).val("...");
        $("#estado" + linha).val("...");
        $("#pais" + linha).val("...");

        // seta a variavel requisitada no campo cep
        var cepLimpo = $("#cep" + linha).val();
        //separa o '-' dos numeros
        var consulta = cepLimpo.replace("-", "");

        //Realiza a consulta
        /*Realiza a consulta atrav&#233;s do toolsweb passando o cep como parametro
         e informando que vamos consultar no tipo javascript
         */
        //$.getScript("http://www.isped.com.br/clientewebservice/clienteWebService.php?cep=" + consulta, function () {
        $.getJSON("http://viacep.com.br/ws/" + consulta + "/json/?callback=?", function (resultadoCEP) {
            //fecha o loader
            //$(".box_3").fadeOut("slow");
            document.getElementById('loading' + linha).style.display = 'none';
            //unescape - Decodifica uma string codificada com o m&#233;todo escape.
            logradouro = unescape(resultadoCEP.tipoLogradouro);
            rua = resultadoCEP.logradouro;
            bairro = decodeURIComponent(resultadoCEP.bairro);
            //cidade = unescape(resultadoCEP.cidade);
            cidade = unescape(resultadoCEP.localidade);
            //uf = unescape(resultadoCEP.estado);
            uf = unescape(resultadoCEP.uf);

            // preenche os campos
            $("#logradouro" + linha).val(logradouro);
            //$("#endereco" + linha).val(logradouro + " " + rua);
            $("#endereco" + linha).val(rua);
            $("#bairro" + linha).val(bairro);
            $("#cidade" + linha).val(cidade);
            $("#uf" + linha).val(uf);
            $("#estado" + linha).val(uf);
        });
    });
}
function buscaCepHotsite() {
    
    $("#widgetu9621_input").blur(function () {      
        document.getElementById('loading').style.display = '';
        $("#logradouro").val("...");
        $("#widgetu9699_input").val("...");
        $("#widgetu9873_input").val("...");
        $("#widgetu9925_input").val("...");
        $("#uf").val("...");
        $("#widgetu9977_input").val("...");
        $("#pais").val("...");
        var cepLimpo = $("#widgetu9621_input").val();
        var consulta = cepLimpo.replace("-", "");
        $.getJSON("http://viacep.com.br/ws/" + consulta + "/json/?callback=?", function (resultadoCEP) {
            document.getElementById('loading').style.display = 'none';
            logradouro = unescape(resultadoCEP.tipoLogradouro);
            rua = resultadoCEP.logradouro;
            bairro = decodeURIComponent(resultadoCEP.bairro);
            //cidade = unescape(resultadoCEP.cidade);
            cidade = unescape(resultadoCEP.localidade);
            //uf = unescape(resultadoCEP.estado);
            uf = unescape(resultadoCEP.uf);
            // preenche os campos
            $("#logradouro").val(logradouro);
            //$("#endereco" + linha).val(logradouro + " " + rua);
            $("#widgetu9699_input").val(rua);
            $("#widgetu9873_input").val(bairro);
            $("#widgetu9925_input").val(cidade);
            $("#uf").val(uf);
            $("#widgetu9977_input").val(uf);
        });
    });
}
function buscaCepHotsiteSuperior() {
    
    $("#widgetu10552_input").blur(function () {      
        document.getElementById('loading').style.display = '';
        $("#logradouro").val("...");
        $("#widgetu10530_input").val("...");
        $("#widgetu10525_input").val("...");
        $("#widgetu10511_input").val("...");
        $("#uf").val("...");
        $("#widgetu10557_input").val("...");
        $("#pais").val("...");
        var cepLimpo = $("#widgetu10552_input").val();
        var consulta = cepLimpo.replace("-", "");
        $.getJSON("http://viacep.com.br/ws/" + consulta + "/json/?callback=?", function (resultadoCEP) {
            document.getElementById('loading').style.display = 'none';
            logradouro = unescape(resultadoCEP.tipoLogradouro);
            rua = resultadoCEP.logradouro;
            bairro = decodeURIComponent(resultadoCEP.bairro);
            //cidade = unescape(resultadoCEP.cidade);
            cidade = unescape(resultadoCEP.localidade);
            //uf = unescape(resultadoCEP.estado);
            uf = unescape(resultadoCEP.uf);
            // preenche os campos
            $("#logradouro").val(logradouro);
            //$("#endereco" + linha).val(logradouro + " " + rua);
            $("#widgetu10530_input").val(rua);
            $("#widgetu10525_input").val(bairro);
            $("#widgetu10511_input").val(cidade);
            $("#uf").val(uf);
            $("#widgetu10557_input").val(uf);
        });
    });
}