function removeBlanks(str){
    let tmp = "";

    // Iterate through string
    for(let i = 0; i < str.length; ++i){
        // Add characters from string that are not spaces to the tmp variable
        if(str[i] !== " "){
            tmp += str[i];
        }
    }

    str = tmp;
    return str;
}

function getDigits(str){
    let tmp = "";

    for(let i = 0; i < str.length; ++i){
        if(!isNaN(str[i])){
            tmp += str[i];
        }
    }

    return tmp;
}

function acronym(str){
    // Split the string into a list of words
    let words = str.toUpperCase().split(' ');
    // Create variable to hold acronym
    let acr = "";

    for(let i = 0; i < words.length; i++){
        
        if(words[i]){
            // Create array variable for letters of word
            let word = words[i].split('');
            // Add first letter of each word to the acr string
            acr += word[0];
        }
    }

    return acr;
}

function countNonSpaces(str){
    let count = 0;
    // Iterate through string
    for(let i = 0; i < str.length; ++i){
        // Count only non-space characters
        if(str[i] !== ' '){
            count++;
        }
    }

    return count;
}

function removeShorterStrings(arr, num){
    // Create empty new_arr array
    let new_arr = [];
    // Create index to iterate through new_arr
    let index = 0;

    // Iterate through arr parameter
    for(let i = 0; i < arr.length; i++){
        // If element's length is greater than or equal to the num parameter
        // add element to new_arr
        if(arr[i].length >= num){
            // Using an index to iterate through new_arr since built-ins like push
            // are not allowed
            new_arr[index] = arr[i];
            index++;
        }
        
    }

    return new_arr;
}

console.log(removeBlanks("Pl ayTha tF u nkyM usi c"));

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

console.log(acronym(" there's no free lunch - gotta pay yer way. "));

console.log(countNonSpaces("Hello World !"));

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) );