'use strict';

window.onload = function () {
    let target = document.querySelector('.square');

    let ctrls = document.querySelectorAll('[data-property');
console.log(ctrls);
    [].forEach.call(ctrls, function (elem) {
        setTransform(target, elem, elem.dataset.property);
    })
};

/**
 * target: 要操作的对象
 * ctrl: 控制 input
 * property: translate || rotate
 */
function setTransform(target, ctrl, property) {
    let span = ctrl.parentNode.querySelector('.value');
    let unit = ctrl.dataset.unit;
    // 将 property 改成 input 对应的象限上的属性
    property = property + ctrl.dataset.ctrl;

    ctrl.addEventListener('input', function () {
        let v = target.style.transform;
        let newValue = property + '(' + this.value + unit + ')';

        span.textContent = this.value;

        if (v.indexOf(property) < 0) {
            // 目前 property 属性还没有值，所以直接追加
            target.style.transform += ' ' + newValue;
        } else {
            // 目前已有 property 属性，替换它的值
            // 这里要注意，我们期望的正则是下面这样
            // /translateX\(.*?\)/
            // 所以不要忘了 \ 也要转义
            let reg = new RegExp(property + '\\(.*?' + '\\)');
            target.style.transform = v.replace(reg, newValue);
        }
    });
}