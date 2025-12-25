export const Addtoserver = async (task, date)=>{
    const Response = await fetch('http://localhost:3000/todo/items', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({task, date})
    })
    const item = await Response.json()
    return mapServerItemToLocalItem(item)
}

const mapServerItemToLocalItem =(serveritems) =>{
    return{
        id: serveritems._id,
        name: serveritems.task,
        dueDate: serveritems.date,
        completed: serveritems.complete,
        createdAt: serveritems.Timestamp
    };
}