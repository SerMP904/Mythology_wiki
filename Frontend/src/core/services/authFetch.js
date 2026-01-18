
export async function getData(email, password) {
    try {
        const url = "http://localhost:3000/api/auth/login";
        const options = {
            method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Fallo al realizar la petición");
        const response = await res.json();
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function createNewUser(name, username, email, password){
  try {
    const url = "http://localhost:3000/api/auth/signup";
        const options = {
            method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
        })
        }
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Fallo al realizar la petición");
        const response = await res.json();
        return response;
  } catch (error) {
     console.log(error)
        return null
  }
}

export async function loginUsingToken() {
  try {
    const url = "http://localhost:3000/api/auth/loginWithToken";
    const token = localStorage.getItem("token");
        const options = {
            method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      }
    }
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Fallo al realizar la petición");
        const response = await res.json();
        return response;
  } catch (error) {
     console.log(error)
        return null
  }
} 

