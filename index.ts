'use strict';

import * as fs from 'fs';
import * as express from 'express';
import * as request from 'request';
import * as bodyParser from 'body-parser';
import pump = require('pump');

// windows 7 sp1 64-bit
// node 6.0 not working
// node 0.10.31 works

const app = express();
app.use(bodyParser.raw());


app.post('/foo', function (req, res) {
  console.log('****** post on /foo: ', req.body);

  const output_filename = './output____video.mp4';
  const output = fs.createWriteStream(output_filename);
  pump(
    req,
    output,
    (err) => {
      console.log('****** end on pump receive: ', err);
      return res.status(200).json('OK');
    }
  );
});

const port = 3001;
app.listen(
  port,
  (err) => console.log('****** error on starting server:', err)
);

const options = {
  timeout: 30000,
  url: 'http://localhost:3001/foo',
};

// request.post(options, (err, res, body) => {
//   console.log('***** end plain post:', err, body);
// });


const TEST_FILE = './SampleVideo_1280x720_1mb.mp4';
pump( // safe pipe
  fs.createReadStream(TEST_FILE),
  request.post(
    options,
    (err, res, body) => console.log('****** end post input:', err, body)
  ),
  (err) => console.log('****** end on pump input:', err)
);
