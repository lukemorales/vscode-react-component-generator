import React, { Component } from 'react';
/* IF StyledComponents */
// import {} from './__ComponentName__Styles.js';
/* ENDIF */

/* IF !Hooks/State */
export default class __ComponentName__ extends Component {
	render() {
		return (
			<>
				<h1>__ComponentName__ Component</h1>
			</>
		);
	}
}
/* ENDIF *//* IF Hooks/State */
export default class __ComponentName__ extends Component {
	state = {
		newState: null,
	};

	render() {
		return (
			<>
				<h1>__ComponentName__ Component</h1>
			</>
		);
	}
}
/* ENDIF */