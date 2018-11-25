import connect from '../db/connect.js';

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

	// 数据库设置
	app.context.db_connect = connect;
	app.context.db_infos = connect('infos');
	app.context.db_static_infos = connect('static_infos');
}