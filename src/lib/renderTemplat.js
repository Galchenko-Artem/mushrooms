require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplat = (reactElement, properties, res) =>{
    const reactEl = React.createElement(reactElement,properties);
    const html = ReactDOMServer.renderToStaticMarkup(reactEl);
    res.write('<!DOCTYPE html>');
    res.end(html);
};
module.exports = renderTemplat;