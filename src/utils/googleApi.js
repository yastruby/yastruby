const Tabletop = require('tabletop');

async function getData() {
    return new Promise((resolve, reject) => {
            Tabletop.init(
            {
                key: 'https://docs.google.com/spreadsheets/d/1v6LSaDAhwCnCjPc7RAjK6DnXOvqwTp2h3RofxIErma8/edit?usp=sharing',
                callback: function(data, tabletop) { 
                    resolve(data)
                },
                simpleSheet: true
            })
        }
    )
}

export {
    getData
}