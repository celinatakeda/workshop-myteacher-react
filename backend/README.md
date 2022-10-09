# Semana React e Python - Back End
 Projeto back-end Django da Semana React e Python TreinaWeb.

## Criação do Projeto
- Criar pasta do projeto

- Criar e ativar a virtualenv

- Linux/MacOS
    
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```
    
- Windows
```
python -m venv .venv
.\.venv\Scripts\activate
```
- Instalar o Django
    
    `pip install django`

- Criar o projeto
    
    `django-admin startproject myteacher .`

- Iniciar o servidor
    
    `python manage.py runserver`

## Checklist do Desenvolvimento

- Configurar idioma e timezone da aplicação

- Criar e configurar a app `teacher`

       `python .\manage.py startapp teacher`

- Criar o `model` de `Professor`

- Criar o `serializer` de `Professor`

- Criar a `view` de `Professor`

- Configurar as `urls` do projeto

- Criar o `model` de `Aula`

- Criar o `serializer` de cadastro de `Aula`

- Criar a `view` de cadastro de `Aula`

- Criar a validação customizada no `serializer` de cadastro de `Aula`

- Configurar o CORS

  Instalando a biblioteca do cors do django

    `pip install django-cors-headers`

- Instalar o Django REST framework

  `pip install djangorestframework`

- Add 'rest_framework' to your INSTALLED_APPS setting.

- Criar migrations => para colocar o models no formato de tabela

  `python .\manage.py makemigrations`

- Executar o migration

  `python .\manage.py migrate`

  - Cadastrar dados no banco de dados

    `python .\manage.py shell`   

## Links

[The web framework for perfectionists with deadlines | Django (djangoproject.com)](https://www.djangoproject.com/)

[Django · PyPI](https://pypi.org/project/Django/)

[List of tz database time zones - Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

[Entendendo o MTV do Django | Blog TreinaWeb](https://www.treinaweb.com.br/blog/entendendo-o-mtv-do-django)

[O que é JSON? | Blog TreinaWeb](https://www.treinaweb.com.br/blog/o-que-e-json)

[Home - Django REST framework (django-rest-framework.org)](https://www.django-rest-framework.org/)

[O que é CORS e como resolver os principias erros | Blog TreinaWeb](https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros)

[django-cors-headers · PyPI](https://pypi.org/project/django-cors-headers/)

## ## Problemas frequentes

- Caso a virtualenv não esteja ativada no Windows, digite os seguintes comandos no terminal
    - Caso esteja utilizando o CMD:
        
        `.venv\Scripts\activate`
        
    - Caso esteja utilizando o PowerShell
        
        `.venv\Scripts\Activate.ps1`
        
- Ao executar o comando `.venv\Scripts\Activate.ps1` no PoweShell exibe o erro de segurança como da imagem abaixo:

- Para resolver basta executar o comando `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`, porém vale ressaltar que essa solução só funciona para o terminal ao qual o comando foi executado, caso abra um novo terminal o erro irá acontecer novamente e será necessário executar novamente o comando.
- Para resolver de forma definitiva de forma que não seja necessário executar o comando toda vez que abrir o terminal é necessário fechar o terminal aberto no momento e então abrir um novo PoweShell com privilégios de administrador, para isso basta clicar com o botão direito no ícone do PowerShell e então selecionar a opção “Executar como administrador”

Com o novo PowerShell aberto execute o comando Set-ExecutionPolicy Unrestricted e logo em seguida digite a letra “A” para aceitar. Feito isso pode fechar esse PowerShell e então abrir um novo PowerShell normalmente que o comando de ativação da virtualenv não dará mais problema.