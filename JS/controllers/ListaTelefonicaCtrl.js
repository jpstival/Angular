app.controller("listaTelefonicaCtrl", function ($scope, $filter, $http, contatosAPI) {
    $scope.app = "Lista telefônica";
    $scope.contatos = [];
    
    var carregarOperadoras = function () {
        $http.get("http://localhost:3412/operadoras").then(function (data, status) {
            $scope.operadoras = data.data;
        });
    };
    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (data) {
            $scope.contatos = data.data;
        });
    };
    $scope.adicionarContato = function (contato) {
        contatosAPI.saveContato(contato);
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato){
            if (!contato.selecionado) return contato;
        });
        $scope.contatoForm.$setPristine();
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function(contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaordenacao = !$scope.direcaoDaordenacao;
    };
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    carregarOperadoras();
    carregarContatos();
});