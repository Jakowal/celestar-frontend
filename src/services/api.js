export async function getAllCreatures() {
    return fetch("http://localhost:7071/api/GetCreatures")
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