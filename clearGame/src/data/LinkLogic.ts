class LinkLogic {
	public static lines: number[][];
	public static isHaveLine(): boolean {
		LinkLogic.lines = [];
		let currentType: string = '';
		let typeNum: number = 0;

		for (let i = 0; i < GameData.maxRow; i++) {
			for (let t = 0; i < GameData.maxColum; i++) {
				if (GameData.mapData[i][t] != -1) {
					if (currentType !== GameData.elements[GameData.mapData[i][t]].type {

					}
				}
			}
		}
	}
}