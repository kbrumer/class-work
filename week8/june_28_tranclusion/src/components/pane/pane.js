import template from './pane.html';
import styles from './pane.scss';

export default {
	template,
	transclude: {
		header: '?paneHeader',
		main: '?paneMain',
		footer: '?paneFooter'
	},
	bindings: {
		color: '@'
	},
	controller() {
		this.styles = styles;
		
		this.color = this.color || 'darksalmon';

		this.alert = () => {
			alert('hello from pane');
		};
	}
};
