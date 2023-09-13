function createClassRoom(numbersOfStudents) {
  // studentSeat関数は座席番号（seat）を「覚える」新しい関数（クロージャー）を返す
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }
  let students = []; // 関数の配列を格納
  // それぞれのイテレーションでstudentSeat(i + 1)を呼ぶ
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);
