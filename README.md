# Ocaml Cheatsheet

## Table of contents
- <a href="#tests">Tests</a>
- <a href="#global-scope">Global scope builtins</a>
  - <a href="#global-scope-comparators">Polymorphic comparators</a>
  - <a href="#global-scope-stdout">Stdout</a>
  - <a href="#global-scope-casting">Type Casting</a>
- <a href="#unit">Unit `unit`</a>
- <a href="#bool">Boolean `bool`</a>
  - <a href="#bool-operators">Boolean operators</a>
- <a href="#int">Integer `int`</a>
  - <a href="#int-operators">Integer operators</a>
  - <a href="#int-global-functions">Integer global functions</a>
- <a href="#float">Float `float`</a>
  - <a href="#float-operators">Float operators</a>
  - <a href="#float-global-functions">Float global functions</a>
- <a href="#tuple">Tuple</a>
  - <a href="#tuple-global-functions">Couple `'a * 'b` global functions</a>
- <a href="#string">String `string`</a>
  - <a href="#string-operators">String operators</a>
  - <a href="#string-module">String module functions</a>
- <a href="#list">List `'a list`</a>
  - <a href="#list-operators">List operators</a>
  - <a href="#list-module">List module functions</a>
- <a href="#array">Array `'a array`</a>
  - <a href="#array-module">Array module functions</a>
- <a href="#func">Function `<fun>`</a>
  - <a href="#func-definition">Function definition</a>
- <a href="#implementations">Useful implementations</a>
  - <a href="#implementations-math">Math</a>
  - <a href="#implementations-qol">Quality of life</a>

## Index
- <a href="#int-operators-mult">( * )</a>
- <a href="#float-operators-pow">( ** )</a>
- <a href="#float-operators-mult">( *.)</a>
- <a href="#tests-tests-id-ineq">(!=)</a>
- <a href="#bool-operators-and">(&&)</a>
- <a href="#int-operators-add">(+)</a>
- <a href="#float-operators-add">(+.)</a>
- <a href="#int-operators-sub">(-)</a>
- <a href="#float-operators-sub">(-.)</a>
- <a href="#int-operators-div">(/)</a>
- <a href="#float-operators-div">(/.)</a>
- <a href="#list-operators-cons">(::)</a>
- <a href="#tests-tests-lt">(<)</a>
- <a href="#tests-tests-lte">(<=)</a>
- <a href="#tests-tests-val-ineq">(<>)</a>
- <a href="#tests-tests-val-eq">(=)</a>
- <a href="#tests-tests-id-eq">(==)</a>
- <a href="#tests-tests-gt">(>)</a>
- <a href="#tests-tests-gte">(>=)</a>
- <a href="#list-operators-concat">(@)</a>
- <a href="#string-operators-add">(^)</a>
- <a href="#int-operators-mod">(mod)</a>
- <a href="#bool-operators-not">(not)</a>
- <a href="#bool-operators-or">(||)</a>
- <a href="#array-module-init">Array.init</a>
- <a href="#array-module-length">Array.length</a>
- <a href="#array-module-make">Array.make</a>
- <a href="#array-module-make-matrix">Array.make_matrix</a>
- <a href="#func-definition-def">Function definition</a>
- <a href="#func-definition-pattern-matching">Function with pattern matching</a>
- <a href="#list-module-lfold">List.fold_left</a>
- <a href="#list-module-rfold">List.fold_right</a>
- <a href="#list-module-head">List.hd</a>
- <a href="#list-module-iter">List.iter</a>
- <a href="#list-module-length">List.length</a>
- <a href="#list-module-map">List.map</a>
- <a href="#list-module-mem">List.mem</a>
- <a href="#list-module-nth">List.nth</a>
- <a href="#list-module-rev">List.rev</a>
- <a href="#list-module-tail">List.tl</a>
- <a href="#func-definition-recursivity">Recursive function</a>
- <a href="#string-operators-get-short">String.[]</a>
- <a href="#string-module-get">String.get</a>
- <a href="#string-module-init">String.init</a>
- <a href="#string-module-length">String.length</a>
- <a href="#string-module-make">String.make</a>
- <a href="#string-module-substr">String.sub</a>
- <a href="#int-global-functions-abs">abs</a>
- <a href="#float-global-functions-acos">acos</a>
- <a href="#implementations-qol-array-of-string">array_of_string</a>
- <a href="#float-global-functions-asin">asin</a>
- <a href="#float-global-functions-atan">atan</a>
- <a href="#implementations-qol-char-of-string">char_of_string</a>
- <a href="#global-scope-comparators-compare">compare</a>
- <a href="#float-global-functions-cos">cos</a>
- <a href="#float-global-functions-exp">exp</a>
- <a href="#global-scope-casting-float-of-int">float_of_int</a>
- <a href="#global-scope-casting-float-of-string">float_of_string</a>
- <a href="#tuple-global-functions-fst">fst</a>
- <a href="#implementations-math-gcd">gcd</a>
- <a href="#global-scope-casting-ignore">ignore</a>
- <a href="#global-scope-casting-int-of-float">int_of_float</a>
- <a href="#global-scope-casting-int-of-string">int_of_string</a>
- <a href="#float-global-functions-log">log</a>
- <a href="#float-global-functions-log10">log10</a>
- <a href="#global-scope-comparators-max">max</a>
- <a href="#global-scope-comparators-min">min</a>
- <a href="#global-scope-stdout-print-float">print_float</a>
- <a href="#global-scope-stdout-print-int">print_int</a>
- <a href="#global-scope-stdout-print-lr">print_newline</a>
- <a href="#global-scope-stdout-print-string">print_string</a>
- <a href="#float-global-functions-sin">sin</a>
- <a href="#tuple-global-functions-snd">snd</a>
- <a href="#float-global-functions-sqrt">sqrt</a>
- <a href="#implementations-qol-string-of-array">string_of_array</a>
- <a href="#implementations-qol-string-of-char">string_of_char</a>
- <a href="#global-scope-casting-string-of-float">string_of_float</a>
- <a href="#global-scope-casting-string-of-int">string_of_int</a>
- <a href="#float-global-functions-tan">tan</a>
## <a name="tests"></a>Tests

> All of these test operators are generally **O(1)** in Space and Time complexity
> 
> Complexity may differ depending on the provided type `'a`

<a name="tests-tests-val-eq"></a>
```ocaml
(=) : 'a -> 'a -> bool
```
Value equality

<a name="tests-tests-val-ineq"></a>
```ocaml
(<>) : 'a -> 'a -> bool
```
Value inequality

<a name="tests-tests-id-eq"></a>
```ocaml
(==) : 'a -> 'a -> bool
```
Identity equality

<a name="tests-tests-id-ineq"></a>
```ocaml
(!=) : 'a -> 'a -> bool
```
Identity inequality

<a name="tests-tests-lt"></a>
```ocaml
(<) : 'a -> 'a -> bool
```
Strictly smaller comparator

<a name="tests-tests-gt"></a>
```ocaml
(>) : 'a -> 'a -> bool
```
Strictly greater comparator

<a name="tests-tests-lte"></a>
```ocaml
(<=) : 'a -> 'a -> bool
```
Smaller or equal comparator

<a name="tests-tests-gte"></a>
```ocaml
(>=) : 'a -> 'a -> bool
```
Greater or equal comparator

## <a name="global-scope"></a>Global scope builtins

> All of these functions are generally **O(1)** in Space and Time complexity unless other specified
> 
> Complexity may differ depending on the provided type `'a`

### <a name="global-scope-comparators"></a>Polymorphic comparators

<a name="global-scope-comparators-compare"></a>
```ocaml
compare : 'a -> 'a -> int
```
Returns a positive integer when x > y, negative if x < y, and 0 if x = y

<a name="global-scope-comparators-max"></a>
```ocaml
max : 'a -> 'a -> 'a
```
Returns the largest element in a set of two

<a name="global-scope-comparators-min"></a>
```ocaml
min : 'a -> 'a -> 'a
```
Returns the smallest element in a set of two

### <a name="global-scope-stdout"></a>Stdout

<a name="global-scope-stdout-print-int"></a>
```ocaml
print_int : int -> unit
```
Print an integer

<a name="global-scope-stdout-print-float"></a>
```ocaml
print_float : float -> unit
```
Print a real number

<a name="global-scope-stdout-print-string"></a>
```ocaml
print_string : string -> unit
```
Print a string

<a name="global-scope-stdout-print-lr"></a>
```ocaml
print_newline : unit -> unit
```
Print a line return character

### <a name="global-scope-casting"></a>Type Casting

> `'a_of_string` functions are **O(N)** with N length of the string. This should be considered O(1) for most applications

<a name="global-scope-casting-ignore"></a>
```ocaml
ignore : 'a -> unit
```
Cast value to unit

<a name="global-scope-casting-float-of-int"></a>
```ocaml
float_of_int : int -> float
```
Cast integer to float

<a name="global-scope-casting-int-of-float"></a>
```ocaml
int_of_float : float -> int
```
Cast a real number to the integer of its truncated decimal representation

<a name="global-scope-casting-string-of-int"></a>
```ocaml
string_of_int : int -> string
```
Integer to string

<a name="global-scope-casting-int-of-string"></a>
```ocaml
int_of_string : string -> int
```
Parse a string as an integer

<a name="global-scope-casting-string-of-float"></a>
```ocaml
string_of_float : float -> string
```
Float to string

<a name="global-scope-casting-float-of-string"></a>
```ocaml
float_of_string : string -> float
```
Parse a string as a floating number

## <a name="unit"></a>Unit `unit`

Only type member: `()`

**Warning:** Tests for `unit` should use `=` and `<>`, not `==` and `!=`

## <a name="bool"></a>Boolean `bool`

> All of these operators are **O(1)** in Space and Time complexity

### <a name="bool-operators"></a>Boolean operators

<a name="bool-operators-not"></a>
```ocaml
(not) : bool -> bool
```
Formal negation

<a name="bool-operators-and"></a>
```ocaml
(&&) : bool -> bool -> bool
```
Formal logical AND

<a name="bool-operators-or"></a>
```ocaml
(||) : bool -> bool -> bool
```
Formal logical OR

## <a name="int"></a>Integer `int`

### <a name="int-operators"></a>Integer operators

<a name="int-operators-add"></a>
```ocaml
(+) : int -> int -> int
```
Integer addition

<a name="int-operators-sub"></a>
```ocaml
(-) : int -> int -> int
```
Integer difference

<a name="int-operators-mult"></a>
```ocaml
( * ) : int -> int -> int
```
Integer multiplication

<a name="int-operators-div"></a>
```ocaml
(/) : int -> int -> int
```
Integer division quotient

<a name="int-operators-mod"></a>
```ocaml
(mod) : int -> int -> int
```
Integer division remainder

### <a name="int-global-functions"></a>Integer global functions

<a name="int-global-functions-abs"></a>
```ocaml
abs : int -> int
```
Integer absolute value (canonical distance to 0)

## <a name="float"></a>Float `float`

### <a name="float-operators"></a>Float operators

<a name="float-operators-add"></a>
```ocaml
(+.) : flaot -> flaot -> flaot
```
Real number addition

<a name="float-operators-sub"></a>
```ocaml
(-.) : float -> float -> float
```
Real number difference

<a name="float-operators-mult"></a>
```ocaml
( *.) : float -> float -> float
```
Real number multiplication

<a name="float-operators-div"></a>
```ocaml
(/.) : float -> float -> float
```
Real number division

<a name="float-operators-pow"></a>
```ocaml
( ** ) : float -> float -> float
```
Real number power

### <a name="float-global-functions"></a>Float global functions

<a name="float-global-functions-sqrt"></a>
```ocaml
sqrt : float -> float
```
Real square root

<a name="float-global-functions-exp"></a>
```ocaml
exp : float -> float
```
Natural real exponentiation

<a name="float-global-functions-log"></a>
```ocaml
log : float -> float
```
Natural real logarithm

<a name="float-global-functions-log10"></a>
```ocaml
log10 : float -> float
```
Base 10 real logarithm

<a name="float-global-functions-sin"></a>
```ocaml
sin : float -> float
```
Sine function

<a name="float-global-functions-cos"></a>
```ocaml
cos : float -> float
```
Cosine function

<a name="float-global-functions-tan"></a>
```ocaml
tan : float -> float
```
Tangent function

<a name="float-global-functions-asin"></a>
```ocaml
asin : float -> float
```
Sine's reciprocal function

<a name="float-global-functions-acos"></a>
```ocaml
acos : float -> float
```
Cosine's reciprocal function

<a name="float-global-functions-atan"></a>
```ocaml
atan : float -> float
```
Tangent's reciprocal function

## <a name="tuple"></a>Tuple

> All of these functions are **O(1)** in Space and Time complexity

### <a name="tuple-global-functions"></a>Couple `'a * 'b` global functions

<a name="tuple-global-functions-fst"></a>
```ocaml
fst : ('a, 'b) -> 'a
```
Get first element of a couple

<a name="tuple-global-functions-snd"></a>
```ocaml
snd : ('a, 'b) -> 'b
```
Get second element of a couple

## <a name="string"></a>String `string`

### <a name="string-operators"></a>String operators

<a name="string-operators-add"></a>
```ocaml
(^) : string -> string -> string
```
String concatenation

> **O(N + M)** with N, M lengths of the given strings

<a name="string-operators-get-short"></a>
```ocaml
str.[idx] -> char
```
Equivalent to `String.get str idx`

> **O(1)**

### <a name="string-module"></a>String module functions

<a name="string-module-length"></a>
```ocaml
String.length : string -> int
```
Get string length

> **O(1)**

<a name="string-module-get"></a>
```ocaml
String.get : string -> int -> char
```
Get char at given index

> **O(1)**

<a name="string-module-substr"></a>
```ocaml
String.sub : string -> start: int -> lenght: int -> string
```
Create substring given start index and length of sub-string

> **O(N)** with N being created string length

<a name="string-module-make"></a>
```ocaml
String.make : int -> char -> string
```
Create a string with given length and filled with given character

> **O(N)** with N string length

<a name="string-module-init"></a>
```ocaml
String.init : int -> (int -> char) -> string
```
Create a string of given length and by using characters returned by given function

> **O(N)** with N string length

## <a name="list"></a>List `'a list`

### <a name="list-operators"></a>List operators

<a name="list-operators-cons"></a>
```ocaml
(::) : 'a -> 'a list -> 'a list
```
List push to head or pull head

> **O(1)**

<a name="list-operators-concat"></a>
```ocaml
(@) : 'a list -> 'a list -> 'a list
```
List concatenation

> **O(N)** with N length of the first list

### <a name="list-module"></a>List module functions

<a name="list-module-length"></a>
```ocaml
List.length : 'a list -> int
```
Get list's size

**Warning:** Never use, this is linear in time

> **O(N)** with N length of the list

<a name="list-module-head"></a>
```ocaml
List.hd : 'a list -> 'a
```
Get list's head (first element)

> **O(1)**

<a name="list-module-tail"></a>
```ocaml
List.tl : 'a list -> 'a list
```
Get list's tail (list minus list head)

> **O(1)**

<a name="list-module-nth"></a>
```ocaml
List.nth : 'a list -> int -> 'a
```
Get list's nth element

**Note:** Lists are 0-indexed. First element is at index 0.

**Warning:** Avoid using, this is linear in time

> **O(N)** with N index of sought element

<a name="list-module-mem"></a>
```ocaml
List.mem : 'a list -> 'a -> bool
```
Test whether second argument is an element of given list

> **O(N)** with N list length

<a name="list-module-rev"></a>
```ocaml
List.rev : 'a list -> 'a list
```
Create a list with the same elements but with reversed order

> **O(N)** with N list length

<a name="list-module-iter"></a>
```ocaml
List.iter : ('a -> unit) -> 'a list -> unit
```
Applies given function to all elements of the list, from head to tail

> **O(N)** with N list length

<a name="list-module-map"></a>
```ocaml
List.map : ('a -> 'b) -> 'a list -> 'b list
```
Applies given function to all elements of the list and returns the results as a list

> **O(N)** with N list length

<a name="list-module-rfold"></a>
```ocaml
List.fold_right : ('a -> 'b -> 'b) -> 'a list -> 'b -> 'b
```
Reduces a list with given function and initial value from tail to head

> **O(N)** with N list length

<a name="list-module-lfold"></a>
```ocaml
List.fold_left : ('a -> 'b -> 'a) -> 'a -> 'b list -> 'a
```
Same as `List.fold_right` but from head to tail and with different argument order

> **O(N)** with N list length

## <a name="array"></a>Array `'a array`

### <a name="array-module"></a>Array module functions

<a name="array-module-length"></a>
```ocaml
Array.length : 'a array -> int
```
Get array length

> **O(1)**

<a name="array-module-make"></a>
```ocaml
Array.make : int -> 'a -> 'a array
```
Create an array with given length and filled with given element

> **O(N)** with N array length

<a name="array-module-make-matrix"></a>
```ocaml
Array.make_matrix : int -> int -> 'a -> 'a array array
```
Create a two dimensional array with given width, height and filled with given element

**Warning:** Watch your steps as filler value is passed by reference and use `Array.init` instead if necessary

> **O(N * M)** with N, M width and height

<a name="array-module-init"></a>
```ocaml
Array.init : int -> (int -> 'a) -> 'a array
```
Create an array of given length and by using values returned by given function

> **O(N)** with N array length

## <a name="func"></a>Function `<fun>`

### <a name="func-definition"></a>Function definition

<a name="func-definition-def"></a>
```ocaml
let foo = function x -> x + x;;
let foo = fun x -> x + x;;
let foo x = x + x;;
```
**Warning:** Only `function` syntax allows for matching

**Warning:** Recursivity requires `rec` keyword

<a name="func-definition-pattern-matching"></a>
```ocaml
let bar = function
  | 42 -> "yay"
  | _  -> "nay";;
```
**Warning:** Only `function` syntax allows for matching

<a name="func-definition-recursivity"></a>
```ocaml
let rec factorial = function
  | 0 -> 1
  | n -> n * fact (n - 1);;
```


## <a name="implementations"></a>Useful implementations

### <a name="implementations-math"></a>Math

<a name="implementations-math-gcd"></a>
```ocaml
let rec gcd a = function
  | 0 -> a
  | b -> gcd b (a mod b);;
```
Greatest common denominator of two integers

### <a name="implementations-qol"></a>Quality of life

<a name="implementations-qol-string-of-char"></a>
```ocaml
let string_of_char chr = String.make 1 chr;;
```


<a name="implementations-qol-char-of-string"></a>
```ocaml
let char_of_string str = String.get str 0;;
```


<a name="implementations-qol-string-of-array"></a>
```ocaml
let string_of_array t = String.init (Array.length t) (Array.get t);;
```
Cast a `char array` into a string

<a name="implementations-qol-array-of-string"></a>
```ocaml
let array_of_string s = Array.init (String.length s) (String.get s);;
```
Cast a string into a `char array`

