
const Pad = require('../Models/Pad');
const helper = require('../helper');
const path = require('path');
module.exports = {

    index(req, res) {
        let urlParams = helper.urlToDotPath(req.params[0]);
        const pad = new Pad();
        let p = pad.find(urlParams);

        if (!p) {
            p = pad.save(urlParams, 'This is Empty')
        }
        res.json(p);
    },

    render(req, res) {
        let urlParams = helper.urlToDotPath(req.params[0]);
        const pad = new Pad();
        let p = pad.find(urlParams);
        if (!p) {
            p = pad.save({ path: urlParams, content: 'This is Empty' });
        }
        res.render(path.resolve(__dirname, '..') + '/public/index.html', { content: p.content });

    }
}