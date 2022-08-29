

export const 
BASE ='https://www.reddit.com/',
API=`${BASE}reddits.json?limit=100`,

TOPIC=(path)=>{
    return `${BASE+path}.json?limit=100`
}

 

