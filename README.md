Blog do Servidor de Minecraft (Full-Stack)
Este projeto é um blog completo para um servidor de Minecraft, permitindo que usuários se registrem, façam login e criem postagens com ou sem imagens.

Tecnologias Utilizadas
Frontend:

HTML5

CSS3

JavaScript (ES6+)

Backend:

Node.js

Express.js (Framework web para Node.js)

MongoDB (Banco de dados NoSQL)

Mongoose (ODM para MongoDB)

JWT (JSON Web Tokens para autenticação)

Bcrypt.js (Para criptografia de senhas)

Multer (Middleware para upload de arquivos)

Cloudinary (Serviço de armazenamento e gerenciamento de imagens em nuvem)

Estrutura do Projeto
meu-blog-minecraft/

frontend/

index.html - Página principal do blog (inclui login/registro e postagem)

style.css - Estilos CSS para o frontend

script.js - Lógica JavaScript do frontend

backend/

server.js - Ponto de entrada do servidor Node.js

package.json - Dependências e scripts do Node.js

.env - Variáveis de ambiente (NÃO ENVIAR PARA O GITHUB!)

models/

User.js - Modelo Mongoose para usuários

Post.js - Modelo Mongoose para postagens

routes/

auth.js - Rotas de autenticação (registro, login)

posts.js - Rotas para postagens (obter, criar)

middleware/

auth.js - Middleware para proteção de rotas (verificação JWT)

.gitignore - Arquivos e pastas a serem ignorados pelo Git

README.md - Este arquivo

Configuração e Execução (Localmente)
Siga estas etapas para configurar e rodar o projeto em sua máquina local.

Pré-requisitos
Node.js (versão 14 ou superior recomendada) e npm (gerenciador de pacotes do Node.js)

MongoDB (instalado localmente ou acesso a um cluster MongoDB Atlas)

Conta Cloudinary (para armazenamento de imagens)

1. Configuração do Backend
Navegue até a pasta backend:

cd meu-blog-minecraft/backend

Instale as dependências do Node.js:

npm install

Crie o arquivo .env:
Na pasta backend, crie um arquivo chamado .env e adicione suas variáveis de ambiente. Substitua os valores entre < > pelos seus próprios.

MONGO_URI=mongodb://localhost:27017/blog-minecraft # Ou a URI do seu MongoDB Atlas
JWT_SECRET=<SUA_CHAVE_SECRETA_JWT_MUITO_FORTE> # Uma string aleatória complexa
CLOUDINARY_CLOUD_NAME=<SEU_CLOUD_NAME_CLOUDINARY>
CLOUDINARY_API_KEY=<SUA_API_KEY_CLOUDINARY>
CLOUDINARY_API_SECRET=<SUA_API_SECRET_CLOUDINARY>

MONGO_URI: Se estiver usando MongoDB local, mongodb://localhost:27017/blog-minecraft é um bom padrão. Para MongoDB Atlas, obtenha a string de conexão no painel do Atlas.

JWT_SECRET: Use uma string longa e complexa para segurança.

CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET: Obtenha essas credenciais no painel da sua conta Cloudinary.

Inicie o servidor backend:

node server.js

Você deverá ver a mensagem "Conectado ao MongoDB" e "Servidor rodando na porta 3000" (ou a porta que você definiu).

2. Configuração do Frontend
Navegue até a pasta frontend:

cd meu-blog-minecraft/frontend

Abra o index.html no seu navegador:
Simplesmente clique duas vezes no arquivo index.html ou arraste-o para a janela do seu navegador.

Recomendado: Para um melhor ambiente de desenvolvimento, use uma extensão como "Live Server" no VS Code ou um servidor HTTP simples (ex: npx http-server na pasta frontend após instalar npm install -g http-server).

Funcionalidades
Registro de Usuários: Crie novas contas de usuário.

Login de Usuários: Autentique-se para acessar funcionalidades restritas.

Criação de Postagens: Usuários logados podem criar novas postagens com título, conteúdo e uma imagem opcional.

Visualização de Postagens: Todas as postagens são exibidas na página principal do blog, ordenadas da mais recente para a mais antiga.

Upload de Imagens: As imagens anexadas às postagens são enviadas para o Cloudinary e suas URLs são armazenadas no MongoDB.

Próximos Passos e Melhorias
Validação de Formulários: Adicione validações mais robustas no frontend (JavaScript) e no backend (Express.js) para garantir a integridade dos dados.

Tratamento de Erros: Melhore as mensagens de erro para o usuário e o log de erros no servidor.

Segurança:

Implemente limites de taxa (rate limiting) para as rotas de login/registro.

Considere a implementação de HTTPS em produção.

Sempre saneie e valide a entrada do usuário para prevenir ataques XSS e injeção.

Funcionalidades de CRUD (Create, Read, Update, Delete):

Adicione a capacidade de editar e excluir postagens (apenas pelo autor ou administradores). Isso envolveria rotas PUT e DELETE no backend e lógica adicional no frontend.

Paginação: Para blogs com muitas postagens, implemente paginação para carregar os posts em blocos.

Comentários: Adicione um sistema de comentários para as postagens.

Roles de Usuário: Implemente diferentes tipos de usuários (ex: admin, editor, membro) com diferentes permissões.

Melhorias de UI/UX:

Adicione um indicador de carregamento ao buscar posts ou enviar formulários.

Melhore a responsividade para diferentes tamanhos de tela.

Considere usar um framework de UI como Tailwind CSS ou Bootstrap para estilização mais rápida.
