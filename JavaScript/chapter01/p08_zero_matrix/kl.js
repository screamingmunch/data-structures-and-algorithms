// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and columns are set to 0.

const assert = require("assert");

/**
 * Overwrite rows and columns who have at least 1 zero in them with zeros.
 * @param  {Array.<number[]>} matrix input 2d array to mutate
 * @return {null}
 *
 * We start by initializing rows and cols arrays with false values. We iterate through the matrix, and when we find a 0,
 * we flag its row and column by updating the corresponding indices in rows and cols for future use.
 * When we take a second pass at the matrix, we update all rows that have been flagged to 0, and all columns that have
 * been flagged to 0, which is O(M + N).
 *
 * Runtime: O(M * N)
 * Space:   O(M + N)
 *
 */
const zeroMatrix = (matrix) => {

  if(matrix.length === 0) return;
  const rows = new Array(matrix.length).fill(false);
  const cols = new Array(matrix[0].length).fill(false);


  if(rows == 0) return;

  for(let i = 0; i < rows.length; i++) {
    for(let j = 0; j < cols.length; j++) {
      if(matrix[i][j] == 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  // nullify rows
  for(let i = 0; i < rows.length; i++) {
    if(rows[i]) {
      for(let j = 0; j < cols.length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // nullify cols
  for(let j = 0; j < cols.length; j++) {
    if(cols[j]) {
      for(let i = 0; i < rows.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }

};

describe(module.filename, () => {
  it("should not affect a matrix of size 0", () => {
    const matrix = [];

    zeroMatrix(matrix);
    assert.deepEqual(matrix, []);
  });
  it("should not affect a matrix without 0s", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    zeroMatrix(matrix);
    assert.deepEqual(matrix, [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
  it("should update all rows and columns with at least one 0 to all 0s", () => {
    const matrix = [
      [0, 2, 3, 1],
      [4, 5, 6, 1],
      [7, 8, 9, 1],
    ];

    zeroMatrix(matrix);
    assert.deepEqual(matrix, [
      [0, 0, 0, 0],
      [0, 5, 6, 1],
      [0, 8, 9, 1],
    ]);
  });
  it("should update all rows and columns with at least one 0 to all 0s when multiple 0s are present", () => {
    const matrix = [
      [0, 2, 3],
      [4, 5, 0],
      [7, 8, 9],
    ];

    zeroMatrix(matrix);
    assert.deepEqual(matrix, [
      [0, 0, 0],
      [0, 0, 0],
      [0, 8, 0],
    ]);
  });
});
