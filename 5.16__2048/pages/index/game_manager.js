const Grid = require('./grid.js');

function GameManager(size,startTiles = 2){
    this.size = size;
    this.startTiles = startTiles;
}

GameManager.prototype = {
    setup:function(){
        this.grid = new Grid(this.size);
        // 随机添加一个方法
        this.addStartTiles();
        return this.grid.cells;
    },
    addStartTiles(){
        for(let i = 0;i<this.startTiles;i++){
            this.addRandomTiles();
        }
    },
    addRandomTiles(){
        // 添加方块  位置随机  数值随机
        const value = Math.random() < 0.9 ? 2:4;
        // grid有数据  知道哪些位置空着
        // const position = this.grid.randomAvailableCell();
    }
}

module.exports = GameManager;