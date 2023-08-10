<h1><strong>Bem vindo/a ao meu projeto API PARA BLOGS!!</strong>></h1>

<h2><strong>Sobre o projeto:</strong></h2>
  Criei esse projeto totalmente do zero, desde as migrations, models e cada regra de autenticação, que incluisve é um dos focos dele, a ideia que essa API possa simular todo o processo de crianção de uma conta para um blog ou rede social, contando com rotas de criação de usuários com senha e login, após isso cada cada que queira se fazer e necessário passar pela autenticação JWT, o usuario precisará ter uma autorização valida para procurar, criar, editar e apagar posts, tal quanto adicionar e procurar pessoas na "rede".

<h2><strong>Construção e Features/Tecnologias:</strong></h2                                                                    
      A construção foi feita através do <strong>Docker</strong> para que ele possa ser usado em qualquer maquina, contruido em um banco de dados relacional feito
      com <strong>MySQL</strong> e <strong>Sequelize</strong>, rotas com feitas com <strong>express</strong> para facilitar a manipulação e entendimento de 
      código, foi escrito inteiramente com <strong>JavaScript</strong> para se ter mais segurança no código e facilitar a leitura do código, manutenção e 
      escalabilidade da aplicação.

<h2><strong>Estrutura:</strong></h2>
        .</br>
        ├── 🔸 src/</br>
        │   ├── 🔸 config/</br>
        │   ├── 🔸 controllers/</br>
        │   ├── 🔸 middlewares/</br>
        │   ├── 🔸 migrations/</br>
        │   ├── 🔸 models/</br>
        │   ├── 🔸 routes/</br>
        │   ├── 🔸 sedeers/</br>
        │   ├── 🔸 service/</br>
        │   ├── 🔸 utils/</br>
        |   ├── 🔹 app.js</br>
        |   ├── 🔹 server.js</br>
        .legenda:</br>
          - 🔸 diretorios</br>
          - 🔹 arquivos</br>

<h2><strong>Para rodar o projeto siga as intruções:</strong></h2>
      - Dê um git clone no seu trminal de sua maquina um pasta vazia para instalar o projeto desta maneira:
      </br>
        git clone git@github.com:DearJao/Api-para-Blogs.git
        </br>
        </br>
      - Em seguida você precisa entrar na pasta do projeto, através do seu gerenciador de arquivos ou no terminal no seu editor de arquivos
        </br>
        </br>
      - Para o projeto funcionar você precisa ter a biblioteca .NODE.JS instalada em sua maquina. Caso não tenha neste link: https://nodejs.org/en/download você tera
      acesso ao dowload oficial da biblioteca e as intruções para configurar.
      </br>
(obs* o projeto foi contruido na versão 18.12.1, outras versões podem ocasionar erros inesperados)
</br>
</br>
      - Primeiramente use o comando docker-compose up -d --build</br>
      (você precisa ter o docker instalado na sua maquina)
      </br>
      </br>
      - Depois disso você pode controla-lo através do comando:</br>
      docker exec -it blogs_api bash</br>
      - Após esses passos, no terminal digite o seguinte comando: npm i ou npm install
      </br>
      (na segunda opção tera de escolher de que forma quer instalar os pacotes do projeto)
      </br>

<h2><strong>Através desse link você pode testar o banco de dados com o Swagger:</strong></h2>
  </br>
      - (em construção)
