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


// const COLUMN_1 = [ROW_1[0], ROW_2[0], ROW_3[0], ROW_4[0], ROW_5[0], ROW_6[0], ROW_7[0], ROW_8[0], ROW_9[0]];
// const COLUMN_2 = [ROW_1[1], ROW_2[1], ROW_3[1], ROW_4[1], ROW_5[1], ROW_6[1], ROW_7[1], ROW_8[1], ROW_9[1]];
// const COLUMN_3 = [ROW_1[2], ROW_2[2], ROW_3[2], ROW_4[2], ROW_5[2], ROW_6[2], ROW_7[2], ROW_8[2], ROW_9[2]];
// const COLUMN_4 = [ROW_1[3], ROW_3[3], ROW_3[3], ROW_4[3], ROW_5[3], ROW_6[3], ROW_7[3], ROW_8[3], ROW_9[3]];
// const COLUMN_5 = [ROW_1[4], ROW_4[4], ROW_4[4], ROW_4[4], ROW_5[4], ROW_6[4], ROW_7[4], ROW_8[4], ROW_9[4]];
// const COLUMN_6 = [ROW_1[5], ROW_5[5], ROW_5[5], ROW_5[5], ROW_5[5], ROW_6[5], ROW_7[5], ROW_8[5], ROW_9[5]];
// const COLUMN_7 = [ROW_1[6], ROW_6[6], ROW_6[6], ROW_6[6], ROW_6[6], ROW_6[6], ROW_7[6], ROW_8[6], ROW_9[6]];