// importって？
// http://analogic.jp/module-summary/
import React, {Component} from 'react';;
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js'

// API_KEYの設定
// dotenvを使おう
// http://numb86-tech.hatenablog.com/entry/2017/01/24/000940
require('dotenv').config();
const API_KEY = process.env.YOUTUBE_API_KEY;

// ドキュメントを使用して確認できるようになろう
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//   console.log(data);
// });


// create a new component
// This component should produce some HTMl
// 書くことが重要
// const ES2016 syntax
// https://sbfl.net/blog/2016/07/14/javascript-var-let-const/
// jsx
// ES6 syntax アロー関数
// //従来の関数式
// var fn = function (x) {/* 関数本体 */}
//
// //上記の関数式の無名関数部分（右辺）をアロー関数に置き換えたものが以下です。
// //var fn = (x) => {/* 関数本体 */}
//
// //次の様な「関数宣言」をアロー関数に置き換えることは出来ません。
// //function fn(x) {/* 関数本体 */}


// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   )
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: []}

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // videos: videoと同じ意味を持つ
      this.setState({ videos });
      console.log(this.state.videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// take this component's generated HTML and
// put it on the page
ReactDom.render(
  <App />,
  document.querySelector('.container')
);
