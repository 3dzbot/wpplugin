import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function edit() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const blockProps = useBlockProps();
	return <h1 { ...blockProps }>Edit 2</h1>;
}
