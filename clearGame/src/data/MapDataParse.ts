class MapDataParse {
	public static createMapData(val: number[]): void {
		let len: number = val.length;
		GameData.unmapnum = len;
		let index: number = 0;
		for (let i = 0; i < len; i++) {
			index = val[i];
			let row = Math.floor(index / GameData.maxColum);
			let col = index % GameData.maxRow;
			GameData.mapData[row][col] = -1;
		}
		GameData.currentElementNum = GameData.maxRow * GameData.maxColum - len;
		
	}
}