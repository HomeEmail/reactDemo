


export function createVnode(vtype,type,props){
    //创建虚拟dom
    // dom ==> vnode
    return {vtype,type,props};
}
export function initVnode(vnode){
    //初始化vnode
    //vnode ==> dom
    const {vtype,type,props} = vnode;
    if(!vtype){
        //如果没有vtype其实就是普通的文本
        return document.createTextNode(vnode);
    }
    if(vtype==1){
        //普通的div这样的元素
        return initVelement(vnode);
    }else if(vtype==2){
        //函数组件
        return initFuncComp(vnode);
    }else if(vtype==3){
        //class组件
        return initClassComp(vnode);
    }
}

function initClassComp(vnode){
    const {type,props} = vnode;
    let component = new type(props);
    const newNode = component.render();//render在index.js声明组件时定义的
    return initVnode(newNode);
}

function initFuncComp(vnode){
    //函数组件
    const {type,props} = vnode;
    let newNode = type(props);//执行函数
    return initVnode(newNode);//调用
}

function initVelement(vnode){
    const {type,props} = vnode;
    const node = document.createElement(type);
    const {key,style,className,children,...reset} = props;
    Object.keys(reset).forEach(k=>{
        node.setAttribute(k,reset[k]);
    });
    if(!!className){ //处理className
        node.setAttribute('class',className);
    }
    //处理style
    //处理key
    
    //处理子元素
    initVchildren(node,children);
    return node;
}
function initVchildren(node ,children){
    //初始化子元素
    children.forEach(c=>{
        node.appendChild(initVnode(c));//递归调用
    })
}