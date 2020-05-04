
var calc=require('./Calculator.js')
var read=require('readline-sync') //npm install readline-sync
var http=require('http')
console.info('----Calculator Menu(for 2 values)----')
console.log('1.Addition')
console.log('2.Subtraction')
console.log('3.Multiplication')
console.log('4.Division')
console.log('5.Modulor Division')
var option=read.questionInt('Enter your choice:')
if(option==1){
	var x,y;
	x=read.questionFloat('Enter A value:')
	y=read.questionFloat('Enter B value:')
	console.info('Check your result @ http://127.0.0.1:9000/')
	result='Addition of '+x+' and '+y+' is :'+(calc.add(x,y))
	var surver=http.createServer(function(req,res){
	result
	res.write(result)
	res.end()
	}).listen(9000)
}	
else if(option==2){
	var x,y;
	x=read.questionFloat('Enter A value:')
	y=read.questionFloat('Enter B value:')
	console.info('Check your result @ http://127.0.0.1:9000/')
	result='Subtraction of '+x+' and '+y+' is :'+(calc.sub(x,y))
	var surver=http.createServer(function(req,res){
	res.write(result)
	res.end()
	}).listen(9000)
}	 
else if(option==3){
	var x,y;
	x=read.questionFloat('Enter A value:')
	y=read.questionFloat('Enter B value:')
	console.info('Check your result @ http://127.0.0.1:9000/')
	result='Multiplication of '+x+' and '+y+' is :'+(calc.mult(x,y))
	var surver=http.createServer(function(req,res){
	res.write(result)
	res.end()
	}).listen(9000)
}
else if(option==4){
	var x,y;
	x=read.questionFloat('Enter A value:')
	y=read.questionFloat('Enter B value:')
	console.info('Check your result @ http://127.0.0.1:9000/')
	result='Division of '+x+' and '+y+' is :'+(calc.div(x,y))
	var surver=http.createServer(function(req,res){
	res.write(result)
	res.end()
	}).listen(9000)
}
else if(option==5){
	var x,y;
	x=read.questionFloat('Enter A value:')
	y=read.questionFloat('Enter B value:')
	console.info('Check your result @ http://127.0.0.1:9000/')
	result='Modulor division(remainder) of '+x+' and '+y+' is :'+(calc.m_div(x,y))
	var surver=http.createServer(function(req,res){
	res.write(result)
	res.end()
	}).listen(9000)
}
else{
console.log('Invalid option')
}
