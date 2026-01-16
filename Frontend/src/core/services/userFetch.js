export async function getUsers(){
     try {
      const token = localStorage.getItem("token");
        const url = `http://localhost:3000/api/user`;
        const options = {
            method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
        const res = await fetch(url, options);
        console.log(res)
        if (!res.ok) throw new Error("Fallo al realizar la petición");
        const response = await res.json();
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getUserUsingId(idUser){
  try {
        const url = `http://localhost:3000/api/user/${idUser}`;
        const options = {
            method: "GET",
      headers: {
        "Content-Type": "application/json",
        
      },
    };
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Fallo al realizar la petición");
        const response = await res.json();
        return response;
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function editUser(idUser, newUserData, token){
     try {
        const url = `http://localhost:3000/api/user/edit/${idUser}`;
        const options = {
            method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({newUserData}),
    };
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Fallo al realizar la petición");
        const response = await res.json();
        return response;
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function deleteUserSelected(idUser, token){
     try {
        const url = `http://localhost:3000/api/user/delete/${idUser}`;
        const options = {
            method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };  
        
        const res = await fetch(url, options);
        
        if (!res.ok) throw new Error("Fallo al realizar la petición");
        const response = await res.json();
        
        return response;
    } catch (error) {
        console.log(error)
        return null
    }
}