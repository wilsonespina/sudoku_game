console.log('HELLO')


// * Multi dimensional arrays

/* 
const grid =
[
        [[1,2,3],[4,5,6],[7,8,9]],
        [[1,2,3],[4,5,6],[7,8,9]],
        [[1,2,3],[4,5,6],[7,8,9]],

        [[1,2,3],[4,5,6],[7,8,9]],
        [[1,2,3],[4,5,6],[7,8,9]],
        [[1,2,3],[4,5,6],[7,8,9]],

        [[1,2,3],[4,5,6],[7,8,9]],
        [[1,2,3],[4,5,6],[7,8,9]],
        [[1,2,3],[4,5,6],[7,8,9]],
]

const g = grid[0];

R1: g[0][0]
R2: g[0][1]
R3: g[0][2]

* Each row: flatten 3X arrays, check for unique values 1-9

C1: g

------
const grid =
[
    [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9],
]

-----

const grid =
[
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
]

R1: g[0]
R2: g[1]
R3: g[2]

C1: g[0][0], g[1][0], g[2][0], g[3][0].......g[8][0]
C2: g[0][1], g[1][1], g[2][1], g[3][1].......g[8][1]


----
const grid =
[
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
]

* Use a Map and set the keys to row1, column 1 etc