const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   
    { taskName: "Attend meeting", completed: false, priority: 3 },   
    { taskName: "Fix bug", completed: false, priority: 1 },  
     { taskName: "Update website", completed: true, priority: 4 } ];

const highPriority=tasks.find((item)=>{ return item.priority<3});
console.log(highPriority);

const UnfinishedTask=tasks.findIndex((item)=>{ if(!item.completed) return item});
console.log(UnfinishedTask)

const no_of_tasks= tasks.reduce((acc,currValue)=>{return currValue.completed?acc+1:acc},0);
console.log(no_of_tasks);