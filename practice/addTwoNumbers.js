// var addTwoNumbers = function(l1, l2) {
//     let l1Inverse = []
//     let l2Inverse = []

//     for (let n = l1.length - 1; n >= 0; n--) {
//         l1Inverse.push(l1[n])
//     }
//     for (let j = l2.length - 1; j >= 0; j--) {
//         l2Inverse.push(l2[j])
//     }
//     const joinl1 = l1Inverse.join('')
//     const joinl2 = l2Inverse.join('')
//     const sum = Number(joinl1) + Number(joinl2)

//     const resultArray = Array.from(sum.toString()).map(Number);
//     let inverseResultArray = []
//     for (let m = resultArray.length-1; m >=0; m--) {
//         inverseResultArray.push(resultArray[m])
//     }

//     console.log(inverseResultArray)
// };

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined? null : next)
}

let addTwoNumbers = function(l1, l2) {
    let l1_arr = []
    let l2_arr = []

    // First extract all numbers in LinkedList one and two in array format
    while(l1) {
        l1_arr.push(l1.val);
        l1 = l1.next;
    }

    while(l2) {
        l2_arr.push(l2.val)
        l2 = l2.next
    }

    // reverse those extract arrays and join them, then parse them in BigInt
    let num1 = BigInt(l1_arr.reverse().join(''))
    let num2 = BigInt(l2_arr.reverse().join(''))

    // once you have the  final summed number, simple convert that into array then parse it in int
    let num3 = num1 + num2
    let num3_arr = num3.toString().split('').reverse().map(n => parseInt(n))

    // create your LinkedList
    let newLl = new ListNode()
    let newLlObj = newLl;
    for(let n = 0; n < num3_arr.length; n++) {
        newLlObj.next = new ListNode(num3_arr[n])
        newLlObj = newLlObj.next
    }

    console.log(newLl.next)
}

addTwoNumbers([2,4,3], [5,6,4])
addTwoNumbers([0], [0])
addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])