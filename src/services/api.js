function getURL() {
    return process.env.NODE_ENV === "development" ? "http://localhost:7071/api/" : "https://celestar-api.azurewebsites.net/api/"
}

export async function getAllCreatures() {
    return fetch(getURL() + "AllCreatures")
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Couldn\'t fetch monsters!')
            }
            return response.json()
        })
        .then(result => {
            return result
        })
}