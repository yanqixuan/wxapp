lru 缓存 最近最少使用原则
Least Recently Used
操作系统 

node fs硬盘,内存,内存金贵

内存是代码的运行空间 是有限的
存放变量

1   put(1)
2   put(2)
3   get(1) 返回1 1最近使用,2最近最少使用
4   put(3) 3进去了,丢掉2
5   get(2) 拿不到
6   put(4) 4,3    丢掉1
7   get(1) 找不到   -1
8   get(3)  3
9   get(4)  4
 
- cache   LRUCache
  get
  set

- 对象字面量有利于 get set 方法实现
- 最近最少使用,json搞不定,数组可以,[0][length-1],在一头进行操作
  一半的工作交给数组,一半的工作交给json Object,
  让他们成为LRUCache的两个属性

- get set arr + obj 组织在LRUCache中
  API:indexOf   pop  unshift   splice