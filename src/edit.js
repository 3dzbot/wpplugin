import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ColorPicker,
	ColorPalette,
	ToggleControl,
} from '@wordpress/components';
import './editor.scss';

export default function edit( { attributes, setAttributes } ) {
	const { text, align } = attributes;
	const onChangeText = ( val ) => {
		setAttributes( { text: val } );
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title="Content" initialOpen>
					<TextControl
						label="Title"
						value={ text }
						help="Insert title"
						onChange={ onChangeText }
					/>
					<ToggleControl label="+ or -" checked={ true } />
					<TextareaControl
						label="Title"
						value={ text }
						help="Insert title"
						onChange={ onChangeText }
					/>
					<ColorPicker color={ '#000' } />
					<ColorPalette
						colors={ [
							{ name: 'gray', color: '#f5f5f5' },
							{ name: 'black', color: '#000000' },
						] }
					/>
				</PanelBody>
			</InspectorControls>
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
				onChange={ onChangeText }
				placeholder={ 'Введите заголовок' }
				allowedFormats={ [] }
			/>
		</>
	);
}
