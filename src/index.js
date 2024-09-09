// var registerBlockType = wp.blocks.registerBlockType;
// var createElement = wp.element.createElement;

import { registerBlockType } from "@wordpress/blocks";
import save from "./save"
import edit from "./edit"
import "./style.scss";


registerBlockType("zoduaks/myblock", {

	edit: edit,
	save: save
});