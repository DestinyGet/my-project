window.addEventListener('load', function () {
    var input = document.querySelector('#title');
    input.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            if (this.value == '') {
                alert('what are you doing?')
            } else {
                var date = getDate();
                date.push({things:input.value,done:0});
                saveDate(date);
                load();
                



            }
        }
    })

    function saveDate(date) {
        localStorage.setItem('list', JSON.stringify(date));
    }

    function getDate() {
        var date = localStorage.getItem('list');
        if (date!= null) {
            return JSON.parse(date);
        } else {
            return [];
        }
    }
    function load(){
        var date = getDate();
        var ul = document.querySelector('ul');
        var ol = document.querySelector('ol');
        var donelist = '';
        var donecount = 0;
        var todolist = '';
        var todocount = 0;
        date.forEach(function(e,i){
            if(e.done == 0){
                todolist += "<li><input type='checkbox' checked='checked'><p>"+ e.things +"</p><a href='javascript:;' id = "+ i +"></a></li>";
            }else{
                donelist +="<li><input type='checkbox' checked='checked'><p>"+ e.things +"</p><a href='javascript:;' id = "+ i +"></a></li>"
            }
        });
        ul.innerHTML = todolist

    }


})