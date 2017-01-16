/*
**  Lottery.js： Components组装区
*/

(function () {
	'use strict';

	function Lottery (opt) {
		var playingNavData;

		this.opt        = opt;
		this.id         = opt.id;

		if (opt['playingNav'] === 'LT' && opt['market'] != 'CN3D') {
			playingNavData = [
				{
					"familyName": "五星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N5P",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N5S",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N5C",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G5X120",
									"methodName": "组选120",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X60",
									"methodName": "组选60",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X30",
									"methodName": "组选30",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X20",
									"methodName": "组选20",
									"plate": {
										"parentPlate": 1,
										"names": ['三重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X10",
									"methodName": "组选10",
									"plate": {
										"parentPlate": 1,
										"names": ['三重号', '二重号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X5",
									"methodName": "组选5",
									"plate": {
										"parentPlate": 1,
										"names": ['四重号', '单号'],
										"unitGroup": false
									}
								}
							]
						}
					] 
				},
				{
					"familyName": "四星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N4P",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N4S",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N4C",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G4X24",
									"methodName": "组选24",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "G4X12",
									"methodName": "组选12",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G4X6",
									"methodName": "组选6",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G4X4",
									"methodName": "组选4",
									"plate": {
										"parentPlate": 1,
										"names": ['三重号', '单号'],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "前三",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PF",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SF",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TF",
									"methodName": "和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "N3DF",
									"methodName": "跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "N3CF",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3F",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ['组三'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6F",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ['组六'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXF",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3TF",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 1, "end": 26}]
									}
								},
								{
									"methodId": "G3X3SF",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6SF",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3BF",
									"methodName": "包胆",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 9}]
									}
								}
							]
						},
						{
							"groupName": "其他",
							"playingMethods": [
								{
									"methodId": "S3TDF",
									"methodName": "和值尾数",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "S3SF",
									"methodName": "特殊号码",
									"plate": {
										"parentPlate": 4
									}
								}
							]
						}
					]
				},
				{
					"familyName": "中三",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PM",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SM",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TM",
									"methodName": "和值",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "N3DM",
									"methodName": "跨度",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3CM",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3M",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ['组三'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6M",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ['组六'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXM",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2
									}
								},
								{
									"methodId": "G3TM",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 1, "end": 26}]
									}
								},
								{
									"methodId": "G3X3SM",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2
									}
								},
								{
									"methodId": "G3X6SM",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2
									}
								},
								{
									"methodId": "G3BM",
									"methodName": "包胆",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 1, "end": 9}]
									}
								}
							]
						},
						{
							"groupName": "其他",
							"playingMethods": [
								{
									"methodId": "S3TDM",
									"methodName": "和值尾数",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "S3SM",
									"methodName": "特殊号码",
									"plate": {
										"parentPlate": 4,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "后三",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PL",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['百位', '十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SL",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TL",
									"methodName": "和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "N3DL",
									"methodName": "跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "N3CL",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['百位', '十位', '个位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3L",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ['组三'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6L",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ['组六'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXL",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3TL",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 1, "end": 26}]
									}
								},
								{
									"methodId": "G3X3SL",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6SL",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3BL",
									"methodName": "包胆",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 0, "end": 9}]
									}
								}
							]
						},
						{
							"groupName": "其他",
							"playingMethods": [
								{
									"methodId": "S3TDL",
									"methodName": "和值尾数",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "S3SL",
									"methodName": "特殊号码",
									"plate": {
										"parentPlate": 4,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "二星",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N2PL",
									"methodName": "后二复式",
									"plate": {
										"parentPlate": 1,
										"names": ['十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N2TL",
									"methodName": "后二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 18}]
									}
								},
								{
									"methodId": "N2DL",
									"methodName": "后二跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "N2PF",
									"methodName": "前二复式",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N2TF",
									"methodName": "前二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 18}]
									}
								},
								{
									"methodId": "N2DF",
									"methodName": "前二跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G2L",
									"methodName": "后二复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['组选']
									}
								},
								{
									"methodId": "G2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2TL",
									"methodName": "后二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 1, "end": 17}]
									}
								},
								{
									"methodId": "G2BL",
									"methodName": "后二包胆",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 9}]
									}
								},
								{
									"methodId": "G2F",
									"methodName": "前二复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['组选']
									}
								},
								{
									"methodId": "G2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2TF",
									"methodName": "前二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 1, "end": 17}]
									}
								},
								{
									"methodId": "G2BF",
									"methodName": "前二包胆",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 9}]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "一星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "定位胆",
							"playingMethods": [
								{
									"methodId": "N1",
									"methodName": "定位胆",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "不定位",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "三星不定位",
							"playingMethods": [
								{
									"methodId": "A1L3",
									"methodName": "后三一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2L3",
									"methodName": "后三二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A1F3",
									"methodName": "前三一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2F3",
									"methodName": "前三二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A1M3",
									"methodName": "中三一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2M3",
									"methodName": "中三二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						},
						{
							"groupName": "四星不定位",
							"playingMethods": [
								{
									"methodId": "A1L4",
									"methodName": "四星一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2L4",
									"methodName": "四星二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						},
						{
							"groupName": "五星不定位",
							"playingMethods": [
								{
									"methodId": "A2N5",
									"methodName": "五星二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A3N5",
									"methodName": "五星三码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "大小单双",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "大小单双",
							"playingMethods": [
								{
									"methodId": "BSOEL2",
									"methodName": "后二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["十位", "个位"]
									}
								},
								{
									"methodId": "BSOEL3",
									"methodName": "后三大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["百位", "十位", "个位"]
									}
								},
								{
									"methodId": "BSOEF2",
									"methodName": "前二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["万位", "千位"]
									}
								},
								{
									"methodId": "BSOEF3",
									"methodName": "前三大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["万位", "千位", "百位"]
									}
								},
								{
									"methodId": "BSOEM3",
									"methodName": "中三大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["千位", "百位", "十位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "趣味",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "趣味",
							"playingMethods": [
								{
									"methodId": "F5N3",
									"methodName": "五码趣味三星",
									"plate": {
										"parentPlate": 7,
										"names": ["万位", "千位", "百位", "十位", "个位"],
										"funrow": {"万位": true, "千位": true}
									}
								},
								{
									"methodId": "F4N3",
									"methodName": "四码趣味三星",
									"plate": {
										"parentPlate": 7,
										"names": ["千位", "百位", "十位", "个位"],
										"funrow": {"千位": true}
									}
								},
								{
									"methodId": "F3N2L",
									"methodName": "后三趣味二星",
									"plate": {
										"parentPlate": 7,
										"names": ["百位", "十位", "个位"],
										"funrow": {"百位": true}
									}
								},
								{
									"methodId": "F3N2F",
									"methodName": "前三趣味二星",
									"plate": {
										"parentPlate": 7,
										"names": ["万位", "千位", "百位"],
										"funrow": {"万位": true}
									}
								},
								{
									"methodId": "F3N2M",
									"methodName": "中三趣味二星",
									"plate": {
										"parentPlate": 7,
										"names": ["千位", "百位", "十位"],
										"funrow": {"千位": true}
									}
								}
							]
						},
						{
							"groupName": "区间",
							"playingMethods": [
								{
									"methodId": "R5N3",
									"methodName": "五码区间三星",
									"plate": {
										"parentPlate": 8,
										"names": ["万位", "千位", "百位", "十位", "个位"],
										"zonerow": {"万位": true, "千位": true}
									}
								},
								{
									"methodId": "R4N3",
									"methodName": "四码区间三星",
									"plate": {
										"parentPlate": 8,
										"names": ["千位", "百位", "十位", "个位"],
										"zonerow": {"千位": true}
									}
								},
								{
									"methodId": "R3N2L",
									"methodName": "后三区间二星",
									"plate": {
										"parentPlate": 8,
										"names": ["百位", "十位", "个位"],
										"zonerow": {"百位": true}
									}
								},
								{
									"methodId": "R3N2F",
									"methodName": "前三区间二星",
									"plate": {
										"parentPlate": 8,
										"names": ["万位", "千位", "百位"],
										"zonerow": {"万位": true}
									}
								},
								{
									"methodId": "R3N2M",
									"methodName": "中三区间二星",
									"plate": {
										"parentPlate": 8,
										"names": ["千位", "百位", "十位"],
										"zonerow": {"千位": true}
									}
								}
							]
						},
						{
							"groupName": "特殊",
							"playingMethods": [
								{
									"methodId": "SA1",
									"methodName": "一帆风顺",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "SA2",
									"methodName": "好事成双",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "SA3",
									"methodName": "三星报喜",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "SA4",
									"methodName": "四季发财",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选二",
							"playingMethods": [
								{
									"methodId": "A2P",
									"methodName": "直选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								},
								{
									"methodId": "A2S",
									"methodName": "直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								},
								{
									"methodId": "A2T",
									"methodName": "直选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": [""],
										"numbers": [{"start": 0, "end": 18}]
									}
								},
								{
									"methodId": "A2G2",
									"methodName": "组选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": ["组选"]
									}
								},
								{
									"methodId": "A2G2S",
									"methodName": "组选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [3, 4]
									}
								},
								{
									"methodId": "A2G2T",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": [""],
										"numbers": [{"start": 1, "end": 17}]
									}
								}
							]
						},
						{
							"groupName": "任选三",
							"playingMethods": [
								{
									"methodId": "A3P",
									"methodName": "直选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								},
								{
									"methodId": "A3S",
									"methodName": "直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
									}
								},
								{
									"methodId": "A3T",
									"methodName": "直选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": [""],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "A3G3X3",
									"methodName": "组三复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": ["组选"]
									}
								},
								{
									"methodId": "A3G3X3S",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4]
									}
								},
								{
									"methodId": "A3G3X6",
									"methodName": "组六复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": ["组六"]
									}
								},
								{
									"methodId": "A3G3X6S",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4]
									}
								},
								{
									"methodId": "A3G3MX",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4]
									}
								},
								{
									"methodId": "A3G3T",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": [''],
										"numbers": [{"start": 1, "end": 26}]
									}
								}
							]
						},
						{
							"groupName": "任选四",
							"playingMethods": [
								{
									"methodId": "A4P",
									"methodName": "直选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]			
									}
								},
								{
									"methodId": "A4S",
									"methodName": "直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4]
									}
								},
								{
									"methodId": "A4G4X24",
									"methodName": "组选24",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": [""]
									}
								},
								{
									"methodId": "A4G4X12",
									"methodName": "组选12",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": ["二重号", "单号"]
									}
								},
								{
									"methodId": "A4G4X6",
									"methodName": "组选6",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": ["二重号"]
									}
								},
								{
									"methodId": "A4G4X4",
									"methodName": "组选4",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": ["三重号", "单号"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "龙虎",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "龙虎和",
							"playingMethods": [
								{
									"methodId": "LH54",
									"methodName": "万千",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:千"]
									}
								},
								{
									"methodId": "LH53",
									"methodName": "万百",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:百"]
									}
								},
								{
									"methodId": "LH52",
									"methodName": "万十",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:十"]
									}
								},
								{
									"methodId": "LH51",
									"methodName": "万个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:个"]
									}
								},
								{
									"methodId": "LH43",
									"methodName": "千百",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["千:百"]
									}
								},
								{
									"methodId": "LH42",
									"methodName": "千十",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["千:十"]
									}
								},
								{
									"methodId": "LH41",
									"methodName": "千个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["千:个"]
									}
								},
								{
									"methodId": "LH32",
									"methodName": "百十",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["百:十"]
									}
								},
								{
									"methodId": "LH31",
									"methodName": "百个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["百:个"]
									}
								},
								{
									"methodId": "LH21",
									"methodName": "十个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["十个"]
									}
								}
							]
						}
					]
				}
			];
		} else if (opt['playingNav'] === 'HL11x5') {
			playingNavData = [
				{
					"familyName": "三码",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PH",
									"methodName": "前三直选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["一位", "二位", "三位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SH",
									"methodName": "前三直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3H",
									"methodName": "前三组选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["前三"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3SH",
									"methodName": "前三组选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3BH",
									"methodName": "前三组选胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								}
							]
						}
					] 
				},
				{
					"familyName": "二码",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N2PH",
									"methodName": "前二直选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["一位", "二位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SH",
									"methodName": "前二直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G2H",
									"methodName": "前二组选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["前二"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G2SH",
									"methodName": "前二组选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2BH",
									"methodName": "前二组选胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "不定位",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "不定位",
							"playingMethods": [
								{
									"methodId": "A1H3",
									"methodName": "前三不定位",
									"plate": {
										"parentPlate": 10,
										"names": ["前三"],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "趣味型",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "趣味型",
							"playingMethods": [
								{
									"methodId": "FOEC",
									"methodName": "定单双",
									"plate": {
										"parentPlate": 9,
										"unitGroup": false
									}
								},
								{
									"methodId": "FMN",
									"methodName": "猜中位",
									"plate": {
										"parentPlate": 11,
										"names": ["猜中位"],
										"numbers": {"start": 3, "end": 9},
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "定位胆",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "定位胆",
							"playingMethods": [
								{
									"methodId": "P3",
									"methodName": "定位胆",
									"plate": {
										"parentPlate": 10,
										"names": ["一位", "二位", "三位"],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选复式",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选复式",
							"playingMethods": [
								{
									"methodId": "A1",
									"methodName": "任选一中一复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选1中1"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A2",
									"methodName": "任选二中二复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选2中2"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A3",
									"methodName": "任选三中三复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选3中3"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A4",
									"methodName": "任选四中四复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选4中4"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A5",
									"methodName": "任选五中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选5中5"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A6",
									"methodName": "任选六中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选6中5"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A7",
									"methodName": "任选七中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选7中5"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A8",
									"methodName": "任选八中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选8中5"],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选单式",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选单式",
							"playingMethods": [
								{
									"methodId": "A1S",
									"methodName": "任选一中一单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A2S",
									"methodName": "任选二中二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A3S",
									"methodName": "任选三中三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A4S",
									"methodName": "任选四中四单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A5S",
									"methodName": "任选五中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A6S",
									"methodName": "任选六中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A7S",
									"methodName": "任选七中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A8S",
									"methodName": "任选八中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选胆拖",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选胆拖",
							"playingMethods": [
								{
									"methodId": "A2B",
									"methodName": "任选二中二胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A3B",
									"methodName": "任选三中三胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A4B",
									"methodName": "任选四中四胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A5B",
									"methodName": "任选五中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A6B",
									"methodName": "任选六中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A7B",
									"methodName": "任选七中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A8B",
									"methodName": "任选八中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								}
							]
						}
					]
				}
			];
		} else if (opt['playingNav'] === 'LT' && opt['market'] == 'CN3D') {
			playingNavData = [
				{
					"familyName": "三星",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PL",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ["百位", "十位", "个位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SL",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TL",
									"methodName": "直选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [""],
										"numbers": [{"start": 0, "end": 27}]
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3L",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ["组三"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X3SL",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6L",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ["组六"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6SL",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXL",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3TL",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [""],
										"numbers": [{"start": 1, "end": 26}]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "二星",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N2PF",
									"methodName": "前二直选",
									"plate": {
										"parentPlate": 1,
										"names": ["百位", "十位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N2PL",
									"methodName": "后二直选",
									"plate": {
										"parentPlate": 1,
										"names": ["十位", "个位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G2L",
									"methodName": "后二复式",
									"plate": {
										"parentPlate": 1,
										"names": ["组选"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2F",
									"methodName": "前二复式",
									"plate": {
										"parentPlate": 1,
										"names": ["组选"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "一星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "定位胆",
							"playingMethods": [
								{
									"methodId": "N1",
									"methodName": "定位胆",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["百位", "十位", "个位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "不定位",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "不定位",
							"playingMethods": [
								{
									"methodId": "A1L3",
									"methodName": "一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2L3",
									"methodName": "二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "大小单双",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "大小单双",
							"playingMethods": [
								{
									"methodId": "BSOEF2",
									"methodName": "前二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["百位", "十位"]
									}
								},
								{
									"methodId": "BSOEL2",
									"methodName": "后二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["十位", "个位"]
									}
								}
							]
						}
					]
				}
			];
		} else if (opt['playingNav'] === 'K3') {
			playingNavData = [
				{
					"familyName": "和值",
					"methodId": "N3T",
					"plate": {
						"parentPlate": '12',
						"numbers": {"start": 3, "end": 18}
					}
				},
				{
					"familyName": "三不同号",
					"methodId": "N3D",
					"plate": {
						"parentPlate": '13-1',
						"data": [
							["123", "134", "146", "236", "345"],
							["124", "135", "156", "245", "346"],
							["125", "136", "234", "246", "356"],
							["126", "145", "235", "256", "456"]
						]
					}
				},
				{
					"familyName": "三同号",
					"methodId": "N3TRI",
					"plate": {
						"parentPlate": '13-2',
						"data": [
							["666", "555", "444"],
							["333", "222", "111"]
						]
					}
				},
				{
					"familyName": "三连号",
					"methodId": "N3SN",
					"plate": {
						"parentPlate": '13-3',
						"data": [
							["123", "234", "345", "456"]
						]
					}
				},
				{
					"familyName": "二不同号",
					"methodId": "N2D",
					"plate": {
						"parentPlate": '13-4',
						"data": [
							["12", "15", "24", "34", "45"],
							["13", "16", "25", "35", "46"],
							["14", "23", "26", "36", "56"]
						]
					}
				},
				{
					"familyName": "二同号",
					"methodId": "N3PAIR",
					"plate": {
						"parentPlate": '13-5',
						"data": [
							["112", "122", "133", "144", "155", "166"],
							["113", "223", "233", "244", "255", "266"],
							["114", "224", "334", "344", "355", "366"],
							["115", "225", "335", "445", "455", "466"],
							["116", "226", "336", "446", "556", "566"],
							["11",  "22",  "33",  "44",  "55",  "66"]
						]
					}
				},
				{
					"familyName": "单挑一骰",
					"methodId": "N1",
					"plate": {
						"parentPlate": '14',
						"data": [6, 5, 4, 3, 2, 1]
					}
				}
			];
		} else if (opt['playingNav'] === 'P3P5') {
			playingNavData = [];
		}

		this.lotteryBall  = new LotteryBall({   id: this.id + '-lottery-ball', gameCode: opt['playingNav'], market: opt['market'] });
		this.timeline     = new Timeline({      id: this.id + '-timeline', gameCode: opt['playingNav']});
		this.modelZone    = new ModelZone({     id: this.id + '-model-zone'});
		this.bettingOrder = new BettingOrder({  id: this.id + '-betting-order'});
		this.chaseNumber  = new ChaseNumber({   id: this.id + '-chase-number'});
		this.comfirmBet   = new ComfirmBet({    id: this.id + '-comfirm-bet'});

		if (opt['playingNav'] === 'K3') {
			this.playingNav = new PlayingNavK3({
				id: this.id + '-playing-nav',
				playingNavData: playingNavData,
				gameCode: opt['playingNav']
			});
		} else {
			this.playingNav = new PlayingNav({
				id: this.id + '-playing-nav',
				playingNavData: playingNavData,
				gameCode: opt['playingNav'],
				market: opt['market']
			});
		}

		this.el = 	'<div class="lottery ' + opt['playingNav'] + '" id="' + this.id + '">' +
						'<div class="container-fluid number-zone">' +
							'<div class="row">' +
								'<div class="col-sm-12 col-md-4 draw-zone">' +
									this.lotteryBall.getDom() +
								'</div>' +

								'<div class="col-sm-12 col-md-8 timeline-zone">' +
									this.timeline.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="bet-zone">' +
							this.playingNav.getDom() +
						'</div>' +

						'<div class="bet-model-zone">' +
							this.modelZone.getDom() +
						'</div>' +

						'<div class="container-fluid summary-zone">' +
							'<div class="row full-height">' +
								'<div class="col-md-4 betting-order-zone">' +
									this.bettingOrder.getDom() +
								'</div>' +

								'<div class="col-md-4 chase-bumber-zone">' +
									this.chaseNumber.getDom() +
								'</div>' +

								'<div class="col-md-4 comfirm-bet-zone">' +
									this.comfirmBet.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

		$('.bet .main .content').append(this.el);

		this.bindEvents();
	}

	Lottery.prototype.getDom = function () {
		return this.el;
	};

	Lottery.prototype.getName = function () {
		return this.id;
	};

	Lottery.prototype.show = function () {
		this.zone.fadeIn(300);
	};

	Lottery.prototype.hide = function () {
		this.zone.fadeOut(300);
	};

	Lottery.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.lotteryBall.bindEvents();
		this.timeline.bindEvents();
		this.playingNav.bindEvents();
		this.modelZone.bindEvents();
		this.bettingOrder.bindEvents();
		this.chaseNumber.bindEvents();
		this.comfirmBet.bindEvents();
	};

	window.Lottery = Lottery;
})();
