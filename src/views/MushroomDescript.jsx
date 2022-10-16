const React = require('react');
const Layout = require('./Layout');
const Comment = require('./Сomment')

module.exports = function TeaDescr({ result, newUser, comments }) {
  console.log('In DESC RENDER result', comments);
  let imgLink = `${result.imgLink}`
  return (
    <Layout newUser={newUser}>
      <div className="container-fluid teawrap">
        <div className="row">
          <div className="col"></div>
          <div className="headline">
            <p> {result.title}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row teabox">
          <div className="col-sm-4">
            <div >
              <img src={imgLink} className="image" alt="mushroom" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="descr">{result.descriptions}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row butgroup">
          <div className="col-sm"></div>
          <div className="col-sm">
            <button id="comButtton" type="button" className="btn btn-primary">Коментарии</button>
          </div>
          {(newUser) ?
            <div className="col-sm"><button id="comButtton2" type="button" className="btn btn-primary">Добавить</button></div>
            : <div className="col-sm" style={{ display: 'none' }}>
              <button id="comButtton2" type="button" className="btn btn-primary">Добавить</button></div>
          }
          <div className="col-sm"></div>
        </div>
      </div>
      <script defer src='/js/teapageScript.js'></script>
      <Comment comments={comments}></Comment>
    </Layout >
  )
};