import {createVnode} from './kkbvdom';


function createElement(type,props,...children){
    //console.log('createElement() type:',type);
    //如果是组件，type就是一个函数
    let vtype;//没有赋值表示是文本
    if(typeof type == 'string'){
        //字符串，就是普通的div这种元素
        vtype = 1;
    }else if( typeof type == 'function'){
        //函数就是组件
        if(type.isReactComponent){
            //class组件
            vtype = 3;
        }else{
            //函数组件
            vtype = 2;
        }
    }
    delete props.__self;
    delete props.__source;
    props.children = children;
    //console.log('createElement:',vtype,type,props);
    return createVnode(vtype,type,props);
}

class Component{
    constructor(props){
        this.props = props;
        this.state = {};
    }
    //区别class组件和function组件的参数
    static isReactComponent = true;
    setState(){
        //异步更新队列push一个任务
    }
}
// class Updater{
//     //更新异步队列
//     constructor(){

//     }
// }

export default {createElement,Component}