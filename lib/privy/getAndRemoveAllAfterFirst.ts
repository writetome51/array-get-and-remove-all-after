import { _getAndRemoveAll_BeforeOrAfter_First }
	from '@writetome51/array-get-and-remove-all-before-or-after';


// value cannot be object

export function getAndRemoveAllAfterFirst(value: any, array): any[] {
	return _getAndRemoveAll_BeforeOrAfter_First(value, 'after', array);
}
