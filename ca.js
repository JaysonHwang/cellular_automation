
$(document).ready(function() {					
	$("#btn_action").click(function() {
		var input_rule = document.getElementById('rule').value;
		if($.isNumeric(input_rule) & input_rule > 0 & input_rule < 257) {		
			execute(parseInt(input_rule));
		}	
	});
});

function execute(rule_number) {
	var auto = makeCA();
	var mas = [];
	for(i = 0; i < 100; i++) {
		mas.push(Math.floor((Math.random()) * 100) % 2);	
	}
	auto.init(mas, rule_number);
	
	for(j = 0; j < 100; j++) {
		var temp = auto.getState();
		draw(temp, j);
		auto.nextState();
	}
}

function draw(mas, step) {
	var a_canvas = document.getElementById("a");
	var context = a_canvas.getContext("2d");
	
	for(i = 0; i < 100; i++) {
		if(mas[i] == 0) {
			context.fillStyle = "rgb(0,0,0)";
		}	
		else {
			context.fillStyle = "rgb(200,0,0)";
		}
		var step_size = 5;
		context.fillRect(step_size*i, step_size*step, step_size, step_size);
	}
}

function makeCA() {
  var state = [], rule = 0;

  function newBit(index) {
	binary = rule.toString(2);
	while(binary.length < 8) {
		binary = "0" + binary;
	}
	
	if(index > 0) {
		//0**
		if(state[index - 1] == 0) {
			if(index < (state.length - 1)) {
				//0*0
				if(state[index + 1] == 0) {
					//000
					if(state[index] == 0) {
						return(parseInt(binary[7]));
					}
					
					//010
					else {
						return(parseInt(binary[5]));
					}
				}
				//0*1
				else {
					//001
					if(state[index] == 0) {
						return(parseInt(binary[6]));
					}
					
					//011
					else {
						return(parseInt(binary[4]));
					}
				}	
			}
			else {
				//0*0
				if(state[0] == 0) {
					//000
					if(state[index] == 0) {
						return(parseInt(binary[7]));
					}
					
					//010
					else {
						return(parseInt(binary[5]));
					}
				}
				//0*1
				else {
					//001
					if(state[index] == 0) {
						return(parseInt(binary[6]));
					}
					//011
					else {
						return(parseInt(binary[4]));
					}
				}					
			}
		}
		//1**
		else {
			if(index < (state.length - 1)) {
				//1*0
				if(state[index + 1] == 0) {
					//100
					if(state[index] == 0) {
						return(parseInt(binary[3]));
					}
					//110
					else {
						return(parseInt(binary[1]));
					}
				}
				//1*1
				else {
					//101
					if(state[index] == 0) {
						return(parseInt(binary[2]));
					}
					//111
					else {
						return(parseInt(binary[0]));
					}
				}	
			}
			else {
				//1*0
				if(state[0] == 0) {
					//100
					if(state[index] == 0) {
						return(parseInt(binary[3]));
					}
					//110
					else {
						return(parseInt(binary[1]));
					}
				}
				//1*1
				else {
					//101
					if(state[index] == 0) {
						return(parseInt(binary[2]));
					}
					//111
					else {
						return(parseInt(binary[0]));
					}
				}					
			}			
		}
	}
	else {
		//0**
		if(state[state.length - 1] == 0) {
			if(index < (state.length - 1)) {
				//0*0
				if(state[index + 1] == 0) {
					//000
					if(state[index] == 0) {
						return(parseInt(binary[7]));
					}
					
					//010
					else {
						return(parseInt(binary[5]));
					}
				}
				//0*1
				else {
					//001
					if(state[index] == 0) {
						return(parseInt(binary[6]));
					}
					
					//011
					else {
						return(parseInt(binary[4]));
					}
				}	
			}
			else {
				//0*0
				if(state[0] == 0) {
					//000
					if(state[index] == 0) {
						return(parseInt(binary[7]));
					}
					
					//010
					else {
						return(parseInt(binary[5]));
					}
				}
				//0*1
				else {
					//001
					if(state[index] == 0) {
						return(parseInt(binary[6]));
					}
					//011
					else {
						return(parseInt(binary[4]));
					}
				}					
			}
		}
		//1**
		else {
			if(index < (state.length - 1)) {
				//1*0
				if(state[index + 1] == 0) {
					//100
					if(state[index] == 0) {
						return(parseInt(binary[3]));
					}
					//110
					else {
						return(parseInt(binary[1]));
					}
				}
				//1*1
				else {
					//101
					if(state[index] == 0) {
						return(parseInt(binary[2]));
					}
					//111
					else {
						return(parseInt(binary[0]));
					}
				}	
			}
			else {
				//1*0
				if(state[0] == 0) {
					//100
					if(state[index] == 0) {
						return(parseInt(binary[3]));
					}
					//110
					else {
						return(parseInt(binary[1]));
					}
				}
				//1*1
				else {
					//101
					if(state[index] == 0) {
						return(parseInt(binary[2]));
					}
					//111
					else {
						return(parseInt(binary[0]));
					}
				}					
			}			
		}	
	}
  }

  return {
    init: function (state_, rule_) {
      state = state_;
      rule = rule_;
    },
    nextState: function () {
      var newState = [];
      for (var i = 0; i < state.length; i++) {
        newState[i] = newBit(i);
      }
      state = newState;
    },
    getState: function () {
      return state;
    }
  };
}