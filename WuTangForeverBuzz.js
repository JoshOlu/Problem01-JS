class WuTangForeverBuzz {
    wuTangClan(value){
        let output ="";
        for (let i = 1; i <= value; i++) {
        	if (i % 15 == 0) {
        		output += 'WuTangForever\n';
        		// console.log(output);
        	} else if (i % 3 == 0) {
        		output += 'Wu\n';
        		// console.log(output);
        	} else if (i % 5 == 0) {
        		output += 'Tang\n';
        		// console.log(output);
        	} else {
        		output += i.toString() + '\n';
        	}
        }
        return output;
    }
}

module.exports = WuTangForeverBuzz;