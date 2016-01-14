Ember Radar
===========

[![npm version](https://badge.fury.io/js/ember-radar.svg)](http://badge.fury.io/js/ember-radar)
[![Ember Observer Score](http://emberobserver.com/badges/ember-radar.svg)](http://emberobserver.com/addons/ember-radar)
[![Build Status](https://travis-ci.org/runspired/ember-radar.svg)](https://travis-ci.org/runspired/ember-radar)

Scroll, position, and in-Viewport tracking of any number of elements or virtual elements at > 60fps.

## About

Ember Radar is a highly optimized solution for tracking the position of thousands of elements and
items without breaking a sweat.  It supports both scrollable body and scrollable divs, and both
real and virtual elements.

In addition to tracking an element's X and Y position, it calculates an element's relative A and Y 
distance from the viewport (in "viewport units"), and provides `scrollTo` support for either smoothly
scrolling to a position or element, or immediately setting scroll to a position or element.

This project was extracted from (and is used by) [#smoke-and-mirrors](https://github.com/runspired/smoke-and-mirrors),
a leading infinite-scroll and svelte-rendering solution.

## Quick Start

**<coming soon>**

## Documentation

**<link below is coming soon>**

Updated documentation and demos running the latest release can be found at [http://runspired.github.io/ember-radar/](http://runspired.github.io/ember-radar/)

### Questions, Collaboration and Support

For support, please ask questions in the [#smoke-and-mirrors](https://embercommunity.slack.com/messages/smoke-and-mirrors/)
 channel of the [ember-community slack](https://ember-community-slackin.herokuapp.com/).

### Dependencies

`ember-radar` is dependent on and installs `ember-run-raf`, which helps you budget and schedule the work in your
app more intelligently.

## Contributing

 - Open an Issue for discussion first if you're unsure a feature/fix is wanted.
 - Branch off of `develop` (default branch)
 - Use descriptive branch names (e.g. `<type>/<short-description>`)
 - Use [Angular Style Commits](https://github.com/angular/angular.js/blob/v1.4.8/CONTRIBUTING.md#commit)
 - PR against `develop` (default branch).

### Commmits 

Angular Style commit messages have the full form:
 
 ```
 <type>(<scope>): <title>
 
 <body>
 
 <footer>
 ```
 
 But the abbreviated form (below) is acceptable and often preferred.
 
 ```
 <type>(<scope>): <title>
 ```
 
 Examples:
 
 - chore(deps): bump deps in package.json and bower.json
 - docs(component): document the `fast-action` component
