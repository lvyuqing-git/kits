// 随机整数
var kits = {};
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}
// 生成随机rgb颜色
kits.rgbColor = function () {
    var r = kits.randomInt(0, 255);
    var g = kits.randomInt(0, 255);
    var b = kits.randomInt(0, 255);
    var colorStr = 'rgb(' + r + ',' + g + ',' + b + ')';
    return colorStr;
}
//生成随机16进制颜色
kits.randomHexColor = function () {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    var color = ['#'];
    for (var i = 0; i < 6; i++) {
        var rand = Math.floor(Math.random() * arr.length);
        color.push(arr[rand]);
    }
    return color.join('');
}

//在浏览器仓库中添加数据
function addItem(keyName, content) {
    localStorage.setItem(keyName, content);
    if (typeof content === 'object') {
        localStorage.setItem(keyName, JSON.stringify(content));
    }
}
//在浏览器仓库中获取数据
function getItem(keyName) {
    let conten = localStorage.getItem(keyName);
    if (typeof conten === 'string') {
        return JSON.parse(conten);
    }
    return conten;
}

