import { _getAndRemoveAll_BeforeOrAfter_Last }
	from '@writetome51/array-get-and-remove-all-before-or-after';


// value cannot be object.

export function getAndRemoveAllAfterLast(value: any, array): any[] {
	return _getAndRemoveAll_BeforeOrAfter_Last(value, 'after', array);
}
