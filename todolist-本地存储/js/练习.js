$(function(){
    load();
    //添加todo事件
$('#title').on('keydown',function(e){
    if(e.keyCode === 13){
        if($('#title').val() == ''){
            alert('what are you want to do tomrrow?');
        }else{
            console.log(11); 
           var date = getDate();
           date.push({things : $(this).val() , done : 0})
           saveDate(date);
           console.log(date);
           load();
           $(this).val('');
       }
   }
        
})
// 点击勾选事件
$('ul , ol').on('click','input',function(){
    var date = getDate();
    var index = $(this).siblings('a').attr('id');
    date[index].done = $(this).prop('checked');
    saveDate(date);
    load();
})
// 点击删除事件
$('ul,ol').on('click','a',function(){
    var date = getDate();
    var index = $(this).attr('id');
    date.splice(index,1) ;  
    // splice('开始位置索引','删除个数','替换元素')
    saveDate(date);
    load();
})



//读取本地数据
function getDate() {
    var data = localStorage.getItem("todolist");
    if (data !== null) {
        // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
        return JSON.parse(data);
    } else {
        return [];
    }
}
// 保存本地存储数据
function saveDate(date) {
    localStorage.setItem("todolist", JSON.stringify(date));
}
function load(){
    var date = getDate();
    var todocont = 0;
    var donecont = 0;
    $('ul , ol').empty();
    $.each(date , function(i , n){
        if(n.done){
            $('ul').prepend(" <li><input type='checkbox' checked='checked'><p>"+ n.things +"</p><a href='javascript:;' id = "+ i +"></a></li> ");

            donecont++;
        }else{
            $('ol').prepend(" <li><input type='checkbox' ><p>"+ n.things +"</p><a href='javascript:;' id = "+ i +"></a></li> ")
            todocont++
        }
    })
    $('#todocount').html(todocont);
    $('#donecount').html(donecont);
    
}







})