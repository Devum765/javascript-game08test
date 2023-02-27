
function Tikei1941() {

	AreaName = new Array();

	for (HenA=1;HenA<=Tate;HenA++) {
		for (HenB=1;HenB<=Yoko;HenB++) {
			if (AreaData[HenA*100+HenB][9]==0) {
				AreaName[HenA*100+HenB] = "平地";
			}
			if (AreaData[HenA*100+HenB][9]==1) {
				AreaName[HenA*100+HenB] = "海";
			}
			if (AreaData[HenA*100+HenB][9]==3) {
				AreaName[HenA*100+HenB] = "湿地(進入不可)";
			}
		}
	}

	AreaName[ 109] = "レニングラード";
	AreaName[ 613] = "モスクワ";
	AreaName[1420] = "スターリングラード";
	AreaName[1308] = "キエフ";
	AreaName[2017] = "マイコプ";
	AreaName[ 807] = "ミンスク";
	AreaName[1001] = "ワルシャワ";

	AreaName[ 404] = "リガ";
	AreaName[ 205] = "タリン";
	AreaName[ 710] = "スモレンスク";
	AreaName[1911] = "セヴァストポリ";
	AreaName[1413] = "ハリコフ";
	AreaName[ 618] = "ゴーリキー";
	//AreaName[ 111] = "ヴォルホフ";
	//AreaName[1514] = "ロストフ";
	AreaName[1112] = "クルスク";
	AreaName[1707] = "オデッサ";
	AreaName[ 309] = "ノヴゴロド";
	AreaName[2004] = "ブカレスト";
	AreaName[1103] = "ブレスト";
	AreaName[ 801] = "ケーニヒスベルク";

}

function Scenario001() {

	Tikei1941();

	ScenarioNum = 1;

	Initiative01 = 2;
	Initiative02 = 1;
	TurnJinnei = 0;
	TekiTurnJinnei = 1;
	Hokyuu = new Array(0,0);//初期補給物資
	HokyuuPlusBon = new Array(0,0);//補給ボーナス
	BattleSystem = 0;
	MiscShisyu = 2;//死守時の喪失戦闘力
	HojuMisc = 20;//補充に必要な補給値
	HojuEffMisc = 3;//一度の補充で上昇する戦力値

	for (HenA=1;HenA<=Tate;HenA++) {
		for (HenB=1;HenB<=Yoko;HenB++) {
			AreaData[HenA*100+HenB][0] = 0; //占領国
			AreaData[HenA*100+HenB][1] = 0; //生産力
			AreaData[HenA*100+HenB][2] = 0; //(空データ)
			AreaData[HenA*100+HenB][3] = 999; //第1師団
			AreaData[HenA*100+HenB][4] = 999; //第2師団
			AreaData[HenA*100+HenB][5] = 999; //第3師団
			AreaData[HenA*100+HenB][6] = 999; //第4師団
			AreaData[HenA*100+HenB][7] = 999; //第5師団
			AreaData[HenA*100+HenB][8] = 0; //駐留師団数
			//地形
		}
	}

	//勝利条件都市
	AreaData[ 109][9] = 2;//レニングラード
	AreaData[ 613][9] = 2;//モスクワ
	AreaData[1420][9] = 2;//スターリングラード
	AreaData[1308][9] = 2;//キエフ
	AreaData[2017][9] = 2;//マイコプ
	AreaData[ 807][9] = 2;//ミンスク
	AreaData[1001][9] = 2;//ワルシャワ

	//都市
	AreaData[ 404][9] = 2;//リガ
	AreaData[ 205][9] = 2;//タリン
	AreaData[ 710][9] = 2;//スモレンスク
	AreaData[1911][9] = 2;//セヴァストポリ
	AreaData[1413][9] = 2;//ハリコフ
	AreaData[ 618][9] = 2;//ゴーリキー
	AreaData[ 111][9] = 0;//ヴォルホフ
	//AreaData[1514][9] = 2;//ロストフ
	AreaData[1112][9] = 2;//クルスク
	AreaData[1707][9] = 2;//オデッサ
	AreaData[ 309][9] = 2;//ノヴゴロド
	AreaData[2004][9] = 2;//ブカレスト
	AreaData[1103][9] = 2;//ブレスト
	AreaData[ 801][9] = 2;//ケーニヒスベルク

	//都市生産力
	AreaData[ 109][1] = 0;//レニングラード
	AreaData[ 613][1] = 0;//モスクワ
	AreaData[1420][1] = 0;//スターリングラード
	AreaData[1308][1] = 0;//キエフ
	AreaData[2017][1] = 0;//マイコプ
	AreaData[ 807][1] = 0;//ミンスク
	AreaData[1001][1] = 0;//ワルシャワ
	//都市占領
	AreaData[ 109][0] = 1;
	AreaData[ 613][0] = 1;
	AreaData[1420][0] = 1;
	AreaData[1308][0] = 1;
	AreaData[2017][0] = 1;
	AreaData[ 807][0] = 1;

	//有名平地
	AreaData[ 404][0] = 1;
	AreaData[ 205][0] = 1;
	AreaData[ 710][0] = 1;
	AreaData[1911][0] = 1;
	AreaData[1413][0] = 1;
	AreaData[ 618][0] = 1;
	//AreaData[ 111][0] = 1;
	//AreaData[1514][0] = 1;
	AreaData[1112][0] = 1;
	AreaData[1707][0] = 1;
	AreaData[ 309][0] = 1;
	AreaData[2004][0] = 0;
	AreaData[1103][0] = 1;

	//０師団名、１存在(０存在せず、１存在する)、２戦力値、３最大戦力、４座標、５補給(戦車4、歩兵・予備役2、民兵1)、６砲撃(0不可、1以上消費物資)、７機動(0不可、1以上可能回数)
	for (HenA=0;HenA<=DivSousuu;HenA++) {
		Division[0][HenA] = new Array();
		Division[0][HenA][0] = 0;
		Division[0][HenA][1] = 0;
		Division[0][HenA][2] = 0;
		Division[0][HenA][3] = 0;
		Division[0][HenA][4] = 0;
		Division[0][HenA][5] = 0;
		Division[0][HenA][6] = 0;
		Division[0][HenA][7] = 0;
		Division[1][HenA] = new Array();
		Division[1][HenA][0] = 0;
		Division[1][HenA][1] = 0;
		Division[1][HenA][2] = 0;
		Division[1][HenA][3] = 0;
		Division[1][HenA][4] = 0;
		Division[1][HenA][5] = 0;
		Division[1][HenA][6] = 0;
		Division[0][HenA][7] = 0;
	}

	//ドイツ軍
	Division[0][ 0] = new Array("装甲軍団",2,9,9, 702,2,0,4);
	Division[0][ 1] = new Array("装甲軍団",2,9,9, 702,2,0,4);
	Division[0][ 2] = new Array("歩兵軍団",1,6,6, 702,1,8,2);
	Division[0][ 3] = new Array("歩兵軍団",1,6,6, 702,1,8,2);
	Division[0][ 4] = new Array("歩兵軍団",1,6,6, 702,1,8,2);

	Division[0][ 5] = new Array("装甲軍団",2,9,9, 802,2,0,4);
	Division[0][ 6] = new Array("装甲軍団",2,9,9, 802,2,0,4);
	Division[0][ 7] = new Array("歩兵軍団",1,6,6, 802,1,8,2);
	Division[0][ 8] = new Array("歩兵軍団",1,6,6, 802,1,8,2);

	Division[0][ 9] = new Array("歩兵軍団",1,6,6,1001,1,8,2);
	Division[0][10] = new Array("歩兵軍団",1,6,6,1001,1,8,2);

	Division[0][11] = new Array("装甲軍団",2,9,9,1102,2,0,4);
	Division[0][12] = new Array("歩兵軍団",1,6,6,1102,1,8,2);
	Division[0][13] = new Array("歩兵軍団",1,6,6,1102,1,8,2);

	Division[0][14] = new Array("装甲軍団",2,9,9,1202,2,0,4);
	Division[0][15] = new Array("装甲軍団",2,9,9,1202,2,0,4);
	Division[0][16] = new Array("歩兵軍団",1,6,6,1202,1,8,2);
	Division[0][17] = new Array("装甲軍団",2,9,9,1604,2,0,4);

	Division[0][18] = new Array("装甲軍団",2,9,9,1401,2,0,4);
	Division[0][19] = new Array("歩兵軍団",1,6,6,1401,1,8,2);

	Division[0][20] = new Array("歩兵軍団",1,6,6,1502,1,8,2);
	Division[0][21] = new Array("歩兵軍団",1,6,6,1502,1,8,2);

	Division[0][22] = new Array("歩兵軍団",1,6,6,1604,1,8,2);
	Division[0][23] = new Array("歩兵軍団",1,6,6,1604,1,8,2);

	Division[0][24] = new Array("歩兵軍団",1,6,6,1805,1,8,2);
	Division[0][25] = new Array("歩兵軍団",1,6,6,1805,1,8,2);

	Division[0][26] = new Array("歩兵軍団",1,6,6,1906,1,8,2);
	Division[0][27] = new Array("ルーマニア軍",1,4,4,1906,1,8,2);

	//ソ連軍

	//戦車軍
	Division[1][ 0] = new Array("戦車軍",2,6,6,807,2,0,4);//ミンスク
	Division[1][ 1] = new Array("戦車軍",2,6,6,1308,2,0,4);//キエフ
	Division[1][ 2] = new Array("戦車軍",2,6,6,1308,2,0,4);//キエフ

	//騎兵軍
	Division[1][ 3] = new Array("騎兵軍",3,3,3,807,2,0,4);//ミンスク
	Division[1][ 4] = new Array("騎兵軍",3,3,3,1308,2,0,4);//キエフ

	//国境守備隊
	Division[1][ 5] = new Array("歩兵軍",1,3,4,602,1,0,0);
	Division[1][ 6] = new Array("歩兵軍",1,3,4,602,1,0,0);
	AreaData[602][0] = 1;

	Division[1][ 7] = new Array("歩兵軍",1,3,4,803,1,0,0);
	Division[1][ 8] = new Array("歩兵軍",1,3,4,803,1,0,0);
	AreaData[803][0] = 1;

	Division[1][ 9] = new Array("歩兵軍",1,3,4,902,1,0,0);
	Division[1][10] = new Array("歩兵軍",1,3,4,902,1,0,0);
	AreaData[902][0] = 1;

	Division[1][11] = new Array("歩兵軍",1,3,4,1103,1,0,0);
	Division[1][12] = new Array("歩兵軍",1,3,4,1103,1,0,0);
	AreaData[1103][0] = 1;

	Division[1][13] = new Array("歩兵軍",1,3,4,1303,1,0,0);
	Division[1][14] = new Array("歩兵軍",1,3,4,1303,1,0,0);
	AreaData[1303][0] = 1;

	Division[1][15] = new Array("歩兵軍",1,3,4,1402,1,0,0);
	Division[1][16] = new Array("歩兵軍",1,3,4,1402,1,0,0);
	AreaData[1402][0] = 1;

	Division[1][17] = new Array("歩兵軍",1,3,4,1504,1,0,0);
	Division[1][18] = new Array("歩兵軍",1,3,4,1504,1,0,0);
	AreaData[1504][0] = 1;

	Division[1][19] = new Array("歩兵軍",1,3,4,1705,1,0,0);
	Division[1][20] = new Array("歩兵軍",1,3,4,1705,1,0,0);
	AreaData[1705][0] = 1;

	Division[1][21] = new Array("歩兵軍",1,3,4,1806,1,0,0);
	Division[1][22] = new Array("歩兵軍",1,3,4,1806,1,0,0);
	AreaData[1806][0] = 1;

	//ミンスク
	Division[1][23] = new Array("歩兵軍",1,4,4,807,1,0,0);

	//クルスク
	Division[1][24] = new Array("歩兵軍",1,4,4,1112,1,0,0);

	//リガ
	Division[1][25] = new Array("歩兵軍",1,4,4,404,1,0,0);
	//Division[1][26] = new Array("歩兵軍",1,4,4,404,1,0,0);

	//タリン
	Division[1][27] = new Array("歩兵軍",1,4,4,205,1,0,0);

	//スモレンスク
	Division[1][28] = new Array("歩兵軍",1,4,4,710,1,0,0);

	//セヴァストポリ
	Division[1][29] = new Array("歩兵軍",1,4,4,1911,1,0,0);

	//ハリコフ
	Division[1][30] = new Array("歩兵軍",1,4,4,1413,1,0,0);

	//オデッサ
	Division[1][31] = new Array("歩兵軍",1,4,4,1707,1,0,0);

	//レニングラード
	Division[1][32] = new Array("歩兵軍",1,4,4,109,1,0,0);

	//モスクワ
	Division[1][33] = new Array("歩兵軍",1,4,4,613,1,0,0);

	//キエフ
	Division[1][34] = new Array("歩兵軍",1,4,4,1308,1,0,0);

	//ノヴゴロド
	Division[1][35] = new Array("歩兵軍",1,4,4,309,1,0,0);

	SovDivNum = 36;

}