const RocketEngine = require("./rocket-engine");

class solidPropellantRocketEngine extends RocketEngine {
	constructor(name, specificImpulse, rocketPropellant) {
		super(specificImpulse, rocketPropellant);
		this.name = name;
	}
}

module.exports = solidPropellantRocketEngine;
