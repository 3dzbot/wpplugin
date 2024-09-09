// var registerBlockType = wp.blocks.registerBlockType;
// var createElement = wp.element.createElement;

import { registerBlockType } from "@wordpress/blocks";

registerBlockType("zoduaks/myblock", {
	edit: function() {
		return <h1 className="admin_title">Edit 2</h1>;
	},
	save: function() {
		return <h1 className="front_title">Save 2</h1>;
	}
});