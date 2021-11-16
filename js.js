let a = document.getElementById('ingate-logo');
let b = a.getContext('2d');

let colourG = '#000000';
let colourI = '#fc5280';
let colourBg = '#FFFFFF ';

a.width = 376;
a.height = 378;

function Render() {
  // Background behind the logo
  b.beginPath();
  b.moveTo(0, 0);
  b.lineTo(a.width, 0);
  b.lineTo(a.width, a.height);
  b.lineTo(0, a.height);
  b.closePath();
  b.fillStyle = colourBg;
  b.fill('evenodd');

  // Semicircle of the letter G
  b.setTransform(1.33333, 0, 0, 1.33333, 0, 0);
  b.setTransform(3.77953, 0, 0, 3.77953, 0, 0);
  b.setTransform(3.77953, 0, 0, 3.77953, -208.70341, -372.5025);
  b.beginPath();
  b.moveTo(211.54155, 206.4836);
  b.bezierCurveTo(
    211.54156,
    206.47038,
    211.53688,
    206.45911,
    211.52751,
    206.44974
  );
  b.bezierCurveTo(
    211.51817,
    206.4404,
    211.5069,
    206.43571,
    211.49365,
    206.4357
  );
  b.bezierCurveTo(
    211.48044,
    206.43571,
    211.46915,
    206.4404,
    211.45979,
    206.44974
  );
  b.bezierCurveTo(
    211.45044,
    206.45911,
    211.44576,
    206.47038,
    211.44576,
    206.4836
  );
  b.bezierCurveTo(
    211.44576,
    206.49683,
    211.45044,
    206.50812,
    211.45979,
    206.51746
  );
  b.bezierCurveTo(
    211.46915,
    206.52682,
    211.48044,
    206.53149,
    211.49365,
    206.53149
  );
  b.bezierCurveTo(
    211.5069,
    206.53149,
    211.51817,
    206.52682,
    211.52751,
    206.51746
  );
  b.bezierCurveTo(
    211.53688,
    206.50812,
    211.54156,
    206.49683,
    211.54155,
    206.4836
  );
  b.fill('nonzero');
  b.lineWidth = 0.26458;
  b.setLineDash([]);
  b.stroke();
  b.beginPath();
  b.moveTo(211.54155, 206.4836);
  b.bezierCurveTo(
    211.54156,
    206.47038,
    211.53688,
    206.45911,
    211.52751,
    206.44974
  );
  b.bezierCurveTo(
    211.51817,
    206.4404,
    211.5069,
    206.43571,
    211.49365,
    206.4357
  );
  b.bezierCurveTo(
    211.48044,
    206.43571,
    211.46915,
    206.4404,
    211.45979,
    206.44974
  );
  b.bezierCurveTo(
    211.45044,
    206.45911,
    211.44576,
    206.47038,
    211.44576,
    206.4836
  );
  b.bezierCurveTo(
    211.44576,
    206.49683,
    211.45044,
    206.50812,
    211.45979,
    206.51746
  );
  b.bezierCurveTo(
    211.46915,
    206.52682,
    211.48044,
    206.53149,
    211.49365,
    206.53149
  );
  b.bezierCurveTo(
    211.5069,
    206.53149,
    211.51817,
    206.52682,
    211.52751,
    206.51746
  );
  b.bezierCurveTo(
    211.53688,
    206.50812,
    211.54156,
    206.49683,
    211.54155,
    206.4836
  );
  b.fill('nonzero');
  b.stroke();
  b.setTransform(3.77953, 0, 0, 3.77953, -57.88187, -401.23795);
  b.beginPath();
  b.moveTo(67.12355, 106.161);
  b.bezierCurveTo(
    63.80934,
    106.15501,
    60.47908,
    106.36463,
    58.04297,
    106.79198
  );
  b.bezierCurveTo(31.92326, 111.37385, 13.2328, 134.77765, 15.50086, 160.06212);
  b.bezierCurveTo(
    16.64102,
    172.77263,
    21.81721,
    183.26874,
    31.33762,
    192.17592
  );
  b.bezierCurveTo(39.4632, 199.77814, 50.01391, 204.61626, 61.41795, 205.96991);
  b.bezierCurveTo(62.14298, 206.05591, 65.27873, 206.06761, 68.386, 205.99631);
  b.bezierCurveTo(69.16787, 205.97841, 69.91354, 205.9519, 70.63186, 205.91571);
  b.lineTo(70.63186, 205.91571);
  b.lineTo(70.63186, 179.55814);
  b.bezierCurveTo(
    69.39497,
    179.74371,
    68.14524,
    179.83736,
    66.89359,
    179.83823
  );
  b.bezierCurveTo(60.38988, 179.8383, 54.15253, 177.3374, 49.55373, 172.88573);
  b.bezierCurveTo(
    44.95493,
    168.43404,
    42.37143,
    162.39624,
    42.37157,
    156.10065
  );
  b.bezierCurveTo(42.37157, 149.80513, 44.95515, 143.76747, 49.55392, 139.3159);
  b.bezierCurveTo(54.15271, 134.86433, 60.38998, 132.36351, 66.89359, 132.3636);
  b.bezierCurveTo(75.62622, 132.36522, 83.69904, 136.86221, 88.08817, 144.1701);
  b.lineTo(88.08817, 144.1701);
  b.lineTo(114.18269, 135.813);
  b.bezierCurveTo(
    107.28938,
    120.74187,
    93.28398,
    109.98489,
    76.10699,
    106.82511
  );
  b.bezierCurveTo(
    73.73598,
    106.38895,
    70.43777,
    106.16714,
    67.12356,
    106.16106
  );
  b.lineTo(67.12356, 106.16106);
  b.lineTo(67.12355, 106.161);
  b.closePath();
  b.fillStyle = colourG;
  // b.fill('nonzero');

  // Rectangle of the letter I
  b.beginPath();
  b.moveTo(88.49098, 159.5825);
  b.lineTo(114.87569, 159.5825);
  b.lineTo(114.87569, 206.04497);
  b.lineTo(88.49098, 206.04497);
  b.closePath();
  b.fillStyle = colourI;
  b.fill('nonzero');
  b.setTransform(3.77953, 0, 0, 3.77953, -208.70341, -372.5025);
  b.setTransform(3.77953, 0, 0, 3.77953, 0, 0);
  b.setTransform(1.33333, 0, 0, 1.33333, 0, 0);
  b.setTransform(1, 0, 0, 1, 0, 0);
}

window.addEventListener('onload', Render());
