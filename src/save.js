import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, align } = attributes;
	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: `zoduaks-align-${ align }`,
			} ) }
			tagName="h3"
			value={ text }
			// style={ { textAlign: align } }
		/>
	);
}
