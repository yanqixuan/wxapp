function flatten(arr){
    if (!Array.isArray(arr)){
        return false;
    }
    const flattenArr = arr.reduce((prev,cur)=>{ //递归解决 将多层数组的扁平化分为多个一维数组 跟旁边的数字 concat  退出条件是没有数组
        // 消除数组
       return prev.concat(
           Array.isArray(cur)?flatten(cur):cur
           );
    },[])
    return flattenArr;
}
const arr = [1,[2,[3]]];
console.log(flatten(arr));