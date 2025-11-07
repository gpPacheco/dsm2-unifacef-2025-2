import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  
  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');

  const validarNome = () => {
    if (nome.trim().length < 3) {
      setErroNome('O nome deve ter no mínimo 3 caracteres');
      return false;
    }
    if (nome.trim().split(' ').length < 2) {
      setErroNome('Digite o nome completo');
      return false;
    }
    setErroNome('');
    return true;
  };

  const validarEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErroEmail('Digite um e-mail válido');
      return false;
    }
    setErroEmail('');
    return true;
  };

  const validarSenha = () => {
    if (senha.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres');
      return false;
    }
    setErroSenha('');
    return true;
  };

  const validarConfirmarSenha = () => {
    if (senha !== confirmarSenha) {
      setErroConfirmarSenha('As senhas não coincidem');
      return false;
    }
    if (confirmarSenha.length === 0) {
      setErroConfirmarSenha('Confirme sua senha');
      return false;
    }
    setErroConfirmarSenha('');
    return true;
  };

  const validarTelefone = () => {
    // Remove caracteres não numéricos para validação
    const telefoneNumeros = telefone.replace(/\D/g, '');
    
    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
      setErroTelefone('Digite um telefone válido (10 ou 11 dígitos)');
      return false;
    }
    setErroTelefone('');
    return true;
  };

  const formatarTelefone = (texto) => {
    // Remove tudo que não é número
    const numeros = texto.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    const limitado = numeros.slice(0, 11);
    
    // Formata o telefone
    if (limitado.length <= 10) {
      // (XX) XXXX-XXXX
      return limitado.replace(/(\d{2})(\d{4})(\d{0,4})/, (match, p1, p2, p3) => {
        if (p3) return `(${p1}) ${p2}-${p3}`;
        if (p2) return `(${p1}) ${p2}`;
        return `(${p1}`;
      });
    } else {
      // (XX) XXXXX-XXXX
      return limitado.replace(/(\d{2})(\d{5})(\d{0,4})/, (match, p1, p2, p3) => {
        if (p3) return `(${p1}) ${p2}-${p3}`;
        if (p2) return `(${p1}) ${p2}`;
        return `(${p1}`;
      });
    }
  };

  const handleTelefoneChange = (texto) => {
    const formatado = formatarTelefone(texto);
    setTelefone(formatado);
  };

  const handleCadastro = () => {
    // Valida todos os campos
    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const senhaValida = validarSenha();
    const confirmarSenhaValida = validarConfirmarSenha();
    const telefoneValido = validarTelefone();

    // Se todos os campos forem válidos, navega para a tela de confirmação
    if (nomeValido && emailValido && senhaValida && confirmarSenhaValida && telefoneValido) {
      navigation.navigate('Confirmacao', {
        nome,
        email,
        telefone
      });
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.titulo}>Cadastro Completo</Text>
        <Text style={styles.subtitulo}>Preencha todos os campos abaixo</Text>

        {/* Campo Nome Completo */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={[styles.input, erroNome ? styles.inputErro : null]}
            placeholder="Digite seu nome completo"
            value={nome}
            onChangeText={setNome}
            onBlur={validarNome}
            autoCapitalize="words"
            autoCorrect={false}
          />
          {erroNome ? <Text style={styles.textoErro}>{erroNome}</Text> : null}
        </View>

        {/* Campo E-mail */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={[styles.input, erroEmail ? styles.inputErro : null]}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            onBlur={validarEmail}
          />
          {erroEmail ? <Text style={styles.textoErro}>{erroEmail}</Text> : null}
        </View>

        {/* Campo Senha */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={[styles.input, erroSenha ? styles.inputErro : null]}
            placeholder="Digite sua senha (mín. 6 caracteres)"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            onBlur={validarSenha}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {erroSenha ? <Text style={styles.textoErro}>{erroSenha}</Text> : null}
        </View>

        {/* Campo Confirmar Senha */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={[styles.input, erroConfirmarSenha ? styles.inputErro : null]}
            placeholder="Digite sua senha novamente"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            onBlur={validarConfirmarSenha}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {erroConfirmarSenha ? <Text style={styles.textoErro}>{erroConfirmarSenha}</Text> : null}
        </View>

        {/* Campo Telefone */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={[styles.input, erroTelefone ? styles.inputErro : null]}
            placeholder="(00) 00000-0000"
            keyboardType="numeric"
            value={telefone}
            onChangeText={handleTelefoneChange}
            onBlur={validarTelefone}
            maxLength={15}
          />
          {erroTelefone ? <Text style={styles.textoErro}>{erroTelefone}</Text> : null}
        </View>

        {/* Botão Cadastrar */}
        <TouchableOpacity 
          style={styles.botao}
          onPress={handleCadastro}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  inputErro: {
    borderColor: '#ff3b30',
    borderWidth: 2,
  },
  textoErro: {
    color: '#ff3b30',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
