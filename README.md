## What is this?

A simple react component that prints Hello, {username}!

## Installation

`npm i @amitdabade/react-hello --save`

## Code

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from "@amitdabade/react-hello";

function App() {
   return (
    <div>
       <Hello name="Amit" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

```

## Demo

https://codesandbox.io/s/react-hello-vnuw5

## Options

- _name_ : _string_ (Default: "World")
