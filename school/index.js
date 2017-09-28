var kclass = require('./kclass')

kclass.add('Scott',['s1','s2'])


exports.add = function(kclasses) {
	 kclasses.forEach(function(item , index){
	 	var _kclass = item
	 	var teacherName = item.teacherName
	 	var students = item.students

	 	kclass.add('Scott',['s1','s2'])
	 })
}