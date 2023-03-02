<!--【イベント】-->

SovToshiSousuu = 15;//17
SovToshi = new Array(109,613,1420,1308,2017,807,404,205,710,1911,1413,618,1112,1707,309,1101);//111,1514
SovDivNum = 36;

Event01 = 0;
Event02 = 0;

function Event() {
	//バルバロッサ作戦
	if (ScenarioNum==1) {
		if (Turn==100 || Turn==150 || Turn==200) {//Turn==50 ||
			alert("ソ連軍の増援\nドイツ軍が占領していな都市において、ソ連歩兵軍が登場します\n(レニングラード、モスクワ、キエフ、ミンスクでは戦車軍も登場)");
			if (AreaData[109][0]==1) {//レニングラード
				if (AreaData[ 109][8]<=4) { Division[1][SovDivNum] = new Array("戦車軍",2,6,6, 109,2,0,4); SovDivNum++; }
			}
			if (AreaData[ 613][0]==1) {//モスクワ
				if (AreaData[ 613][8]<=4) { Division[1][SovDivNum] = new Array("戦車軍",2,6,6, 613,2,0,4); SovDivNum++; }
			}
			if (AreaData[ 613][0]==0) {//モスクワ陥落時、代わりにゴーリキーから部隊が出現
				if (AreaData[ 618][8]<=2) { Division[1][SovDivNum] = new Array("戦車軍",2,6,6, 618,2,0,4); SovDivNum++; }
				if (AreaData[ 618][8]<=3) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4, 618,2,0,0); SovDivNum++; }
				if (AreaData[ 618][8]<=4) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4, 618,2,0,0); SovDivNum++; }
			}
			if (AreaData[ 807][0]==1) {//ミンスク
				if (AreaData[ 807][8]<=4) { Division[1][SovDivNum] = new Array("戦車軍",2,6,6, 807,2,0,4); SovDivNum++; }
			}
			if (AreaData[1308][0]==1) {//キエフ
				if (AreaData[1308][8]<=4) { Division[1][SovDivNum] = new Array("戦車軍",2,6,6,1308,2,0,4); SovDivNum++; }
			}
			MapShidannData();
			if (Turn==50) {
				for (EventHenA=0;EventHenA<=SovToshiSousuu;EventHenA++) {
					if (AreaData[SovToshi[EventHenA]][0]==1) {
		 				if (AreaData[SovToshi[EventHenA]][8]<=3) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4,SovToshi[EventHenA],2,0,0); SovDivNum++; }
						if (AreaData[SovToshi[EventHenA]][8]<=4) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4,SovToshi[EventHenA],2,0,0); SovDivNum++; }
					}
				}
			}
			if (Turn==100 || Turn==150) {
				for (EventHenA=0;EventHenA<=SovToshiSousuu;EventHenA++) {
					if (AreaData[SovToshi[EventHenA]][0]==1) {
		 				if (AreaData[SovToshi[EventHenA]][8]<=3) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4,SovToshi[EventHenA],2,0,1); SovDivNum++; }
						if (AreaData[SovToshi[EventHenA]][8]<=4) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4,SovToshi[EventHenA],2,0,1); SovDivNum++; }
					}
				}
			}
			if (Turn==200) {
				for (EventHenA=0;EventHenA<=SovToshiSousuu;EventHenA++) {
					if (AreaData[SovToshi[EventHenA]][0]==1) {
		 				if (AreaData[SovToshi[EventHenA]][8]<=3) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4,SovToshi[EventHenA],2,0,2); SovDivNum++; }
						if (AreaData[SovToshi[EventHenA]][8]<=4) { Division[1][SovDivNum] = new Array("歩兵軍",1,4,4,SovToshi[EventHenA],2,0,2); SovDivNum++; }
					}
				}
			}
			MapShidannData();
		}
		if (Turn==65) {
			alert("ソ連軍の回復\nドイツ軍の奇襲効果が終了し、ドイツ軍のイニシアティブ補正が無効になります\nまた、ソ連軍歩兵の移動力が2になります");
			Initiative01 = 1;
			Initiative02 = 1;
			for (EventHenA=0;EventHenA<=35;EventHenA++) {
				if (Division[1][EventHenA][1]==1) {
					Division[1][EventHenA][7] = 1;
				}
			}
		}
		if (Turn==200) {
			alert("ソ連軍の冬季攻勢\nソ連軍が手番を得る確率が2倍になります\nまた、ソ連軍歩兵の移動力が3になります");
			Initiative01 = 1;
			Initiative02 = 2;
			for (EventHenA=0;EventHenA<=DivSousuu;EventHenA++) {
				if (Division[1][EventHenA][1]==1) {
					Division[1][EventHenA][7] = 2;
				}
			}
		}
		if (Turn==200) {
			alert("本ゲーム最後の増援が終了したため、以後勝利条件に関わる都市のみ表示します");
			AreaData[ 404][9] = 0;//リガ
			AreaData[ 205][9] = 0;//タリン
			AreaData[ 710][9] = 0;//スモレンスク
			AreaData[1911][9] = 0;//セヴァストポリ
			AreaData[1413][9] = 0;//ハリコフ
			AreaData[ 618][9] = 0;//ゴーリキー
			//AreaData[ 111][9] = 0;//ヴォルホフ
			//AreaData[1514][9] = 0;//ロストフ
			AreaData[1112][9] = 0;//クルスク
			AreaData[1707][9] = 0;//オデッサ
			AreaData[ 309][9] = 0;//ノヴゴロド
			AreaData[2004][9] = 0;//ブカレスト
			AreaData[1103][9] = 0;//ブレスト
			AreaData[ 801][9] = 0;//ケーニヒスベルク
		}
		if (Turn==250) {
			EventHenB = 0;
			VpToshi = new Array(109,613,1420,1308,2017,807,1001);
			for (EventHenA=0;EventHenA<=6;EventHenA++) {
				if (AreaData[VpToshi[EventHenA]][0]==0) {
					EventHenB++;
				}
			}
			if (EventHenB>=4) { alert("ドイツ軍勝利\nゲームを終了します"); }
			if (EventHenB<3)  { alert("ソ連軍勝利\nゲームを終了します"); }
			Game = 1;
		}
	}
	//敗北への坂道
	if (ScenarioNum==2) {
		EventHenA = Math.random();
		if (TurnJinnei==0 && ShisyuMeirei==0 && EventHenA>=0.9) {
			alert("ヒトラーの死守命令\nドイツ軍 歩兵軍団の移動力が2\nドイツ軍 装甲軍団の移動力が3になります");
			for (EventHenB=0;EventHenB<=DivSousuu;EventHenB++) {
				if (Division[0][EventHenB][1]==1) {
					Division[0][EventHenB][7] = 1;
				}
				if (Division[0][EventHenB][1]==2) {
					Division[0][EventHenB][7] = 2;
				}
				ShisyuMeirei = 1;
			}
		}
		if (TurnJinnei==0 && ShisyuMeirei==1 && EventHenA<=0.4) {
			alert("死守命令の解除\nドイツ軍 歩兵軍団の移動力が3\nドイツ軍 装甲軍団の移動力が5になります");
			for (EventHenB=0;EventHenB<=DivSousuu;EventHenB++) {
				if (Division[0][EventHenB][1]==1) {
					Division[0][EventHenB][7] = 3;
				}
				if (Division[0][EventHenB][1]==2) {
					Division[0][EventHenB][7] = 4;
				}
				ShisyuMeirei = 0;
			}
		}
		if (Turn==50 || Turn==100 || Turn==150 || Turn==200) {
			alert("ソ連軍の補充\n50ターンごとに、ソ連軍占領下の都市において歩兵軍が1部隊ずつ登場します");
			for (EventHenA=0;EventHenA<=SovToshiSousuu;EventHenA++) {
				if (AreaData[SovToshi[EventHenA]][0]==1) {
					if (AreaData[SovToshi[EventHenA]][9]==2) {//都市指定されている
						if (AreaData[SovToshi[EventHenA]][8]<=4) { Division[1][SovDivNum] = new Array("歩兵軍",1,6,6,SovToshi[EventHenA],1,0,3); SovDivNum++; }
					}
				}
			}
			alert("ドイツ軍の補充\n50ターンごとに、キエフ(あるいはブカレスト)、ミンスク(あるいはワルシャワ)、リガ(あるいはワルシャワ)において歩兵軍団が1部隊登場します\nキエフ(あるいはブカレスト)ではさらに装甲軍団が1部隊登場");
			if (AreaData[1308][0]==0) {//キエフ
				if (AreaData[1308][8]<=3) { Division[0][GerDivNum] = new Array("装甲軍団",2,9,9,1308,2,0,4); GerDivNum++; }
				if (AreaData[1308][8]<=4) { Division[0][GerDivNum] = new Array("歩兵軍団",1,6,6,1308,1,0,3); GerDivNum++; }
			}
			if (AreaData[1308][0]==1) {//キエフ
				if (AreaData[2004][0]==0) {//ブカレスト
					if (AreaData[2004][8]<=3) { Division[0][GerDivNum] = new Array("装甲軍団",2,9,9,2004,2,0,4); GerDivNum++; }
					if (AreaData[2004][8]<=4) { Division[0][GerDivNum] = new Array("歩兵軍団",1,6,6,2004,1,0,3); GerDivNum++; }
				}
			}
			if (AreaData[ 807][0]==0) {//ミンスク
				if (AreaData[ 807][8]<=4) { Division[0][GerDivNum] = new Array("歩兵軍団",1,6,6, 807,1,0,3); GerDivNum++; }
			}
			if (AreaData[ 807][0]==1) {//ミンスク
				if (AreaData[1001][0]==0) {//ワルシャワ
					if (AreaData[1001][8]<=4) { Division[0][GerDivNum] = new Array("歩兵軍団",1,6,6,1001,1,0,3); GerDivNum++; }
				}
			}
			MapShidannData();
			if (AreaData[ 404][0]==0) {//リガ
				if (AreaData[ 404][8]<=4) { Division[0][GerDivNum] = new Array("歩兵軍団",1,6,6, 404,1,0,3); GerDivNum++; }
			}
			if (AreaData[ 404][0]==1) {//リガ
				if (AreaData[1001][0]==0) {//ワルシャワ
					if (AreaData[1001][8]<=4) { Division[0][GerDivNum] = new Array("歩兵軍団",1,6,6,1001,1,0,3); GerDivNum++; }
				}
			}
			MapShidannData();
		}
		if (Turn==25) {
			alert("ソ連軍攻勢の終了\nソ連軍のイニシアティブ補正が無効になります");
			Initiative01 = 1;
			Initiative02 = 1;
		}
		if (Turn==75) {
			alert("ドイツ軍の攻勢\nドイツ軍が手番を得る確率が2倍になります");
			Initiative01 = 2;
			Initiative02 = 1;
		}
		if (Turn==100) {
			alert("ドイツ軍攻勢の終了\nドイツ軍のイニシアティブ補正が無効になります");
			Initiative01 = 1;
			Initiative02 = 1;
		}
		if (Turn==125) {
			alert("ソ連軍の攻勢\nソ連軍が手番を得る確率が2倍になります");
			Initiative01 = 1;
			Initiative02 = 2;
		}
		if (Turn==150) {
			alert("ソ連軍攻勢の終了\nソ連軍のイニシアティブ補正が無効になります");
			Initiative01 = 1;
			Initiative02 = 1;
		}
		if (Turn==200) {
			alert("ソ連軍の攻勢\nソ連軍が手番を得る確率が2倍になります");
			Initiative01 = 1;
			Initiative02 = 2;
		}
	}
	//
	if (ScenarioNum==3) {
		//if (Turn==25) {
		//	if (window.confirm("ロシア連邦大統領として、総動員を宣言しますか？\nロシア国民士気-2、75Turnに動員兵が登場します")) {
		//		VP1 -= 2;
		//		DouinnFlag = 1;
		//	}
		//}
		if (Turn==50) {
			alert("NATO連合軍の奇襲効果終了\nNATO軍のイニシアティブ補正が無効になります\n\n「兵站は、機甲部隊の作戦行動の足枷である。」\nハインツ・グデーリアン");
			Initiative01 = 1;
			Initiative02 = 1;
			alert("予備役兵の到着\nペテルブルグ、モスクワ、ミンスクに増援部隊が登場し、また守備隊とベラルーシ第2軍の最大戦力が12になります\n\n「ロシア、聖なる我らの国\nロシア、親愛なる我らの国」\nロシア連邦共和国国歌");
			if (AreaData[ 109][0]==1) {//レニングラード
			//	if (AreaData[ 109][8]<=4) { Division[1][SovDivNum] = new Array("予備役第1軍",1,3,3, 109,1,10,2); SovDivNum++; }
			}
			if (AreaData[ 613][0]==1) {//モスクワ
			//	if (AreaData[ 613][8]<=3) { Division[1][SovDivNum] = new Array("予備役第2軍",1,1,1, 613,1,10,2); SovDivNum++; }
				if (AreaData[ 613][8]<=4) { Division[1][SovDivNum] = new Array("予備役第3軍",1,1,1, 613,1,10,2); SovDivNum++; }
			}
			if (AreaData[1911][0]==1) {//セヴァストポリ
				if (AreaData[1911][8]<=4) { Division[1][SovDivNum] = new Array("海兵軍",1,1,1,1911,1,10,2); SovDivNum++; }
			}
			if (AreaData[ 807][0]==1) {//ミンスク
				if (AreaData[ 807][8]<=4) { Division[1][SovDivNum] = new Array("ベラルーシ予備役軍",1,1,1, 807,1,10,2); SovDivNum++; }
			}
			//Division[1][ 0][3] = 12;
			//Division[1][ 1][3] = 12;
			//Division[1][ 2][3] = 12;
			//Division[1][ 4][3] = 12;
			//Division[1][ 5][3] = 12;
			//Division[1][13][3] = 12;
			//alert("ロシア国民士気の向上\n西側の侵略に対し、ロシア国民は動揺と敗北主義から立ち直りつつあります\nロシア国民士気+1");
			//VP1 += 1;
		}
		EventHenA = Math.random();
		if (Turn>=50 && EventHenA>0.95 && Event01==0) {
			alert("ランダムイベント：戦争熱\n西側の侵略に対し、ロシア国民は戦争への支持を高めています\nロシア国民士気+1\n\n「この戦争は普通の戦争ではない。全ロシア人民の戦争だ。」\nヨシフ・スターリン");
			VP1 += 1;
			Event01 = 1;
		}
		if (Turn==75 && DouinnFlag==1) {
			alert("総動員の完了\n\n「立ち上がれ巨大なる国よ、立ち上がれ死を賭けた戦いに」\n軍歌Священная войнаより");
			if (AreaData[ 613][0]==1) {//モスクワ
				if (AreaData[ 613][8]<=2) { Division[1][SovDivNum] = new Array("予備役第4軍",1,1,1, 613,1,10,2); SovDivNum++; }
				if (AreaData[ 613][8]<=3) { Division[1][SovDivNum] = new Array("予備役第5軍",1,1,1, 613,1,10,2); SovDivNum++; }
				if (AreaData[ 613][8]<=4) { Division[1][SovDivNum] = new Array("予備役第6軍",1,1,1, 613,1,10,2); SovDivNum++; }
			}
		}
		if (Turn==100) {
			alert("人民解放軍の到着\n\n「我々は戦争を望まない。しかし世界には戦争を望む者たちが多く存在する。」\n習近平(シー・チンピン)、テレビ演説より");
			if (AreaData[1420][0]==1) {//スターリングラード
				//if (AreaData[1420][8]<=2) { Division[1][SovDivNum] = new Array("人民解放軍第1軍",1,1,1,1420,1,10,2); SovDivNum++; }
				if (AreaData[1420][8]<=3) { Division[1][SovDivNum] = new Array("人民解放軍第1軍",1,1,1,1420,1,10,2); SovDivNum++; }
				if (AreaData[1420][8]<=4) { Division[1][SovDivNum] = new Array("人民解放軍第2軍",1,1,1,1420,1,10,2); SovDivNum++; }
			}
		}
		//if (Turn==100) {
		//	alert("ロシア軍反撃攻勢\nロシア軍の移動力が5になります\n\n「ロシアは決して屈しない。ロシアは常にこの日のために備えてきた。」\nロシア軍高官");
		//	for (EventHenA=0;EventHenA<=DivSousuu;EventHenA++) {
		//		if (Division[1][EventHenA][7]!=0) {
		//			Division[1][EventHenA][7] = 4;
		//		}
		//	}
		//}
		EventHenA = Math.random();
		if (Turn>=100 && EventHenA>0.96 && Event02==0 && AreaData[ 109][0]==0) {//レニングラード
			alert("ランダムイベント：フィンランド軍の参戦\n\n「大国に頼りきることは大国を敵にするのと同じくらい危険なことだ。」\nカール・マンネルヘイム");
			if (AreaData[ 109][8]<=4) { Division[0][GerDivNum] = new Array("フィンランド軍",1,1,1, 109,1,10,2); GerDivNum++; }
			Event02 = 1;
		}
		EventHenA = Math.random();
		if (Turn>=100 && EventHenA>0.97 && Event02==0 && AreaData[ 113][0]==0) {//モスクワの北
			alert("ランダムイベント：イギリス軍のアルハンゲリスク上陸作戦\nアルハンゲリスクから上陸したイギリス軍が戦場に到着しました\n\n「戦争は、神の地理学を我々に教えるやり方だと思う。」\nポール・ロドリゲス");
			if (AreaData[ 113][8]<=4) { Division[0][GerDivNum] = new Array("イギリス第2軍",1,1,1, 113,1,10,3); GerDivNum++; }
			Event02 = 1;
		}
		//if (Turn==150) {
		//	alert("ロシア予備軍の編成完了");
		//	if (AreaData[ 613][0]==1) {//モスクワ
		//		if (AreaData[ 613][8]<=4) { Division[1][SovDivNum] = new Array("予備役第7軍",1,12,12, 613,1,10,4); SovDivNum++; }//移動4
		//	}
		//}
		//if (Turn==150) {
		//	alert("トルコ軍の参戦\n\n「トルコの参戦は民主主義の防衛のためではなく、それがトルコの利益になるからである。この参戦でトルコは中東の覇者になるであろう。」\n英国放送協会");
		//	if (AreaData[2017][0]==0) {//マイコプ
		//		if (AreaData[2017][8]<=4) { Division[0][GerDivNum] = new Array("トルコ軍",1,6,6,2017,1,10,2); GerDivNum++; }
		//	}
		//}
		if (Turn==150) {
			alert("ドイツ軍の増援\n\n「この作戦が短期間で電撃的に成功するとの見通しは、まさしく2年前にプーチンが抱いた幻想と同じであった。」\nドイツ連邦軍将校");
			if (AreaData[1001][0]==0) {//ワルシャワ
				if (AreaData[1001][8]<=4) { Division[0][GerDivNum] = new Array("ドイツ連邦第4軍",1,1,1,1001,1,10,3); GerDivNum++; }
			}
		}
		//if (Turn==150) {
		//	alert("ロシア軍攻勢の終了\nロシア軍の移動力が3になります\n\n「クレムリンでは新しい東ヨーロッパの地図が準備されている。」\nアメリカ政府報道官");
		//	for (EventHenA=0;EventHenA<=DivSousuu;EventHenA++) {
		//		if (Division[1][EventHenA][7]!=0) {
		//			Division[1][EventHenA][7] = 2;
		//		}
		//	}
		//}
		//if (Turn==200) {
		//	alert("EU軍の攻勢\nEU軍の移動力が5になります\nEU軍の移動力が5になります\n\n「人間の尊厳の不可侵と、民主主義体制を明記した憲法を擁護する義務を、政治家を含めた全国民に課す。」\nドイツ連邦共和国基本法");
		//	for (EventHenA=0;EventHenA<=DivSousuu;EventHenA++) {
		//		if (Division[0][EventHenA][7]!=0) {
		//			Division[0][EventHenA][7] = 4;
		//		}
		//	}
		//}
		//if (Turn==250) {
		//	alert("EU軍攻勢の終了\nEU軍の移動力が3になります\n\n「戦争では無傷ですむ兵士などいない。」\nホセ・ナロスキー");
		//	for (EventHenA=0;EventHenA<=DivSousuu;EventHenA++) {
		//		if (Division[0][EventHenA][7]!=0) {
		//			Division[0][EventHenA][7] = 2;
		//		}
		//	}
		//}
		VP2 = 10;
		for (EventHenA=1;EventHenA<=Tate;EventHenA++) {
			for (EventHenB=1;EventHenB<=Yoko;EventHenB++) {
				if (AreaData[EventHenA*100+EventHenB][9]==2) {//都市指定されている
					if (AreaData[EventHenA*100+EventHenB][0]==0) {
						VP2--;
					}
				}
			}
		}
		VP = VP1+VP2;
		if (VP<=0 && Turn!=300) {
			alert("ロシアの国民士気がゼロになりました\nロシアでは大衆運動により政権が倒れ、新政権が降伏を受諾します\nEU勝利");
			Game = 1;
		}
		if (AreaData[1001][0]==1 && Turn!=300) {
			alert("ワルシャワが陥落しました\nEUはロシアと停戦し、講和交渉に入ります\nロシア勝利");
			Game = 1;
		}
		if (AreaData[2004][0]==1 && Turn!=300) {
			alert("ブカレストが陥落しました\nEUはロシアと停戦し、講和交渉に入ります\nロシア勝利");
			Game = 1;
		}
		if (Turn==250) {
			alert("戦争は持久戦に入りました\n長い塹壕線が東ヨーロッパを東西に分けるでしょう\nロシア小勝利");
			Game = 1;
		}
	}
	if (ScenarioNum==10) {
		if (Turn==50) {
			alert("ソ連援軍の到着(スモレンスク)");
			if (AreaData[1629][0]==1) {//スモレンスク
				if (AreaData[1629][8]<=3) { Division[1][SovDivNum] = new Array("歩兵師団[5]",1,1,1,1629,1,10,4); SovDivNum++; }
				if (AreaData[1629][8]<=4) { Division[1][SovDivNum] = new Array("騎兵師団[8]",1,1,1,1629,1,0,7); SovDivNum++; }
			}
		}
		if (Turn==100) {
			alert("ソ連援軍の到着(ヤールツェヴォ、エリニャ、ロスラヴリ)");
			if (AreaData[ 843][0]==1) {//ヤールツェヴォ
				if (AreaData[ 843][8]<=3) { Division[1][SovDivNum] = new Array("歩兵師団[5]",1,1,1, 843,1,1,4); SovDivNum++; }
				if (AreaData[ 843][8]<=4) { Division[1][SovDivNum] = new Array("歩兵師団[5]",1,1,1, 843,1,1,4); SovDivNum++; }
			}
			if (AreaData[1742][0]==1) {//エリニャ
				if (AreaData[1742][8]<=3) { Division[1][SovDivNum] = new Array("歩兵師団[5]",1,1,1,1742,1,1,4); SovDivNum++; }
				if (AreaData[1742][8]<=4) { Division[1][SovDivNum] = new Array("歩兵師団[5]",1,1,1,1742,1,1,4); SovDivNum++; }
			}
			if (AreaData[3239][0]==1) {//ロスラヴリ
				if (AreaData[3239][8]<=3) { Division[1][SovDivNum] = new Array("歩兵師団[5]",1,1,1,3239,1,1,4); SovDivNum++; }
				if (AreaData[3239][8]<=4) { Division[1][SovDivNum] = new Array("歩兵師団[5]",1,1,1,3239,1,1,4); SovDivNum++; }
			}
		}
	}
}