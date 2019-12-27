# AST

## Short

```javascript
prog   { type: "prog", body: [ AST... ] }
num    { type: "num", value: NUMBER }
str    { type: "str", value: STRING }
bool   { type: "bool", value: BOOL }
var    { type: "var", value: NAME }
print  { type: "print", args: [PARAMS] }
assign { type: "assign", left: VAR, right: EXP }
exp    { type: "exp" value: EXP }

lambda { type: "lambda", args: [ NAME... ], body: AST }
call   { type: "call", value: NAME, args: [ AST... ] }
if     { type: "if", value: AST, then: AST, else: AST }
```

```
AST       any AST rule
NUMBER    decimal or number
STRING    any string
BOOL      true or false
NAME      any string
VALUE     NUMBER or STRING or BOOL or var
PARAMS    list of VALUES separated by commas
OP        operators including '(' and ')'
EXP       array of VALUES and OP
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

### Functions (`lambda`) TBD

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

### Function calls (`call`) TBD

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

### Conditionals (`si`) TBD

```javascript
si foo entonces bar sino baz fin

-> {
  type: "if",
  value: { type: "var", value: "foo" },
  then: [{ type: "call", value: "bar", vars: [] }],
  else: [{ type: "call", value: "baz", vars:[] }],
}
```

### Assignment (`assign`)

```javascript
a = 10

-> {
  type: "assign",
  left: { type: "var", value: "a" },
  right: {
    type: "exp",
    value: [{
      type: "num",
      value: 10,
    }],
  },
}
```

### Expressions (`exp`)

```javascript
x + y * z

-> {
  type: "exp",
  value: [{
    type: "var",
    value: "x",
  },{
    type: "op",
    value: "+",
  },{
    type: "var",
    value: "y",
  },{
    type: "op",
    value: "*",
  }, {
    type: "var",
    value: "z"
  }]
}
```
