import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarButton,
	ToolbarGroup,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={ [
					{
						title: 'Button',
						icon: 'admin-media',
						onClick: () => console.log( 'click' ),
					},
				] }
			>
				{ text && (
					<ToolbarGroup>
						<ToolbarButton
							title="Left"
							icon="editor-alignleft"
							onClick={ () => console.log( 'Left' ) }
						/>
						<ToolbarButton
							title="Center"
							icon="editor-aligncenter"
							onClick={ () => console.log( 'Center' ) }
						/>
						<ToolbarButton
							title="Right"
							icon="editor-alignright"
							onClick={ () => console.log( 'Right' ) }
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label="More"
							controls={ [
								{
									title: 'Button 1',
									icon: 'editor-alignright',
								},
								{
									title: 'Button 2',
									icon: 'editor-alignright',
								},
							] }
						/>
					</ToolbarGroup>
				) }
				<ToolbarGroup>
					<ToolbarButton
						title="Left 2"
						icon="editor-alignleft"
						onClick={ () => console.log( 'Left' ) }
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{ ...useBlockProps() }
				tagName="h2"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder={ 'Введите заголовок' }
				allowedFormats={ [] }
			/>
		</>
	);
}
