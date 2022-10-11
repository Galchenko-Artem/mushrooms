const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout title="Registration">
      <link rel="stylesheet" href="css/styleReg.css" />
      <form name="registrationForm" action="/registration" method="POST">
      <div className="register-form-container">
      <h1 className="form-title">
        Регистрация
      </h1>
      <div className="form-fields">
        <div className="form-field">
          <input name="name" type="text" placeholder="Имя"/>
        </div>
        <div className="form-field">
          <input name="email" type="text" placeholder="Почта"/>
        </div>
        <div className="form-field">
          <input name="password" type="password" placeholder="Пароль"/>
        </div>
      </div>
      <div className="form-buttons">
        <button className="button">Регистрация</button>
      </div>
    </div>
      </form>
    </Layout>
  );
}

module.exports = Registration;