function charCout (a, str) {
    let cnt = 0;
    for (let i = 0; i<str.length; i++){
        if (a.includes(str[i].toLowerCase())){
            cnt ++;
        }
    }
    return cnt;
}