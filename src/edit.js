import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<RichText
			{ ...useBlockProps() }
			tagName="h2"
			value={ text }
			onChange={ ( value ) => setAttributes( { text: value } ) }
			placeholder={ 'Введите заголовок' }
		/>
	);
}
