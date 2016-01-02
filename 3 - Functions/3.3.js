function countBs(s){
    count = 0;
    for(i = 0; i < s.length; i++){
        if (s.charAt(i)=="B") count++   
    }
    return count;
}

function countChar(s, c){
    count = 0;
    for(i = 0; i < s.length; i++){
        if (s.charAt(i)==c) count++   
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));