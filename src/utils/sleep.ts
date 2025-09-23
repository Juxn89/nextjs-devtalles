export const sleep = (seconds: number = 1) => {
	return new Promise( (resolver) => {
			setTimeout(() => {
				resolver(true);
			}, seconds * 1000);
	} )
}