
var friendsData = require('./../data/friends.js');

module.exports = function(app){
	//getting data from friends.js
	app.get('/api/surveydata', function (req, res) {
		res.json(friendsData);
	});

	//in this we are finding  best match for the given user data
	app.post('/api/surveydata', function (req, res) {

		console.log(req.body.scores);
		var resultArrayList= [];
		var userArray=req.body.scores;
		console.log("userArray",userArray);
		console.log("friendsData",friendsData);
		//in this we are computing the difference between friends data and user data
		//and storing the result as list of arrays
		for(var j = 0;j< friendsData.length;j++){
			resultArrayList[j]=[];
			for(let i = 0; i < userArray.length; i++) {

			  resultArrayList[j].push(Math.abs(userArray[i] - friendsData[j].scores[i]));
			}
			console.log("resultArrayList["+j+"] ",resultArrayList[j]);
		}
		
		var sumarray=[];
		//here we are finding smallest index from sums array
		findSmallestDiffIndex = function() {
			var smallest = sumarray[0];
			var smallId = 0;

			for(var i=1; i<sumarray.length; i++){
			    if(sumarray[i] < smallest){
			        smallest = sumarray[i];
			        smallId = i;
			    }
			}

			return smallId;
		}
		//here we are finding amember with min score
		function findMinScoreMember() {
			
			for(var j = 0;j< resultArrayList.length;j++){
				//var temparray = resultArrayList[j;]
				var sum=0;
				for(let i = 0; i < resultArrayList[j].length; i++) {
					sum += resultArrayList[j][i];
				}
				sumarray.push(sum);
				console.log("sumarray",sumarray);
			}
			var tempSmallId = findSmallestDiffIndex();
			//console.log("---- minimum score person -----\n");
			//console.log("index:"+tempSmallId);
			//console.log("name:"+friendsData[tempSmallId].name);
			//console.log("photo:"+friendsData[tempSmallId].photo);
			return friendsData[tempSmallId];

		}
		res.json(findMinScoreMember());

		friendsData.push(req.body);
		//console.log("friendsData",friendsData);
		
	});

}		