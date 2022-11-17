
export const getCompetionsService = () => {
    return fetch('http://localhost:9000/competitions')
        .then(response => response.json())
        .catch(err => console.error(err)); 
}
