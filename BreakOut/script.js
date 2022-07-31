const grid = document.querySelector('.grid')
const blockWidth = 50
const blockHieght = 10

class Block {
    constructor(x, y) {
        this.bottomLeft = [x, y]
        this.buttomRight = [x + blockWidth, y]
        this.topLeft = [x, y + blockHieght]
        this.topRight = [x + blockWidth, y + blockHieght]
    }

}


const blocks = [
    new Block(5,285),
    new Block(5,275),
    new Block(5,265),
    new Block(5,255),
    new Block(5,245),
    new Block(5,235),
    new Block(5,225),
    new Block(5,215),
    new Block(5,205),
    new Block(5+50,285),
    new Block(5+100,285),
    new Block(5+150,285),
    new Block(5+250,285),
    new Block(5+200,285),
    new Block(5+50,275),
    new Block(5+100,275),
    new Block(5+150,275),
    new Block(5+250,275),
    new Block(5+200,275),
    new Block(5+50,265),
    new Block(5+100,265),
    new Block(5+150,265),
    new Block(5+250,265),
    new Block(5+200,265),
    new Block(5+50,255),
    new Block(5+100,255),
    new Block(5+150,255),
    new Block(5+250,255),
    new Block(5+200,255),
    new Block(5+50,245),
    new Block(5+100,245),
    new Block(5+150,245),
    new Block(5+250,245),
    new Block(5+200,245),
    new Block(5+50,235),
    new Block(5+100,235),
    new Block(5+150,235),
    new Block(5+250,235),
    new Block(5+200,235),
    new Block(5+50,225),
    new Block(5+100,225),
    new Block(5+150,225),
    new Block(5+250,225),
    new Block(5+200,225),
    new Block(5+50,215),
    new Block(5+100,215),
    new Block(5+150,215),
    new Block(5+250,215),
    new Block(5+200,215),
    new Block(5+50,205),
    new Block(5+100,205),
    new Block(5+150,205),
    new Block(5+250,205),
    new Block(5+200,205),
]

console.log(blocks[0])

function addBlock() {
    blocks.forEach(element => {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = element.bottomLeft[0] + 'px';
        block.style.bottom = element.bottomLeft[1] + 'px'
        grid.appendChild(block);
    });

}

addBlock()