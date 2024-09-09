// var registerBlockType = wp.blocks.registerBlockType;
// var createElement = wp.element.createElement;

import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";
import "./editor.scss";

registerBlockType("zoduaks/myblock", {

	edit: function() {
		const blockProps = useBlockProps();
		return <h1 {...blockProps}>Edit 2</h1>;
	},
	save: function() {
		const blockProps = useBlockProps.save();
		return <h1 {...blockProps}>Save 3</h1>;
	}
});