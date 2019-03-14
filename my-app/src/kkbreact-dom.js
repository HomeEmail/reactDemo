
import {initVnode} from './kkbvdom';


function render(vdom,container){
    console.log('render(vdom,container):',vdom,container);
    let rootNode = initVnode(vdom);//解析
    container.appendChild(rootNode);
}

export default {render}