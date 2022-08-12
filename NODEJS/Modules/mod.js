console.log("This is Modules ");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports = average;
// for creating multiple exports
module.exports = {
    avg : average,
    name : "Prajwal",
    repo : "GitHub"
}