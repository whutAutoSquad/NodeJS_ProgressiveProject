/*
* 全局函数和变量
* 即绑定在 ctx.context 上的函数和变量
*/

let getValidatedProps = ( obj = {} ) => {
	if(typeof(obj) != "object"){
		console.log("[global.getValidatedProps error] Got wrong param type, expect an object.")
	}

	let tempObj = {}
	for(let prop in obj) {
		if( obj[prop] != undefined ){
			tempObj[prop] = obj[prop];
		}
	}
	return tempObj;
}

export default app => {
	app.context.getValidatedProps = getValidatedProps;
}