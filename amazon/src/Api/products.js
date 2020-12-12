export const getAllProducts = async ()=>{
        try {
            const url = "http://localhost:3001/products"
            const response = await fetch(url,{
                method:"get",
            })
            return await response.json()
            
        } catch (error) {
            console.log(error)
            
        }
};



export const addProduct = async(body) =>{

    try {
        const url = "http://localhost:3001/products"
        const response = await fetch(url,{
            method:"POST",
            body: JSON.stringify(body),
            headers:{
                "Content-Type": "application/json",
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        
    }
}

export const EditProduct = async(id,body)=>{
    try {
        const url = `http://localhost:3001/products/${id}`
        const response = await fetch (url,{
            method:"Put",
            body:JSON.stringify(body),
            headers:{
              "Content-Type": "application/json",
            }
        })
        return response

        
    } catch (error) {
        console.log(error)
    }


}

export const DeletePruduct = async (id) =>{

    try {
         const url = `http://localhost:3001/products/${id}`
        const response = await fetch(url,{
            method:"Delete",
          
        })
        return await response.json()

        
    } catch (error) {
        console.log(error)
    }
}