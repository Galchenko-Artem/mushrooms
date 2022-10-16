const React = require('react');
const Layout = require('./Layout');

module.exports = function Comment({ comments }) {

  console.log('IN COMMENT Views--------->', comments);
  return (

    <div className="commentBlock">
      {/* <div className="comment"> */}
      {(comments.length)
        ? comments.map((el) => (

          <><div className="container"><div className="row onecommentBlock"><div className="col-1 commetIcon"><img src="/img/user.png" /></div><div className="col-2 commetUser">{el.usName}</div><div className="col-9 commetbody">{el.body}</div></div></div></>))
        : <><div className="container"><div className="row onecommentBlock"><div className="col-1 commetIcon"><img src="/img/user.png" /></div><div className="col-9 commetbody">Здесь пока нет комментариев. Можете добавить свой.</div></div></div></>
      }
    </div >
  )

};