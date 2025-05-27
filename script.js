document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog carregado!');

    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');

    // Função para buscar e exibir posts
    async function fetchAndDisplayPosts() {
        // Em um cenário real, você faria uma requisição para o seu backend
        // Ex: const response = await fetch('/api/posts');
        // Ex: const posts = await response.json();

        // Para demonstração, vamos usar posts simulados.
        // Em um blog real, isso viria do seu banco de dados.
        const simulatedPosts = [
            {
                title: "Boas-vindas ao nosso Blog!",
                content: "Este é o espaço para a comunidade compartilhar notícias, tutoriais e suas aventuras no servidor. Fique à vontade para postar!",
                author: "Admin",
                date: "28/05/2025"
            },
            {
                title: "Dica: Como fazer uma Farm de Ferro Eficiente",
                content: "Olá a todos! Descobri um design de farm de ferro super eficiente na versão 1.20.1. Em breve farei um vídeo para o nosso Discord explicando os detalhes. Alguém já tentou construir uma?",
                author: "Jogador123",
                date: "28/05/2025"
            },
            {
                title: "Evento de Construção: Castelos Épicos!",
                content: "Preparem seus blocos! Nosso próximo evento de construção será sobre castelos. Os 3 melhores castelos ganharão recompensas exclusivas!",
                author: "Admin",
                date: "27/05/2025"
            },
            {
                title: "Nova Regra: Respeito é Fundamental",
                content: "Lembrem-se, o respeito entre os jogadores é essencial para um ambiente divertido. Qualquer comportamento tóxico não será tolerado.",
                author: "Admin",
                date: "26/05/2025"
            }
        ];

        // Limpa posts existentes para evitar duplicação ao recarregar
        postsContainer.innerHTML = '';

        simulatedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('mural-post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <span class="post-data">Publicado por: ${post.author || 'Anônimo'} em: ${post.date}</span>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Event listener para o formulário de postagem
    postForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const title = document.getElementById('postTitle').value;
        const author = document.getElementById('postAuthor').value;
        const content = document.getElementById('postContent').value;
        const currentDate = new Date().toLocaleDateString('pt-BR'); // Obtém a data atual

        if (!title || !content) {
            alert('Por favor, preencha o título e o conteúdo da postagem.');
            return;
        }

        const newPost = {
            title,
            content,
            author: author || 'Anônimo', // Usa "Anônimo" se o autor não for preenchido
            date: currentDate
        };

        console.log('Tentando enviar novo Post:', newPost);

        // --- Aqui você faria a requisição POST para o seu backend ---
        // Exemplo (requer um servidor rodando e configurado para receber isso):
        /*
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            });

            if (response.ok) {
                alert('Postagem criada com sucesso!');
                postForm.reset(); // Limpa o formulário
                fetchAndDisplayPosts(); // Recarrega os posts para mostrar o novo
            } else {
                const errorData = await response.json();
                alert(`Erro ao criar postagem: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Não foi possível conectar ao servidor para criar a postagem.');
        }
        */

        // Por enquanto, apenas para fins de demonstração no frontend:
        // Você precisaria de um backend para realmente salvar e exibir isso de forma persistente.
        alert('Funcionalidade de postagem requer um backend para salvar os dados permanentemente!');
        postForm.reset(); // Limpa o formulário

        // Opcional: Adicionar a postagem simuladamente ao container para ver o efeito
        // Isso NÃO salvará a postagem, ela desaparecerá ao recarregar a página.
        const postElement = document.createElement('div');
        postElement.classList.add('mural-post');
        postElement.innerHTML = `
            <h3>${newPost.title}</h3>
            <p>${newPost.content}</p>
            <span class="post-data">Publicado por: ${newPost.author} em: ${newPost.date}</span>
        `;
        postsContainer.prepend(postElement); // Adiciona no início da lista

    });

    // Chama a função para exibir posts quando a página carregar
    fetchAndDisplayPosts();
});
