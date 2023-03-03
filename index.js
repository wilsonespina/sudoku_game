// *************** PLACEHOLDERS ********************

const fillPlaceholders = () => {
    // const S1 = [5,3,4,6,7,"",1,9,""];
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

// ***************************************************

// CHECKS

const compareAgainstArraysForDups = (arrays) => {
    const stringified = arrays.map(arr => JSON.stringify(arr))
    return [stringified.some((element, index) => {
        return stringified.indexOf(element) !== index;
    })];
}

const arrayHasDuplicateEntries = (arrays) => {
    return arrays.some((array) => {
        return (new Set(array)).size !== array.length;
    })
}

const checkEmptyValues = (arrays) => {

}


// ***************************************************



const getRowInputs = (rowNumber) => {
    return document.querySelectorAll(`.row-${rowNumber}`);
}


const getRows = () => {
    const ROW_1 = [...getRowInputs(1)].map(input => input.value);
    const ROW_2 = [...getRowInputs(2)].map(input => input.value);
    const ROW_3 = [...getRowInputs(3)].map(input => input.value);
    const ROW_4 = [...getRowInputs(4)].map(input => input.value);
    const ROW_5 = [...getRowInputs(5)].map(input => input.value);
    const ROW_6 = [...getRowInputs(6)].map(input => input.value);
    const ROW_7 = [...getRowInputs(7)].map(input => input.value);
    const ROW_8 = [...getRowInputs(8)].map(input => input.value);
    const ROW_9 = [...getRowInputs(9)].map(input => input.value);

    return [ROW_1,ROW_2,ROW_3,ROW_4,ROW_5,ROW_6,ROW_7,ROW_8,ROW_9];
}

const getSquares = () => {
    const getSquare = (number) => {
        const num = number - 1
        const baseRow = (3 * Math.floor(num / 3)) + 1;
        let baseIndices;
        if (number % 3 === 1) baseIndices = 0;
        if (number % 3 === 2) baseIndices = 3;
        if (number % 3 === 0) baseIndices = 6;

        if (baseRow === 1) {
            return [...getRows()[0].slice(baseIndices, baseIndices + 3), ...getRows()[1].slice(baseIndices, baseIndices + 3), ...getRows()[2].slice(baseIndices, baseIndices + 3)]
        } else if (baseRow === 4) {
            return [...getRows()[3].slice(baseIndices, baseIndices + 3), ...getRows()[4].slice(baseIndices, baseIndices + 3), ...getRows()[5].slice(baseIndices, baseIndices + 3)]
        } else if (baseRow === 7) {
            return [...getRows()[6].slice(baseIndices, baseIndices + 3), ...getRows()[7].slice(baseIndices, baseIndices + 3), ...getRows()[8].slice(baseIndices, baseIndices + 3)]
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

    return [SQUARE_1,SQUARE_2,SQUARE_3,SQUARE_4,SQUARE_5,SQUARE_6,SQUARE_7,SQUARE_8,SQUARE_9];
}

const getColumns = () => {

    const getColumn = (columnNumber) => {
        const i = columnNumber - 1;
        return [getRows()[0][i], getRows()[1][i], getRows()[2][i], getRows()[3][i], getRows()[4][i], getRows()[5][i], getRows()[6][i], getRows()[7][i], getRows()[8][i]];
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

    return [COLUMN_1,COLUMN_2,COLUMN_3,COLUMN_4,COLUMN_5,COLUMN_6,COLUMN_7,COLUMN_8,COLUMN_9];
}

const runCheck = () => {

    const ALL_ROWS = getRows();
    const ALL_SQUARES = getSquares();
    const ALL_COLUMNS = getColumns();

    console.log("🚀 ~ file: index.js:148 ~ runCheck ~ compareAgainstArraysForDups(ALL_SQUARES)[0]:", compareAgainstArraysForDups(ALL_SQUARES)[0])
    if (Boolean(compareAgainstArraysForDups(ALL_SQUARES)[0] ||
        compareAgainstArraysForDups(ALL_COLUMNS)[0] ||
        compareAgainstArraysForDups(ALL_ROWS)[0] ||
        arrayHasDuplicateEntries(ALL_SQUARES) ||
        arrayHasDuplicateEntries(ALL_COLUMNS) ||
        arrayHasDuplicateEntries(ALL_ROWS))
        )
    {
        console.clear();
        console.warn('Something is wrong');
        compareAgainstArraysForDups(ALL_SQUARES) && console.log('Error in ALL_SQUARES: ', ALL_SQUARES);
        compareAgainstArraysForDups(ALL_COLUMNS) && console.log('Error in ALL_COLUMNS: ', ALL_COLUMNS);
        compareAgainstArraysForDups(ALL_ROWS) && console.log('Error in ALL_ROWS: ', ALL_ROWS);
        arrayHasDuplicateEntries(ALL_SQUARES) && console.log('Error in ALL_SQUARES, duplicate entries: ', ALL_SQUARES);
        arrayHasDuplicateEntries(ALL_COLUMNS) && console.log('Error in ALL_COLUMNS, duplicate entries: ', ALL_COLUMNS);
        arrayHasDuplicateEntries(ALL_ROWS) && console.log('Error in ALL_ROWS, duplicate entries: ', ALL_ROWS);

    } else {
        console.clear();
        console.log('You PASSED!')
    }
}

