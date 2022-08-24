// Code your solution in this file
let n = 50;
function distanceFromHqInBlocks(n){
    return Math.abs(n- 42);
}

function distanceFromHqInFeet(n) {
    return distanceFromHqInBlocks(n) * 264;
}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (Math.abs(destination - start)* 264)
}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const Y = distanceTravelledInFeet(start, destination)
    if (Y <= 400){
        return 0;
    }
    else if (Y >= 400&& Y <= 2000 ){
        return 0.02 * (Y - 400);
    }
    else if (Y > 2000 && Y < 2500){
        return 25;
    }
    else (Y > 2500)
        return 'cannot travel that far';
}
