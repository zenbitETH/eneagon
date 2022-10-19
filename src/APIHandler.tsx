export function getAllContributors(url){
   const data = fetch('../api/contributors', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(url)
    }).then(response =>{
        if(response.ok){
            return response.json()
        }
    }).then(response =>{ 
        return response
    })

    return data
}

export function getMilestones(url) {
    const data = fetch("../api/milestones", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(url)
      }).then(response => {
        if(response.ok){
            return response.json()
        }
      }).then(response => (response))

      return data
}

export function getRepository(url) {
    const data = fetch('../api/repository', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(url)
    }).then(response =>{
        if(response.ok){
            return response.json()
        }
    }).then(response =>{ 
        return response
    });
    return data;
}

export function getAllLanguages(url) {
    const data = fetch("../api/languages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(url)
      }).then(response =>{
        if(response.ok){
            return response.json()
        }
        }).then(response =>{ 
            return response
     });

     return data;
}

export function getProject(){
    const data = fetch('../api/projects')
        .then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(response => {
            return response
        })
    return data;
}