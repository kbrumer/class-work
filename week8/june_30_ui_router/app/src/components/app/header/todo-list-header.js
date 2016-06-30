export default {
	template: `
	<div class="displays">
		<label ng-repeat="display in $ctrl.displays">
			{{display}}
			<input type="radio" name="display" 
				ng-model="$ctrl.display"
				ng-value="display">
		</label>
	</div>`,
	controller() {
		this.displays = [ 'thumb', 'list', 'gallery' ];
		this.display = 'list';
	}
};
