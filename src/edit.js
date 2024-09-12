import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import './editor.scss';

export default function edit( { attributes, setAttributes } ) {
	const { text, align } = attributes;
	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => setAttributes( { align: value } ) }
				/>
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: `zoduaks-align-${ align }`,
				} ) }
				tagName="h2"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder={ 'Введите заголовок' }
				allowedFormats={ [] }
			/>
		</>
	);
}
