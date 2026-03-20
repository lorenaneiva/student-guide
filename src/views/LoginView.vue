<template>
  <main class="login-page">
    <section class="login-wrapper">
      <div class="login-card">
        <div class="login-header">
          <div class="login-badge">Acesso</div>
          <h1 class="title">Entrar na sua conta</h1>
          <p class="subtitle">
            Acesse para continuar utilizando os serviços da plataforma.
          </p>
        </div>

        <form class="login-form">
          <div class="form-group">
            <label for="usuario">Usuário</label>
            <BaseInput
              type="text"
              name="usuario"
              id="usuario"
              placeholder="Digite seu usuário"
            />
          </div>

          <div class="form-group">
            <label for="senha">Senha</label>
            <BaseInput
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
            />
          </div>

          <div class="login-options">
            <label class="remember-me">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>

            <a href="#" class="forgot-password">Esqueci minha senha</a>
          </div>

          <button class="btn" type="submit">Entrar</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import BaseInput from '../components/common/BaseInput.vue';

export default {
  name: 'LoginView',
  components: {
    BaseInput
  }
}
</script>

<style scoped>
.login-page {
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

/* detalhes decorativos suaves */
.login-page::before,
.login-page::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  filter: blur(10px);
  z-index: 0;
}

.login-page::before {
  width: 240px;
  height: 240px;
  top: 8%;
  left: 10%;
}

.login-page::after {
  width: 320px;
  height: 320px;
  bottom: -60px;
  right: 8%;
}

.login-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.login-card {
  width: 100%;
  max-width: 430px;
  padding: 34px 30px;
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.login-header {
  text-align: center;
  margin-bottom: 28px;
}

.login-badge {
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

.login-form {
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

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(44, 62, 80, 0.88);
  cursor: pointer;
}

.remember-me input {
  accent-color: var(--primary-color);
}

.forgot-password {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition-base);
}

.forgot-password:hover {
  opacity: 0.85;
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

@media (max-width: 480px) {
  .login-card {
    padding: 28px 20px;
    border-radius: 20px;
  }

  .title {
    font-size: 1.65rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .login-options {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>