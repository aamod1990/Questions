function totalBoxesRemoved{
    var count = 0;
    var arr = boxesInPiles;
    var prev = arr[0];
    var n = arr.length;
    for(var i=1;i<n;i++){
        if(arr[i] > prev){
            count += (arr[i]-prev);
            arr[i] = prev;
            prev = arr[i];
        }else{
            prev = arr[i]
        }
    }
    return count;
}