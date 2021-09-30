//FETCH API 
fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

  //AXIOS
  axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))