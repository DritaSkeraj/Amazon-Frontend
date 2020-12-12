

export const UploadMyPhoto = async(id,formD)=>{

    try {
        const response = await fetch(
          `http://localhost:3001/products/${id}/upload`,
          {
            method: "POST",
            body:formD,
            
           
           
          }
        );
        if (response.ok) {
          alert("uploaded");
        }
      } catch (error) {
        console.log(error);
      }
}

