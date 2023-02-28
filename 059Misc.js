<!--【Misc】-->

function DefaultMisc() {//新システムを導入する→DefMiscに新たなMisc値を記入→各シナリオの冒頭でDefMisc();→新システム導入のたびに全シナリオにMisc値を書き込まなくてよい

	ChanceMin = 2;//師団が選択肢に出てくる値の最小値
	ChanceMax = 5;//師団が選択肢に出てくる値の最大値
	//DefMisc = 2;//防衛時の戦力ボーナス
	MiscTaikyakuSuu = 1;//退却移動するへクス数
	MiscShireibuRange = 2;//司令部の効果範囲
	MiscShireibuKouka = 2;//司令部のイニシアティブ補正効果
	TaikyakuSystem = 0;//０攻撃を受けたら退却、１攻撃してきた敵戦力により変化(バトルシステム0,3のみ対応)
	KyoukouKinou = 0;//強攻
	TikeiCost = new Array(1,99,1,99,2,1,3);
	TikeiBougyo = new Array(2,99,2,99,2,2,3);
	//平地、海、都市、湿地、河川、道路、森
	MiscBattleSystem4 = 3;//基本攻撃成功率(/6)

}

DefaultMisc();

Game = 0;
AreaIdCheck = 1;

Tate = 40;
Yoko = 45;


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

AreaName = new Array();

//エリア制作用

function AreaIdHyouji() {
	if (AreaIdCheck==1) {
		for (HenA=1;HenA<=Tate;HenA++) {
			for (HenB=1;HenB<=Yoko;HenB++) {
				AreaName[HenA*100+HenB] = HenA*100+HenB;
			}
		}
	}
}
