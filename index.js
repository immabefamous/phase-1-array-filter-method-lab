// Code your solution here
function findMatching(array, name) {
    let match = array.filter(element => element.toLowerCase() == name.toLowerCase())
    return match
}

function fuzzyMatch(array, name) {
    let match = array.filter(element => element.indexOf(name) == name.indexOf(name));
    return match
}

function matchName(array, str) {
    let match = array.filter(element => element.name == str)
    return match
}