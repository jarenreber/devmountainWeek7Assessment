const blehZero = blehArray => {
    let bleh = false
    for (let i = 0; i < blehArray.length; i++){
        for (let j = 0; j < blehArray.length; j++) {
            if (blehArray[i] + blehArray[j] === 0){
                bleh = true
                return bleh
            } else bleh = false
        }
    }
    return bleh
}

// console.log(blehZero([1,2,34,4,5,56,7,-7]))
// console.log(blehZero([1,2,34,4,5,56,7]))

//time O(n^2) ^^^
// space O(1)

const blehString = bleh => {
    let newBleh = new Set([])
    for (let i = 0; i < bleh.length; i++) {
      newBleh.add(bleh[i])
    }

    return newBleh.size === bleh.length

}


// console.log(blehString('monday'))   
// console.log(blehString('moonday'))   

// time O(n)  ^^^
// space O(n)

const isBleh = bleh => {
    let blehphabet = /([a-z])(?!.*\1)/g;
    let lowerBleh = bleh.toLowerCase()
    let blehs = lowerBleh.match(blehphabet)
    if (blehs.length === 26) {
        return true
    } else return false
}

// console.log(isBleh('The quick brown fox jumps over the lazy dog!'))
// console.log(isBleh('The quick brown fox jumps over the lazy og!'))

// time O(n) ^^^
// space O(n)

const longestBleh = blehArray => {
    let blehLongest = 0
    for (let i = 0; i < blehArray.length; i++) {
        if (blehArray[i].length > blehLongest){
            blehLongest = blehArray[i].length 
        }
    }
    return blehLongest
}

console.log(longestBleh(["hi", "hello"]))

// time O(n)
// space O(n)