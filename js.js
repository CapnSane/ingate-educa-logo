let a = document.getElementById('ingate-logo');
let b = a.getContext('2d');

let colourG = '#000000';
let colourI = '#fc5280';
let colourBg = '#FFFFFF ';

function changeCanvas() {
  var canvas = document.getElementById('ingate-logo');
  canvas.style.width = '500px';
  canvas.style.height = '500px';
}
changeCanvas();
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
  b.setTransform(
    (a.width * 1.33333) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 1.33333) / 378,
    (a.width * 0) / 376,
    (a.height * 0) / 378
  );
  b.setTransform(
    (a.width * 3.77953) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 3.77953) / 378,
    (a.width * 0) / 376,
    (a.height * 0) / 378
  );
  b.setTransform(
    (a.width * 3.77953) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 3.77953) / 378,
    (a.width * -208.70341) / 376,
    (a.height * -372.5025) / 378
  );
  b.beginPath();
  b.moveTo((a.width * 211.54155) / 376, (a.height * 206.4836) / 378);
  b.bezierCurveTo(
    (a.width * 211.54156) / 376,
    (a.height * 206.47038) / 378,
    (a.width * 211.53688) / 376,
    (a.height * 206.45911) / 378,
    (a.width * 211.52751) / 376,
    (a.height * 206.44974) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.51817) / 376,
    (a.height * 206.4404) / 378,
    (a.width * 211.5069) / 376,
    (a.height * 206.43571) / 378,
    (a.width * 211.49365) / 376,
    (a.height * 206.4357) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.48044) / 376,
    (a.height * 206.43571) / 378,
    (a.width * 211.46915) / 376,
    (a.height * 206.4404) / 378,
    (a.width * 211.45979) / 376,
    (a.height * 206.44974) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.45044) / 376,
    (a.height * 206.45911) / 378,
    (a.width * 211.44576) / 376,
    (a.height * 206.47038) / 378,
    (a.width * 211.44576) / 376,
    (a.height * 206.4836) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.44576) / 376,
    (a.height * 206.49683) / 378,
    (a.width * 211.45044) / 376,
    (a.height * 206.50812) / 378,
    (a.width * 211.45979) / 376,
    (a.height * 206.51746) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.46915) / 376,
    (a.height * 206.52682) / 378,
    (a.width * 211.48044) / 376,
    (a.height * 206.53149) / 378,
    (a.width * 211.49365) / 376,
    (a.height * 206.53149) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.5069) / 376,
    (a.height * 206.53149) / 378,
    (a.width * 211.51817) / 376,
    (a.height * 206.52682) / 378,
    (a.width * 211.52751) / 376,
    (a.height * 206.51746) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.53688) / 376,
    (a.height * 206.50812) / 378,
    (a.width * 211.54156) / 376,
    (a.height * 206.49683) / 378,
    (a.width * 211.54155) / 376,
    (a.height * 206.4836) / 378
  );
  b.fill('nonzero');
  b.lineWidth = 0.26458;
  b.setLineDash([]);
  b.stroke();
  b.beginPath();
  b.moveTo((a.width * 211.54155) / 376, (a.height * 206.4836) / 378);
  b.bezierCurveTo(
    (a.width * 211.54156) / 376,
    (a.height * 206.47038) / 378,
    (a.width * 211.53688) / 376,
    (a.height * 206.45911) / 378,
    (a.width * 211.52751) / 376,
    (a.height * 206.44974) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.51817) / 376,
    (a.height * 206.4404) / 378,
    (a.width * 211.5069) / 376,
    (a.height * 206.43571) / 378,
    (a.width * 211.49365) / 376,
    (a.height * 206.4357) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.48044) / 376,
    (a.height * 206.43571) / 378,
    (a.width * 211.46915) / 376,
    (a.height * 206.4404) / 378,
    (a.width * 211.45979) / 376,
    (a.height * 206.44974) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.45044) / 376,
    (a.height * 206.45911) / 378,
    (a.width * 211.44576) / 376,
    (a.height * 206.47038) / 378,
    (a.width * 211.44576) / 376,
    (a.height * 206.4836) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.44576) / 376,
    (a.height * 206.49683) / 378,
    (a.width * 211.45044) / 376,
    (a.height * 206.50812) / 378,
    (a.width * 211.45979) / 376,
    (a.height * 206.51746) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.46915) / 376,
    (a.height * 206.52682) / 378,
    (a.width * 211.48044) / 376,
    (a.height * 206.53149) / 378,
    (a.width * 211.49365) / 376,
    (a.height * 206.53149) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.5069) / 376,
    (a.height * 206.53149) / 378,
    (a.width * 211.51817) / 376,
    (a.height * 206.52682) / 378,
    (a.width * 211.52751) / 376,
    (a.height * 206.51746) / 378
  );
  b.bezierCurveTo(
    (a.width * 211.53688) / 376,
    (a.height * 206.50812) / 378,
    (a.width * 211.54156) / 376,
    (a.height * 206.49683) / 378,
    (a.width * 211.54155) / 376,
    (a.height * 206.4836) / 378
  );
  b.fill('nonzero');
  b.stroke();
  b.setTransform(
    (a.width * 3.77953) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 3.77953) / 378,
    (a.width * -57.88187) / 376,
    (a.height * -401.23795) / 378
  );
  b.beginPath();
  b.moveTo((a.width * 67.12355) / 376, (a.height * 106.161) / 378);
  b.bezierCurveTo(
    (a.width * 63.80934) / 376,
    (a.height * 106.15501) / 378,
    (a.width * 60.47908) / 376,
    (a.height * 106.36463) / 378,
    (a.width * 58.04297) / 376,
    (a.height * 106.79198) / 378
  );
  b.bezierCurveTo(
    (a.width * 31.92326) / 376,
    (a.height * 111.37385) / 378,
    (a.width * 13.2328) / 376,
    (a.height * 134.77765) / 378,
    (a.width * 15.50086) / 376,
    (a.height * 160.06212) / 378
  );
  b.bezierCurveTo(
    (a.width * 16.64102) / 376,
    (a.height * 172.77263) / 378,
    (a.width * 21.81721) / 376,
    (a.height * 183.26874) / 378,
    (a.width * 31.33762) / 376,
    (a.height * 192.17592) / 378
  );
  b.bezierCurveTo(
    (a.width * 39.4632) / 376,
    (a.height * 199.77814) / 378,
    (a.width * 50.01391) / 376,
    (a.height * 204.61626) / 378,
    (a.width * 61.41795) / 376,
    (a.height * 205.96991) / 378
  );
  b.bezierCurveTo(
    (a.width * 62.14298) / 376,
    (a.height * 206.05591) / 378,
    (a.width * 65.27873) / 376,
    (a.height * 206.06761) / 378,
    (a.width * 68.386) / 376,
    (a.height * 205.99631) / 378
  );
  b.bezierCurveTo(
    (a.width * 69.16787) / 376,
    (a.height * 205.97841) / 378,
    (a.width * 69.91354) / 376,
    (a.height * 205.9519) / 378,
    (a.width * 70.63186) / 376,
    (a.height * 205.91571) / 378
  );
  b.lineTo((a.width * 70.63186) / 376, (a.height * 205.91571) / 378);
  b.lineTo((a.width * 70.63186) / 376, (a.height * 179.55814) / 378);
  b.bezierCurveTo(
    (a.width * 69.39497) / 376,
    (a.height * 179.74371) / 378,
    (a.width * 68.14524) / 376,
    (a.height * 179.83736) / 378,
    (a.width * 66.89359) / 376,
    (a.height * 179.83823) / 378
  );
  b.bezierCurveTo(
    (a.width * 60.38988) / 376,
    (a.height * 179.8383) / 378,
    (a.width * 54.15253) / 376,
    (a.height * 177.3374) / 378,
    (a.width * 49.55373) / 376,
    (a.height * 172.88573) / 378
  );
  b.bezierCurveTo(
    (a.width * 44.95493) / 376,
    (a.height * 168.43404) / 378,
    (a.width * 42.37143) / 376,
    (a.height * 162.39624) / 378,
    (a.width * 42.37157) / 376,
    (a.height * 156.10065) / 378
  );
  b.bezierCurveTo(
    (a.width * 42.37157) / 376,
    (a.height * 149.80513) / 378,
    (a.width * 44.95515) / 376,
    (a.height * 143.76747) / 378,
    (a.width * 49.55392) / 376,
    (a.height * 139.3159) / 378
  );
  b.bezierCurveTo(
    (a.width * 54.15271) / 376,
    (a.height * 134.86433) / 378,
    (a.width * 60.38998) / 376,
    (a.height * 132.36351) / 378,
    (a.width * 66.89359) / 376,
    (a.height * 132.3636) / 378
  );
  b.bezierCurveTo(
    (a.width * 75.62622) / 376,
    (a.height * 132.36522) / 378,
    (a.width * 83.69904) / 376,
    (a.height * 136.86221) / 378,
    (a.width * 88.08817) / 376,
    (a.height * 144.1701) / 378
  );
  b.lineTo((a.width * 88.08817) / 376, (a.height * 144.1701) / 378);
  b.lineTo((a.width * 114.18269) / 376, (a.height * 135.813) / 378);
  b.bezierCurveTo(
    (a.width * 107.28938) / 376,
    (a.height * 120.74187) / 378,
    (a.width * 93.28398) / 376,
    (a.height * 109.98489) / 378,
    (a.width * 76.10699) / 376,
    (a.height * 106.82511) / 378
  );
  b.bezierCurveTo(
    (a.width * 73.73598) / 376,
    (a.height * 106.38895) / 378,
    (a.width * 70.43777) / 376,
    (a.height * 106.16714) / 378,
    (a.width * 67.12356) / 376,
    (a.height * 106.16106) / 378
  );
  b.lineTo((a.width * 67.12356) / 376, (a.height * 106.16106) / 378);
  b.lineTo((a.width * 67.12355) / 376, (a.height * 106.161) / 378);
  b.closePath();
  b.fillStyle = colourG;
  b.fill('nonzero');

  // Rectangle of the letter I
  b.beginPath();
  b.moveTo((a.width * 88.49098) / 376, (a.height * 159.5825) / 378);
  b.lineTo((a.width * 114.87569) / 376, (a.height * 159.5825) / 378);
  b.lineTo((a.width * 114.87569) / 376, (a.height * 206.04497) / 378);
  b.lineTo((a.width * 88.49098) / 376, (a.height * 206.04497) / 378);
  b.closePath();
  b.fillStyle = colourI;
  b.fill('nonzero');
  b.setTransform(
    (a.width * 3.77953) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 3.77953) / 378,
    (a.width * -208.70341) / 376,
    (a.height * -372.502) / 378
  );
  b.setTransform(
    (a.width * 3.77953) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 3.77953) / 378,
    (a.width * 0) / 376,
    (a.height * 0) / 378
  );
  b.setTransform(
    (a.width * 1.33333) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 1.33333) / 378,
    (a.width * 0) / 376,
    (a.height * 0) / 378
  );
  b.setTransform(
    (a.width * 1) / 376,
    (a.height * 0) / 378,
    (a.width * 0) / 376,
    (a.height * 1) / 378,
    (a.width * 0) / 376,
    (a.height * 0) / 378
  );
}

window.addEventListener('onload', Render());
