// import template from './editable.html';

const ENTER = 13, ESC = 27;

export default {
	template: `
	<span>
		<span ng-hide="$ctrl.editing"
			ng-click="$ctrl.edit()">{{$ctrl.text}}</span>

		<span ng-show="$ctrl.editing">
			<input ng-model="$ctrl.proposed"
				ng-blur="$ctrl.editing && $ctrl.change()"
				ng-keydown="$ctrl.keydown($event)">
		</span>

	</span>`,
	bindings: {
		text: '<',
		changed: '&'
	},
	controller() {
		this.editing = false;
		
		this.edit = () => {
			this.proposed = this.text;
			this.editing = true;
		};

		this.keydown = e => {
			if( e.which === ENTER ) this.change();
			else if ( e.which === ESC ) this.editing = false;
		};

		this.change = () => {
			if ( !this.editing ) return;

			this.text = this.proposed;
			this.editing = false;
			this.changed();
		};


	}
};