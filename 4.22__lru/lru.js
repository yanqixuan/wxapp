// 缓存  不用每次都去硬盘里查找,在内存中缓存
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.obj = {    //key
        '1':1,
        '2':2
    };
    this.arr = [];
}

LRUCache.prototype.get = function (key) {
    // 如果没有key，输出undefine   如果有key,把key移动到数组第一项,在打印出数组第一项
    if(!this.obj[key]){
        console.log('undefine');
    }
    else{
        var i = this.arr.indexOf(key);
        this.arr.splice(i,1);
        this.arr.unshift(key);
        console.log(this.arr[0]);
    }
    // console.log(this.obj[key].value);
}
LRUCache.prototype.set = function (key, value) {
    // 如果有key      如果没有  先判断内存   如果满了,执行arr.pop()  没满直接存进去
    if (this.obj[key]) {
        this.obj[key] = value;//更新    最近使用,移动到数组开头
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);   //删除原来位置的值
        this.arr.unshift(key);
    }
    // 如果没有key  判断是否满
    if (this.capacity === this.arr.length) {
        var k = this.arr.pop();
        this.obj[k] = undefined;
    }
        this.obj[key] = value;
        this.arr.unshift(key);
}

var ca = new LRUCache(3);
ca.set(3,3);
ca.get(1);