const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout title="Login">
    <link rel="stylesheet" href="css/styleReg.css" />
    <form name="loginForm" action="/login" method="POST">
    <div className="login-form-container">
    <h1 className="form-title">
      Войти
    </h1>
    <div className="form-fields">
      <div className="form-field">

        <input name="email" type="text" placeholder="Почта"/>
      </div>
      <div className="form-field">
        <input name="password" type="password" placeholder="Пароль"/>
      </div>
    </div>
    <div className="form-buttons">
      <button className="button">Войти</button>
    </div>
  </div>
    </form>
  </Layout>
  );
}
module.exports = Login;