To include in your project:

``import {getAndRemoveAllAfterFirst, getAndRemoveAllAfterLast}    
from '@writetome51/array-get-and-remove-all-after';``

These are functions that remove and return a section of the array.

// removes and returns everything after the first instance of value:  
getAndRemoveAllAfterFirst(value, array): any[]

// removes and returns everything after the last instance of value:  
getAndRemoveAllAfterLast(value, array): any[]


Examples:

let arr = [1,2,3,4,5,1,6,7,8,9];   
let removed = getAndRemoveAllAfterFirst(1, arr);  
removed is now [2,3,4,5,1,6,7,8,9].  
arr is now [1].

let arr = [1,2,3,4,5,1,6,7,8,9];   
let removed = getAndRemoveAllAfterLast(1, arr);  
removed is now [6,7,8,9]].  
arr is now [1,2,3,4,5,1].