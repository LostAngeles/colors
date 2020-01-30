let isShortcutsOn = true;
let pencilCode = 80;
let bucketCode = 66;
let strokeCode = 83;
let eraseCode = 69;
let startAnimCode = 65;
let exportToPNG = 78;
let exportToGIF = 71;
let firstColorCode = 79;
let deleteFrameCode = 68;
let copyFrameCode = 89;
let secondColorCode = 76;
let colorPickerCode = 67;

document.addEventListener('keydown', (event) => {
  if (isShortcutsOn) {
    switch (event.keyCode) {
      case pencilCode:
      pencil();
      break;
      case bucketCode:
      bucket();
      break;
      case strokeCode:
      stroke();
      break;
      case eraseCode:
      eraseIt();
      break;
      case startAnimCode:
      startAnimation();
      break;
      case exportToPNG:
      exportToPng();
      break;
      case exportToGIF:
      exportToGif();
      break;
      case deleteFrameCode:
      deleteFrame();
      break;
      case copyFrameCode:
      copyFrame();
      break;
      case firstColorCode:
      pickFirstColor();
      break;
      case secondColorCode:
      pickSecondColor();
      break;
      case colorPickerCode:
      pickerTool();
      break;    
      default:
      break;
    }
  }
});