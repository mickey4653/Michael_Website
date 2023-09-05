const fs = require('fs');
const path = require('path');

exports.handler = async (event,context) => {
    try{
        const dataPath = path.join(__dirname, '/data/personal_info.json');
        const data = fs.readFileSync(dataPath, 'utf-8');
        const jsonData = JSON.parse(data);
        return{
            statusCode: 200,
            body: JSON.stringify(jsonData),
        };
    }catch(error){
        return {
            statusCode: 500,
            body: JSON.stringify({error: 'internal Server Error'}),
        };   
    }
};