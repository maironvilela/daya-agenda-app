---
Projeto: 
Nome do caso de uso: 
ID: 
Ator: 
Descrição / Objetivo: 
Pré-condições: 
Pós-condições:
---


# Detalhamento do caso de uso
- [ ] Fluxo Principal
- [ ] Fluxos alternativos
- [ ] Fluxos de Exceções


# Regras de Negocio


# Requisitos Funcionais

# Requisitos não funcionais

# Notas e Observações

# Exemplo
Caso de Uso: UC01 - Agendar Consulta

Ator: Paciente

Objetivo: Permitir que o paciente selecione uma data e horário para uma consulta com um especialista.

Pré-condição: O paciente deve estar autenticado no sistema.

Pós-condição: A consulta é registrada e confirmada no banco de dados.

Fluxo Principal:
1. O paciente acessa a tela de agendamento.
2. O sistema exibe os profissionais disponíveis.
3. O paciente seleciona o profissional e a data.
4. O sistema exibe os horários disponíveis.
5. O paciente escolhe o horário e confirma.
6. O sistema registra a consulta e exibe a confirmação.

Fluxo Alternativo:
3a. Caso não haja profissionais disponíveis → o sistema exibe uma mensagem de indisponibilidade.

Fluxo de Exceção:
6a. Erro ao gravar no banco → o sistema exibe mensagem de erro e orienta tentar novamente.

Regras de Negócio:
- A consulta deve ser agendada com no mínimo 24h de antecedência.
