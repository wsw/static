class GameData {
	public static unmapnum: number = 0;
	public static mapData: number[][];
	public static stepNum: number = 0;
	public static levelStepNum: number = 0;
	public static elementTypes: number[];
	public static levelreq: LevelRequire;
	public static elements: GameElement[];
	public static unusedElements: number[];
	public static levelBackgroundImageName: string = '';

	public static maxRow: number = 8;
	public static maxColum: number = 8;
	public static currentElementNum: number = 0;


	public static initData() {
		GameData.mapData = [];
		for (let i = 0; i < GameData.maxRow; i++) {
			let arr: number[] = [];
			for (let t = 0; t < GameData.maxColum; t++) {
				GameData.mapData[t].push(-2);
			}
		}
		GameData.levelreq = new LevelRequire();
		GameData.elements = [];
		GameData.unusedElements = [];
		let len: number = GameData.maxRow * GameData.maxColum;
		for (let i = 0; i < len; i++) {
			let ele = new GameElement();
			ele.id = i;
			GameData.elements.push(ele);
			GameData.unusedElements.push(i);
		}
		GameData.stageW = egret.MainContext.instance.stage.stageWidth;
		GameData.stageH = egret.MainContext.instance.stage.stageHeight;
	}
	public static stageW: number = 0;
	public static stageH: number = 0;
}