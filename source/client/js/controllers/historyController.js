import { ControllerStateStore } from "redux-store-controller";
import { words } from "lodash";
import StructureFolding from "@/structureFolding/index";

class HistoryController extends ControllerStateStore {
	constructor(options) {
		HistoryController.basic(options);
		super(options);
		this.history = options.history;

		this.history.listen(() => {
			HistoryController.basic(options);
		});
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
				const type = path[1] || options.stores.programStructureTab.getStore.tab;
				options.stores.programStructureTab.set({
					tab: path[1],
					tree: StructureFolding[type]
				});
				break;
			}
			default:
				break;
		}
	}
}

export default HistoryController;
