import _ from 'lodash';

function component(){
    const element = document.createElement('div');
    element.innerHTML=_.join(['这里是div里面的内容']);
    
    const br = document.createElement('br');

    const btn = document.createElement('button');
    btn.innerHTML = '点击我';

    element.appendChild(br);
    element.appendChild(btn)

    btn.onclick = e=>import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;
        print()
    })

    return element;

    
}

document.body.appendChild(component())