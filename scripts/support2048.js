var documentWidth = window.screen.availWidth
var documentHeight = window.screen.availHeight
var gridContainerWidth = documentWidth * 0.92
var cellSideLength = documentWidth * 0.18
var cellSpace = documentWidth * 0.04

// 设置每个格子距顶端和左边的距离
var getPosTop = function(i, j) {
    return cellSpace + i * (cellSideLength + cellSpace)
}

var getPosLeft = function(i, j) {
    return cellSpace + j * (cellSideLength + cellSpace)
}

// 设置数字颜色
var getNumberColor = function(number) {
    // if (number <= 4) {
    //     return '#776e65'
    // }
    return 'white'
}

// 设置字体大小
var getNumberSize = function(number) {
    if (number > 512) {
        return cellSideLength * 0.2 + 'px'
    } else if (number === 512) {
        return cellSideLength * 0.3 + 'px'
    } else {
        return cellSideLength * 0.4 + 'px'
    }
}

// 设置背景图片
var getNumberBackgroundImage = function(number) {
    var color = {
        2: 'url(images/02.jpg)',
        4: 'url(images/04.jpg)',
        8: 'url(images/08.jpg)',
        16: 'url(images/16.jpg)',
        32: 'url(images/32.jpg)',
        64: 'url(images/64.jpg)',
        128: 'url(images/128.jpg)',
        256: 'url(images/256.jpg)',
        512: 'url(images/512.jpg)',
        1024: 'url(images/1024.jpg)',
        2048: 'url(images/2048.jpg)',
        4096: 'url(images/4096.jpg)',
        8192: 'url(images/8192.jpg)'
    }
    return color[number]
}

var noSpace = function (board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                return false
            }
        }
    }
    return true
}

// 方块移动限制
var noMove = function(board) {
    if (canMoveLeft(board) || canMoveRight(board) || canMoveUp(board) || canMoveDown(board)) {
        return false
    }
    return true
}

var canMoveLeft = function(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] !== 0) {
                if (board[i][j-1] === 0 || board[i][j-1] === board[i][j]) {
                    return true
                }
            }
        }
    }
    return false
}

var canMoveRight = function(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] !== 0) {
                if (board[i][j+1] === 0 || board[i][j+1] === board[i][j]) {
                    return true
                }
            }
        }
    }
    return false
}

var canMoveUp = function(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] !== 0) {
                if (board[i-1][j] === 0 || board[i-1][j] === board[i][j]) {
                    return true
                }
            }
        }
    }
    return false
}

var canMoveDown = function(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] !== 0) {
                if (board[i+1][j] === 0 || board[i+1][j] === board[i][j]) {
                    return true
                }
            }
        }
    }
    return false
}

var noBlockHorizontal = function(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] !== 0) {
            return false
        }
    }
    return true
}

var noBlockVertical = function(col, row1, row2, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] !== 0) {
            return false
        }
    }
    return true
}
