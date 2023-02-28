

<!--【マップ接続】-->

function AreaSetuzokuSettei() {

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
			if (AreaData[HenA*100+HenB][9]==1 || AreaData[HenA*100+HenB][9]==3 || AreaData[HenA*100+HenB][9]==99) {//海・湿地・マップ外
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

}

AreaSetuzokuSettei();

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

for (let i = 1; i <= 40; i++) {
  for (let j = 1; j <= 40; j++) {
    const id = i * 100 + j;
    if (id >= 101 && id <= 4040) {
      areas[`Area_${id}`] = iframeDoc.getElementById(`Area_${id}`);
    }
  }
}

window.MapHyouji = function() {
	for (HenAA=1;HenAA<=Tate;HenAA++) {
		for (HenAB=1;HenAB<=Yoko;HenAB++) {
			HenA = HenAA*100+HenAB;
			//平地・河川・道路
			if (AreaData[HenA][9]==0 || AreaData[HenA][9]==4 || AreaData[HenA][9]==5 || AreaData[HenA][9]==6) {
				if (AreaData[HenA][8]==0) {
					if (AreaData[HenA][9]==0) {
						iframeDoc.getElementById("Area_"+[HenA]).src="HeitiHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="HeitiSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="HeitiSenntaku.png"; }
					}
					if (AreaData[HenA][9]==4) {
						iframeDoc.getElementById("Area_"+[HenA]).src="UmiHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="UmiSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="UmiSenntaku.png"; }
					}
					if (AreaData[HenA][9]==5) {
						iframeDoc.getElementById("Area_"+[HenA]).src="RodeHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="RodeSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="RodeSenntaku.png"; }
					}
					if (AreaData[HenA][9]==6) {
						iframeDoc.getElementById("Area_"+[HenA]).src="MoriHex.png";
						if (SenntakuArea01==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="MoriSenntaku.png"; }
						if (SenntakuArea02==HenA) { iframeDoc.getElementById("Area_"+[HenA]).src="MoriSenntaku.png"; }
					}
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
			//マップ外
			if (AreaData[HenA][9]==99) { iframeDoc.getElementById("Area_"+[HenA]).src="MapSoto.png"; }
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
									if (BattleSystem!=1 || Division[TurnJinnei][SenntakuShidann][2]>1) {
										if (TikeiCost[AreaData[SenntakuArea02][9]]>KidouNum+1) { alert("移動力が足りません"); }
										if (TikeiCost[AreaData[SenntakuArea02][9]]<=KidouNum+1) {
											if (AreaData[SenntakuArea02][9]==4 && Division[TurnJinnei][SenntakuShidann][1]==2) { alert("機械化部隊は河川へ進入できません"); }
											if (AreaData[SenntakuArea02][9]!=4 || Division[TurnJinnei][SenntakuShidann][1]!=2) {
												Division[TurnJinnei][SenntakuShidann][4] = SenntakuArea02;
												if (BattleSystem==1) { Division[TurnJinnei][SenntakuShidann][2]--; }
												KidouNum-=TikeiCost[AreaData[SenntakuArea02][9]];
												if (KidouNum<0 || AreaData[SenntakuArea02][9]==4) {
													TurnEndHen = 1;
												}
												if (KidouNum>=0 && AreaData[SenntakuArea02][9]!=4) {
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
									if (BattleSystem!=1 || Division[TurnJinnei][SenntakuShidann][2]>1) {
										if (TikeiCost[AreaData[SenntakuArea02][9]]>KidouNum+1) { alert("移動力が足りません"); }
										if (TikeiCost[AreaData[SenntakuArea02][9]]<=KidouNum+1) {
											if (AreaData[SenntakuArea02][9]==4 && Division[TurnJinnei][SenntakuShidann][1]==2) { alert("機械化部隊は河川へ進入できません"); }
											if (AreaData[SenntakuArea02][9]!=4 || Division[TurnJinnei][SenntakuShidann][1]!=2) {
												Division[TurnJinnei][SenntakuShidann][4] = SenntakuArea02;
												AreaData[SenntakuArea02][0] = TurnJinnei;
												if (BattleSystem==1) { Division[TurnJinnei][SenntakuShidann][2]--; }
												KidouNum-=TikeiCost[AreaData[SenntakuArea02][9]];
												if (KidouNum<0 || AreaData[SenntakuArea02][9]==4) {
													TurnEndHen = 1;
												}
												if (KidouNum>=0 && AreaData[SenntakuArea02][9]!=4) {
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
							if (BattleSystem==2) {//都市補充
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
						//BattleSystem2　攻撃優位の流動的戦闘システム(戦闘消耗なし)
						//BattleSystem3　BattleSystem0の一部修正(退却システム1対応のため)
						//BattleSystem4　戦闘勝利にランダム性を含める
						if (BattleSystem!=2 && BattleSystem!=4) {
							if (Division[TurnJinnei][SenntakuShidann][2]>=(Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]])*2 && HenC==0) {//防衛側の2倍以上の戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
								if (BattleSystem==1) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2; }
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								ShisyuDam = 4;
							}
							if (Division[TurnJinnei][SenntakuShidann][2]>Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]] && HenC==0) {//防衛側を上回る戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1;
								if (BattleSystem==1) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1; }
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								ShisyuDam = 2;
							}
							if (Division[TurnJinnei][SenntakuShidann][2]*2<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]] && HenC==0) {//防衛側の2倍以下の戦力値
								HenC=1;
								Division[TurnJinnei][SenntakuShidann][2] -= 2;
								if (BattleSystem==1) { Division[TurnJinnei][SenntakuShidann][2] -= 2; }
								if (BattleSystem==3) { Division[TurnJinnei][SenntakuShidann][2] += 1; }
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1;
								if (BattleSystem==1) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1; }
								if (BattleSystem==3) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] += 1; }
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								ShisyuDam = 1;
							}
							if (Division[TurnJinnei][SenntakuShidann][2]<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]] && HenC==0) {//防衛側以下の戦力値
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
								ShisyuDam = 1;
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
						HenBS4 = 0;
						if (BattleSystem==4) {
							RanHen = Math.round(Math.random()*6);
							if (Division[TurnJinnei][SenntakuShidann][2]-Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+MiscBattleSystem4-TikeiBougyo[AreaData[SenntakuArea02][9]]>=RanHen) {
								HenBS4 = 1;
							}
						}
						//退却処理
						if ((Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]>0 && BattleSystem!=4) || (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]>0 && BattleSystem==4 && HenBS4==1)) {
							ComHen = 5;
							TaikyakuSuu = MiscTaikyakuSuu;
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
						HenC = 0;//戦力が低すぎて強攻ができなかった時のフラグ,強攻不成立の時に退却するのを防いでいる
						HenD = 0;//もう既にダメージを与えたときのフラグ,2重にダメージを与えるのを防いでいる
						if (BattleSystem!=2 && BattleSystem!=4) {
							if (Division[TurnJinnei][SenntakuShidann][2]>=(Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]])*2 && HenC==0) {//防衛側の2倍の戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 3;
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								Division[TurnJinnei][SenntakuShidann][2] -= 2;
								if (BattleSystem==3) { Division[TurnJinnei][SenntakuShidann][2] += 1; }
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
								ShisyuDam = 4;
							}
							if (Division[TurnJinnei][SenntakuShidann][2]>Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]] && HenC==0) {//防衛側を上回る戦力値
								HenC=1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
								Division[TurnJinnei][SenntakuShidann][2] -= 2;
								if (BattleSystem==3) { Division[TurnJinnei][SenntakuShidann][2] += 1; }
								if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
									Division[TurnJinnei][SenntakuShidann][1] = 0;
									Division[TurnJinnei][SenntakuShidann][2] = 0;
								}
								ShisyuDam = 2;
							}
							if (Division[TurnJinnei][SenntakuShidann][2]*2<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]] && HenC==0) {//防衛側の2倍を下回る戦力値
								if ((Division[TurnJinnei][SenntakuShidann][2]<4 && BattleSystem==0) || (Division[TurnJinnei][SenntakuShidann][2]<3 && BattleSystem==3)) {
									alert("戦力値が低すぎるため、この部隊には強攻ができません");
									HenD = 1;
								}
								if ((Division[TurnJinnei][SenntakuShidann][2]>=4 && BattleSystem==0) || (Division[TurnJinnei][SenntakuShidann][2]>=3 && BattleSystem==3)) {
									HenC=1;
									Division[TurnJinnei][SenntakuShidann][2] -= 4;
									if (BattleSystem==3) { Division[TurnJinnei][SenntakuShidann][2] += 1; }
									if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
										Division[TurnJinnei][SenntakuShidann][1] = 0;
										Division[TurnJinnei][SenntakuShidann][2] = 0;
									}
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
									if (BattleSystem==3) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] += 1; }
									if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
									}
									ShisyuDam = 2;
								}
							}
							if (Division[TurnJinnei][SenntakuShidann][2]<=Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+TikeiBougyo[AreaData[SenntakuArea02][9]] && HenC==0 && HenD==0) {//防衛側を下回る戦力値
								if (Division[TurnJinnei][SenntakuShidann][2]<3) { alert("戦力値が低すぎるため、この部隊には強攻ができません"); }
								if (Division[TurnJinnei][SenntakuShidann][2]>=3) {
									HenC=1;
									Division[TurnJinnei][SenntakuShidann][2] -= 3;
									if (Division[TurnJinnei][SenntakuShidann][2]<=0) {
										Division[TurnJinnei][SenntakuShidann][1] = 0;
										Division[TurnJinnei][SenntakuShidann][2] = 0;
									}
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 2;
									if (BattleSystem==3) { Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] += 1; }
									if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
										Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
									}
									ShisyuDam = 2;
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
						HenBS4 = 0;
						if (BattleSystem==4) {
							HenC=1;
							RanHen = Math.round(Math.random()*6);
							if (Division[TurnJinnei][SenntakuShidann][2]-Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]+MiscBattleSystem4-TikeiBougyo[AreaData[SenntakuArea02][9]]+2>=RanHen) {
								HenBS4 = 1;
								Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] -= 1;
								if (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]<=0) {
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][1] = 0;
									Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2] = 0;
								}
							}
						}
						//退却処理
						if (HenC==1) {
							if ((Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]>0 && BattleSystem!=4) || (Division[TekiTurnJinnei][AreaData[SenntakuArea02][HenB]][2]>0 && BattleSystem==4 && HenBS4==1)) {
								ComHen = 5;
								TaikyakuSuu = MiscTaikyakuSuu;
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
				if (HenA==1) {//退却
					Taikyaku();
					if (AreaSetuzoku[Division[TekiTurnJinnei][SenntakuShidann][4]][SenntakuArea02]==0) { alert("隣接していない州へは退却できません"); }
					if (AreaSetuzoku[Division[TekiTurnJinnei][SenntakuShidann][4]][SenntakuArea02]!=0) {
						if (AreaData[SenntakuArea02][9]==4) { alert("河川へは退却できません"); }
						if (AreaData[SenntakuArea02][9]!=4) {
							if (AreaData[SenntakuArea02][7]!=999) { alert("1つの州には5部隊までしか駐留できません"); }
							if (AreaData[SenntakuArea02][7]==999) {
								if (TaikyakuArea[TekiTurnJinnei][SenntakuArea02]!=0) { alert("退却できる州は、敵部隊が隣接していない州です"); }
								if (TaikyakuArea[TekiTurnJinnei][SenntakuArea02]==0) {
									Division[TekiTurnJinnei][SenntakuShidann][4] = SenntakuArea02;
									AreaData[SenntakuArea02][0] = TekiTurnJinnei;
									TaikyakuSuu--;
									SenntakuArea01 = SenntakuArea02;
									Area(SenntakuArea01);
									MapShidannData()
									MapHyouji();
									if (TaikyakuSuu<=0) {
										SenntakuShidann = 999;
										TurnEndHen = 1;
									}
								}
							}
						}
					}
				}
				if (HenA==2) {//死守
					if (TaikyakuSystem==0) {
						Division[TekiTurnJinnei][SenntakuShidann][2]-=MiscShisyu;
						//if (BattleSystem==1 || BattleSystem==2) { Division[TekiTurnJinnei][SenntakuShidann][2] -= 2; }
					}
					if (TaikyakuSystem==1) {
						Division[TekiTurnJinnei][SenntakuShidann][2]-=ShisyuDam;
					}
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