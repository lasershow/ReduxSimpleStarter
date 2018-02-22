import React, { Component } from 'react';
// const Component = React.component;

// const SearchBar = () => {
//   return <input />;
// };

// ComponentはReact.createClassに
//renderメソッドをもったオブジェクトを渡すことで作成することが出来ます。
class SearchBar extends Component {
  // コンストラクタ
  //いついんたスンスは開放される？
  constructor(props) {
    // これは何でしょうかhttps://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        {/*controlled componentを確認*/}
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value})}
        />
        {/* なぜここも画面上で更新されるのか, rerenderの仕組みなども追ってみる　https://qiita.com/koba04/items/63267bcc918d76ac8767 */}
        Value of the input: {this.state.term}
      </div>
    );
  }

  // e = eventObject or event
  // event　target
  onInputChange(event) {
    console.log(event.target.value);
    // console.log(e.target.value);
    //検索機能作成する場合ここに、APIを呼び出して、検索結果を表示させたりすれば良さそう
  }
};


export default SearchBar;
