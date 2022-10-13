var numArr = [2, 5, 100]
var nameArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// var peopleArr = [
//     {
//         name: "Angelina jolie",
//         age: 80
//     },

//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age:5
//     },
//     {
//         name:"Kanye West",
//         age: 16
//     },
//     {
//         name:"Bob Ziroll",
//         age:100,
//     }
// ]


const mult = numArr.map(function(num) {
    return num * 2
})
console.log(mult)

const string = numArr.map(function(num) {
    return JSON.stringify(num)
})
console.log(string)

function capitalizeNames(nameArr) {
    let caps1 = x => x[0].toUpperCase() + x.slice(1).toLowerCase()
    let caps2 = nameArr.map(caps1)
    return caps2
}
console.log(capitalizeNames(nameArr))

function namesOnly () {
    const arr = [
        {
            name: "Angelina jolie",
            age: 80
        },
    
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age:5
        },
        {
            name:"Kanye West",
            age: 16
        },
        {
            name:"Bob Ziroll",
            age:100,
        }
    ]
    const namesOnly = arr.map(x => x.name)
    console.log(namesOnly)  
}
namesOnly()

function matrix () {
    const arr = [
        {
            name: "Angelina jolie",
            age: 80
        },
    
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age:5
        },
        {
            name:"Kanye West",
            age: 16
        },
        {
            name:"Bob Ziroll",
            age:100,
        }
    ]

  const ageReq = arr.map(arr => arr.age >= 18 ? arr.name + " can go to the Matrix" : arr.name + " can NOT go to the Matrix")  
  console.log (ageReq)    
    
}
matrix()

function readyToPutInTheDom () {
    const arr = [
        {
            name: "Angelina jolie",
            age: 80
        },
    
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age:5
        },
        {
            name:"Kanye West",
            age: 16
        },
        {
            name:"Bob Ziroll",
            age:100,
        }
    ]
    const dom = arr.map(function (arr) {
        return "<h1>" + arr.name + "<h1>" + "<h2>" + arr.age + "<h2>"
    })
    console.log(dom)
}
readyToPutInTheDom()