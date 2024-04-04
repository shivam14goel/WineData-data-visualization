/* function calculateMean(el) {
    console.log(el)
    let sum = 0;
    el.forEach((value) => {
        sum += value;
    })
    return sum / el.length;
} */

//for Median
/* function calculateMedian(sortedArray) {
    //let median= el[0];
    if (sortedArray.length % 2 === 0) {
        return  (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2] / 2);
    }
    return  sortedArray[(sortedArray.length - 1) / 2];
}

//for Mode
function calculateMode(sortedArray) {
    //let mode = el[0];
    let mostRepeatedElements = 0;
    let max = 0;
    let count = 0;
    for (let i=0; i<sortedArray.length-1; i+1){
        var current = sortedArray[i];
        var next = sortedArray[i+1];
        if(current === next){
            count++;
        }else{
            if(max < count){
                max = count;
                mostRepeatedElements = current;
            }
            count=0;
        }

    }
    return mostRepeatedElements;
} */

// export const mean = calculateMean();
// export const mode = calculateMode();
// export const median = calculateMedian();