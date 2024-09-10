import { registerBlockType } from '@wordpress/blocks';
import save from './save';
import edit from './edit';
import './style.scss';

registerBlockType( 'zoduaks/myblock', {
	edit,
	save,
} );
