//Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

function findUserByUsername(arr, string){
    return arr.find(function(e){
        return e.username === string;
    })
} 
//Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.
// 

function removeUser(arr, string){
    let deletedIdx = arr.findIndex(function(e){
        return e.username === string;
    })
    if (deletedIdx === -1) return;
    let deletedUser = arr[deletedIdx];
    arr.splice(deletedIdx, 1)
    return deletedUser;
} 

