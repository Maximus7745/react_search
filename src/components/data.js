

const loadData = async() =>{
    let results = [];
    let response = await fetch("https://swapi.dev/api/people/");
    let responseJson = await response.json();
    results.push(...responseJson["results"]);
    while(responseJson["next"] != null){
        response = await fetch(responseJson["next"]);
        responseJson = await response.json();
        results.push(...responseJson["results"]);
    }

    return results;
}


export default loadData;
