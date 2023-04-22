function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ......
}

type Methods = 'GET' | 'POST'; // Sem isso dá erro

let url = 'https://google.com.br';

let method: Methods = 'GET'; 


method = 'blabla'; // Ao fazer isso, o valor não é substituido, pois o método foi configurado para aceitar APENAS os valores GET ou POST

fazerRequisicao(url, method);




// CASO SEJA UM OBJETO

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDetails = {
    url: 'https://google.com.br',
    method: 'GET'
};

req.method = 'blabla'; // Ao fazer isso, o valor não é substituido, pois o método foi configurado para aceitar APENAS os valores GET ou POST

fazerRequisicao(req.url, req.method);