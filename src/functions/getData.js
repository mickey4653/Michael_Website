const fs = require('fs');

exports.handler = async function(){
    try{
        const data = fs.readFileSync('../data/personal_info.json', 'utf-8');
        const jsonData = JSON.parse(data);
        return{
            statusCode: 200,
            body: JSON.stringify(jsonData),
            Headers:{
                'Content-Type': 'application/json',
            },
        };
    }catch(error){
        return {
            statusCode: 500,
            body: JSON.stringify({error: 'internal Server Error'}),
        };   
    }
};