# getAndRemoveAllAfterFirst(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Removes and returns everything after the first instance of `value` in `array`.  
`value` cannot be an object.  Arrays are OK.


# getAndRemoveAllAfterLast(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Removes and returns everything after the last instance of `value` in `array`.  
`value` cannot be an object.  Arrays are OK.


## Examples
```
let arr = [1,2,3,4,5,1,6,7,8,9];   
let removed = getAndRemoveAllAfterFirst(1, arr);  
// removed is now [2,3,4,5,1,6,7,8,9] .  
// arr is now [1] .

let arr = [1,2,3,4,5,1,6,7,8,9];   
let removed = getAndRemoveAllAfterLast(1, arr);  
// removed is now [6,7,8,9]] .  
// arr is now [1,2,3,4,5,1] .
```

## Installation
`npm i  @writetome51/array-get-and-remove-all-after`

## Loading
```
// if using Typescript:
import {getAndRemoveAllAfterFirst, getAndRemoveAllAfterLast}    
    from '@writetome51/array-get-and-remove-all-after';
    
// if using ES5 JavaScript:
var getAndRemoveAllAfterFirst = 
    require('@writetome51/array-get-and-remove-all-after').getAndRemoveAllAfterFirst;
var getAndRemoveAllAfterLast = 
    require('@writetome51/array-get-and-remove-all-after').getAndRemoveAllAfterLast;
```