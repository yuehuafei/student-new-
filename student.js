/**
 * Created by xxx on 17-7-11.
 */
 var stuScoArr=[["张三","95","80","75","80"],["李四","85","80","70","90"]];
function calculAndExpan(stuScoArr) {
    for(var i=0;i<stuScoArr.length;i++)
    {   var avg=0,sum=0;
        for(var j=1;j<stuScoArr[i].length;j++)
        {
            sum+=parseInt(stuScoArr[i][j]);
        }
        avg=sum/4;
        stuScoArr[i].push(avg);
        stuScoArr[i].push(sum);
    }
}
function avg(stuScoArr){
    var classAvgSco,sum=0;
    for(var i=0;i<stuScoArr.length;i++){
        sum+=parseFloat(stuScoArr[i][5]);
    }
    classAvgSco=sum/stuScoArr.length;
    return classAvgSco;
}
function mid(stuScoArr) {
    var classmidSco=0;
    var arr=[];
    for(var i=0;i<stuScoArr.length;i++)
    {
        arr.push(stuScoArr[i][6]);
    }
    arr.sort();
    if(arr.length%2==1)
    {
        classmidSco=arr[parseInt((arr.length-1)/2)];
    }
    else classmidSco=(arr[arr.length/2]+arr[arr.length/2-1])/2;
    return classmidSco;
}
function print(stuScoArr,classAvgSco,classmidSco) {
    console.log("成绩单");
    console.log("姓名  |"+"数学 |"+"语文|"+"英语 |"+"编程 |"+"平均分  |"+"总分  |");
    for(var i=0;i<stuScoArr.length;i++)
    {   var str="";
        for(var j=0;j<stuScoArr[i].length;j++)
        {
            str+=stuScoArr[i][j]+"  |";
        }
        console.log(str);
    }
    console.log("全班总平均分："+parseFloat(classAvgSco));
    console.log("全班总分中位数："+parseFloat(classmidSco));
}
calculAndExpan(stuScoArr);

print(stuScoArr,avg(stuScoArr),mid(stuScoArr));