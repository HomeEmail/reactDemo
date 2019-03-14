//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


//react最核心的概念：
//createElement
//Component
//state
//render


import React from './kkbreact';
import ReactDOM from './kkbreact-dom';

// class KKB extends React.Component{
//     render(){
//         return <h2>开课吧真不错1</h2>
//     }
// }

function KKBfn(props){
    return <h2>这是一个函数组件 {props.name} aa</h2>
}
class KKBcomp extends React.Component{
    render(){
        return <h2>这是一个class组件 {this.props.name}</h2>
    }
}

ReactDOM.render(
    //<KKB />,
    <div id="test" className="demo" key="xxx">
        改革春风吹满地
        <span>哈哈哈这是span</span>
        <KKBfn name="开课吧函数组件"></KKBfn>
        <KKBcomp name="开课吧class组件"></KKBcomp>
    </div>, //这一句实际上，babel会将html转编译成js代码，如这样React.createElement("div", null, "aaaa", React.createElement("span", null, "123"));来执行代码，这就是为什么我们可以在js里写html的原因。babel是在react-script库引入的，同时引入了babel插件babel-preset-react-app才可以解析html标签
    //为什么可以这样写<KKBfn name="开课吧函数组件"></KKBfn>,还是因为babel转编译的原因，最后其实是转成这样的可执行的js:
    // function KKBfn(props) {
    //     return React.createElement("h2", null, "\u8FD9\u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6 ", props.name, " aa");
    // }
    // React.createElement(KKBfn, { 
    //     name: "\u5F00\u8BFE\u5427\u51FD\u6570\u7EC4\u4EF6"
    // });


    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();