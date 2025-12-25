export const Addtoserver = async (task, date)=>{
    const Response = await fetch('http://localhost:3000/todo/items', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({task, date})
    })
    return Response.json()
}