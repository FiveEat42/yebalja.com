const http = require('http')
const https = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const express = require('express');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const path = require('path');

var port1 = 80;
var port2 = 443;

const option = {
  ca: fs.readFileSync('/etc/letsencrypt/live/www.yebalja.com/fullchain.pem'),
  key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/www.yebalja.com/privkey.pem'), 'utf8').toString(),
  cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/www.yebalja.com/cert.pem'), 'utf8').toString(),
};


//80port not uses https so it uses http object
app.prepare().then(() => {
  http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    handle(req, res, parsedUrl)
  }).listen(port1, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:'+port1)
  })



//443 port uses https object.
  https.createServer(options, (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    handle(req, res, parsedUrl)
  }).listen(port2, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:'+port2)
  })

})