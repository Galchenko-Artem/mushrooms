const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
      <Layout newUser={newUser}>
      <link rel="stylesheet" href="css/home.css" />

      <h1>Добро пожаловать в мир грибов!</h1>
      <div id="maps" className="map"> </div>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=a7006369-0322-492b-a3b1-cc11d76d3ed5&lang=ru_RU" type="text/javascript"></script>
      <div className='info'>
        <p>
          Наш сайт о грибах!!!!!
        </p>
        <p>
          я 
        </p>
      </div>
       {/* <script src="https://api-maps.yandex.ru/2.1/?apikey=a7006369-0322-492b-a3b1-cc11d76d3ed5&lang=ru_RU" type="text/javascript"></script> */}
    </Layout>
  );
};
