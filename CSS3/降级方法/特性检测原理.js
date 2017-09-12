// 检测浏览器是否支持一个属性
export function testProperty(property) {
    let root = document.documentElement;

    if (property in root.style) {
        root.classList.add(property.toLowerCase());
        return true;
    } else {
        root.classList.add('no-' + property.toLowerCase());
        return false;
    }
}

// 检测浏览器是否支持一个属性的值
export function testValue(id, value, property) {
    let root = document.documentElement;

    let dummy = document.createElement('p');
    dummy.style[property] = value;

    if (dummy.style[property]) {
        root.classList.add(id);
        return true;
    }

    root.classList.add('no-' + id);
    return false;
}