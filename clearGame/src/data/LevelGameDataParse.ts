class LevelGameDataParse {
	public static parseLevelGameData(val: any) {
		GameData.stepNum = val.step;
		GameData.levelStepNum = val.setp;
		GameData.elementTypes = val.element;
		GameData.levelBackgroundImageName = val.levelbgimg;
		this.parseLevelReq(val.levelreq);
	}
	private static parseLevelReq(val: any) {
		GameData.levelreq.openChange();
		let len = val.length;
		for (let i = 0; i < len; i++) {
			GameData.levelreq.addElement(val[i].type, val[i].num);
		}
	}
}