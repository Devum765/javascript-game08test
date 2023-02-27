<!--【Misc】-->

ChanceMin = 2;//師団が選択肢に出てくる値の最小値
ChanceMax = 5;//師団が選択肢に出てくる値の最大値
DefMisc = 2;//防衛時の戦力ボーナス
MiscShireibuRange = 2;//司令部の効果範囲
MiscShireibuKouka = 2;//司令部のイニシアティブ補正効果
Game = 0;
ScenarioNum = 0;
KyoukouKinou = 0;
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
