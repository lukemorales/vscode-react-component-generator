/* IF !Hooks/State */
import React from 'react';
/* ENDIF *//* IF Hooks/State */
import React, { useState, useEffect } from 'react';
/* ENDIF *//* IF StyledComponents*/
// import {} from './__ComponentName__Styles.js';
/* ENDIF */

/* IF !Hooks/State */
const __ComponentName__ = () => (
	<>
		<h1>__ComponentName__ Component</h1>
	</>
);
/* ENDIF *//* IF Hooks/State */
const __ComponentName__ = () => {
	const [hook, setHook] = useState(hook);

	return (
		<>
			<h1>__ComponentName__ Component</h1>
		</>
	);
};
/* ENDIF */

export default __ComponentName__;
