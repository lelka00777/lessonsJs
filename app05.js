const names = ['Bob', 'Alex', 'Donald', 'Zak']
const names2 = ['Bob', 'alex', 'bob', 'Alex', 'Юрий', 'игорь', 1000]
// const number = [12, 8, 678, 56, 1000, -1]

// console.log(names.sort())
// console.log(names2.sort())
// console.log(number.sort())
//
// const nanesSort = names.toSorted()
// console.log(names === nanesSort)
//
// console.log(number.sort())
// ---------------------------------------------- Пузырьковая сортировка --------------------------------------------
const number = [12, 678,8,  56, 1000, -1]

const compareFunction = (a, b) => { //
    if (a >= b) {
        return 5
    }else{
        return -5
    }
}
console.log(number.sort(compareFunction))

/// Хакерская запись
const compareFunction =(фби)
// -------------------------------------------------------------------------------------------------------------------