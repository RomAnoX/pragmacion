# Pragmaci&oacute;n

Lenguaje de programaci&oacute;n practico y sencillo para aprender algoritmos en espa&ntilde;ol de baja complejidad.

## Comentarios

Todos los comentarios son de una sola linea y comienzan con el caracter `#`.

```javascript
# este es un comentario
```

## Tipo de variables

La declaracion de variables se compone por el tipo de variable seguido por el nombre de la variable y opcionalmente una asignaci&oacute;n de valor.

### Variables primitivas

#### Numero

Las variables de tipo `numero` son aquellas que son representadas por un valor numerico positivo.

```javascript
numero x = 10
numero y = 22.54
```

#### Texto

Las variables de tipo `texto` son aquellas representadas por una cadena de caracteres encerradas en comillas.

```javascript
texto nombre = "Juan"
texto apellido = "Perez"
```

#### Boleano

Las variables de tipo `boleano` son aquellas que son representadas por los valores `verdadero` o `falso`.

```javascript
boleano aprobado = verdadero
boleano reprobado = falso
```

### Variables complejas o estructuras de datos

Las variables complejas o estructuras de datos son aquellas que son compuestas por multiples variables primitivas y sus valores son accesibles por medio de indices.

#### Arreglos

Los arreglos son espacios que pueden almacenar valores primitivos.

```javascript
arreglo calificaciones = [10, 9, 8]
```

Su manera de acceso es utilizando `[` `]` contiendo el indice del valor a accesar. Los indices comienzan en 0 hasta N-1 donde N es el total de valores contenido en el arreglo.

```javascript
calificaciones[1] = 10
imprimir calificaciones[1]
```

## Expresiones

### Matematicas

Las expresiones matematicas son c&aacute;lculos que dan como resultado un valor num&eacute;rico utilizando operadores matematicos.

Los operadores matematicos son:

- `+` _suma_
- `-` _resta_
- `*` _multiplicaci&oacute;n_
- `/` _division_
- `%` _residuo_
- `^` _potenciaci&oacute;n_

```javascript
5 + 3;
8 - n;
2 * edad;
suma / total;
par % 2;
```

### Boleanas

Las expresiones boleanas son c&aacute;lculos que dan como resultado un valor boleano (verdadero o falso) utilizando operadores de comparaci&oacute;n.

Los operadores de comparaci&oacute;n son:

- `==` _igual a_
- `>` _mayor que_
- `<` _menor que_
- `<=` _menor o igual que_
- `>=` _mayor o igual que_
- `<>` _diferente a_

```javascript
nombre == "Juan"
edad > 30
negativo < 0
positivo >= 0
reprobados <= aprobados
esGrande <> falso
```

### Logicas

Las expresiones logicas son calculos de dos expresiones boleanas y son:

- `&` _y logico_
- `|` _o logico_

```javascript
(edad > 18) & tieneCredencial;
estaNublado | (dia == "Lunes");
```

### Especiales

Existen 2 operadores matematicos especiales que solo actuan sobre variables de tipo numero. Estos operadores o funciones son:

- `incrementar` _incrementa el valor de una variable_
- `decrementar` _decrementa el valor de una variable_

Tambien existe un operador boleano especial para cambiar en sentido opuesto una expersi&oacute;n boleana. Esta es:

- `negar` _convierte una expresi&oacute;n boleana en lo opuesto_

```javascript
incrementar x
decrementar y
negar verdadero
```

## Sentencias de control

### Condicionales

#### si... hacer... sino... fin

La sentencia de control `si... hacer... sino... fin` se utiliza para revisar una expresi&oacute;n boleana y ejecutar un bloque de c&oacute;digo dependiendo del resultado de la expresi&oacute;n.

```javascript
si entero >= 0 hacer
  imprimir "positivo"
sino
  imprimir "negativo"
fin
```

### Ciclos

#### Para... mientras... hacer... fin

El ciclo `para... mientras... hacer... fin` se utiliza como un ciclo con inicializacion, condicional y operacion para ejecutar un bloque de codigo un cierto numero de veces.

```javascript
para numero x = 0 mientras x < 10, incrementar x hacer
  imprimir x
fin
```

#### Mientras... hacer... fin

El ciclo `mientras... fin` se utiliza como un ciclo con condicional para ejecutar un bloque de codigo evaluando primero una expresion.

```javascript
mientras x < 10 hacer
  imprimir x
  incrementar x
fin
```

#### Hacer... mientras

El ciclo `hacer... mientras` se utiliza como un ciclo con condicional para ejecutar un bloque de codigo evaluando al final una expresion.

```javascript
hacer
  leer x
mientras x <> "salir"
```

#### Terminar

Dentro de un ciclo existe una manera de salir de el por medio de una instruccion especial.

```javascript
hacer
  leer comando
  si comando == "salir" entonces
    terminar
  fin
mientras verdadero
```

## Funciones

### Propias

Las funciones propias son aquellas que ya vienen implementadas y son:

- `imprimir` _mostrar en pantalla varios valores_
- `leer` _asignar un valor de consola a una variable_

```javascript
leer nombre
imprimir "El nombre es ", nombre
```

### Definidas

Las funciones definidas son aquellas que se pueden crear utilizando una serie de instrucciones para encapsular un bloque de codigo

```javascript
funcion sumar parametros x, y ejecutar
  regresar x + y
fin

funcion saludar ejecutar
  imprimir "hola mundo"
fin
```

## Apendice

### Palabras reservadas

- numero
- texto
- boleano
- arreglo
- verdadero
- falso
- si
- sino
- fin
- imprimir
- leer
- para
- mientras
- hacer
- ejecutar
- terminar
- regresar
- funcion
- parametros
- incrementar
- decrementar
- negar
