<?php
/*
 * API NUSOAP
 */
error_reporting(E_PARSE);

//import_request_variables("gP","");
extract($_GET, EXTR_REFS, "");
extract($_POST, EXTR_REFS, "");
extract($_REQUEST, EXTR_REFS, "");
require_once( 'soap/nusoap.php' );
// Definição da localização
$wsdl = 'http://www.toolsweb.com.br/webservice/serverWebService.php?wsdl';

// Criação de uma instância do cliente
$client = new nusoap_client($wsdl, true);

// Verifica se ocorreu erro na criação do objeto
$erro = $client->getError();
if ($erro) {

    echo "Erro no construtor <pre>" . $erro . "</pre>";
}

// Chamada do método SOAP
//$cep = '03685040';
$result = $client->call('consultaCEP', array($cep));
$retorno = simplexml_load_string($result);
//verifica se ocorreu falha na chamada do mótodo
if ($client->fault) {
    echo "Falha <pre>" . print_r($result) . "</pre>";
} else {
    $erro = $client->getError();
    if ($erro) {
        echo "Erro: <pre>" . $erro . "</pre>";
    } else {
        echo "var resultadoCEP = { 'tipoLogradouro' : '" . $retorno->dados->tipoLogradouro 
                . "', 'logradouro' : '" . $retorno->dados->logradouro 
                . "', 'bairro' : '" . $retorno->dados->bairro 
                . "', 'cep' : '" . $retorno->dados->cep 
                . "', 'cidade' : '" . $retorno->dados->cidade 
                . "', 'estado' : '" . $retorno->dados->estado . "' }";
    }
}
?>