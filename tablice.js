 /*
  *
  * Function made for comparing column with rows only once.
  * 
  *    A_B_C_D_E_F_G_H_I_J_
  * A |                   | 
  * B |                   |
  * C |                   |
  * D |                   |
  * E |                   |
  * F |                   |
  * G |                   |
  * H |                   |
  * I |                   |
  * J |___________________|
  * 
  */

(function () {
  var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      console.log(rows[i], rows[j]);
    }
  }

})();

 /*
  *
  * Function made for comparing column with rows only once.
  * 
  *    A_B_C_D_E_F_G_H_I_J_
  * A |X                  | 
  * B |  X                |
  * C |    X              |
  * D |      X            |
  * E |        X          |
  * F |          X        |
  * G |            X      |
  * H |              X    |
  * I |                X  |
  * J |__________________X|
  * 
  */

(function () {
  var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      if (rows[i] !== rows[j]) {
        console.log(rows[i], rows[j]);
      }
    }
  }

})();

 /*
  *
  * Function made for comparing column with rows only once.
  * 
  *    A_B_C_D_E_F_G_H_I_J_
  * A |X                  | 
  * B |X X                |
  * C |X X X              |
  * D |X X X X            |
  * E |X X X X X          |
  * F |X X X X X X        |
  * G |X X X X X X X      |
  * H |X X X X X X X X    |
  * I |X X X X X X X X X  |
  * J |X_X_X_X_X_X_X_X_X_X|
  * 
  */

(function () {
  var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      if (rows[i] < rows[j]) {
        console.log(rows[i], rows[j]);
      }
    }
  }

})();


 /*
  *
  * Function made for comparing column with rows only once.
  * RANDOMLY
  * 
  *    A_B_C_D_E_F_G_H_I_J_
  * A |X                  | 
  * B |X X                |
  * C |X X X              |
  * D |X X X X            |
  * E |X X X X X          |
  * F |X X X X X X        |
  * G |X X X X X X X      |
  * H |X X X X X X X X    |
  * I |X X X X X X X X X  |
  * J |X_X_X_X_X_X_X_X_X_X|
  * 
  */

(function () {
  var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      if (rows[i] < rows[j]) {
        console.log(rows[Math.floor(Math.random() * rows.length)], rows[Math.floor(Math.random() * rows.length)]);
      }
    }
  }

})();

 /*
  *
  * Function made for comparing column with rows only once.
  * AND CACHE THE PAIRS
  * 
  *    A_B_C_D_E_F_G_H_I_J_
  * A |X                  | 
  * B |X X                |
  * C |X X X              |
  * D |X X X X            |
  * E |X X X X X          |
  * F |X X X X X X        |
  * G |X X X X X X X      |
  * H |X X X X X X X X    |
  * I |X X X X X X X X X  |
  * J |X_X_X_X_X_X_X_X_X_X|
  * 
  */

(function () {
  var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  var arr = [];

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      if (rows[i] < rows[j]) {
        arr.push(rows[i] + ' - ' + rows[j]);
        console.log(arr);
      }
    }
  }

})();

 /*
  *
  * Function made for comparing column with rows only once.
  * DISPLAY ONE RANDOM PAIR. NOT THE SAME VALUES
  * 
  */

(function () {
  var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  var randomA = rows[Math.floor(Math.random() * rows.length)];
  var randomB = (function secondRandom () {
    randomB = rows[Math.floor(Math.random() * rows.length)];
    if (randomB === randomA) {
      secondRandom();
    }
    return randomB;
  })();

  return randomA + ' - ' + randomB;

})();
