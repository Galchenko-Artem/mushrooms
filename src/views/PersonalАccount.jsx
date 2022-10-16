const React = require('react');
const Layout = require('./Layout');

module.exports = function PersonalАccount({newUser}) {
  return (
    <Layout  newUser={newUser}>
       <script defer src='/js/personal.js'></script>  
      <form name="persona-form" >
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input name="title" type="text" className="form-control" placeholder="Название гриба" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
        </div>

        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input name="descriptions" type="text" className="form-control" placeholder="Описание" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
       </div>

       <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input name="location" type="text" className="form-control" placeholder="Локация" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
       </div>

       <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input name="imgLink" type="text" className="form-control" placeholder="Картинка" aria-label="Имя пользователя" aria-describedby="addon-wrapping"/>
       </div>

       <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">Создать запись!!!</button>
       </div>
       <div id="maps" className="map"> </div>
       <script src="https://api-maps.yandex.ru/2.1/?apikey=a7006369-0322-492b-a3b1-cc11d76d3ed5&lang=ru_RU" type="text/javascript"></script>
       </form>
    </Layout>
  );
};
