const vaxTrail = (arr) => {
  // 1st way
  // let A = [
  //   ...arr.filter(
  //     ({ age, temperature }) => age >= 20 && age <= 30 && temperature < 100
  //   ),
  // ];
  // let B = [
  //   ...arr.filter(
  //     ({ age, temperature }) => age >= 31 && age <= 40 && temperature < 100
  //   ),
  // ];
  // let C = [
  //   ...arr.filter(
  //     ({ age, temperature }) => age >= 41 && age <= 50 && temperature < 100
  //   ),
  // ];
  // let D = [
  //   ...arr.filter(({ age, temperature }) => age > 50 || temperature > 100),
  // ];

  // 2nd way
  let A = [],
    B = [],
    C = [],
    D = [];
  arr.filter((person) =>
    person.age >= 20 && person.age <= 30 && person.temperature < 100
      ? A.push(person)
      : person.age >= 31 && person.age <= 40 && person.temperature < 100
      ? B.push(person)
      : person.age >= 41 && person.age <= 50 && person.temperature < 100
      ? C.push(person)
      : D.push(person)
  );

  return { A, B, C, D };
};
