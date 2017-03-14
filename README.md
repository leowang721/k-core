# k-core

[![Build Status](https://travis-ci.org/leowang721/k-core.svg?branch=master)](https://travis-ci.org/leowang721/k-core)
[![Coverage Status](https://coveralls.io/repos/github/leowang721/k-core/badge.svg?branch=master)](https://coveralls.io/github/leowang721/k-core?branch=master)

babel is required now, 'cause using import & export.

~~If in pure Node.js, then version >= 7.6.0 is required.~~

A simple lib for k-* to use

1. limited core libs
2. Workflow, a simple Class for asynchronous control flow 
3. several customed common methods

## Promise

Using bluebird, uncontrolled version(^3.5.0)

[Github](https://github.com/petkaantonov/bluebird)
[Get_Started](http://bluebirdjs.com/docs/getting-started.html)
[API](http://bluebirdjs.com/docs/api-reference.html)

## EventTarget

A simple Class to replace events.EventEmitter, which can be used in both node.js and browsers.

Using eventemitter3, uncontrolled version(^2.0.2)

[Github](https://github.com/primus/eventemitter3)
[API](http://nodejs.org/api/events.html)


I enjoyed using the `fire` api instead of `emit`, so I just add it.

## Workflow
A simple Class for asynchronous control flow.

Just like koa's middleware control.

but in async/await version.