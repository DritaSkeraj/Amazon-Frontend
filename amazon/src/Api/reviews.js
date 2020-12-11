export const getAllReviews = async (productID)=>{
   try {
    const url =  `http://localhost:3001/reviews/${productID}`
    const response = await fetch(url,{
        method:"get",
    })
    return await response.json()
       
   } catch (error) {
       console.log(error)
   }

}

export const addReview = async(productID,body)=>{

    try {
        const url =  `http://localhost:3001/reviews/${productID}`
        const response = await fetch(url,{
            method:"Post",
            body: JSON.stringify(body),
            headers:{
                "Content-Type": "application/json",
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export const editReview = async(id,body) =>{

    try {
        const url =  `http://localhost:3001/reviews/${id}`
        const response = await fetch(url,{
            method:"Put",
            body: JSON.stringify(body),
            headers:{
                "Content-Type": "application/json", 
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export const deleteReview = async(id)=>{

   try {
    const url =`http://localhost:3001/reviews/${id}`
    const response = await fetch(url,{
        method:"Delete",
    })

   } catch (error) {
       console.log(error)
   }
}