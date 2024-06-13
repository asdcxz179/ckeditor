import { CpkmInput as CpkmInputDll, icons } from '../src';
import CpkmInput from '../src/cpkminput';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 CpkmInput DLL', () => {
	it( 'exports CpkmInput', () => {
		expect( CpkmInputDll ).to.equal( CpkmInput );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
