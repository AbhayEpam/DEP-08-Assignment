/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while( left < right ) {
        let minHeight = Math.min( height[ left ] , height[ right ] );
        let dif = Math.abs ( left - right )
        if( maxArea <  ( minHeight * dif ) ) {
            maxArea = minHeight * dif 
        }
       if( height[ left ] <  height[ right ] ) {
            left++
       }else{
            right--;
       }
    }

    return maxArea
};