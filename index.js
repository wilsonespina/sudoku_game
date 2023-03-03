const fillPlaceholders = () => {
    const S1 = [5,3,4,6,7,2,1,9,8];
    const S2 = [6,7,8,1,9,5,3,4,2];
    const S3 = [9,1,2,3,4,8,5,6,7];
    const S4 = [8,5,9,4,2,6,7,1,3];
    const S5 = [7,6,1,8,5,3,9,2,4];
    const S6 = [4,2,3,7,9,1,8,5,6];
    const S7 = [9,6,1,2,8,7,3,4,5];
    const S8 = [5,3,7,4,1,9,2,8,6];
    const S9 = [2,8,4,6,3,5,1,7,9];

    // get all inputs
    const inputs = document.querySelectorAll('input');

    // flatten arrays
    const flattenedArrays = [...S1, ...S2, ...S3, ...S4, ...S5, ...S6, ...S7, ...S8, ...S9]
    inputs.forEach((input, index) => {
        input.value = flattenedArrays[index];
    })
}


// ROWS

// const ROW_1 = [5,3,4,6,7,8,9,1,2];
// const ROW_2 = [6,7,2,1,9,5,3,4,8];
// const ROW_3 = [1,9,8,3,4,2,5,6,7];
// const ROW_4 = [8,5,9,7,6,1,4,2,3];
// const ROW_5 = [4,2,6,8,5,3,7,9,1];
// const ROW_6 = [7,1,3,9,2,4,8,5,6];
// const ROW_7 = [9,6,1,5,3,7,2,8,4];
// const ROW_8 = [2,8,7,4,1,9,6,3,5];
// const ROW_9 = [3,4,5,2,8,6,1,7,9];

// const ALL_ROWS = [ROW_1,ROW_2,ROW_3,ROW_4,ROW_5,ROW_6,ROW_7,ROW_8,ROW_9];


// CHECKS

const compareAgainstArraysForDups = (arrays) => {
    const stringified = arrays.map(arr => JSON.stringify(arr))
    return stringified.some((element, index) => {
        return stringified.indexOf(element) !== index
    });
}

const arrayHasDuplicateEntries = (arrays) => {
    return arrays.some((array) => {
        return (new Set(array)).size !== array.length;
    })
}

const getRowInputs = (rowNumber) => {
    return document.querySelectorAll(`.row-${rowNumber}`);
}

const runCheck = () => {

    const ROW_1 = [...getRowInputs(1)].map(input => input.value);
    const ROW_2 = [...getRowInputs(2)].map(input => input.value);
    const ROW_3 = [...getRowInputs(3)].map(input => input.value);
    const ROW_4 = [...getRowInputs(4)].map(input => input.value);
    const ROW_5 = [...getRowInputs(5)].map(input => input.value);
    const ROW_6 = [...getRowInputs(6)].map(input => input.value);
    const ROW_7 = [...getRowInputs(7)].map(input => input.value);
    const ROW_8 = [...getRowInputs(8)].map(input => input.value);
    const ROW_9 = [...getRowInputs(9)].map(input => input.value);

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


    if (Boolean(compareAgainstArraysForDups(ALL_SQUARES) ||
        compareAgainstArraysForDups(ALL_COLUMNS) ||
        compareAgainstArraysForDups(ALL_ROWS) ||
        arrayHasDuplicateEntries(ALL_SQUARES) ||
        arrayHasDuplicateEntries(ALL_COLUMNS) ||
        arrayHasDuplicateEntries(ALL_ROWS))
        )
    {
        console.warn('Something is wrong');
        compareAgainstArraysForDups(ALL_SQUARES) && console.log('Error in ALL_SQUARES: ', ALL_SQUARES);
        compareAgainstArraysForDups(ALL_COLUMNS) && console.log('Error in ALL_COLUMNS: ', ALL_COLUMNS);
        compareAgainstArraysForDups(ALL_ROWS) && console.log('Error in ALL_ROWS: ', ALL_ROWS);
        arrayHasDuplicateEntries(ALL_SQUARES) && console.log('Error in ALL_SQUARES, duplicate entries: ', ALL_SQUARES);
        arrayHasDuplicateEntries(ALL_COLUMNS) && console.log('Error in ALL_COLUMNS, duplicate entries: ', ALL_COLUMNS);
        arrayHasDuplicateEntries(ALL_ROWS) && console.log('Error in ALL_ROWS, duplicate entries: ', ALL_ROWS);

    } else {
        console.log('You PASSED!')
    }
}

