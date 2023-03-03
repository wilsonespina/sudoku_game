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

*/



/*

EXAMPLE

5 3 4 | 6 7 8 | 9 1 2
6 7 2 | 1 9 5 | 3 4 8
1 9 8 | 3 4 2 | 5 6 7
---------------------
8 5 9 | 7 6 1 | 4 2 3
4 2 6 | 8 5 3 | 7 9 1
7 1 3 | 9 2 4 | 8 5 6
---------------------
9 6 1 | 5 3 7 | 2 8 4
2 8 7 | 4 1 9 | 6 3 5
3 4 5 | 2 8 6 | 1 7 9

 */

/*
- Break down whole grid into 9X horizontal arrays, left to right, top to bottom

R1 - [5,3,4,6,7,8,9,1,2]
R2 - [6,7,2,1,9,5,3,4,8]
R3 - [1,9,8,3,4,2,5,6,7]
R4 - [8,5,9,7,6,1,4,3,2]
R5 - [4,2,6,8,5,3,7,9,1]
R6 - [7,1,3,9,2,4,8,5,6]
R7 - [9,6,1,5,3,7,2,8,4]
R8 - [2,8,7,4,1,9,6,3,5]
R9 - [3,4,5,2,8,6,1,7,9]

Identify zones where there need to be numerical checks:
  * each square on the grid, consisting to numbers 1 - 9
    - check all squares are unique? compare arrays? (not sure this is necessary)
  * each column
  * each row
    - check all numbers unique from 1 - 9 (no duplicates)


SQUARES:

S1: [...R1.slice(0,3), ...R2.slice(0,3), ...R3.slice(0,3)]
S2: [...R1.slice(3,6), ...R2.slice(3,6), ...R3.slice(3,6)]
S3: [...R1.slice(6,9), ...R2.slice(6,9), ...R3.slice(6,9)]
....
S9: [...R7.slice(6,9), ...R8.slice(6,9), ...R9.slice(6,9)]


COLUMN:

C1: [R1[0], R2[0], R3[0].......R9[0]]
C2: [R1[1], R2[1], R3[1].......R9[1]]
C3: [R1[2], R2[2], R3[2].......R9[2]]

ROW:
const allRows = [R1, R2, R3......R9]
*/

// ********************
// ROWS

const ROW_1 = [5,3,4,6,7,8,9,1,2];
const ROW_2 = [6,7,2,1,9,5,3,4,8];
const ROW_3 = [1,9,8,3,4,2,5,6,7];
const ROW_4 = [8,5,9,7,6,1,4,2,3];
const ROW_5 = [4,2,6,8,5,3,7,9,1];
const ROW_6 = [7,1,3,9,2,4,8,5,6];
const ROW_7 = [9,6,1,5,3,7,2,8,4];
const ROW_8 = [2,8,7,4,1,9,6,3,5];
const ROW_9 = [3,4,5,2,8,6,1,7,9];

const ALL_ROWS = [ROW_1,ROW_2,ROW_3,ROW_4,ROW_5,ROW_6,ROW_7,ROW_8,ROW_9];

// SQUARES

const getSquare = (number) => {
    const num = number - 1
    const baseRow = (3 * Math.floor(num / 3)) + 1;
    let baseIndices;
    if (number % 3 === 1) baseIndices = 0;
    if (number % 3 === 2) baseIndices = 3;
    if (number % 3 === 0) baseIndices = 6;

    if (baseRow === 1) {
        return [...ROW_1.slice(baseIndices, baseIndices + 3), ...ROW_2.slice(baseIndices, baseIndices + 3), ...ROW_3.slice(baseIndices, baseIndices + 3)]
    } else if (baseRow === 4) {
        return [...ROW_4.slice(baseIndices, baseIndices + 3), ...ROW_5.slice(baseIndices, baseIndices + 3), ...ROW_6.slice(baseIndices, baseIndices + 3)]
    } else if (baseRow === 7) {
        return [...ROW_7.slice(baseIndices, baseIndices + 3), ...ROW_8.slice(baseIndices, baseIndices + 3), ...ROW_9.slice(baseIndices, baseIndices + 3)]
    }
}

const SQUARE_1 = getSquare(1);
const SQUARE_2 = getSquare(2);
const SQUARE_3 = getSquare(3);
const SQUARE_4 = getSquare(4);
const SQUARE_5 = getSquare(5);
const SQUARE_6 = getSquare(6);
const SQUARE_7 = getSquare(7);
const SQUARE_8 = getSquare(8);
const SQUARE_9 = getSquare(9);

const ALL_SQUARES = [SQUARE_1,SQUARE_2,SQUARE_3,SQUARE_4,SQUARE_5,SQUARE_6,SQUARE_7,SQUARE_8,SQUARE_9]


// const SQUARE_1 = [...ROW_1.slice(0,3), ...ROW_2.slice(0,3), ...ROW_3.slice(0,3)];
// const SQUARE_2 = [...ROW_1.slice(3,7), ...ROW_2.slice(3,6), ...ROW_3.slice(3,6)];
// const SQUARE_2 = [...ROW_1.slice(3,7), ...ROW_2.slice(3,6), ...ROW_3.slice(3,6)];
// const SQUARE_3 = [...ROW_1.slice(6,9), ...ROW_2.slice(6,9), ...ROW_3.slice(6,9)];

// const SQUARE_4 = [...ROW_4.slice(0,3), ...ROW_5.slice(0,3), ...ROW_6.slice(0,3)];
// const SQUARE_5 = [...ROW_4.slice(3,6), ...ROW_5.slice(3,6), ...ROW_6.slice(3,6)];
// const SQUARE_6 = [...ROW_4.slice(6,9), ...ROW_5.slice(6,9), ...ROW_6.slice(6,9)];

// const SQUARE_7 = [...ROW_7.slice(0,3), ...ROW_8.slice(0,3), ...ROW_9.slice(0,3)];
// const SQUARE_8 = [...ROW_7.slice(3,6), ...ROW_8.slice(3,6), ...ROW_9.slice(3,6)];
// const SQUARE_9 = [...ROW_7.slice(6,9), ...ROW_8.slice(6,9), ...ROW_9.slice(6,9)];

// COLUMNS

const getColumn = (columnNumber) => {
    const i = columnNumber - 1;
    return [ROW_1[i], ROW_2[i], ROW_3[i], ROW_4[i], ROW_5[i], ROW_6[i], ROW_7[i], ROW_8[i], ROW_9[i]];
}
const COLUMN_1 = getColumn(1);
const COLUMN_2 = getColumn(2);
const COLUMN_3 = getColumn(3);
const COLUMN_4 = getColumn(4);
const COLUMN_5 = getColumn(5);
const COLUMN_6 = getColumn(6);
const COLUMN_7 = getColumn(7);
const COLUMN_8 = getColumn(8);
const COLUMN_9 = getColumn(9);

const ALL_COLUMNS = [COLUMN_1,COLUMN_2,COLUMN_3,COLUMN_4,COLUMN_5,COLUMN_6,COLUMN_7,COLUMN_8,COLUMN_9];

// const COLUMN_1 = [ROW_1[0], ROW_2[0], ROW_3[0], ROW_4[0], ROW_5[0], ROW_6[0], ROW_7[0], ROW_8[0], ROW_9[0]];
// const COLUMN_2 = [ROW_1[1], ROW_2[1], ROW_3[1], ROW_4[1], ROW_5[1], ROW_6[1], ROW_7[1], ROW_8[1], ROW_9[1]];
// const COLUMN_3 = [ROW_1[2], ROW_2[2], ROW_3[2], ROW_4[2], ROW_5[2], ROW_6[2], ROW_7[2], ROW_8[2], ROW_9[2]];
// const COLUMN_4 = [ROW_1[3], ROW_3[3], ROW_3[3], ROW_4[3], ROW_5[3], ROW_6[3], ROW_7[3], ROW_8[3], ROW_9[3]];
// const COLUMN_5 = [ROW_1[4], ROW_4[4], ROW_4[4], ROW_4[4], ROW_5[4], ROW_6[4], ROW_7[4], ROW_8[4], ROW_9[4]];
// const COLUMN_6 = [ROW_1[5], ROW_5[5], ROW_5[5], ROW_5[5], ROW_5[5], ROW_6[5], ROW_7[5], ROW_8[5], ROW_9[5]];
// const COLUMN_7 = [ROW_1[6], ROW_6[6], ROW_6[6], ROW_6[6], ROW_6[6], ROW_6[6], ROW_7[6], ROW_8[6], ROW_9[6]];

// CHECKS

const compareArraysForDups = (arrays) => {
    const stringified = arrays.map(arr => JSON.stringify(arr))
    return stringified.some((element, index) => {
        return stringified.indexOf(element) !== index
    });
}

const runCheck = () => {
    if (Boolean(compareArraysForDups(ALL_SQUARES) || compareArraysForDups(ALL_COLUMNS) || compareArraysForDups(ALL_ROWS))) {
        console.warn('Something is wrong');
        compareArraysForDups(ALL_SQUARES) && console.log('Error in ALL_SQUARES: ', ALL_SQUARES)
        compareArraysForDups(ALL_COLUMNS) && console.log('Error in ALL_COLUMNS: ', ALL_COLUMNS)
        compareArraysForDups(ALL_ROWS) && console.log('Error in ALL_ROWS: ', ALL_ROWS)

    } else {
        console.log('You PASSED!')
    }
}