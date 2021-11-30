import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['这里是div里面的内容1']);

    const br = document.createElement('br');

    const btn = document.createElement('button');
    btn.innerHTML = '点击我a';

    element.appendChild(br);
    element.appendChild(btn)
    // 懒加载print文件，当点击时才去加载
    btn.onclick = e => import( /* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;
        print()
    })

    return element;


}

document.body.appendChild(component())