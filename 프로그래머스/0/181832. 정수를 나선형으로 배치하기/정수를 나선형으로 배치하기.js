function solution(n) {

    var answer = Array.from({ length: n }, () => new Array(n).fill(0));

    
    let num=1 
    let top=0, bottom=n-1, left=0, right=n-1; 
    while(top<=bottom && left <=right){
        for (let i=left; i<=right; i++){
            answer[top][i] =num++;
            
        }
        top++;
        for (let i=top; i<=bottom; i++){
            answer[i][right]=num++;
        }
        right--;
        if (top <= bottom) {
        for (let i=right; i>=left; i--){
            answer[bottom][i] = num++;
        }
        bottom--;
        }
         if (left <= right) {
        for (let i = bottom; i >= top; i--){
            answer[i][left] = num++;
        }
        left++;
         }
    }
    
  return answer;
}