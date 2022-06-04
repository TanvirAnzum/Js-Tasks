function formatDuration(seconds) {
  if (seconds == 0) return "now";
  else {
    let hour, min,years, days;

    if(seconds/31536000 >= 1) {
      years = parseInt(seconds/31536000);
      seconds = seconds - years * 31536000;
    }
    if(seconds/ 86400 >= 1) {
      days = parseInt(seconds / 86400);
      seconds = seconds - days * 86400;
    }
    if (seconds / 3600 >= 1) {
      hour = parseInt(seconds / 3600);
      seconds = seconds - hour * 3600;
    }
    if (seconds / 60) {
      min = parseInt(seconds / 60);
      seconds = seconds - min * 60;
    }
    return format(seconds, min, hour,days,years);
  }
}

function format(s, m, h,d,y) {
  let count = 0;
  ans = "";
  if (y != 0 && y!=undefined) {
    if(y==1) ans += y + " year,";
    else ans += y + " years,";
    count++;
  }
  if (d != 0 && d!=undefined) {
    if(d==1) ans += d + " day,";
    else ans += d + " days,";
    count++;
  }
  if (h != 0 && h!=undefined) {
    if(h==1) ans += h + " hour,";
    else ans += h + " hours,";
    count++;
  }
  if (m != 0 && m!=undefined) {
    if(m==1) ans += m + " minute,";
    else ans += m + " minutes,";
    count++;
  }
  if (s != 0 && s!=undefined) {
    if(s==1) anse += s + " second,";
    else ans += s + " seconds,";
    count++;
  }

  let result = '';
  for(let i=0;i<ans.length;i++) {
     if(ans[i]==',') {
        if(count>3) {
          result += ', ';
          count--;
        } 
        else if(count == 3) {
             result += ', ';
             count--;
         }
         else if(count == 2) {
             result += ' and ';
             count--;
         }
         else {
            break;
         }
     }
     else result += ans[i];    
  }

  return result;
}

console.log(formatDuration(36624565));
