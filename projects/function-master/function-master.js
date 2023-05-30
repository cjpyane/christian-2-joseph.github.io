//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var news = Object.keys(object);
return news.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var hold = []; //create array to hold string values
    for(let key in object){ //loop through object
if(typeof(object[key]) === 'string'){// if any value of object is a string
   hold.push(object[key])//push that string into hold
}
        }
    return hold.join(" ")//join hold to match master.html
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) && typeof collection === 'object'){ //if collection is an array & typeof collection resolves in object return array
        return 'array' 
    }else if (!Array.isArray(collection) && typeof collection === "object"){//if collection is not an array & typeof collection resolves in object return object
return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var str = string.split(" ");//split string by space
    for(let i = 0; i < str.length; i++){//loop through string
    str[i] = str[i][0].toUpperCase() + str[i].slice(1)//edit string to cap. the first letter and slice to get the rest of the word
    }
    var fin = str.join(" ");//using join moves it to a new array a joins the string back together
    return fin

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
if(object.name.length > 0 && object.species.length > 0 ){//make sure object has name and species 
return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1);//take the first letter of species and name the add them with the rest of word using slice
}
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(object.noises && object.noises.length > 0){
    return object.noises.join(" ")
}else {
    return "there are no noises"
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if(string.includes(word) === true){//see if string includes word
    return true//is so return true
}else {
    return false//if not return false

}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if(object.friends){//check if object has friends obj,
    for(let i = 0; i < object.friends.length; i++){// if so loop through friends obj.
        if(object.friends[i] === name){// if any name in friends = name return true
            return true
        }
    } // else return false
}return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var haters = [];//create aray for people not found in friends
for(i = 0; i < array.length; i++){// iterate over whole array in object
var realOnes = false//declare realones false or else error?
for(let f = 0; f < array[i].friends.length; f++){//then iterate over all freinds in each array of the object
if(array[i].friends[f] === name){// if the name equels a name in the friends array realones = true
    realOnes = true
}
}
if(realOnes === false && array[i].name !== name){// if real ones is false and no variale in array equal name param. push non friends into haters arr.
    haters.push(array[i].name)
}
}
return haters// return holding arr.
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
var newObj = {...object};
newObj[key] = value;
return newObj
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i = 0; i < array.length; i++){
        if(object.hasOwnProperty(array[i])){
            delete object[array[i]];
        }
    
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let notdupes = [];
    for(let i = 0; i < array.length; i++){
        if(notdupes.includes(array[i]) === false){
            notdupes.push(array[i]);
        }
    }
    return notdupes
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}