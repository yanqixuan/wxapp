// 推平数组
const _= require('lodash');
const arr1 = [99,0,33,[101,202,[303,[404]]],1,2];
const arr2 = [2,1,2];
const users = [
    {user:'fred',age:48},
    {user:'bob',age:43},
    {user:'fred',age:40},
    {user:'bob',age:36}
]
const flattenArr1 = _.flattenDeep(arr1);
const sortedUser = _.sortBy(users,['user','age']);
console.log(sortedUser);
console.log(flattenArr1);
console.log(_.uniq(arr2));
// console.log(users)