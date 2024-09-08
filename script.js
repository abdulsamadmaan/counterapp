//document.getElementById("count-el").ineertext = 5

// myAge = 23
//console.log(myAge)

//let humanage = 3
//let avgmydogage = 2
//mydogage = humanage * avgmydogage
//console.log(mydogage)

//let count = 50
//count = count + 50
//console.log(count)

//let count1= count = count - 25
//console.log(count)

// let count2 = count - 5
// console.log (count2)


// Create Function for the increment

// function increment(){
//    // console.log("Button is clicked")
// }

// function number(){
//     const num = 42;
//     // console.log(num)
// }

// number()

// function laps(){

//     let lap1 = 34
//     let lap2 = 10
//     let lap3 = 20

//     result = lap1 + lap2+ lap3

//     console.log (result)

// }

// laps()


// let lap_start = 0

// //let i = 0

// function lap_incre(){

//     console.log(lap_start)

// }

 
// lap_incre()
// //console.log (lap_start);


let count = 0
let countEl = document.getElementById("count-el")
function countincre(){

    count = count + 1
    countEl.innerText = count
    console.log(countEl)

}