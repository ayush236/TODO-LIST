
//adding item to the server from frontend
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

// geting the item form the server to display the date
export const GetItemsFromServer = async () =>{
    const Response = await fetch('http://localhost:3000/todo/items')
    const item = await Response.json();
    return item.map(mapServerItemToLocalItem);
}

//marking the item on the server
export const MarkItemOnServer = async (id)=>{
    const Response = await fetch(`http://localhost:3000/todo/items/${id}/completed`,{
        method: "PUT"
    })
    const item = await Response.json();
    return mapServerItemToLocalItem(item);

}

//deleting the items from the server
export const deletetodoitem = async (id) => {
    const Response = await fetch(`http://localhost:300/todo/items/${id}`,{
        method: "DELETE"
    })
    const item = await Response.json();
    return item. _id;
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