import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CpkmInput from '../src/cpkminput';

/* global document */

describe( 'CpkmInput', () => {
	it( 'should be named', () => {
		expect( CpkmInput.pluginName ).to.equal( 'CpkmInput' );
	} );

	describe( 'init()', () => {
		let domElement, editor;

		beforeEach( async () => {
			domElement = document.createElement( 'div' );
			document.body.appendChild( domElement );

			editor = await ClassicEditor.create( domElement, {
				plugins: [
					Paragraph,
					Heading,
					Essentials,
					CpkmInput
				],
				toolbar: [
					'cpkmInputButton'
				]
			} );
		} );

		afterEach( () => {
			domElement.remove();
			return editor.destroy();
		} );

		it( 'should load CpkmInput', () => {
			const myPlugin = editor.plugins.get( 'CpkmInput' );

			expect( myPlugin ).to.be.an.instanceof( CpkmInput );
		} );

		it( 'should add an icon to the toolbar', () => {
			expect( editor.ui.componentFactory.has( 'cpkmInputButton' ) ).to.equal( true );
		} );

		it( 'should add a text into the editor after clicking the icon', () => {
			const icon = editor.ui.componentFactory.create( 'cpkmInputButton' );

			expect( editor.getData() ).to.equal( '' );

			icon.fire( 'execute' );

			expect( editor.getData() ).to.equal( '<p>Hello CKEditor 5!</p>' );
		} );
	} );
} );
