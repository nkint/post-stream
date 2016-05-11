'use strict';
const fs = require('fs');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const pump = require('pump');
const app = express();
app.use(bodyParser.raw());
app.post('/foo', function (req, res) {
    console.log('****** post on /foo: ', req.body);
    const output_filename = './output____video.mp4';
    const output = fs.createWriteStream(output_filename);
    pump(req, output, (err) => {
        console.log('****** end on pump receive: ', err);
        return res.status(200).json('OK');
    });
});
const port = 3001;
app.listen(port, (err) => console.log('****** error on starting server:', err));
const options = {
    timeout: 30000,
    url: 'http://localhost:3001/foo',
};
const TEST_FILE = './SampleVideo_1280x720_1mb.mp4';
pump(fs.createReadStream(TEST_FILE), request.post(options, (err, res, body) => console.log('****** end post input:', err, body)), (err) => console.log('****** end on pump input:', err));
//# sourceMappingURL=index.js.map