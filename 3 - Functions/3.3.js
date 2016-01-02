function countChar(s, c){
    count = 0;
    for(i = 0; i < s.length; i++){
        if (s.charAt(i)==c) count++   
    }
    return count;
}

function countBs(s){
    return countChar(s, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));