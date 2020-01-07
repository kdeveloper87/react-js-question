import React from 'react' ;
import ReactDom from 'react-dom' ;
import { hot } from 'react-hot-loader/root' ;

import App from './App' ;

const Hot = hot( App );

ReactDom.render( <Hot/>, document.querySelector( '#root' ) );

'throw a SyntaxError'

let name = 1;
( { name } = { name: 3 } );
const result = name;