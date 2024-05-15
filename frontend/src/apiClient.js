
export const auth = async (user) => {
 
    const response = await fetch(`/api/auth`, {
        method:'POST',
        credentials: "include",
        headers:{
            "Content-Type":"application/json",
            
        },
        body : JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Error authenticating in our database");
    }
    console.log(response)
    return response.json();
  };

  export const addTutor = async(data)=>{
   
    const response = await fetch(`/api/tutor`, {
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
      

    })
    const responseBody = await response.json()
    if(!response.ok)
    {
      throw new Error(responseBody.message)
    }
    
    
  }

  export const fetchTutors = async ()=>{
    const response = await fetch(`/api/tutor/allTutors`)
    // const responseBody = await response.json()
    if(!response.ok)
    {
      throw new Error("Error fetching tutors")
    }
    const responseBody = await response.json()
    return responseBody
  }

  export const fetchTutorsBasedOnSearch =  async(searchParams)=>{
    console.log(searchParams)
    const queryParams = new URLSearchParams()
    queryParams.append("language", searchParams.language ? searchParams.language.value : "")
    queryParams.append("duration", searchParams.duration ? searchParams.duration.value : "")
    queryParams.append("price",searchParams.price ?  searchParams.price.value : "")

    const response = await fetch(`/api/tutor/tutorsBasedOnSearch?${queryParams}`)

    if(!response.ok)
    throw new Error("Error fetching tutors based on search")

    return response.json()
  }
