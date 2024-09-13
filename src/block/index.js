import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
// import save from './save';
// import edit from './edit';
// import './style.scss';

registerBlockType( 'zoduaks/myblock', {
	title: __( 'My Block', 'myblocks' ),
	description: __( 'Single Block', 'myblocks' ),
	icon: 'universal-access',
	parent: [ 'zoduaks/myblocks' ],
	edit: () => <p>Admin Edit</p>,
	save: () => <p>Save Edit</p>,
} );
