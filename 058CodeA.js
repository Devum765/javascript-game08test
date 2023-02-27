

<!--【シナリオデータ】-->

Division = new Array();
Division[0] = new Array();
Division[1] = new Array();

DivSousuu = 199;

FirstNum = 0;

function For05Sel00() {
	if (Turn==1) {
		SceHenA = document.For05.S00.selectedIndex;
		switch (SceHenA) {
			case 0:
				Scenario001();
			break;
			case 1:
				Scenario002();
			break;
			case 2:
				Scenario003();
			break;
			case 3:
				Scenario010();
			break;
		}
		AreaIdHyouji();
		HokyuuKeisann();
		CommandSelect();
		SennryokuKeisann();
		MapHyouji();
	}
	if (Turn!=1) {
		switch (ScenarioNum) {
			case 1:
				document.For05.S00.selectedIndex  = 0;
			break;
			case 2:
				document.For05.S00.selectedIndex  = 1;
			break;
			case 3:
				document.For05.S00.selectedIndex  = 2;
			break;
			case 10:
				document.For05.S00.selectedIndex  = 3;
			break;
		}
	}
}

//独ソ戦マップの地形指定はココに存在した(ガバガバじゃねーかｗ)、統合時に注意

Scenario001();
AreaIdHyouji();
