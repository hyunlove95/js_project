// 랜덤값 계산이 귀찮지만, 앞으로 자주 사용될 가능성이 높으니
// 함수로 정의해놓고 재사용
function getRandom(n){
    return parseInt(Math.random()*n);  // 0~n미만의 정수 반환
}

// 범위가 있는 랜덤함수
function getRandomWithRange(min, max){
    var result = min+parseInt(Math.random()*(max-min+1));
    return result;
}

/*-----------------------------------------------------------------
                    게임 개발시 사용될 충돌 체크함수
-----------------------------------------------------------------*/
function collisionCheck(me, you){
    let result1 = (me.y + me.height >= you.y) && (me.x+me.width >= you.x);  // 북서쪽
    let result2 = (me.y <= you.y + you.height) && (me.x+me.width >= you.x);  // 남서쪽
    let result3 = (me.y + me.height >= you.y) && (me.x <= you.x + you.width);  // 북동쪽
    let result4 = (me.y <= you.y + you.height) && (me.x+me.width >= you.x);  // 남동쪽

    return result1 && result2 && result3 && result4;
}

function collisionCheck2(me, you, gap){ // perfect +=7      great +-14
    let result1 = (me.y + me.height >= you.y - gap) && (me.x+me.width >= you.x);  // 북서쪽
    let result2 = (me.y <= you.y + you.height + gap) && (me.x+me.width >= you.x);  // 남서쪽
    let result3 = (me.y + me.height >= you.y - gap) && (me.x <= you.x + you.width);  // 북동쪽
    let result4 = (me.y <= you.y + you.height +gap) && (me.x+me.width >= you.x);  // 남동쪽

    return result1 && result2 && result3 && result4;
}
/*-----------------------------------------------------------------
                    날짜 관련 문자열 처리
                날짜 두자리 수로 처리하는 함수
-----------------------------------------------------------------*/

function getDateString(n){
    // n이 10보다 작으면 앞에 '0' 문자열 부착
    let str = n;
    if(n<10){
       str = "0"+str;
    }
    return str;
}