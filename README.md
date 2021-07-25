# What is this?

A simple react component that prints Hello, {username}!

# Installation

`npm i @amitdabade/react-hello --save`

```
import React from "react";
import Hello from "@amitdabade/react-hello";

export default function ReactHello() {
  return (
    <div>
       <Hello name="Amit" />
    </div>
  )
}

```

## Options

- _name_ : _string_ (Default: "World")
