# 🚀 Trabalho de Conclusão da Disciplina – Integração Contínua

## 📋 Objetivo

Este projeto tem como objetivo demonstrar a aplicação dos conceitos de Integração Contínua (CI) utilizando GitHub Actions em um projeto Node.js com testes automatizados.

A pipeline foi configurada para executar automaticamente os testes da aplicação, garantindo que alterações no código sejam validadas de forma contínua.

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* JavaScript
* Mocha
* Git
* GitHub
* GitHub Actions

---

## 📂 Estrutura do Projeto

```text
src/
├── servicoPagamento.js

test/
├── servicoPagamento.test.js

.github/
└── workflows/
    └── pipeline.yml
```

---

## ✅ Testes Automatizados

O projeto possui testes automatizados desenvolvidos com o framework Mocha para validar as regras de negócio do serviço de pagamento.

Atualmente são executados os seguintes cenários:

* Realizar pagamento com categoria cara
* Realizar pagamento com categoria padrão
* Consultar apenas o último pagamento realizado

---

## ⚙️ Pipeline de Integração Contínua

A pipeline foi implementada utilizando GitHub Actions e executa as seguintes etapas:

1. Checkout do código-fonte
2. Configuração do ambiente Node.js
3. Instalação das dependências do projeto
4. Execução dos testes automatizados

---

## 🚦 Formas de Disparo da Pipeline

A pipeline pode ser executada de três formas:

### Push

Executada automaticamente quando ocorre um push para a branch principal.

### Manual

Executada manualmente através da opção **Run Workflow** disponível no GitHub Actions.

### Agendada

Executada automaticamente em horário definido através da configuração Cron.

---

## 📸 Evidências de Execução

### Testes executados com sucesso
<img width="1908" height="975" alt="{88951979-5849-49CB-B27D-EF4E37057AE0}" src="https://github.com/user-attachments/assets/3dff1b85-d51b-4c9a-b605-f442cf1dea4e" />


### Pipeline executada com sucesso
<img width="1920" height="813" alt="{787DD3DE-B3E8-4F1D-A357-714077A73C59}" src="https://github.com/user-attachments/assets/5541d1a2-793e-47bc-8798-cc7e87889f33" />


### Workflow GitHub Actions

<img width="1906" height="971" alt="{FC622A2D-BFCB-489F-AAD3-1221BB545831}" src="https://github.com/user-attachments/assets/e3c72dd0-b454-4cc6-a298-8a41781de1dd" />


---
