
<!--【マップ接続】-->

AreaSetuzoku = new Array();

for (HenA=1;HenA<=Tate;HenA++) {
	for (HenB=1;HenB<=Yoko;HenB++) {
		AreaSetuzoku[HenA*100+HenB] = new Array();
		for (HenC=1;HenC<=Tate;HenC++) {
			for (HenD=1;HenD<=Yoko;HenD++) {
				AreaSetuzoku[HenA*100+HenB][HenC*100+HenD] = 0;
			}
		}
	}
}

for (HenA=1;HenA<=Tate;HenA++) {
	for (HenB=1;HenB<=Yoko;HenB++) {
		if (HenB%2==0) {
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-100] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-  1] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+ 99] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+100] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+101] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+  1] = 1;
		}
		if (HenB%2==1) {
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-100] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-101] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-  1] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+100] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+  1] = 1;
			AreaSetuzoku[HenA*100+HenB][HenA*100+HenB- 99] = 1;
		}
	}
}

for (HenA=1;HenA<=Tate;HenA++) {
	for (HenB=1;HenB<=Yoko;HenB++) {
		if (AreaData[HenA*100+HenB][9]==1 || AreaData[HenA*100+HenB][9]==3) {//海・湿地
			if (HenB%2==0) {
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-100] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-  1] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+ 99] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+100] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+101] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+  1] = 0;
			}
			if (HenB%2==1) {
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-100] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-101] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB-  1] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+100] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB+  1] = 0;
				AreaSetuzoku[HenA*100+HenB][HenA*100+HenB- 99] = 0;
			}
		}
	}
}

for (HenA=1;HenA<=Tate;HenA++) {
	for (HenB=1;HenB<=Yoko;HenB++) {
		for (HenC=1;HenC<=Tate;HenC++) {
			for (HenD=1;HenD<=Yoko;HenD++) {
				if (AreaSetuzoku[HenA*100+HenB][HenC*100+HenD]==0) { AreaSetuzoku[HenC*100+HenD][HenA*100+HenB] = 0; }
			}
		}
	}
}

<!--【エリア選択】-->

ComHen = 1;
TurnJinnei = 0;
TekiTurnJinnei = 1;

function MapShidannData() {
	//リセット
	for (HenA=1;HenA<=Tate;HenA++) {
		for (HenB=1;HenB<=Yoko;HenB++) {
			AreaData[HenA*100+HenB][3] = 999; //第1師団
			AreaData[HenA*100+HenB][4] = 999; //第2師団
			AreaData[HenA*100+HenB][5] = 999; //第3師団
			AreaData[HenA*100+HenB][6] = 999; //第4師団
			AreaData[HenA*100+HenB][7] = 999; //第5師団
			AreaData[HenA*100+HenB][8] = 0; //駐留師団数
		}
	}
	//再当てはめ
	for (HenB=0;HenB<=1;HenB++) {
		for (HenA=0;HenA<=DivSousuu;HenA++) {
			if (Division[HenB][HenA][1]!=0) {
				HenD = AreaData[Division[HenB][HenA][4]][8];
				HenC = HenD+3;
				AreaData[Division[HenB][HenA][4]][HenC] = HenA;
				AreaData[Division[HenB][HenA][4]][8]++;
			}
		}
	}
	//SenntakuArea01
	if (AreaData[SenntakuArea01][3]!=999) {
		document.For01.Tex00.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][3]][0];
		document.For01.Tex10.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][3]][2]+"/"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][3]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea01][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea01][3]) {
				document.For01.Tex00.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][3]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea01][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea01][3]) {
			document.For01.Tex00.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][3]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea01][3]==999) {
		document.For01.Tex00.defaultValue = "×";
		document.For01.Tex10.defaultValue = "0";
	}
	if (AreaData[SenntakuArea01][4]!=999) {
		document.For01.Tex01.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][4]][0];
		document.For01.Tex11.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][4]][2]+"/"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][4]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea01][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea01][4]) {
				document.For01.Tex01.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][4]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea01][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea01][4]) {
			document.For01.Tex01.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][4]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea01][4]==999) {
		document.For01.Tex01.defaultValue = "×";
		document.For01.Tex11.defaultValue = "0";
	}
	if (AreaData[SenntakuArea01][5]!=999) {
		document.For01.Tex02.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][5]][0];
		document.For01.Tex12.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][5]][2]+"/"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][5]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea01][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea01][5]) {
				document.For01.Tex02.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][5]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea01][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea01][5]) {
			document.For01.Tex02.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][5]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea01][5]==999) {
		document.For01.Tex02.defaultValue = "×";
		document.For01.Tex12.defaultValue = "0";
	}
	if (AreaData[SenntakuArea01][6]!=999) {
		document.For01.Tex03.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][6]][0];
		document.For01.Tex13.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][6]][2]+"/"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][6]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea01][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea01][6]) {
				document.For01.Tex03.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][6]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea01][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea01][6]) {
			document.For01.Tex03.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][6]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea01][6]==999) {
		document.For01.Tex03.defaultValue = "×";
		document.For01.Tex13.defaultValue = "0";
	}
	if (AreaData[SenntakuArea01][7]!=999) {
		document.For01.Tex04.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][7]][0];
		document.For01.Tex14.defaultValue = Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][7]][2]+"/"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][7]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea01][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea01][7]) {
				document.For01.Tex04.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][7]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea01][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea01][7]) {
			document.For01.Tex04.defaultValue = "【"+Division[AreaData[SenntakuArea01][0]][AreaData[SenntakuArea01][7]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea01][7]==999) {
		document.For01.Tex04.defaultValue = "×";
		document.For01.Tex14.defaultValue = "0";
	}
	document.For01.Tex05.defaultValue = AreaName[SenntakuArea01];
	//SenntakuArea02
	if (AreaData[SenntakuArea02][3]!=999) {
		document.For01.Tex100.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][3]][0];
		document.For01.Tex110.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][3]][2]+"/"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][3]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea02][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea02][3]) {
				document.For01.Tex100.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][3]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea02][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea02][3]) {
			document.For01.Tex100.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][3]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea02][3]==999) {
		document.For01.Tex100.defaultValue = "×";
		document.For01.Tex110.defaultValue = "0";
	}
	if (AreaData[SenntakuArea02][4]!=999) {
		document.For01.Tex101.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][4]][0];
		document.For01.Tex111.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][4]][2]+"/"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][4]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea02][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea02][4]) {
				document.For01.Tex101.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][4]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea02][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea02][4]) {
			document.For01.Tex101.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][4]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea02][4]==999) {
		document.For01.Tex101.defaultValue = "×";
		document.For01.Tex111.defaultValue = "0";
	}
	if (AreaData[SenntakuArea02][5]!=999) {
		document.For01.Tex102.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][5]][0];
		document.For01.Tex112.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][5]][2]+"/"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][5]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea02][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea02][5]) {
				document.For01.Tex102.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][5]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea02][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea02][5]) {
			document.For01.Tex102.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][5]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea02][5]==999) {
		document.For01.Tex102.defaultValue = "×";
		document.For01.Tex112.defaultValue = "0";
	}
	if (AreaData[SenntakuArea02][6]!=999) {
		document.For01.Tex103.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][6]][0];
		document.For01.Tex113.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][6]][2]+"/"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][6]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea02][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea02][6]) {
				document.For01.Tex103.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][6]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea02][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea02][6]) {
			document.For01.Tex103.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][6]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea02][6]==999) {
		document.For01.Tex103.defaultValue = "×";
		document.For01.Tex113.defaultValue = "0";
	}
	if (AreaData[SenntakuArea02][7]!=999) {
		document.For01.Tex104.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][7]][0];
		document.For01.Tex114.defaultValue = Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][7]][2]+"/"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][7]][3];
		for (HenA=1;HenA<=4;HenA++) {
			if (ComHen==0 && AreaData[SenntakuArea02][0]==TurnJinnei && CommandAtari[HenA]==AreaData[SenntakuArea02][7]) {
				document.For01.Tex104.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][7]][0]+"】";
			}
		}
		if (ComHen!=0 && AreaData[SenntakuArea02][0]==TurnJinnei && SenntakuShidann==AreaData[SenntakuArea02][7]) {
			document.For01.Tex104.defaultValue = "【"+Division[AreaData[SenntakuArea02][0]][AreaData[SenntakuArea02][7]][0]+"】";
		}
	}
	if (AreaData[SenntakuArea02][7]==999) {
		document.For01.Tex104.defaultValue = "×";
		document.For01.Tex114.defaultValue = "0";
	}
	document.For01.Tex105.defaultValue = AreaName[SenntakuArea02];
}

SenntakuArea01 = 101;
SenntakuArea02 = 101;

function Area(AreaNum) {
	if ((ComHen!=2 && ComHen!=3 && ComHen!=4) || Game==1) {
		SenntakuArea02 = AreaNum;
		MapHyouji();
		MapShidannData();
	}
}

BoxSelection = 1;

function BoxSel(BoxNum) {
	switch(BoxNum) {
		case 1:
			BoxSelection = 1;
			document.getElementById("B11").src="boxOn.png";
			document.getElementById("B12").src="box.png";
			document.getElementById("B13").src="box.png";
			document.getElementById("B14").src="box.png";
			document.getElementById("B15").src="box.png";
		break;
		case 2:
			BoxSelection = 2;
			document.getElementById("B11").src="box.png";
			document.getElementById("B12").src="boxOn.png";
			document.getElementById("B13").src="box.png";
			document.getElementById("B14").src="box.png";
			document.getElementById("B15").src="box.png";
		break;
		case 3:
			BoxSelection = 3;
			document.getElementById("B11").src="box.png";
			document.getElementById("B12").src="box.png";
			document.getElementById("B13").src="boxOn.png";
			document.getElementById("B14").src="box.png";
			document.getElementById("B15").src="box.png";
		break;
		case 4:
			BoxSelection = 4;
			document.getElementById("B11").src="box.png";
			document.getElementById("B12").src="box.png";
			document.getElementById("B13").src="box.png";
			document.getElementById("B14").src="boxOn.png";
			document.getElementById("B15").src="box.png";
		break;
		case 5:
			BoxSelection = 5;
			document.getElementById("B11").src="box.png";
			document.getElementById("B12").src="box.png";
			document.getElementById("B13").src="box.png";
			document.getElementById("B14").src="box.png";
			document.getElementById("B15").src="boxOn.png";
		break;
	}
}

MapShidannData();

<!--【マップ表示】-->

window.onload = function() {

// iframe要素を取得する
var iframe = document.getElementById("if1");

// iframe内のドキュメントを取得する
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

const areas = {};

for (let i = 101; i <= 120; i++) {
  areas[`Area_${i}`] = iframeDoc.getElementById(`Area_${i}`);
}

var Area_201 = iframeDoc.getElementById("Area_201");
var Area_202 = iframeDoc.getElementById("Area_202");
var Area_203 = iframeDoc.getElementById("Area_203");
var Area_204 = iframeDoc.getElementById("Area_204");
var Area_205 = iframeDoc.getElementById("Area_205");
var Area_206 = iframeDoc.getElementById("Area_206");
var Area_207 = iframeDoc.getElementById("Area_207");
var Area_208 = iframeDoc.getElementById("Area_208");
var Area_209 = iframeDoc.getElementById("Area_209");
var Area_210 = iframeDoc.getElementById("Area_210");
var Area_211 = iframeDoc.getElementById("Area_211");
var Area_212 = iframeDoc.getElementById("Area_212");
var Area_213 = iframeDoc.getElementById("Area_213");
var Area_214 = iframeDoc.getElementById("Area_214");
var Area_215 = iframeDoc.getElementById("Area_215");
var Area_216 = iframeDoc.getElementById("Area_216");
var Area_217 = iframeDoc.getElementById("Area_217");
var Area_218 = iframeDoc.getElementById("Area_218");
var Area_219 = iframeDoc.getElementById("Area_219");
var Area_220 = iframeDoc.getElementById("Area_220");

var Area_301 = iframeDoc.getElementById("Area_301");
var Area_302 = iframeDoc.getElementById("Area_302");
var Area_303 = iframeDoc.getElementById("Area_303");
var Area_304 = iframeDoc.getElementById("Area_304");
var Area_305 = iframeDoc.getElementById("Area_305");
var Area_306 = iframeDoc.getElementById("Area_306");
var Area_307 = iframeDoc.getElementById("Area_307");
var Area_308 = iframeDoc.getElementById("Area_308");
var Area_309 = iframeDoc.getElementById("Area_309");
var Area_310 = iframeDoc.getElementById("Area_310");
var Area_311 = iframeDoc.getElementById("Area_311");
var Area_312 = iframeDoc.getElementById("Area_312");
var Area_313 = iframeDoc.getElementById("Area_313");
var Area_314 = iframeDoc.getElementById("Area_314");
var Area_315 = iframeDoc.getElementById("Area_315");
var Area_316 = iframeDoc.getElementById("Area_316");
var Area_317 = iframeDoc.getElementById("Area_317");
var Area_318 = iframeDoc.getElementById("Area_318");
var Area_319 = iframeDoc.getElementById("Area_319");
var Area_320 = iframeDoc.getElementById("Area_320");

var Area_401 = iframeDoc.getElementById("Area_401");
var Area_402 = iframeDoc.getElementById("Area_402");
var Area_403 = iframeDoc.getElementById("Area_403");
var Area_404 = iframeDoc.getElementById("Area_404");
var Area_405 = iframeDoc.getElementById("Area_405");
var Area_406 = iframeDoc.getElementById("Area_406");
var Area_407 = iframeDoc.getElementById("Area_407");
var Area_408 = iframeDoc.getElementById("Area_408");
var Area_409 = iframeDoc.getElementById("Area_409");
var Area_410 = iframeDoc.getElementById("Area_410");
var Area_411 = iframeDoc.getElementById("Area_411");
var Area_412 = iframeDoc.getElementById("Area_412");
var Area_413 = iframeDoc.getElementById("Area_413");
var Area_414 = iframeDoc.getElementById("Area_414");
var Area_415 = iframeDoc.getElementById("Area_415");
var Area_416 = iframeDoc.getElementById("Area_416");
var Area_417 = iframeDoc.getElementById("Area_417");
var Area_418 = iframeDoc.getElementById("Area_418");
var Area_419 = iframeDoc.getElementById("Area_419");
var Area_420 = iframeDoc.getElementById("Area_420");

var Area_501 = iframeDoc.getElementById("Area_501");
var Area_502 = iframeDoc.getElementById("Area_502");
var Area_503 = iframeDoc.getElementById("Area_503");
var Area_504 = iframeDoc.getElementById("Area_504");
var Area_505 = iframeDoc.getElementById("Area_505");
var Area_506 = iframeDoc.getElementById("Area_506");
var Area_507 = iframeDoc.getElementById("Area_507");
var Area_508 = iframeDoc.getElementById("Area_508");
var Area_509 = iframeDoc.getElementById("Area_509");
var Area_510 = iframeDoc.getElementById("Area_510");
var Area_511 = iframeDoc.getElementById("Area_511");
var Area_512 = iframeDoc.getElementById("Area_512");
var Area_513 = iframeDoc.getElementById("Area_513");
var Area_514 = iframeDoc.getElementById("Area_514");
var Area_515 = iframeDoc.getElementById("Area_515");
var Area_516 = iframeDoc.getElementById("Area_516");
var Area_517 = iframeDoc.getElementById("Area_517");
var Area_518 = iframeDoc.getElementById("Area_518");
var Area_519 = iframeDoc.getElementById("Area_519");
var Area_520 = iframeDoc.getElementById("Area_520");

var Area_601 = iframeDoc.getElementById("Area_601");
var Area_602 = iframeDoc.getElementById("Area_602");
var Area_603 = iframeDoc.getElementById("Area_603");
var Area_604 = iframeDoc.getElementById("Area_604");
var Area_605 = iframeDoc.getElementById("Area_605");
var Area_606 = iframeDoc.getElementById("Area_606");
var Area_607 = iframeDoc.getElementById("Area_607");
var Area_608 = iframeDoc.getElementById("Area_608");
var Area_609 = iframeDoc.getElementById("Area_609");
var Area_610 = iframeDoc.getElementById("Area_610");
var Area_611 = iframeDoc.getElementById("Area_611");
var Area_612 = iframeDoc.getElementById("Area_612");
var Area_613 = iframeDoc.getElementById("Area_613");
var Area_614 = iframeDoc.getElementById("Area_614");
var Area_615 = iframeDoc.getElementById("Area_615");
var Area_616 = iframeDoc.getElementById("Area_616");
var Area_617 = iframeDoc.getElementById("Area_617");
var Area_618 = iframeDoc.getElementById("Area_618");
var Area_619 = iframeDoc.getElementById("Area_619");
var Area_620 = iframeDoc.getElementById("Area_620");

var Area_701 = iframeDoc.getElementById("Area_701");
var Area_702 = iframeDoc.getElementById("Area_702");
var Area_703 = iframeDoc.getElementById("Area_703");
var Area_704 = iframeDoc.getElementById("Area_704");
var Area_705 = iframeDoc.getElementById("Area_705");
var Area_706 = iframeDoc.getElementById("Area_706");
var Area_707 = iframeDoc.getElementById("Area_707");
var Area_708 = iframeDoc.getElementById("Area_708");
var Area_709 = iframeDoc.getElementById("Area_709");
var Area_710 = iframeDoc.getElementById("Area_710");
var Area_711 = iframeDoc.getElementById("Area_711");
var Area_712 = iframeDoc.getElementById("Area_712");
var Area_713 = iframeDoc.getElementById("Area_713");
var Area_714 = iframeDoc.getElementById("Area_714");
var Area_715 = iframeDoc.getElementById("Area_715");
var Area_716 = iframeDoc.getElementById("Area_716");
var Area_717 = iframeDoc.getElementById("Area_717");
var Area_718 = iframeDoc.getElementById("Area_718");
var Area_719 = iframeDoc.getElementById("Area_719");
var Area_720 = iframeDoc.getElementById("Area_720");

var Area_801 = iframeDoc.getElementById("Area_801");
var Area_802 = iframeDoc.getElementById("Area_802");
var Area_803 = iframeDoc.getElementById("Area_803");
var Area_804 = iframeDoc.getElementById("Area_804");
var Area_805 = iframeDoc.getElementById("Area_805");
var Area_806 = iframeDoc.getElementById("Area_806");
var Area_807 = iframeDoc.getElementById("Area_807");
var Area_808 = iframeDoc.getElementById("Area_808");
var Area_809 = iframeDoc.getElementById("Area_809");
var Area_810 = iframeDoc.getElementById("Area_810");
var Area_811 = iframeDoc.getElementById("Area_811");
var Area_812 = iframeDoc.getElementById("Area_812");
var Area_813 = iframeDoc.getElementById("Area_813");
var Area_814 = iframeDoc.getElementById("Area_814");
var Area_815 = iframeDoc.getElementById("Area_815");
var Area_816 = iframeDoc.getElementById("Area_816");
var Area_817 = iframeDoc.getElementById("Area_817");
var Area_818 = iframeDoc.getElementById("Area_818");
var Area_819 = iframeDoc.getElementById("Area_819");
var Area_820 = iframeDoc.getElementById("Area_820");

var Area_901 = iframeDoc.getElementById("Area_901");
var Area_902 = iframeDoc.getElementById("Area_902");
var Area_903 = iframeDoc.getElementById("Area_903");
var Area_904 = iframeDoc.getElementById("Area_904");
var Area_905 = iframeDoc.getElementById("Area_905");
var Area_906 = iframeDoc.getElementById("Area_906");
var Area_907 = iframeDoc.getElementById("Area_907");
var Area_908 = iframeDoc.getElementById("Area_908");
var Area_909 = iframeDoc.getElementById("Area_909");
var Area_910 = iframeDoc.getElementById("Area_910");
var Area_911 = iframeDoc.getElementById("Area_911");
var Area_912 = iframeDoc.getElementById("Area_912");
var Area_913 = iframeDoc.getElementById("Area_913");
var Area_914 = iframeDoc.getElementById("Area_914");
var Area_915 = iframeDoc.getElementById("Area_915");
var Area_916 = iframeDoc.getElementById("Area_916");
var Area_917 = iframeDoc.getElementById("Area_917");
var Area_918 = iframeDoc.getElementById("Area_918");
var Area_919 = iframeDoc.getElementById("Area_919");
var Area_920 = iframeDoc.getElementById("Area_920");

var Area_1001 = iframeDoc.getElementById("Area_1001");
var Area_1002 = iframeDoc.getElementById("Area_1002");
var Area_1003 = iframeDoc.getElementById("Area_1003");
var Area_1004 = iframeDoc.getElementById("Area_1004");
var Area_1005 = iframeDoc.getElementById("Area_1005");
var Area_1006 = iframeDoc.getElementById("Area_1006");
var Area_1007 = iframeDoc.getElementById("Area_1007");
var Area_1008 = iframeDoc.getElementById("Area_1008");
var Area_1009 = iframeDoc.getElementById("Area_1009");
var Area_1010 = iframeDoc.getElementById("Area_1010");
var Area_1011 = iframeDoc.getElementById("Area_1011");
var Area_1012 = iframeDoc.getElementById("Area_1012");
var Area_1013 = iframeDoc.getElementById("Area_1013");
var Area_1014 = iframeDoc.getElementById("Area_1014");
var Area_1015 = iframeDoc.getElementById("Area_1015");
var Area_1016 = iframeDoc.getElementById("Area_1016");
var Area_1017 = iframeDoc.getElementById("Area_1017");
var Area_1018 = iframeDoc.getElementById("Area_1018");
var Area_1019 = iframeDoc.getElementById("Area_1019");
var Area_1020 = iframeDoc.getElementById("Area_1020");

var Area_11101 = iframeDoc.getElementById("Area_11101");
var Area_1102 = iframeDoc.getElementById("Area_1102");
var Area_1103 = iframeDoc.getElementById("Area_1103");
var Area_1104 = iframeDoc.getElementById("Area_1104");
var Area_1105 = iframeDoc.getElementById("Area_1105");
var Area_1106 = iframeDoc.getElementById("Area_1106");
var Area_1107 = iframeDoc.getElementById("Area_1107");
var Area_1108 = iframeDoc.getElementById("Area_1108");
var Area_1109 = iframeDoc.getElementById("Area_1109");
var Area_1110 = iframeDoc.getElementById("Area_1110");
var Area_1111 = iframeDoc.getElementById("Area_1111");
var Area_1112 = iframeDoc.getElementById("Area_1112");
var Area_1113 = iframeDoc.getElementById("Area_1113");
var Area_1114 = iframeDoc.getElementById("Area_1114");
var Area_1115 = iframeDoc.getElementById("Area_1115");
var Area_1116 = iframeDoc.getElementById("Area_1116");
var Area_1117 = iframeDoc.getElementById("Area_1117");
var Area_1118 = iframeDoc.getElementById("Area_1118");
var Area_1119 = iframeDoc.getElementById("Area_1119");
var Area_1120 = iframeDoc.getElementById("Area_1120");

var Area_1201 = iframeDoc.getElementById("Area_1201");
var Area_1202 = iframeDoc.getElementById("Area_1202");
var Area_1203 = iframeDoc.getElementById("Area_1203");
var Area_1204 = iframeDoc.getElementById("Area_1204");
var Area_1205 = iframeDoc.getElementById("Area_1205");
var Area_1206 = iframeDoc.getElementById("Area_1206");
var Area_1207 = iframeDoc.getElementById("Area_1207");
var Area_1208 = iframeDoc.getElementById("Area_1208");
var Area_1209 = iframeDoc.getElementById("Area_1209");
var Area_1210 = iframeDoc.getElementById("Area_1210");
var Area_1211 = iframeDoc.getElementById("Area_1211");
var Area_1212 = iframeDoc.getElementById("Area_1212");
var Area_1213 = iframeDoc.getElementById("Area_1213");
var Area_1214 = iframeDoc.getElementById("Area_1214");
var Area_1215 = iframeDoc.getElementById("Area_1215");
var Area_1216 = iframeDoc.getElementById("Area_1216");
var Area_1217 = iframeDoc.getElementById("Area_1217");
var Area_1218 = iframeDoc.getElementById("Area_1218");
var Area_1219 = iframeDoc.getElementById("Area_1219");
var Area_1220 = iframeDoc.getElementById("Area_1220");

var Area_1301 = iframeDoc.getElementById("Area_1301");
var Area_1302 = iframeDoc.getElementById("Area_1302");
var Area_1303 = iframeDoc.getElementById("Area_1303");
var Area_1304 = iframeDoc.getElementById("Area_1304");
var Area_1305 = iframeDoc.getElementById("Area_1305");
var Area_1306 = iframeDoc.getElementById("Area_1306");
var Area_1307 = iframeDoc.getElementById("Area_1307");
var Area_1308 = iframeDoc.getElementById("Area_1308");
var Area_1309 = iframeDoc.getElementById("Area_1309");
var Area_1310 = iframeDoc.getElementById("Area_1310");
var Area_1311 = iframeDoc.getElementById("Area_1311");
var Area_1312 = iframeDoc.getElementById("Area_1312");
var Area_1313 = iframeDoc.getElementById("Area_1313");
var Area_1314 = iframeDoc.getElementById("Area_1314");
var Area_1315 = iframeDoc.getElementById("Area_1315");
var Area_1316 = iframeDoc.getElementById("Area_1316");
var Area_1317 = iframeDoc.getElementById("Area_1317");
var Area_1318 = iframeDoc.getElementById("Area_1318");
var Area_1319 = iframeDoc.getElementById("Area_1319");
var Area_1320 = iframeDoc.getElementById("Area_1320");

var Area_1401 = iframeDoc.getElementById("Area_1401");
var Area_1402 = iframeDoc.getElementById("Area_1402");
var Area_1403 = iframeDoc.getElementById("Area_1403");
var Area_1404 = iframeDoc.getElementById("Area_1404");
var Area_1405 = iframeDoc.getElementById("Area_1405");
var Area_1406 = iframeDoc.getElementById("Area_1406");
var Area_1407 = iframeDoc.getElementById("Area_1407");
var Area_1408 = iframeDoc.getElementById("Area_1408");
var Area_1409 = iframeDoc.getElementById("Area_1409");
var Area_1410 = iframeDoc.getElementById("Area_1410");
var Area_1411 = iframeDoc.getElementById("Area_1411");
var Area_1412 = iframeDoc.getElementById("Area_1412");
var Area_1413 = iframeDoc.getElementById("Area_1413");
var Area_1414 = iframeDoc.getElementById("Area_1414");
var Area_1415 = iframeDoc.getElementById("Area_1415");
var Area_1416 = iframeDoc.getElementById("Area_1416");
var Area_1417 = iframeDoc.getElementById("Area_1417");
var Area_1418 = iframeDoc.getElementById("Area_1418");
var Area_1419 = iframeDoc.getElementById("Area_1419");
var Area_1420 = iframeDoc.getElementById("Area_1420");

var Area_1501 = iframeDoc.getElementById("Area_1501");
var Area_1502 = iframeDoc.getElementById("Area_1502");
var Area_1503 = iframeDoc.getElementById("Area_1503");
var Area_1504 = iframeDoc.getElementById("Area_1504");
var Area_1505 = iframeDoc.getElementById("Area_1505");
var Area_1506 = iframeDoc.getElementById("Area_1506");
var Area_1507 = iframeDoc.getElementById("Area_1507");
var Area_1508 = iframeDoc.getElementById("Area_1508");
var Area_1509 = iframeDoc.getElementById("Area_1509");
var Area_1510 = iframeDoc.getElementById("Area_1510");
var Area_1511 = iframeDoc.getElementById("Area_1511");
var Area_1512 = iframeDoc.getElementById("Area_1512");
var Area_1513 = iframeDoc.getElementById("Area_1513");
var Area_1514 = iframeDoc.getElementById("Area_1514");
var Area_1515 = iframeDoc.getElementById("Area_1515");
var Area_1516 = iframeDoc.getElementById("Area_1516");
var Area_1517 = iframeDoc.getElementById("Area_1517");
var Area_1518 = iframeDoc.getElementById("Area_1518");
var Area_1519 = iframeDoc.getElementById("Area_1519");
var Area_1520 = iframeDoc.getElementById("Area_1520");

var Area_1601 = iframeDoc.getElementById("Area_1601");
var Area_1602 = iframeDoc.getElementById("Area_1602");
var Area_1603 = iframeDoc.getElementById("Area_1603");
var Area_1604 = iframeDoc.getElementById("Area_1604");
var Area_1605 = iframeDoc.getElementById("Area_1605");
var Area_1606 = iframeDoc.getElementById("Area_1606");
var Area_1607 = iframeDoc.getElementById("Area_1607");
var Area_1608 = iframeDoc.getElementById("Area_1608");
var Area_1609 = iframeDoc.getElementById("Area_1609");
var Area_1610 = iframeDoc.getElementById("Area_1610");
var Area_1611 = iframeDoc.getElementById("Area_1611");
var Area_1612 = iframeDoc.getElementById("Area_1612");
var Area_1613 = iframeDoc.getElementById("Area_1613");
var Area_1614 = iframeDoc.getElementById("Area_1614");
var Area_1615 = iframeDoc.getElementById("Area_1615");
var Area_1616 = iframeDoc.getElementById("Area_1616");
var Area_1617 = iframeDoc.getElementById("Area_1617");
var Area_1618 = iframeDoc.getElementById("Area_1618");
var Area_1619 = iframeDoc.getElementById("Area_1619");
var Area_1620 = iframeDoc.getElementById("Area_1620");

var Area_1701 = iframeDoc.getElementById("Area_1701");
var Area_1702 = iframeDoc.getElementById("Area_1702");
var Area_1703 = iframeDoc.getElementById("Area_1703");
var Area_1704 = iframeDoc.getElementById("Area_1704");
var Area_1705 = iframeDoc.getElementById("Area_1705");
var Area_1706 = iframeDoc.getElementById("Area_1706");
var Area_1707 = iframeDoc.getElementById("Area_1707");
var Area_1708 = iframeDoc.getElementById("Area_1708");
var Area_1709 = iframeDoc.getElementById("Area_1709");
var Area_1710 = iframeDoc.getElementById("Area_1710");
var Area_1711 = iframeDoc.getElementById("Area_1711");
var Area_1712 = iframeDoc.getElementById("Area_1712");
var Area_1713 = iframeDoc.getElementById("Area_1713");
var Area_1714 = iframeDoc.getElementById("Area_1714");
var Area_1715 = iframeDoc.getElementById("Area_1715");
var Area_1716 = iframeDoc.getElementById("Area_1716");
var Area_1717 = iframeDoc.getElementById("Area_1717");
var Area_1718 = iframeDoc.getElementById("Area_1718");
var Area_1719 = iframeDoc.getElementById("Area_1719");
var Area_1720 = iframeDoc.getElementById("Area_1720");

var Area_1801 = iframeDoc.getElementById("Area_1801");
var Area_1802 = iframeDoc.getElementById("Area_1802");
var Area_1803 = iframeDoc.getElementById("Area_1803");
var Area_1804 = iframeDoc.getElementById("Area_1804");
var Area_1805 = iframeDoc.getElementById("Area_1805");
var Area_1806 = iframeDoc.getElementById("Area_1806");
var Area_1807 = iframeDoc.getElementById("Area_1807");
var Area_1808 = iframeDoc.getElementById("Area_1808");
var Area_1809 = iframeDoc.getElementById("Area_1809");
var Area_1810 = iframeDoc.getElementById("Area_1810");
var Area_1811 = iframeDoc.getElementById("Area_1811");
var Area_1812 = iframeDoc.getElementById("Area_1812");
var Area_1813 = iframeDoc.getElementById("Area_1813");
var Area_1814 = iframeDoc.getElementById("Area_1814");
var Area_1815 = iframeDoc.getElementById("Area_1815");
var Area_1816 = iframeDoc.getElementById("Area_1816");
var Area_1817 = iframeDoc.getElementById("Area_1817");
var Area_1818 = iframeDoc.getElementById("Area_1818");
var Area_1819 = iframeDoc.getElementById("Area_1819");
var Area_1820 = iframeDoc.getElementById("Area_1820");

var Area_1901 = iframeDoc.getElementById("Area_1901");
var Area_1902 = iframeDoc.getElementById("Area_1902");
var Area_1903 = iframeDoc.getElementById("Area_1903");
var Area_1904 = iframeDoc.getElementById("Area_1904");
var Area_1905 = iframeDoc.getElementById("Area_1905");
var Area_1906 = iframeDoc.getElementById("Area_1906");
var Area_1907 = iframeDoc.getElementById("Area_1907");
var Area_1908 = iframeDoc.getElementById("Area_1908");
var Area_1909 = iframeDoc.getElementById("Area_1909");
var Area_1910 = iframeDoc.getElementById("Area_1910");
var Area_1911 = iframeDoc.getElementById("Area_1911");
var Area_1912 = iframeDoc.getElementById("Area_1912");
var Area_1913 = iframeDoc.getElementById("Area_1913");
var Area_1914 = iframeDoc.getElementById("Area_1914");
var Area_1915 = iframeDoc.getElementById("Area_1915");
var Area_1916 = iframeDoc.getElementById("Area_1916");
var Area_1917 = iframeDoc.getElementById("Area_1917");
var Area_1918 = iframeDoc.getElementById("Area_1918");
var Area_1919 = iframeDoc.getElementById("Area_1919");
var Area_1920 = iframeDoc.getElementById("Area_1920");

var Area_2001 = iframeDoc.getElementById("Area_2001");
var Area_2002 = iframeDoc.getElementById("Area_2002");
var Area_2003 = iframeDoc.getElementById("Area_2003");
var Area_2004 = iframeDoc.getElementById("Area_2004");
var Area_2005 = iframeDoc.getElementById("Area_2005");
var Area_2006 = iframeDoc.getElementById("Area_2006");
var Area_2007 = iframeDoc.getElementById("Area_2007");
var Area_2008 = iframeDoc.getElementById("Area_2008");
var Area_2009 = iframeDoc.getElementById("Area_2009");
var Area_2010 = iframeDoc.getElementById("Area_2010");
var Area_2011 = iframeDoc.getElementById("Area_2011");
var Area_2012 = iframeDoc.getElementById("Area_2012");
var Area_2013 = iframeDoc.getElementById("Area_2013");
var Area_2014 = iframeDoc.getElementById("Area_2014");
var Area_2015 = iframeDoc.getElementById("Area_2015");
var Area_2016 = iframeDoc.getElementById("Area_2016");
var Area_2017 = iframeDoc.getElementById("Area_2017");
var Area_2018 = iframeDoc.getElementById("Area_2018");
var Area_2019 = iframeDoc.getElementById("Area_2019");
var Area_2020 = iframeDoc.getElementById("Area_2020");

window.MapHyouji = function() {
	for (HenAA=1;HenAA<=Tate;HenAA++) {
		for (HenAB=1;HenAB<=Yoko;HenAB++) {
			HenA = HenAA*100+HenAB;
			//平地
			if (AreaData[HenA][9]==0) {
				if (AreaData[HenA][8]==0) {
					iframeDoc.getElementById("Area_"+[HenA]).src="HeitiHex.png";
					if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="HeitiSenntaku.png"; }
					if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="HeitiSenntaku.png"; }
				}
				if (ScenarioNum<100) {
					if (AreaData[HenA][8]>0) {
						if (AreaData[HenA][0]==0) {
							iframeDoc.getElementById("Area_"+[HenA]).src="GerHex.png";
							if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="GerSenntaku.png"; }
							if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="GerSenntaku.png"; }
						}
						if (AreaData[HenA][0]==1) {
							iframeDoc.getElementById("Area_"+[HenA]).src="SovHex.png";
							if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="SovSenntaku.png"; }
							if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="SovSenntaku.png"; }
						}
					}
				}
				if (ScenarioNum>=100) {
					if (AreaData[HenA][8]>0) {
						if (AreaData[HenA][0]==0) {
							iframeDoc.getElementById("Area_"+[HenA]).src="EUHex.png";
							if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="EUSenntaku.png"; }
							if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="EUSenntaku.png"; }
						}
						if (AreaData[HenA][0]==1) {
							iframeDoc.getElementById("Area_"+[HenA]).src="SovHex.png";
							if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="SovSenntaku.png"; }
							if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="SovSenntaku.png"; }
						}
					}
				}
			}
			//海
			if (AreaData[HenA][9]==1) { iframeDoc.getElementById("Area_"+HenA).src="UmiHex.png"; }
			//湿地
			if (AreaData[HenA][9]==3) { iframeDoc.getElementById("Area_"+[HenA]).src="ShittiHex.png"; }
			//都市
			if (ScenarioNum<100) {
				if (AreaData[HenA][9]==2) {
					if (AreaData[HenA][0]==0) {
						iframeDoc.getElementById("Area_"+[HenA]).src="GerToshiHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="GerToshiSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="GerToshiSenntaku.png"; }
					}
					if (AreaData[HenA][0]==1) {
						iframeDoc.getElementById("Area_"+[HenA]).src="SovToshiHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="SovToshiSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="SovToshiSenntaku.png"; }
					}
				}
			}
			if (ScenarioNum>=100) {
				if (AreaData[HenA][9]==2) {
					if (AreaData[HenA][0]==0) {
						iframeDoc.getElementById("Area_"+[HenA]).src="EUToshiHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="EUToshiSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="EUToshiSenntaku.png"; }
					}
					if (AreaData[HenA][0]==1) {
						iframeDoc.getElementById("Area_"+[HenA]).src="RusToshiHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="RusToshiSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="RusToshiSenntaku.png"; }
					}
				}
			}
		}
	}
}
window.CommandSelect = function() {//4部隊の中から1部隊を選択するverのコードを改変して使用しているため、不要なコードが多々存在する
	ShireibuKeisann();
	//全優先値を計算
	CommandSousuu = 0;
	for (HenA=0;HenA<=DivSousuu;HenA++) {
		if (Division[TurnJinnei][HenA][1]!=0) {
			DivChance[TurnJinnei][HenA]++;
			if (DivChance[TurnJinnei][HenA]<ChanceMin) { DivChance[TurnJinnei][HenA]=ChanceMin; }
			if (DivChance[TurnJinnei][HenA]>ChanceMax) { DivChance[TurnJinnei][HenA]=ChanceMax; }
			DivChance[TurnJinnei][HenA] = Math.round(DivChance[TurnJinnei][HenA]);
			CommandSousuu += DivChance[TurnJinnei][HenA];//*ShireibuKouka[TurnJinnei][HenA]//司令部効果設定時追加コード
			CommandSousuu = Math.round(CommandSousuu);
		}
	}
	CommandAtari = new Array();
	for (HenA=1;HenA<=4;HenA++) {
		HenD = 0;//確認用
		Atari = Math.round(Math.random()*CommandSousuu);
		HenC = 0;
		for (HenB=0;HenB<=DivSousuu;HenB++) {
			if (Division[TurnJinnei][HenB][1]!=0) {
				Atari -= DivChance[TurnJinnei][HenB];//*ShireibuKouka[TurnJinnei][HenB]//司令部効果設定時追加コード
				Atari = Math.round(Atari);
				HenD += DivChance[TurnJinnei][HenB];//*ShireibuKouka[TurnJinnei][HenB]//司令部効果設定時追加コード
				HenD = Math.round(HenD);
				if (Atari<=0) {
					if (HenC==0) {
						CommandAtari[HenA] = HenB;
						HenC = 1;
					}
				}
			}
		}
		if (CommandSousuu!=HenD) { alert(HenA+" エラー：総数不一致"); }
	}
	SenntakushiName = new Array();
	for (HenA=1;HenA<=4;HenA++) {
		SenntakushiName[HenA] = Division[TurnJinnei][CommandAtari[HenA]][0]+"(補給"+Division[TurnJinnei][CommandAtari[HenA]][5]+")";
	}
	DivChance[TurnJinnei][CommandAtari[1]] = ChanceMin;
	SenntakuShidann = CommandAtari[1];
	KidouNum = Division[TurnJinnei][SenntakuShidann][7];
	SenntakuArea01 = Division[TurnJinnei][SenntakuShidann][4];
	SenntakushiName[1] = "１：行軍(攻撃)";
	SenntakushiName[2] = "２：強攻";
	SenntakushiName[3] = "３：砲撃";
	SenntakushiName[4] = "４：補充";
	SenntakushiName[5] = "Ｅ：待機";
	document.For02.B01.value=SenntakushiName[1];
	document.For02.B02.value=SenntakushiName[2];
	document.For02.B03.value=SenntakushiName[3];
	document.For02.B04.value=SenntakushiName[4];
	document.For02.B05.value=SenntakushiName[5];
	document.For02.Tex00.defaultValue = "補給点"+Hokyuu[TurnJinnei]+"+"+HokyuuPlus[TurnJinnei];
	MapHyouji();
	MapShidannData();
}


CommandSelect();

};

<!--【命令決定】-->

Turn = 1;
DivChance = new Array();
DivChance[0] = new Array();
DivChance[1] = new Array();
ShireibuKouka = new Array();
ShireibuKouka[0] = new Array();
ShireibuKouka[1] = new Array();
ShireibuArea = new Array();
ShireibuArea[0] = new Array();
ShireibuArea[1] = new Array();

for (HenB=0;HenB<=1;HenB++) {
	for (HenA=0;HenA<=DivSousuu;HenA++) {
		if (Division[HenB][HenA][1]!=0) {
			DivChance[HenB][HenA] = ChanceMax;
		}
		if (Division[HenB][HenA][1]==0) {//北米決戦追加ポイント(増援時のバグ防止)
			DivChance[HenB][HenA] = 0;
		}
	}
}

function ShireibuKeisann() {
	//司令部効果
	for (HenA=0;HenA<=DivSousuu;HenA++) {
		ShireibuKouka[TurnJinnei][HenA] = 1;//リセット
	}
	for (HenA=1;HenA<=Tate;HenA++) {
		for (HenB=1;HenB<=Yoko;HenB++) {
			ShireibuArea[TurnJinnei][HenA*100+HenB] = 0;//リセット
		}
	}
	for (HenA=0;HenA<=DivSousuu;HenA++) {
		if (Division[TurnJinnei][HenA][1]==9) {//司令部である
			if (Division[TurnJinnei][HenA][2]>0) {//戦力0以上
				ShireibuArea[TurnJinnei][Division[TurnJinnei][HenA][4]] = 1;
			}
		}
	}
	for (HenA=1;HenA<=MiscShireibuRange;HenA++) {
		for (HenB=1;HenB<=Tate;HenB++) {
			for (HenC=1;HenC<=Yoko;HenC++) {
				if (ShireibuArea[TurnJinnei][HenB*100+HenC]==HenA) {
					for (HenD=1;HenD<=Tate;HenD++) {
						for (HenE=1;HenE<=Yoko;HenE++) {
							if (AreaSetuzoku[HenB*100+HenC][HenD*100+HenE]==1) {
								if (ShireibuArea[TurnJinnei][HenD*100+HenE]==0) {
									ShireibuArea[TurnJinnei][HenD*100+HenE] = HenA+1;//司令部からの距離を計算
								}
							}
						}
					}
				}
			}
		}
	}
	for (HenA=1;HenA<=Tate;HenA++) {
		for (HenB=1;HenB<=Yoko;HenB++) {
			if (ShireibuArea[TurnJinnei][HenA*100+HenB]>0) {//司令部からの距離をチェック
				if (AreaData[HenA*100+HenB][0]==TurnJinnei) {
					for (HenC=0;HenC<=4;HenC++) {
						if (AreaData[HenA*100+HenB][HenC+3]!=999) {
							ShireibuKouka[TurnJinnei][AreaData[HenA*100+HenB][HenC+3]] = MiscShireibuKouka;
						}
					}
				}
			}
		}
	}
}

<!--【コマンド】-->

SenntakuShidann = 999;
TurnEndHen = 0;

function Sen(HenA) {
	if (Game==0) {
		switch (ComHen) {//０部隊選択、１命令選択、２攻撃選択、３砲撃選択、４強攻選択、５退却選択
			//０部隊選択
			case 0:
				if (HenA==5) {//待機
					TurnEndHen = 1;
				}
				if (HenA!=5) {
					if (Hokyuu[TurnJinnei]<Division[TurnJinnei][CommandAtari[HenA]][5]) { alert("補給不足です"); }
					if (Hokyuu[TurnJinnei]>=Division[TurnJinnei][CommandAtari[HenA]][5]) {
						Hokyuu[TurnJinnei] -= Division[TurnJinnei][CommandAtari[HenA]][5];
						SenntakuShidann = CommandAtari[HenA];
						KidouNum = Division[TurnJinnei][SenntakuShidann][7];
						SenntakuArea01 = Division[TurnJinnei][SenntakuShidann][4];
						Area(SenntakuArea01);
						ComHen = 1;
						SenntakushiName[1] = "行軍(攻撃)";
						SenntakushiName[2] = "強攻";
						SenntakushiName[3] = "砲撃";
						SenntakushiName[4] = "補充";
						SenntakushiName[5] = "キャンセル";
						document.For02.B01.value=SenntakushiName[1];
						document.For02.B02.value=SenntakushiName[2];
						document.For02.B03.value=SenntakushiName[3];
						document.For02.B04.value=SenntakushiName[4];
						document.For02.B05.value=SenntakushiName[5];
						document.For02.Tex00.defaultValue = Division[TurnJinnei][SenntakuShidann][0]+"への命令";
						MapShidannData();
						MapHyouji();
					}
				}
			break;
			//１命令選択
			case 1:
				if (HenA==1) {//行軍(攻撃)
					if (AreaSetuzoku[Division[TurnJinnei][SenntakuShidann][4]][SenntakuArea02]==0) { alert("隣接していない州へは行軍できません"); }
					if (AreaSetuzoku[Division[TurnJinnei][SenntakuShidann][4]][SenntakuArea02]!=0) {
						if (AreaData[SenntakuArea02][0]==[TurnJinnei]) {//行軍
							if (AreaData[SenntakuArea02][7]!=999) { alert("1つの州には5部隊までしか駐留できません"); }
							if (AreaData[SenntakuArea02][7]==999) {
								EZOC();
								if (EZOCArea[TurnJinnei][SenntakuArea01]!=0 && EZOCArea[TurnJinnei][SenntakuArea02]!=0) { alert("EZOCからEZOCへは行軍できません"); }
								if (EZOCArea[TurnJinnei][SenntakuArea01]==0 || EZOCArea[TurnJinnei][SenntakuArea02]==0) {
									if (BattleSystem==1 && Division[TurnJinnei][SenntakuShidann][2]==1) { alert("戦力1の部隊は移動できません"); }
									if (BattleSystem==0 || BattleSystem==2 || Division[TurnJinnei][SenntakuShidann][2]>1) {
										Division[TurnJinnei][SenntakuShidann][4] = SenntakuArea02;
										if (BattleSystem==1) { Division[TurnJinnei][SenntakuShidann][2]--; }
										if (KidouNum==0) {
											TurnEndHen = 1;
										}
										if (KidouNum>=1) {
											KidouNum--;
											SenntakuArea01 = Division[TurnJinnei][SenntakuShidann][4];
											SenntakushiName[5] = "Ｅ：行動終了";
											document.For02.B05.value=SenntakushiName[5];
										}
										MapShidannData();
										MapHyouji();
									}
								}
							}
						}
						if (AreaData[SenntakuArea02][0]!=[TurnJinnei]) {//攻撃・占領
							HenB = 0;
							if (AreaData[SenntakuArea02][3]==999) {//占領
								HenB = 1;
								EZOC();
								if (EZOCArea[TurnJinnei][SenntakuArea01]!=0 && EZOCArea[TurnJinnei][SenntakuArea02]!=0) { alert("EZOCからEZOCへは行軍できません"); }
								if (EZOCArea[TurnJinnei][SenntakuArea01]==0 || EZOCArea[TurnJinnei][SenntakuArea02]==0) {
									if (BattleSystem==1 && Division[TurnJinnei][SenntakuShidann][2]==1) { alert("戦力1の部隊は移動できません"); }
									if (BattleSystem==0  || BattleSystem==2 || Division[TurnJinnei][SenntakuShidann][2]>1) {
										Division[TurnJinnei][SenntakuShidann][4] = SenntakuArea02;
										AreaData[SenntakuArea02][0] = TurnJinnei;
										if (BattleSystem==1) { Division[TurnJinnei][SenntakuShidann][2]--; }
										if (KidouNum==0) {
											TurnEndHen = 1;
										}
										if (KidouNum>=1) {
											KidouNum--;
											SenntakuArea01 = Division[TurnJinnei][SenntakuShidann][4];
											SenntakushiName[5] = "Ｅ：行動終了";
											document.For02.B05.value=SenntakushiName[5];
										}
										MapShidannData();
										MapHyouji();
									}
								}
							}
							if (HenB==0) {//攻撃
								ComHen = 2;
								SenntakushiName[1] = "１：決定";
								SenntakushiName[2] = "×";
								SenntakushiName[3] = "×";
								SenntakushiName[4] = "×";
								SenntakushiName[5] = "キャンセル";
								document.For02.B01.value=SenntakushiName[1];
								document.For02.B02.value=SenntakushiName[2];
								document.For02.B03.value=SenntakushiName[3];
								document.For02.B04.value=SenntakushiName[4];
								document.For02.B05.value=SenntakushiName[5];
								document.For02.Tex00.defaultValue = "攻撃する部隊を選択してください(Q・Wキー)";
							}
						}
					}
				}
				if (HenA==2) {//強攻
					if (KyoukouKinou==0) { alert("このゲームでは強攻は使用できません"); }
					if (KyoukouKinou==1) {
						if (AreaSetuzoku[Division[TurnJinnei][SenntakuShidann][4]][SenntakuArea02]==0) { alert("隣接していない州へは攻撃できません"); }
						if (AreaSetuzoku[Division[TurnJinnei][SenntakuShidann][4]][SenntakuArea02]!=0) {
							if (AreaData[SenntakuArea02][0]==[TurnJinnei]) { alert("その州には対象となる部隊が存在しません"); }
							if (AreaData[SenntakuArea02][0]!=[TurnJinnei]) {
								if (AreaData[SenntakuArea02][3]==999) { alert("その州には対象となる部隊が存在しません"); }
								if (AreaData[SenntakuArea02][3]!=999) {
									ComHen = 4;
									SenntakushiName[1] = "１：決定";
									SenntakushiName[2] = "×";
									SenntakushiName[3] = "×";
									SenntakushiName[4] = "×";
									SenntakushiName[5] = "キャンセル";
									document.For02.B01.value=SenntakushiName[1];
									document.For02.B02.value=SenntakushiName[2];
									document.For02.B03.value=SenntakushiName[3];
									document.For02.B04.value=SenntakushiName[4];
									document.For02.B05.value=SenntakushiName[5];
									document.For02.Tex00.defaultValue = "強攻攻撃する部隊を選択してください(Q・Wキー)";
								}
							}
						}
					}
				}
				if (HenA==3) {//砲撃
					if (AreaSetuzoku[Division[TurnJinnei][SenntakuShidann][4]][SenntakuArea02]==0) { alert("隣接していない州へは砲撃できません"); }
					if (AreaSetuzoku[Division[TurnJinnei][SenntakuShidann][4]][SenntakuArea02]!=0) {
						if (AreaData[SenntakuArea02][0]!=TekiTurnJinnei) { alert("その州には対象となる部隊が存在しません"); }
						if (AreaData[SenntakuArea02][0]==TekiTurnJinnei) {
							if (AreaData[SenntakuArea02][3]==999) { alert("その州には対象となる部隊が存在しません"); }
							if (AreaData[SenntakuArea02][3]!=999) {
								if (Division[TurnJinnei][SenntakuShidann][6]==0) { alert("その部隊は砲兵を伴いません"); }
								if (Division[TurnJinnei][SenntakuShidann][6]!=0) {
									if (Hokyuu[TurnJinnei]<Division[TurnJinnei][SenntakuShidann][6]) { alert("補給不足です"); }
									if (Hokyuu[TurnJinnei]>=Division[TurnJinnei][SenntakuShidann][6]) {
										Hokyuu[TurnJinnei] -= Division[TurnJinnei][SenntakuShidann][6];
										ComHen = 3;
										SenntakushiName[1] = "１：決定";
										SenntakushiName[2] = "×";
										SenntakushiName[3] = "×";
										SenntakushiName[4] = "×";
										SenntakushiName[5] = "キャンセル";
										document.For02.B01.value=SenntakushiName[1];
										document.For02.B02.value=SenntakushiName[2];
										document.For02.B03.value=SenntakushiName[3];
										document.For02.B04.value=SenntakushiName[4];
										document.For02.B05.value=SenntakushiName[5];
										document.For02.Tex00.defaultValue = "砲撃する部隊を選択してください(Q・Wキー)";
									}
								}
							}
						}
					}
				}
				if (HenA==4) {//補充
					if (Division[TurnJinnei][SenntakuShidann][2]==Division[TurnJinnei][SenntakuShidann][3]) { alert("最大値以上の戦力補充はできません"); }
					if (Division[TurnJinnei][SenntakuShidann][2]<Division[TurnJinnei][SenntakuShidann][3]) {
						if (Hokyuu[TurnJinnei]<HojuMisc) { alert("補給不足です"); }
						if (Hokyuu[TurnJinnei]>=HojuMisc) {
							Hokyuu[TurnJinnei] -= HojuMisc;
							Division[TurnJinnei][SenntakuShidann][2] += HojuEffMisc;
							if (BattleSystem==2) {
								if (AreaData[Division[TurnJinnei][SenntakuShidann][4]][9]==2) {
									Division[TurnJinnei][SenntakuShidann][2] += 1;
								}
							}
							ShireibuKeisann();
							if (ShireibuKouka[TurnJinnei][SenntakuShidann]==MiscShireibuKouka) { Division[TurnJinnei][SenntakuShidann][2] += HojuEffMisc; }
							Division[TurnJinnei][SenntakuShidann][2] = Math.round(Division[TurnJinnei][SenntakuShidann][2]);
							if (Division[TurnJinnei][SenntakuShidann][2]>Division[TurnJinnei][SenntakuShidann][3]) {//v1.01追加
								Division[TurnJinnei][SenntakuShidann][2]=Division[TurnJinnei][SenntakuShidann][3];
							}//v1.01追加ここまで
							TurnEndHen = 1;
						}
					}
				}
				if (HenA==5) {//待機
					TurnEndHen = 1;
				}
			break;
			//２攻撃選択
			case 2:
				if (HenA==1) {
					HenB = BoxSelection+2;
					if (AreaData[SenntakuArea02][HenB]==999) {
						alert("部隊が存在しません");
					}
					if (AreaData[SenntakuArea02][HenB]!=999) {
						//ダメージ処理
						HenC = 0;
						//BattleSystem0　戦力比による北米決戦からのシステム
						//BattleSystem1　移動ごとに部隊が損耗するシステム(強攻コマンド未設定)
						//BattleSystem2　攻撃優位の流動的戦闘システム
						if (BattleSystem!=2) {
							if (Division[TurnJinnei][SenntakuShidann][2]>=(Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc)*2 && HenC==0) {//防衛側の2倍以上の戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
								if (BattleSystem==1) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2; }
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
							}
							if (Division[TurnJinnei][SenntakuShidann][2]>Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc && HenC==0) {//防衛側を上回る戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1;
								if (BattleSystem==1) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1; }
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
							}
							if (Division[TurnJinnei][SenntakuShidann][2]*2<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc && HenC==0) {//防衛側の2倍以下の戦力値
								HenC=1;
								Division[TurnJinnei][SenntakuShidann][2] -= 2;
								if (BattleSystem==1) { Division[TurnJinnei][SenntakuShidann][2] -= 2; }
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1;
								if (BattleSystem==1) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1; }
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
							}
							if (Division[TurnJinnei][SenntakuShidann][2]<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc && HenC==0) {//防衛側以下の戦力値
								HenC=1;
								Division[TurnJinnei][SenntakuShidann][2] -= 1;
								if (BattleSystem==1) { Division[TurnJinnei][SenntakuShidann][2] -= 1; }
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1;
								if (BattleSystem==1) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1; }
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
							}
						}
						if (BattleSystem==2) {
							HenC=1;
							Division[TurnJinnei][SenntakuShidann][2] -= 0;
							if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
								Division[TurnJinnei][SenntakuShidann][1] = 0;
								Division[TurnJinnei][SenntakuShidann][2] = 0;
							}
							Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 0;
							if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
							}
							Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][3] -= 0;
							if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][3]<=0) {
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][3] = 0;
							}
						}
						//退却処理
						if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]>0) {
							ComHen = 5;
							SenntakuShidann = AreaData[SenntakuArea02][HenB];
							SenntakuArea01 = Division[TekiTurnJinnei][SenntakuShidann][4];
							Area(SenntakuArea01);
							SenntakushiName[1] = "１：退却";
							SenntakushiName[2] = "２：死守";
							SenntakushiName[3] = "×";
							SenntakushiName[4] = "×";
							SenntakushiName[5] = "×";
							document.For02.B01.value=SenntakushiName[1];
							document.For02.B02.value=SenntakushiName[2];
							document.For02.B03.value=SenntakushiName[3];
							document.For02.B04.value=SenntakushiName[4];
							document.For02.B05.value=SenntakushiName[5];
							document.For02.Tex00.defaultValue = "部隊を退却させますか？";
						}
						MapShidannData()
						MapHyouji();
						if (ComHen!=5) {
							TurnEndHen = 1;
						}
					}
				}
				if (HenA==5) {//キャンセル
					ComHen = 1;
					SenntakushiName[1] = "１：行軍(攻撃)";
					SenntakushiName[2] = "２：強攻";
					SenntakushiName[3] = "３：砲撃";
					SenntakushiName[4] = "４：補充";
					SenntakushiName[5] = "Ｅ：待機";
					document.For02.B01.value=SenntakushiName[1];
					document.For02.B02.value=SenntakushiName[2];
					document.For02.B03.value=SenntakushiName[3];
					document.For02.B04.value=SenntakushiName[4];
					document.For02.B05.value=SenntakushiName[5];
					document.For02.Tex00.defaultValue = "補給点"+Hokyuu[TurnJinnei]+"+"+HokyuuPlus[TurnJinnei];
				}
			break;
			//３砲撃選択
			case 3:
				if (HenA==1) {
					HenB = BoxSelection+2;
					if (AreaData[SenntakuArea02][HenB]==999) {
						alert("部隊が存在しません");
					}
					if (AreaData[SenntakuArea02][HenB]!=999) {
						Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
						if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
							Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
							Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
						}
						MapShidannData()
						MapHyouji();
						TurnEndHen = 1;
					}
				}
				if (HenA==5) {//キャンセル
					Hokyuu[TurnJinnei] += Division[TurnJinnei][SenntakuShidann][6];
					ComHen = 1;
					SenntakushiName[1] = "１：行軍(攻撃)";
					SenntakushiName[2] = "２：強攻";
					SenntakushiName[3] = "３：砲撃";
					SenntakushiName[4] = "４：補充";
					SenntakushiName[5] = "Ｅ：待機";
					document.For02.B01.value=SenntakushiName[1];
					document.For02.B02.value=SenntakushiName[2];
					document.For02.B03.value=SenntakushiName[3];
					document.For02.B04.value=SenntakushiName[4];
					document.For02.B05.value=SenntakushiName[5];
					document.For02.Tex00.defaultValue = "補給点"+Hokyuu[TurnJinnei]+"+"+HokyuuPlus[TurnJinnei];
				}
			break;
			//４強攻選択
			case 4:
				if (HenA==1) {
					HenB = BoxSelection+2;
					if (AreaData[SenntakuArea02][HenB]==999) {
						alert("部隊が存在しません");
					}
					if (AreaData[SenntakuArea02][HenB]!=999) {
						//ダメージ処理
						HenC = 0;
						HenD = 0;
						if (BattleSystem!=2) {
							if (Division[TurnJinnei][SenntakuShidann][2]>=(Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc)*2 && HenC==0) {//防衛側の2倍の戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 3;
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								Division[TurnJinnei][SenntakuShidann][2] -= 2;
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
							}
							if (Division[TurnJinnei][SenntakuShidann][2]>Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc && HenC==0) {//防衛側を上回る戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								Division[TurnJinnei][SenntakuShidann][2] -= 2;
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
							}
							if (Division[TurnJinnei][SenntakuShidann][2]*2<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc && HenC==0) {//防衛側の2倍を下回る戦力値
								if (Division[TurnJinnei][SenntakuShidann][2]<4) {
									alert("戦力値が低すぎるため、この部隊には強攻ができません");
									HenD = 1;
								}
								if (Division[TurnJinnei][SenntakuShidann][2]>=4) {
									HenC=1;
									Division[TurnJinnei][SenntakuShidann][2] -= 4;
									if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
										Division[TurnJinnei][SenntakuShidann][1] = 0;
										Division[TurnJinnei][SenntakuShidann][2] = 0;
									}
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
									if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
									}
								}
							}
							if (Division[TurnJinnei][SenntakuShidann][2]<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+DefMisc && HenC==0 && HenD==0) {//防衛側を下回る戦力値
								if (Division[TurnJinnei][SenntakuShidann][2]<3) { alert("戦力値が低すぎるため、この部隊には強攻ができません"); }
								if (Division[TurnJinnei][SenntakuShidann][2]>=3) {
									HenC=1;
									Division[TurnJinnei][SenntakuShidann][2] -= 3;
									if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
										Division[TurnJinnei][SenntakuShidann][1] = 0;
										Division[TurnJinnei][SenntakuShidann][2] = 0;
									}
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
									if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
									}
								}
							}
						}
						if (BattleSystem==2) {
							if (Division[TurnJinnei][SenntakuShidann][2]<2) { alert("戦力値が低すぎるため、この部隊には強攻ができません"); }
							if (Division[TurnJinnei][SenntakuShidann][2]>=2) {
								HenC=1;
								Division[TurnJinnei][SenntakuShidann][2] -= 2;
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
								Division[TurnJinnei][SenntakuShidann][3] -= 1;
								if (Division[TurnJinnei][SenntakuShidann][3]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
									Division[TurnJinnei][SenntakuShidann][3] = 0;
								}
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 3;
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][3] -= 1;
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][3]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][3] = 0;
								}
							}
						}
						//退却処理
						if (HenC==1 && Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]>0) {
							ComHen = 5;
							SenntakuShidann = AreaData[SenntakuArea02][HenB];
							SenntakuArea01 = Division[TekiTurnJinnei][SenntakuShidann][4];
							Area(SenntakuArea01);
							SenntakushiName[1] = "１：退却";
							SenntakushiName[2] = "２：死守";
							SenntakushiName[3] = "×";
							SenntakushiName[4] = "×";
							SenntakushiName[5] = "×";
							document.For02.B01.value=SenntakushiName[1];
							document.For02.B02.value=SenntakushiName[2];
							document.For02.B03.value=SenntakushiName[3];
							document.For02.B04.value=SenntakushiName[4];
							document.For02.B05.value=SenntakushiName[5];
							document.For02.Tex00.defaultValue = "部隊を退却させますか？";
						}
						if (HenC==1 && ComHen!=5) {
							TurnEndHen = 1;
						}
						MapShidannData()
						MapHyouji();
					}
				}
				if (HenA==5) {//キャンセル
					ComHen = 1;
					SenntakushiName[1] = "１：行軍(攻撃)";
					SenntakushiName[2] = "２：強攻";
					SenntakushiName[3] = "３：砲撃";
					SenntakushiName[4] = "４：補充";
					SenntakushiName[5] = "Ｅ：待機";
					document.For02.B01.value=SenntakushiName[1];
					document.For02.B02.value=SenntakushiName[2];
					document.For02.B03.value=SenntakushiName[3];
					document.For02.B04.value=SenntakushiName[4];
					document.For02.B05.value=SenntakushiName[5];
					document.For02.Tex00.defaultValue = "補給点"+Hokyuu[TurnJinnei]+"+"+HokyuuPlus[TurnJinnei];
				}
			break;
			//５退却選択
			case 5:
				if (HenA==1) {
					Taikyaku();
					if (AreaSetuzoku[Division[TekiTurnJinnei][SenntakuShidann][4]][SenntakuArea02]==0) { alert("隣接していない州へは退却できません"); }
					if (AreaSetuzoku[Division[TekiTurnJinnei][SenntakuShidann][4]][SenntakuArea02]!=0) {
						if (AreaData[SenntakuArea02][7]!=999) { alert("1つの州には5部隊までしか駐留できません"); }
						if (AreaData[SenntakuArea02][7]==999) {
							if (TaikyakuArea[TekiTurnJinnei][SenntakuArea02]!=0) { alert("退却できる州は、敵部隊が隣接していない州です"); }
							if (TaikyakuArea[TekiTurnJinnei][SenntakuArea02]==0) {
								Division[TekiTurnJinnei][SenntakuShidann][4] = SenntakuArea02;
								AreaData[SenntakuArea02][0] = TekiTurnJinnei;
								MapShidannData()
								MapHyouji();
								SenntakuShidann = 999;
								TurnEndHen = 1;
							}
						}
					}
				}
				if (HenA==2) {
					Division[TekiTurnJinnei][SenntakuShidann][2]-=MiscShisyu;
					//if (BattleSystem==1 || BattleSystem==2) { Division[TekiTurnJinnei][SenntakuShidann][2] -= 2; }
					if (Division[TekiTurnJinnei][SenntakuShidann][2]<=0) {
						Division[TekiTurnJinnei][SenntakuShidann][1] = 0;
						Division[TekiTurnJinnei][SenntakuShidann][2] = 0;
					}
					TurnEndHen = 1;
				}
			break;
		}
		if (TurnEndHen==1) {
			TurnEnd();
		}
	}
}

TaikyakuArea = new Array();
TaikyakuArea[0] = new Array();
TaikyakuArea[1] = new Array();

function Taikyaku() {
	for (TaiHenA=1;TaiHenA<=Tate;TaiHenA++) {
		for (TaiHenB=1;TaiHenB<=Yoko;TaiHenB++) {
			TaikyakuArea[TekiTurnJinnei][TaiHenA*100+TaiHenB] = 0;//リセット
			//その州に敵軍部隊が存在するかチェック
			if (AreaData[TaiHenA*100+TaiHenB][0]==TurnJinnei) {
				if (AreaData[TaiHenA*100+TaiHenB][8]>0) {
					TaikyakuArea[TekiTurnJinnei][TaiHenA*100+TaiHenB] = AreaData[TaiHenA*100+TaiHenB][8];
				}
			}
			//隣接州に敵部隊が存在するかチェック
			for (TaiHenC=1;TaiHenC<=Tate;TaiHenC++) {
				for (TaiHenD=1;TaiHenD<=Yoko;TaiHenD++) {
					if (AreaSetuzoku[TaiHenA*100+TaiHenB][TaiHenC*100+TaiHenD]==1) {
						if (AreaData[TaiHenC*100+TaiHenD][0]==TurnJinnei) {
							if (AreaData[TaiHenC*100+TaiHenD][8]>0) {
								TaikyakuArea[TekiTurnJinnei][TaiHenA*100+TaiHenB] = AreaData[TaiHenC*100+TaiHenD][8];
							}
						}
					}
				}
			}
			//その州に友軍部隊が存在するかチェック
			//if (AreaData[TaiHenA*100+TaiHenB][0]==TekiTurnJinnei) {
			//	if (AreaData[TaiHenA*100+TaiHenB][8]>0) {
			//		TaikyakuArea[TekiTurnJinnei][TaiHenA*100+TaiHenB] = 0;
			//	}
			//}
		}
	}
}

EZOCArea = new Array();
EZOCArea[0] = new Array();
EZOCArea[1] = new Array();

function EZOC() {
	for (TaiHenA=1;TaiHenA<=Tate;TaiHenA++) {
		for (TaiHenB=1;TaiHenB<=Yoko;TaiHenB++) {
			EZOCArea[TurnJinnei][TaiHenA*100+TaiHenB] = 0;//リセット
			//隣接州に敵部隊が存在するかチェック
			for (TaiHenC=1;TaiHenC<=Tate;TaiHenC++) {
				for (TaiHenD=1;TaiHenD<=Yoko;TaiHenD++) {
					if (AreaSetuzoku[TaiHenA*100+TaiHenB][TaiHenC*100+TaiHenD]==1) {
						if (AreaData[TaiHenC*100+TaiHenD][0]==TekiTurnJinnei) {
							if (AreaData[TaiHenC*100+TaiHenD][8]>0) {
								EZOCArea[TurnJinnei][TaiHenA*100+TaiHenB] = AreaData[TaiHenC*100+TaiHenD][8];
							}
						}
					}
				}
			}
		}
	}
}

//補給関係コード跡地

//制圧効果関係コード跡地

<!--【ターン更新】-->

Initiative01 = 2;
Initiative02 = 1;

function TurnEnd() {
	Turn++;
	TurnHenC = new Array(0,0);
	for (TurnHenB=0;TurnHenB<=1;TurnHenB++) {
		for (TurnHenA=0;TurnHenA<=99;TurnHenA++) {
			if (Division[TurnHenB][TurnHenA][2]!=0) {
				TurnHenC[TurnHenB] = 1;
			}
		}
	}
	if (TurnHenC[0]==0) {
		alert("ソ連軍の勝利です\nゲームを終了します");
		Game = 1;
	}
	if (TurnHenC[1]==0) {
		alert("ドイツ軍の勝利です\nゲームを終了します");
		Game = 1;
	}
	if (Game==0) {
		Event();
		IniHenA = 0;
		IniHenB = 0;
		for (IniHenC=0;IniHenC<=DivSousuu;IniHenC++) {
			IniHenA += Division[0][IniHenC][2];
			IniHenB += Division[1][IniHenC][2];
		}
		IniHenA = IniHenA*Initiative01;
		IniHenB = IniHenB*Initiative02;
		IniHenD = IniHenA+IniHenB;
		IniHenE = Math.random()*IniHenD;
		TurnJinnei = 0;
		TekiTurnJinnei = 1;
		if (IniHenE>IniHenA) {
			TurnJinnei = 1;
			TekiTurnJinnei = 0;
		}
		SenntakuShidann = 999;
		HokyuuKeisann();
		SennryokuKeisann();
		ComHen = 1;
		TurnEndHen = 0;
		CommandSelect();
		MapShidannData();
		MapHyouji();
		document.For04.Tex00.defaultValue = Turn;
	}
	if (Game==1) {
		SenntakushiName[1] = "１";
		SenntakushiName[2] = "２";
		SenntakushiName[3] = "３";
		SenntakushiName[4] = "４";
		SenntakushiName[5] = "Ｅ";
		document.For02.B01.value=SenntakushiName[1];
		document.For02.B02.value=SenntakushiName[2];
		document.For02.B03.value=SenntakushiName[3];
		document.For02.B04.value=SenntakushiName[4];
		document.For02.B05.value=SenntakushiName[5];
		document.For02.Tex00.defaultValue = "ゲーム終了です";
	}
}

HokyuuPlus = new Array(0,0);

function HokyuuKeisann() {
	HenC = 0;
	for (HenA=1;HenA<=Tate;HenA++) {
		for (HenB=1;HenB<=Yoko;HenB++) {
			if (AreaData[HenA*100+HenB][0]==[TurnJinnei]) {
				HenC += AreaData[HenA*100+HenB][1];
			}
		}
	}
	HokyuuPlus[TurnJinnei] = HenC+HokyuuPlusBon[TurnJinnei];
	HokyuuPlus[TurnJinnei] = Math.round(HokyuuPlus[TurnJinnei]*10)/10;
	if (Turn!=1 && Turn!=2) { Hokyuu[TurnJinnei] += HokyuuPlus[TurnJinnei]; }
	Hokyuu[TurnJinnei] = Math.round(Hokyuu[TurnJinnei]*10)/10;
}

function SennryokuKeisann() {
	HenB = 0;
	HenC = 0;
	for (HenA=0;HenA<=DivSousuu;HenA++) {
		HenB += Division[0][HenA][2];
		HenC += Division[1][HenA][2];
	}
	if (ScenarioNum<100) {
		document.For03.Tex00.defaultValue = "独軍"+HenB+"vsソ連軍"+HenC;
		document.For06.Tex00.defaultValue = "未使用";
	}
	if (ScenarioNum>=100) {
		document.For03.Tex00.defaultValue = "NATO軍"+HenB+"vsロシア軍"+HenC;
		document.For06.Tex00.defaultValue = "ロシア国民士気："+VP;
	}
}

HokyuuKeisann()

SennryokuKeisann()

<!--【ショートカットキー】-->

function MigiMenu(MigiMenuNum) {
	MigiHenA = BoxSelection+MigiMenuNum;
	if (MigiHenA==0) { MigiHenA = 5; }
	if (MigiHenA==6) { MigiHenA = 1; }
	BoxSel(MigiHenA);
}

document.addEventListener('keypress', keypress_ivent);

function keypress_ivent(e) {
	if(e.code === 'KeyQ'){
		MigiMenu(-1);
	}
	if(e.code === 'KeyW'){
		MigiMenu(1);
	}
	if(e.code === 'Digit1'){
		Sen(1);
	}
	if(e.code === 'Digit2'){
		Sen(2);
	}
	if(e.code === 'Digit3'){
		Sen(3);
	}
	if(e.code === 'Digit4'){
		Sen(4);
	}
	if(e.code === 'KeyE'){
		Sen(5);
	}
	return false; 
}

function Kettei(HenNum) { }
