import { _getAndRemoveAllBefore_or_AfterLast }
	from '@writetome51/array-get-and-remove-all-before-or-after/_getAndRemoveAllBefore_or_AfterLast';
import { errorIfNotPrimitiveOrArray } from 'error-if-not-primitive-or-array';


// value cannot be object.

export function getAndRemoveAllAfterLast(value: any, array): any[] {
	errorIfNotPrimitiveOrArray(value);
	return _getAndRemoveAllBefore_or_AfterLast(value, 'after', array);
}
