# Aula 07 - Formulário de Cadastro Completo

## 📋 Descrição
Projeto que implementa um formulário de cadastro completo com validações em React Native, seguindo as melhores práticas de UX mobile.

## ✨ Funcionalidades Implementadas

### 📝 Campos do Formulário
1. **Nome Completo**
   - Validação de mínimo 3 caracteres
   - Validação de nome completo (nome + sobrenome)
   - Auto-capitalização de palavras

2. **E-mail**
   - Validação com regex para formato de email
   - Teclado específico para email
   - Sem auto-capitalização e auto-correção

3. **Senha**
   - Campo seguro (secureTextEntry)
   - Validação de mínimo 6 caracteres
   - Sem auto-capitalização

4. **Confirmar Senha**
   - Validação de correspondência com senha
   - Campo seguro (secureTextEntry)

5. **Telefone**
   - Teclado numérico (`keyboardType="numeric"`)
   - Formatação automática: (XX) XXXXX-XXXX
   - Validação de 10 ou 11 dígitos
   - Limite de 15 caracteres (formatado)

### ✅ Validações Implementadas
- ✓ Validação em tempo real ao sair do campo (onBlur)
- ✓ Mensagens de erro específicas abaixo de cada campo
- ✓ Validação completa antes de submeter
- ✓ Indicação visual de campos com erro (borda vermelha)

### 🚀 Navegação
- Uso do React Navigation (Native Stack)
- Passagem de dados entre telas usando `route.params`
- Tela de confirmação exibindo dados formatados
- Ícones do Expo Vector Icons (Ionicons)

## 🛠️ Tecnologias Utilizadas
- React Native
- Expo
- React Navigation (Native Stack)
- Expo Vector Icons

## 📦 Como Executar

1. **Instalar dependências:**
   ```bash
   cd Aula07
   npm install
   ```

2. **Iniciar o projeto:**
   ```bash
   npx expo start
   ```

3. **Rodar no dispositivo:**
   - Escaneie o QR Code com o app Expo Go
   - Ou pressione 'a' para Android / 'i' para iOS

## 📱 Estrutura do Projeto
```
Aula07/
├── App.js                      # Configuração da navegação
├── screens/
│   ├── CadastroScreen.js       # Formulário de cadastro
│   └── ConfirmacaoScreen.js    # Tela de confirmação
├── package.json
├── app.json
└── index.js
```

## 🎯 Regras de Negócio Implementadas
1. ✅ Telefone aceita apenas números (formatado automaticamente)
2. ✅ Senha e confirmação devem ser iguais
3. ✅ Erros específicos abaixo de cada campo inválido
4. ✅ Dados formatados exibidos na tela de confirmação

## 💡 Conceitos Demonstrados
- Estado com useState
- Validação de formulários
- Controle de teclado virtual
- Formatação de dados (telefone)
- Navegação entre telas
- Passagem de parâmetros via navigation
- Experiência do usuário (UX) mobile
- KeyboardAvoidingView para iOS
- ScrollView para formulários longos

## 🎨 Design
- Interface moderna e limpa
- Feedback visual para erros
- Ícones intuitivos
- Cores seguindo padrão iOS (azul #007AFF)
- Sombreamento e elevação para profundidade

---
**Desenvolvido para a disciplina de Desenvolvimento Mobile II**
