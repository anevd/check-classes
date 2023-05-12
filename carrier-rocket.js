const RocketEngine = require("./rocket-engine");
const SolidPropellantRocketEngine = require("./solid-propellant-rocket-engine");
class CarrierRocket {
	constructor(stages) {
		this.stages = [...stages];
	}
	detachStage() {
		this.stages = this.stages.slice(1);
		return this.stages;
	}
}

const stages = [new SolidPropellantRocketEngine("Антарес-1", 3000, "каучук"), new RocketEngine(8000, "жидкий водород")];
const rocket = new CarrierRocket(stages);

module.exports = CarrierRocket;
