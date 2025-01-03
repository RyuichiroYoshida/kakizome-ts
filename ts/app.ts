// app.ts
const canvas = document.getElementById("drawingCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
  // 描画中かどうかを管理するフラグ
  let isDrawing = false;

  // 現在のマウス位置
  let lastX = 0;
  let lastY = 0;

  // 描画を開始する
  canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    const { offsetX, offsetY } = event;
    lastX = offsetX;
    lastY = offsetY;
  });

  // 描画中の処理
  canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = event;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = "black"; // 線の色
    ctx.lineWidth = 2; // 線の太さ
    ctx.stroke();
    ctx.closePath();

    // 現在の位置を更新
    lastX = offsetX;
    lastY = offsetY;
  });

  // 描画を終了する
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  // キャンバス外で描画を終了する
  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
  });
}
