const postcssjitprops = require("postcss-jit-props");
const OpenProps = require ("open-props");

module.exports ={
    Plugins:[
        postcssjitprops(OpenProps),
        require('autoprefixer')
    ]
};