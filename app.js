//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do input
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validação: verificar se o campo está vazio ou se o nome já está na lista
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    
    // Atualiza a lista de amigos na interface
    atualizarLista();
    
    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    // Remove apenas os elementos filhos em vez de redefinir innerHTML
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Percorre o array e cria elementos de lista
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Função para gerar um índice aleatório
function gerarIndiceAleatorio(tamanho) {
    return Math.floor(Math.random() * tamanho);
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos suficientes para sortear
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Usa a função separada para gerar o índice aleatório
    let indiceSorteado = gerarIndiceAleatorio(amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    // Exibe o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo secreto sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
}