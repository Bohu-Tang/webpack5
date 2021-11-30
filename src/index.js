import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';



function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['你好', '，我是测试webpack的1', '。']);
    // 为元素添加class
    element.classList.add('hello');
    // 把图片添加到元素中
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon)

    return element;
}

document.body.appendChild(component())