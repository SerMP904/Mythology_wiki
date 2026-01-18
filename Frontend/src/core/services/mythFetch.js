export const getAllMyths = async () => {
    try {
        const url = "http://localhost:3000/api/myths/";
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        const res = await fetch(url, options);
        if (!res.ok) {throw new Error("Fallo al recibir la petición")};
        const myths = await res.json();
        console.log(myths.data)
        return myths.data;
    } catch (error) {
        console.log(error)
    }
}

export const getMythsFromPantheon = async (pantheon) => {
    try {
        const url = `http://localhost:3000/api/myths/${pantheon}`;
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        const res = await fetch(url, options);
        if (!res.ok) {throw new Error("Fallo al recibir la petición")};
        const myths = await res.json();
        console.log(myths.data)
        return myths.data;
    } catch (error) {
        console.log(error)
    }
}