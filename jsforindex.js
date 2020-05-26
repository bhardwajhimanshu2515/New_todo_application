var addtaskbutton=document.getElementById('add-task'); /* fetching add-task button */
var tasktitlebox=document.getElementById('task-title-input');
var taskdescriptionbox=document.getElementById('task-description-input');
var taskdealinebox=document.getElementById('task-deadline-input');
var todoitems=document.getElementById('todo-items');
var task=[];
addtaskbutton.addEventListener('click',function(e){
    e.preventDefault();
    var newtask={
        title:tasktitlebox.value,
        description:taskdescriptionbox.value,
        deadline:taskdealinebox.value
    };
    task.push(newtask);
    renderlist();
    tasktitlebox.value="";
    taskdescriptionbox.value="";
    taskdealinebox.value="";
});
function deleteit(index){
    var newlist=[];
    for(var i=0;i<task.length;i++){
        var single=task[i];
        if(i!=index){
            newlist.push(single);
        }
    }
    task=newlist;
    renderlist();
};
function editit(index){
    var titleforedit=tasktitlebox.value;
    var descriptionforedit=taskdescriptionbox.value;
    var deadlineforedit=taskdealinebox.value;
    tasktitlebox.value=task[index].title;
    taskdescriptionbox.value=task[index].description;
    taskdealinebox.value=task[index].deadline;
    task[index].title=titleforedit;
    task[index].description=deadlineforedit;
    task[index].deadline=deadlineforedit;
    var newlist=[];
    for(var i=0;i<task.length;i++){
        var single=task[i];
        if(i!=index){
            newlist.push(single);
        }
    }
    task=newlist;
    renderlist();

}
function completeit(index){
    task[index].title=task[index].title.strike();
    task[index].description=task[index].description+" is completed on "+task[index].deadline;
    renderlist();
}
function create(single,i){
    var html ='\
        <div id="single">\
        <div id="task">\
            <div id="task-title" style="margin-bottom:5px;color:gainsboro;">'+task[i].title+'</div>\
            <div id="task-description" style="margin-bottom:5px;color:gainsboro;">'+task[i].description+'</div>\
            <div id="task-deadline" style="color:gainsboro;">'+task[i].deadline+'</div>\
        </div>\
        <div id="links">\
            <div><a href="#" id="edit-button" onclick=editit('+i+')>Edit</a></div>\
            <div><a href="#" id="delete-button" onclick=deleteit('+i+')>Delete</a></div>\
            <div><a href="#" id="complete-button" onclick=completeit('+i+')>MarkAsComplete</a></div>\
        </div>\
    </div>';
    return html;
}
function renderlist(){
    var res="";
    for(var i=0;i<task.length;i++){
        var single=task[i];
        var html=create(single,i);
        res+=html;
    }
    todoitems.innerHTML=res;
};

