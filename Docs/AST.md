# AST

## Short

```javascript
num    { type: "num", value: NUMBER }
str    { type: "str", value: STRING }
bool   { type: "bool", value: true or false }
var    { type: "var", value: NAME }
lambda { type: "lambda", args: [ NAME... ], body: AST }
call   { type: "call", value: NAME, args: [ AST... ] }
if     { type: "if", value: AST, then: AST, else: AST }
create { type: "create", value: DATA_TYPES, body: AST }
assign { type: "assign", operator: "=", left: AST, right: AST }
binary { type: "binary", operator: OPERATOR, left: AST, right: AST }
prog   { type: "prog", prog: [ AST... ] }
```

## Examples

### Numbers (`num`)

```javascript
123.45 -> { type: "num", value: 123.45 }
```

### Strings (`str`)

```javascript
"Hola Mundo!" -> { type: "str", value: "Hola Mundo!" }
```

### Boolean (`bool`)

```javascript
verdadero -> { type: "bool", value: true }
falso -> { type: "bool", value: false }
```

### Identifiers (`var`)

```javascript
foo -> { type: "var", value: "foo" }
```

### Functions (`lambda`)

```javascript
funcion saludar parametros x ejecutar
  imprimir x
fin

-> {
  type: "lambda",
  value: "saludar",
  args: ["x"],
  body: {
    type: "call",
    value: "imprimir",
    args: [
      { type: "var", value: "x" }
    ]
  }
}
```

### Function calls (`call`)

```javascript
imprimir a, 1

-> {
  type: "call",
  value: "imprimir",
  args: [
    { type: "var", value: "a" },
    { type: "num", value: 1 }
  ]
}
```

### Conditionals (`si`)

```javascript
si foo entonces bar sino baz fin

-> {
  type: "if",
  value: { type: "var", value: "foo" },
  then: [{ type: "call", value: "bar", vars: [] }],
  else: [{ type: "call", value: "baz", vars:[] }],
}
```

### Create (`create`)

```javascript
numero edad;

-> {
  type: "create",
  data: "int",
  body: { type: "var", value: "edad" }
}
```

### Assignment (`assign`)

```javascript
a = 10

-> {
  type: "assign",
  operator: "=",
  left: { type: "var", value: "a" },
  right: { type: "num", value: 10 },
}
```

### Binary expressions (`binary`)

```javascript
x + y * z

-> {
  type: "binary",
  operator: "+",
  left: { type: "var", value: "x" },
  right: {
    type: "binary",
    operator: "*",
    left: { type: "var", value: "y" },
    right: { type: "var", value: "z" },
  }
}
```

### Sequences (`prog`)

```javascript
{
  a = 5;
  b = a * 2;
  a + b;
}

-> {
  type: "prog",
  body: [
    {
      type: "assign",
      operator: "=",
      left: { type: "var", value: "a" },
      right: { type: "num", value: 5 }
    },
    {
      "type": "assign",
      "operator": "=",
      "left": { "type": "var", "value": "b" },
      "right": {
        "type": "binary",
        "operator": "*",
        "left": { "type": "var", "value": "a" },
        "right": { "type": "num", "value": 2 }
      }
    },
    {
      "type": "binary",
      "operator": "+",
      "left": { "type": "var", "value": "a" },
      "right": { "type": "var", "value": "b" }
    }
  ]
}
```
