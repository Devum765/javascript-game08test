function Scenario002() {

	Tikei1941();

	ScenarioNum = 2;

	Initiative01 = 1;
	Initiative02 = 2;
	TurnJinnei = 1;
	TekiTurnJinnei = 0;
	Hokyuu = new Array(0,0);//初期補給物資
	HokyuuPlusBon = new Array(1,1);//補給ボーナス
	DefaultMisc();
	HojuMisc = 20;//補充に必要な補給値
	HojuEffMisc = 3;//一度の補充で上昇する戦力値
	BattleSystem = 0;
	MiscShisyu = 2;//死守時の喪失戦闘力

	ShisyuMeirei = 1;

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

	//地形
	//AreaData[ 111][9] = 0;//ヴォルホフ

	//都市生産力
	AreaData[ 109][1] = 0;//レニングラード
	AreaData[ 613][1] = 0;//モスクワ
	AreaData[1420][1] = 0;//スターリングラード
	AreaData[1308][1] = 0;//キエフ
	AreaData[ 807][1] = 0;//ミンスク
	AreaData[1001][1] = 0;//ワルシャワ

	//占領
	AreaData[ 109][0] = 1;//レニングラード
	AreaData[ 613][0] = 1;//モスクワ
	AreaData[1420][0] = 0;//スターリングラード
	AreaData[1308][0] = 0;//キエフ
	AreaData[2017][0] = 0;//マイコプ
	AreaData[ 807][0] = 0;//ミンスク
	AreaData[1001][0] = 0;//ワルシャワ
	AreaData[ 404][0] = 0;//リガ
	AreaData[ 205][0] = 0;//タリン
	AreaData[ 710][0] = 0;//スモレンスク
	AreaData[1911][0] = 0;//セヴァストポリ
	AreaData[1413][0] = 0;//ハリコフ
	AreaData[ 618][0] = 1;//ゴーリキー
	//AreaData[ 111][0] = 1;//ヴォルホフ
	//AreaData[1514][0] = 1;//ロストフ
	AreaData[1112][0] = 0;//クルスク
	AreaData[1707][0] = 0;//オデッサ
	AreaData[ 309][0] = 0;//ノヴゴロド
	AreaData[2004][0] = 0;//ブカレスト
	AreaData[1103][0] = 0;//ブレスト
	AreaData[ 801][0] = 0;//ケーニヒスベルク

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
	Division[0][ 0] = new Array("歩兵軍団",1,6,6, 209,1,0,1);
	Division[0][ 1] = new Array("歩兵軍団",1,6,6, 209,1,0,1);

	Division[0][ 2] = new Array("歩兵軍団",1,6,6, 210,1,0,1);

	Division[0][ 3] = new Array("歩兵軍団",1,6,6, 410,1,0,1);
	Division[0][ 4] = new Array("歩兵軍団",1,6,6, 410,1,0,1);

	Division[0][ 5] = new Array("歩兵軍団",1,6,6, 508,1,0,1);
	Division[0][ 6] = new Array("歩兵軍団",1,6,6, 508,1,0,1);

	Division[0][ 7] = new Array("歩兵軍団",1,6,6, 710,1,0,1);
	Division[0][ 8] = new Array("歩兵軍団",1,6,6, 710,1,0,1);

	Division[0][ 9] = new Array("歩兵軍団",1,6,6, 912,1,0,1);
	Division[0][10] = new Array("歩兵軍団",1,6,6, 912,1,0,1);

	Division[0][11] = new Array("装甲軍団",2,9,9,1114,2,0,2);
	Division[0][12] = new Array("歩兵軍団",1,6,6,1114,1,0,1);

	Division[0][13] = new Array("歩兵軍団",1,6,6,1316,1,0,1);
	Division[0][14] = new Array("歩兵軍団",1,6,6,1316,1,0,1);

	Division[0][15] = new Array("装甲軍団",2,9,9,1318,2,0,2);
	Division[0][16] = new Array("ルーマニア軍",1,4,4,1318,1,0,1);

	Division[0][17] = new Array("装甲軍団",2,9,9,1420,2,0,2);
	Division[0][18] = new Array("歩兵軍団",1,6,6,1420,1,0,1);

	Division[0][19] = new Array("歩兵軍団",1,6,6,1820,1,0,1);

	Division[0][20] = new Array("歩兵軍団",1,6,6,2017,1,0,1);
	//Division[0][21] = new Array("歩兵軍団",1,6,6,2017,1,0,1);

	Division[0][21] = new Array("歩兵軍団",1,6,6,1911,1,0,1);

	GerDivNum = 22;

	//ソ連軍
	Division[1][ 0] = new Array("歩兵軍",1,6,6, 109,1,0,3);
	Division[1][ 1] = new Array("歩兵軍",1,6,6, 109,1,0,3);
	Division[1][ 2] = new Array("歩兵軍",1,6,6, 109,1,0,3);
	AreaData[ 109][0] = 1;

	Division[1][ 3] = new Array("歩兵軍",1,6,6, 311,1,0,3);
	Division[1][ 4] = new Array("歩兵軍",1,6,6, 311,1,0,3);
	AreaData[ 311][0] = 1;

	Division[1][ 5] = new Array("歩兵軍",1,6,6, 511,1,0,3);
	Division[1][ 6] = new Array("歩兵軍",1,6,6, 511,1,0,3);
	AreaData[ 511][0] = 1;

	Division[1][ 7] = new Array("歩兵軍",1,6,6, 610,1,0,3);
	Division[1][ 8] = new Array("歩兵軍",1,6,6, 610,1,0,3);
	AreaData[ 610][0] = 1;

	Division[1][ 9] = new Array("歩兵軍",1,6,6, 811,1,0,3);
	Division[1][10] = new Array("歩兵軍",1,6,6, 811,1,0,3);
	AreaData[ 811][0] = 1;

	Division[1][11] = new Array("歩兵軍",1,6,6, 913,1,0,3);
	Division[1][12] = new Array("歩兵軍",1,6,6, 913,1,0,3);
	AreaData[ 913][0] = 1;

	Division[1][13] = new Array("戦車軍",1,9,9,1014,1,0,4);
	Division[1][14] = new Array("歩兵軍",1,6,6,1014,1,0,3);
	AreaData[1014][0] = 1;

	Division[1][15] = new Array("戦車軍",2,9,9,1216,2,0,4);
	Division[1][16] = new Array("歩兵軍",1,6,6,1216,2,0,2);
	AreaData[1216][0] = 1;

	Division[1][17] = new Array("戦車軍",2,9,9,1218,2,0,4);
	Division[1][18] = new Array("戦車軍",2,9,9,1218,2,0,4);
	Division[1][19] = new Array("歩兵軍",1,6,6,1218,1,0,3);
	AreaData[1218][0] = 1;

	Division[1][20] = new Array("歩兵軍",1,6,6,1320,1,0,3);
	Division[1][21] = new Array("歩兵軍",1,6,6,1320,1,0,3);
	AreaData[1320][0] = 1;

	Division[1][22] = new Array("戦車軍",2,9,9,1620,1,0,4);
	Division[1][23] = new Array("戦車軍",2,9,9,1620,1,0,4);
	Division[1][24] = new Array("歩兵軍",1,6,6,1620,1,0,3);
	AreaData[1620][0] = 1;

	//Division[1][25] = new Array("司令部",9,5,5,1218,1,0,0);

	SovDivNum = 25;

}