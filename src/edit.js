import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks allowedBlocks={ [ 'zoduaks/myblock' ] } />
		</div>
	);
}
