let product:any = {
	id:101,
	name:"mobile",
	quantity:52
};
for(var property in product){
	console.log(property + " : "+product[property]);
}
