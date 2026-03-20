<template>
  <main class="register-page">
    <section class="register-wrapper">
      <div class="register-card">
        <div class="register-header">
          <div class="register-badge">Cadastro</div>
          <h1 class="title">Crie sua conta</h1>
          <p class="subtitle">
            Preencha os dados abaixo para começar a utilizar a plataforma.
          </p>
        </div>

        <form class="register-form">
          <div class="form-group">
            <label for="nome">Nome completo</label>
            <BaseInput
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome completo"
            />
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <BaseInput
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div class="form-group">
            <label for="usuario">Usuário</label>
            <BaseInput
              id="usuario"
              name="usuario"
              type="text"
              placeholder="Escolha um nome de usuário"
            />
          </div>

          <div class="form-group">
            <label for="senha">Senha</label>
            <BaseInput
              id="senha"
              name="senha"
              type="password"
              placeholder="Crie uma senha"
            />
          </div>

          <div class="form-group">
            <label for="confirmarSenha">Confirmar senha</label>
            <BaseInput
              id="confirmarSenha"
              name="confirmarSenha"
              type="password"
              placeholder="Repita sua senha"
            />
          </div>

          <label class="terms">
            <input type="checkbox" />
            <span>Li e concordo com os termos de uso</span>
          </label>

          <button class="btn" type="submit">Criar conta</button>

          <p class="login-link">
            Já possui conta?
            <a href="#">Entrar</a>
          </p>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import BaseInput from '../components/common/BaseInput.vue';

export default {
  name: 'RegisterView',
  components: {
    BaseInput
  }
}
</script>

<style scoped>
.register-page {
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding-lg);
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.22), transparent 28%),
    radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.14), transparent 30%),
    linear-gradient(135deg, #dfe8df 0%, #bcc8bc 40%, #8d9a8d 100%);
}

.register-page::before,
.register-page::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  filter: blur(10px);
  z-index: 0;
}

.register-page::before {
  width: 240px;
  height: 240px;
  top: 8%;
  left: 10%;
}

.register-page::after {
  width: 320px;
  height: 320px;
  bottom: -60px;
  right: 8%;
}

.register-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.register-card {
  width: 100%;
  max-width: 460px;
  padding: 34px 30px;
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.register-header {
  text-align: center;
  margin-bottom: 28px;
}

.register-badge {
  display: inline-block;
  margin-bottom: 12px;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: rgba(66, 116, 67, 0.12);
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.title {
  font-size: 2rem;
  color: var(--text-color-dark);
  margin-bottom: 8px;
  line-height: 1.2;
}

.subtitle {
  font-size: 1rem;
  color: rgba(44, 62, 80, 0.78);
  line-height: 1.5;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-color-dark);
}

:deep(input) {
  width: 100%;
}

.terms {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(44, 62, 80, 0.88);
  cursor: pointer;
  line-height: 1.4;
}

.terms input {
  width: auto;
  margin-top: 3px;
  accent-color: var(--primary-color);
}

.btn {
  width: 100%;
  margin-top: 4px;
  padding: 14px 18px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, #427443 0%, #345e35 100%);
  color: var(--text-color-light);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(66, 116, 67, 0.22);
  transition: var(--transition-base);
}

.btn:hover {
  transform: var(--transform-hover);
  opacity: 0.98;
}

.btn:active {
  transform: translateY(-2px);
}

.login-link {
  text-align: center;
  font-size: 0.95rem;
  color: rgba(44, 62, 80, 0.85);
}

.login-link a {
  color: var(--primary-color);
  font-weight: 700;
  text-decoration: none;
  margin-left: 4px;
}

.login-link a:hover {
  opacity: 0.85;
}

@media (max-width: 480px) {
  .register-card {
    padding: 28px 20px;
    border-radius: 20px;
  }

  .title {
    font-size: 1.65rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }
}
</style>