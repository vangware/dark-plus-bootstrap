import { hexToRGBA } from "./hexToRGBA.js";

export const blue = [
	"#cfe2ffff", // 100
	"#9ec5feff", // 200
	"#6ea8feff", // 300
	"#3d8bfdff", // 400
	"#0d6efdff", // 500
	"#0a58caff", // 600
	"#084298ff", // 700
	"#052c65ff", // 800
	"#031633ff", // 900
];

export const indigo = [
	"#e0cffcff", // 100
	"#c29ffaff", // 200
	"#a370f7ff", // 300
	"#8540f5ff", // 400
	"#6610f2ff", // 500
	"#520dc2ff", // 600
	"#3d0a91ff", // 700
	"#290661ff", // 800
	"#140330ff", // 900
];

export const purple = [
	"#e2d9f3ff", // 100
	"#c5b3e6ff", // 200
	"#a98edaff", // 300
	"#8c68cdff", // 400
	"#6f42c1ff", // 500
	"#59359aff", // 600
	"#432874ff", // 700
	"#2c1a4dff", // 800
	"#160d27ff", // 900
];

export const pink = [
	"#f7d6e6ff", // 100
	"#efadceff", // 200
	"#e685b5ff", // 300
	"#de5c9dff", // 400
	"#d63384ff", // 500
	"#ab296aff", // 600
	"#801f4fff", // 700
	"#561435ff", // 800
	"#2b0a1aff", // 900
];

export const red = [
	"#f8d7daff", // 100
	"#f1aeb5ff", // 200
	"#ea868fff", // 300
	"#e35d6aff", // 400
	"#dc3545ff", // 500
	"#b02a37ff", // 600
	"#842029ff", // 700
	"#58151cff", // 800
	"#2c0b0eff", // 900
];

export const orange = [
	"#ffe5d0ff", // 100
	"#fecba1ff", // 200
	"#feb272ff", // 300
	"#fd9843ff", // 400
	"#fd7e14ff", // 500
	"#ca6510ff", // 600
	"#984c0cff", // 700
	"#653208ff", // 800
	"#331904ff", // 900
];

export const yellow = [
	"#fff3cdff", // 100
	"#ffe69cff", // 200
	"#ffda6aff", // 300
	"#ffcd39ff", // 400
	"#ffc107ff", // 500
	"#cc9a06ff", // 600
	"#997404ff", // 700
	"#664d03ff", // 800
	"#332701ff", // 900
];

export const green = [
	"#d1e7ddff", // 100
	"#a3cfbbff", // 200
	"#75b798ff", // 300
	"#479f76ff", // 400
	"#198754ff", // 500
	"#146c43ff", // 600
	"#0f5132ff", // 700
	"#0a3622ff", // 800
	"#051b11ff", // 900
];

export const teal = [
	"#d2f4eaff", // 100
	"#a6e9d5ff", // 200
	"#79dfc1ff", // 300
	"#4dd4acff", // 400
	"#20c997ff", // 500
	"#1aa179ff", // 600
	"#13795bff", // 700
	"#0d503cff", // 800
	"#06281eff", // 900
];

export const cyan = [
	"#cff4fcff", // 100
	"#9eeaf9ff", // 200
	"#6edff6ff", // 300
	"#3dd5f3ff", // 400
	"#0dcaf0ff", // 500
	"#0aa2c0ff", // 600
	"#087990ff", // 700
	"#055160ff", // 800
	"#032830ff", // 900
];

export const gray = [
	"#ffffffff", // White
	"#f8f9faff", // 100
	"#e9ecefff", // 200
	"#dee2e6ff", // 300
	"#ced4daff", // 400
	"#adb5bdff", // 500
	"#6c757dff", // 600
	"#495057ff", // 700
	"#343a40ff", // 800
	"#212529ff", // 900
	"#000000ff", // Black
];

export const themeColors = [
	...blue,
	...indigo,
	...purple,
	...pink,
	...red,
	...orange,
	...yellow,
	...green,
	...teal,
	...cyan,
	...gray,
].map(hexToRGBA);
