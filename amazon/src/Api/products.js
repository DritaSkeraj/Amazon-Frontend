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
            method:"Post",
            headers:{
                "Content-Type": "application/json",
            }
        })
        return response
    } catch (error) {
        console.log(error)
        
    }
}