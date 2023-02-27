function Scenario003() {

	AreaName[ 109] = "サンクトペテルブルグ";
	AreaName[1420] = "ヴォルコグラード";
	AreaName[1308] = "キーウ";
	AreaName[ 801] = "カリーニングラード";

	ScenarioNum = 3;

	Initiative01 = 2;
	Initiative02 = 1;
	TurnJinnei = 0;
	TekiTurnJinnei = 1;
	Hokyuu = new Array(0,0);//初期補給物資
	HokyuuPlusBon = new Array(0,0);//補給ボーナス
	HojuMisc = 0;//補充に必要な補給値
	HojuEffMisc = 0;//一度の補充で上昇する戦力値
	BattleSystem = 2;
	MiscShisyu = 1;//死守時の喪失戦闘力

	VP = 5;
	VP1 = 0;
	DouinnFlag = 0;

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
	AreaData[2017][9] = 0;//マイコプ
	AreaData[ 309][9] = 0;//ノヴゴロド
	AreaData[ 710][9] = 0;//スモレンスク
	AreaData[1413][9] = 0;//ハリコフ
	AreaData[1112][9] = 0;//クルスク
	AreaData[1103][9] = 0;//ブレスト
	AreaData[ 618][9] = 0;//ゴーリキー

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
	AreaData[1420][0] = 1;//スターリングラード
	AreaData[1308][0] = 1;//キエフ
	AreaData[2017][0] = 0;//マイコプ
	AreaData[ 807][0] = 1;//ミンスク
	AreaData[1001][0] = 0;//ワルシャワ
	AreaData[ 404][0] = 0;//リガ
	AreaData[ 205][0] = 0;//タリン
	AreaData[ 710][0] = 1;//スモレンスク
	AreaData[1911][0] = 1;//セヴァストポリ
	AreaData[1413][0] = 1;//ハリコフ
	AreaData[ 618][0] = 1;//ゴーリキー
	//AreaData[ 111][0] = 1;//ヴォルホフ
	//AreaData[1514][0] = 1;//ロストフ
	AreaData[1112][0] = 1;//クルスク
	AreaData[1707][0] = 0;//オデッサ
	AreaData[ 309][0] = 1;//ノヴゴロド
	AreaData[2004][0] = 0;//ブカレスト
	AreaData[1103][0] = 1;//ブレスト
	AreaData[ 801][0] = 1;//ケーニヒスベルク

	AreaData[ 113][0] = 0;//イベント用

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

	//NATO連合軍
	Division[0][ 0] = new Array("エストニア軍",1,1,1, 206,1,10,3);
	Division[0][ 1] = new Array("ラトビア軍",1,1,1, 406,1,10,3);
	Division[0][ 2] = new Array("リトアニア軍",1,1,1, 604,1,10,3);
	Division[0][ 3] = new Array("イギリス第1軍",1,2,2, 903,1,10,4);
	Division[0][ 4] = new Array("ポーランド第1軍",1,1,1,1001,1,10,3);
	Division[0][ 5] = new Array("ポーランド第2軍",1,1,1,1201,1,10,3);
	Division[0][ 6] = new Array("ドイツ連邦第1軍",1,2,2, 1001,1,10,4);
	Division[0][ 7] = new Array("ドイツ連邦第2軍",1,2,2,1303,1,10,4);
	Division[0][ 8] = new Array("ウクライナ第1軍",1,1,1,1307,1,10,3);
	Division[0][ 9] = new Array("ウクライナ第2軍",1,1,1,1307,1,10,3);
	Division[0][10] = new Array("ウクライナ第3軍",1,1,1,1407,1,10,3);
	Division[0][11] = new Array("ウクライナ第4軍",1,1,1,1507,1,10,3);
	Division[0][12] = new Array("ウクライナ第5軍",1,1,1,1707,1,10,3);
	Division[0][13] = new Array("ルーマニア軍",1,1,1,1805,1,10,3);
	Division[0][14] = new Array("フランス第1軍",1,2,2,205,1,10,4);
	Division[0][15] = new Array("フランス第2軍",1,2,2,205,1,10,4);
	Division[0][16] = new Array("ドイツ連邦第3軍",1,2,2,404,1,10,4);
	//Division[0][16] = new Array("ウクライナ軍司令部",9,5,5,1407,1,10,0);
	//Division[0][16] = new Array("アメリア軍司令部",9,5,5,205,1,10,0);

	GerDivNum = 17;

	//ロシア・ベラルーシ軍
	Division[1][ 0] = new Array("国境守備隊",1,1,1, 207,1,10,2);
	AreaData[ 207][0] = 1;
	Division[1][ 1] = new Array("ペテルブルグ守備隊",1,1,1, 109,1,10,2);
	Division[1][ 2] = new Array("国境守備隊",1,1,1, 507,1,10,2);
	AreaData[ 507][0] = 1;
	Division[1][ 3] = new Array("ベラルーシ第1軍",1,1,1, 807,1,10,2);
	Division[1][ 4] = new Array("ベラルーシ第2軍",1,1,1,1103,1,0,3);
	AreaData[1103][0] = 1;
	Division[1][ 5] = new Array("カリーニングラード守備隊",1,1,1, 801,1,10,2);
	Division[1][ 6] = new Array("ウクライナ派遣第1軍",1,1,1,1208,1,10,2);
	AreaData[1208][0] = 1;
	Division[1][ 7] = new Array("ウクライナ派遣第2軍",1,1,1,1308,1,10,2);
	Division[1][ 8] = new Array("ウクライナ派遣第3軍",1,1,1,1308,1,10,2);
	Division[1][ 9] = new Array("ウクライナ派遣第4軍",1,1,1,1308,1,10,2);
	Division[1][10] = new Array("ウクライナ派遣第5軍",1,1,1,1408,1,10,2);
	Division[1][11] = new Array("ウクライナ派遣第6軍",1,1,1,1408,1,10,2);
	AreaData[1408][0] = 1;
	Division[1][12] = new Array("ウクライナ派遣第7軍",1,1,1,1608,1,10,2);
	AreaData[1608][0] = 1;
	Division[1][13] = new Array("首都防衛軍",1,1,1, 613,1,10,2);
	//Division[1][14] = new Array("司令部",9,5,5,1308,1,10,0);

	SovDivNum = 14;

}