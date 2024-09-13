import { registerBlockType } from '@wordpress/blocks';
import './block';
import save from './save';
import edit from './edit';
import './style.scss';

registerBlockType( 'zoduaks/myblocks', {
	edit,
	save,
} );
