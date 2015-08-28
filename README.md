# Octopi

### Version: 0.0.1

A jpath parsing library similar to xpath to allow quick access and retrieval of data
from complex javascript objects with a simple and expressive syntax.

## Syntax

| Operator Examples               | Description                  |
| ------------------------------- | ---------------------------- |
| `$`                             | Reference to the root object
| `*`                             | All property values of an object or all objects in array
| `.`, `['property name']`, `[*]` | Direct access to the object.
| `[0]`, `[*]`, `[1:3]`           | Array access
| `()`                            | Expressions
| `..`                            | Parent

## Usage

```javascript
var octopi = require('octopi');

var data = {
  nested: {
    here: {
      value: "My Data"
    }
  }
};

octopi.parse('$.nested.here.value', data); // = "My Data"
```
