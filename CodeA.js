
Tate = 40;
Yoko = 40;

<!--【シナリオデータ】-->

Division = new Array();
Division[0] = new Array();
Division[1] = new Array();

DivSousuu = 199;

AreaData = new Array();

for (HenA=1;HenA<=Tate;HenA++) {
	for (HenB=1;HenB<=Yoko;HenB++) {
		AreaData[HenA*100+HenB] = new Array(9);
		AreaData[HenA*100+HenB][0] = 0; //占領国
		AreaData[HenA*100+HenB][1] = 0; //生産力
		AreaData[HenA*100+HenB][2] = 0; //(空データ)
		AreaData[HenA*100+HenB][3] = 999; //第1師団
		AreaData[HenA*100+HenB][4] = 999; //第2師団
		AreaData[HenA*100+HenB][5] = 999; //第3師団
		AreaData[HenA*100+HenB][6] = 999; //第4師団
		AreaData[HenA*100+HenB][7] = 999; //第5師団
		AreaData[HenA*100+HenB][8] = 0; //駐留師団数
		AreaData[HenA*100+HenB][9] = 0; //地形
	}
}

FirstNum = 0;

function For05Sel00() {
	if (Turn==1) {
		SceHenA = document.For05.S00.selectedIndex;
		switch (SceHenA) {
			case 0:
				Scenario00();
			break;
			case 1:
				Scenario01();
			break;
			case 2:
				Scenario100();
			break;
		}
		HokyuuKeisann();
		CommandSelect();
		SennryokuKeisann();
		MapHyouji();
	}
	if (Turn!=1) {
		switch (ScenarioNum) {
			case 0:
				document.For05.S00.selectedIndex  = 0;
			break;
			case 1:
				document.For05.S00.selectedIndex  = 1;
			break;
			case 100:
				document.For05.S00.selectedIndex  = 2;
			break;
		}
	}
}

<!--【地形】-->

//0平地、1海、2都市

//バルト海
AreaData[ 101][9] = 1;
AreaData[ 201][9] = 1;
AreaData[ 301][9] = 1;
AreaData[ 401][9] = 1;
AreaData[ 501][9] = 1;
AreaData[ 601][9] = 1;
AreaData[ 701][9] = 1;
AreaData[ 102][9] = 1;
AreaData[ 202][9] = 1;
AreaData[ 302][9] = 1;
AreaData[ 103][9] = 1;
AreaData[ 103][9] = 1;
AreaData[ 203][9] = 1;
AreaData[ 303][9] = 1;
AreaData[ 403][9] = 1;
AreaData[ 104][9] = 1;
AreaData[ 105][9] = 1;
AreaData[ 106][9] = 1;
AreaData[ 107][9] = 1;
AreaData[ 307][9] = 1;
AreaData[ 108][9] = 1;
AreaData[ 110][9] = 1;

//黒海
AreaData[2006][9] = 1;
AreaData[2007][9] = 1;
AreaData[1907][9] = 1;
AreaData[1807][9] = 1;
AreaData[2008][9] = 1;
AreaData[1908][9] = 1;
AreaData[1808][9] = 1;
AreaData[1708][9] = 1;
AreaData[2009][9] = 1;
AreaData[1909][9] = 1;
AreaData[1809][9] = 1;
AreaData[2010][9] = 1;
AreaData[1910][9] = 1;
AreaData[1710][9] = 1;
AreaData[2011][9] = 1;
AreaData[2012][9] = 1;
AreaData[1912][9] = 1;
AreaData[1712][9] = 1;
AreaData[2013][9] = 1;
AreaData[1813][9] = 1;
AreaData[1713][9] = 1;
AreaData[2014][9] = 1;
AreaData[1714][9] = 1;
AreaData[1614][9] = 1;

//プリチャク湿地
AreaData[1105][9] = 3;
AreaData[1006][9] = 3;
AreaData[1107][9] = 3;
AreaData[1207][9] = 3;

for (HenA=1;HenA<=Tate;HenA++) {
	for (HenB=1;HenB<=Yoko;HenB++) {
		if (AreaData[HenA*100+HenB][0]==1) {
			HenC = HenA*100+HenB;
			document.getElementById("Area_"+HenC).src="UmiHex.png";
		}
		if (AreaData[HenA*100+HenB][0]==2) {
			HenC = HenA*100+HenB;
			document.getElementById("Area_"+HenC).src="SovHex.png";
		}
	}
}

Scenario00();
