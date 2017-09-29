import { ControllerStateStore } from "redux-store-controller";
import { words } from "lodash";
import StructureFolding from "@/structureFolding/index";

class HistoryController extends ControllerStateStore {
	constructor(options) {
		HistoryController.basic(options);
		super(options);
		this.history = options.history;
	}

	stateDidUpdate() {
		this.history.push(`${this.state.viewport}`);
	}

	static basic(options) {
		const path = options.history.location.pathname;

		options.stores.viewport.set({
			viewport: path
		});

		HistoryController.secondary(options);
	}

	static secondary(options) {
		const path = words(options.history.location.pathname, /[^/ ]+/g);

		switch (path[0]) {
			case "program-types":
				break;
			case "program-structures": {
				options.stores.programStructureTab.set({
					tab: path[1],
					tree: StructureFolding[path[1]]
				});
				break;
			}
			default:
				break;
		}
	}
}

export default HistoryController;
