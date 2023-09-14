const [todo_1] = "1" // связываем массив тасок с массивом тудулистов
const [todo_2] = "2" // связываем массив тасок с массивом тудулистов

const todolists = [
    {
        id: [todo_1], title: 'Wath to Learn'
    },
    {
        id: [todo_2], title: 'Wath to Buy'
    }]


const tasks = {
    [todo_1]: [
        {id: 11, title: "HTML"},
        {id: 12, title: "CSS"},
        {id: 14, title: "JS"},

    ],
    [todo_2]: [
        {id: 22, title: "Milk"},
        {id: 33, title: "Bread"},
        {id: 44, title: "COFFEE"},

    ]
}
// console.log(tasks[todo_1])
// console.log(tasks[todolists[0].id])

// console.log(tasks[todo_1][2].title)
// console.log(tasks[todo_2][0].title)


//delete task id:22            Задание 1
// console.log(tasks[todo_2].filter(el=>el.id !==22))

// add Task   title:'Jus' в  [todo_1]   Задание 2

const newTask = {id: 104, title: 'Jus'}
const newTask1 = {id: 100, title: 'Bear'}

const updeteTask = {
    ...tasks,            //делаем копию тасок
    [todo_1]:       // и копию массива первого [todo_1] присваиваем новое значение  [todo_1]:
        [...tasks[todo_1], // опять делаем копию тасок и  первого массива
            newTask, newTask1] // добавляем новый обьект

}
// add Task   title:'Bear' в [todo_2]   Задание 2
const updeteTask1 = {...tasks, [todo_2]: [...tasks[todo_2], newTask1]}
console.log(updeteTask)
console.log(updeteTask1)
const updeteTask3 = {...tasks, [todo_2]: [...tasks[todo_2], {id: 89, title: 'REACT'}, {id: 88, title: 'REDAX'}]}
console.log(updeteTask3)

//reduce
const nums = [1, 2, 3, 2, 4, 5, 5, 1, 6, 3]
let sum = 0


for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    console.log(sum)//21
}


console.log(nums.reduce((sum, el) => sum + el, [])) //27
console.log(nums.reduce((acc, el) => {
    if (el % 2 === 0) {
        acc.push(el)
    }
    return acc
}, []))
console.log(nums.reduce((acc, el) => {
    if (el % 2 === 0) {
        acc.push(el)
    }
    return acc
}, []))

const resString = nums.reduce((sum, el) => sum + el)
console.log(typeof resString)

const serhDubleValue = nums.reduce((acc, el) => {
    if (Object.keys(acc).includes(String(el))) {
        acc[el] = acc[el] + 1
    } else {
        acc[el] = 1
    }
    return acc
}, {})
console.log(serhDubleValue)


const stydent = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },

    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",


    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",

    },]


console.log(stydent.reduce((realts, st) => {
    realts[st.id] = st
    return realts
}, {}))

//
// const stydentObject ={
// 1:{
//         id: 1,
//         name:'Leanne Graham',
//         username:'Bret',
//         email:'Sincere@april.biz'
// },
// 2:{
//         id: 2,
//         name:'Ervin Howell',
//         username:'Antonette',
//         email:'Shanna@melissa.tv'
// }
// 3:{
//         id: 3,
//         name:'Clementine Bauch',
//         username:'Samantha',
//         email:'Nathan@yesenia.net'
// }
//
//
// }








