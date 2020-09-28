class MartianRover{
  constructor(xAxis, yAxis, rotation, commandMoves){
	this.rotation = rotation;
	this.xAxis = xAxis;
	this.yAxis = yAxis;
	this.travelLog = []; // Just for myself to keep track of the rover's travel
  this.roverOffcourse = false;
  this.commandMoves = commandMoves.split('');
  }

// ======================

TurnLeft() {
	console.log('TurnLeft was called!');

	switch (this.rotation) {
		case (this.rotation = 'N'):
			this.rotation = 'W';
			break;
		case (this.rotation = 'W'):
			this.rotation = 'S';
			break;
		case (this.rotation = 'S'):
			this.rotation = 'E';
			break;
		case (this.rotation = 'E'):
			this.rotation = 'N';
			break;
	}
	console.log(this.rotation);
}

TurnRight() {
	console.log('TurnRight was called!');

	switch (this.rotation) {
		case (this.rotation = 'N'):
			this.rotation = 'E';
			break;
		case (this.rotation = 'E'):
			this.rotation = 'S';
			break;
		case (this.rotation = 'S'):
			this.rotation = 'W';
			break;
		case (this.rotation = 'W'):
			this.rotation = 'N';
			break;
	}
	console.log(this.rotation);
}

GoForward() {
	console.log('Go Forward was called');

	switch (this.rotation) {
		case (this.rotation = 'N'):
			this.yAxis++;
			break;
		case (this.rotation = 'E'):
			this.xAxis++;
			break;
		case (this.rotation = 'S'):
			this.yAxis--;
			break;
		case (this.rotation = 'W'):
			this.xAxis--;
			break;
	}

	console.log('Rover now in: x: ' + this.xAxis + ' y: ' + this.yAxis);
	this.travelLog.push('[' + this.xAxis + ',' + this.yAxis + ']');
  console.log('Final Position of the Martian Rover ' + this.xAxis + ',' + this.yAxis);
}

commands() {
	for (var i = 0; i <this.commandMoves.length; i++) {
		switch (this.commandMoves[i]) {
			case (this.commandMoves[i] = 'R'):
				this.TurnRight();
				break;
			case (this.commandMoves[i] = 'L'):
				this.TurnLeft();
				break;
			case (this.commandMoves[i] = 'F'):
				this.GoForward();
				break;
			default:
				continue;
		  break;
		}
	}
console.log('Travel log: ' + this.travelLog);
}


}


module.exports = MartianRover


//5 3
//1 1 E
//RFRFRFRF
//3 2 N
//FRRFLLFFRRFLL
//0 3 W
//LLFFFLFLFL