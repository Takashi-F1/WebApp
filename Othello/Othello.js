/*set stone*/
function setstone(dum) {
  var playernum = document.getElementById("player").innerText;
  var cellid = dum.id;
  var cell = document.getElementById(cellid).innerText;
  var x_id = cellid.slice(-1); //x coordinate
  var y_id = cellid.slice(0, 1); // y coordinate
  var check_dummy;
  /*check setting possibility */

  if (!cell) { //選択したセルが空か確認
    var neighbor = [];
    var direction = [-11, -10, -9, -1, 1, 9, 10, 11];
    var mystone_check;

    check1:
    for (var i = 0; i < 8; i++) {
      /*周囲８方向に自分以外の色がないと置けないのでチェック。*/

      check_dummy = String(parseInt(cellid) + direction[i]);
      if (parseInt(check_dummy) > 10 && parseInt(check_dummy.slice(-1)) > 0 &&
        parseInt(check_dummy.slice(-1)) < 9 && parseInt(check_dummy.slice(0, 1)) > 0 &&
        parseInt(check_dummy.slice(0, 1)) < 9) { //周囲８方向の盤面外はチェックしない

        alert("neighbor" + (i + 1) + "の確認");

        neighbor[i] = document.getElementById(String(parseInt(cellid) + direction[i])).innerText;
        if (neighbor[i] !== "") {
          //neighbor[i]が空じゃないときにそのセルの色を確認
          if (playernum == 1 && neighbor[i] == "✖") { //周囲のある方向に相手の石があった場合
            alert("この方向に相手の石ある")

            for (var j = 2; j < 8; j++) { //その先に自分の石があるか確認
              check_dummy = String(parseInt(cellid) + direction[i] * j);
              alert(check_dummy);
              if (parseInt(check_dummy) > 10 && parseInt(check_dummy.slice(-1)) > 0 &&
                parseInt(check_dummy.slice(-1)) < 9 && parseInt(check_dummy.slice(0, 1)) > 0 &&
                parseInt(check_dummy.slice(0, 1)) < 9) { //盤面外はチェックしない

                mystone_check = document.getElementById(String(parseInt(cellid) + direction[i] * j)).innerText;
                // alert(mystone_check);
                if (mystone_check !== "") { //mystone_checkが空じゃない場合
                  if (mystone_check == "〇") {
                    alert("そこに置けます");
                    document.getElementById(cellid).innerText = "〇";
                    document.getElementById("player").innerText = 2;
                    break check1; //置けるなら周囲の確認終了
                  }
                } else {//mystone_checkが空の場合、その方向はチェックする必要ない
                  alert("この方向には自分の石がありません")
                  break;
                }
              } else {//先が盤面外ならそれ以上先は調べる必要ない
                alert("この方向には自分の石がありません");
                break;
              }
              if (j == 7) {
                alert("この方向には自分の石がありません");
              }
            }
          } else if (playernum == 2 && neighbor[i] == "〇") {
            alert("この方向に相手の石ある")

            for (var j = 2; j < 8; j++) { //その先に自分の石があるか確認
              check_dummy = String(parseInt(cellid) + direction[i] * j);
              alert(check_dummy);
              if (parseInt(check_dummy) > 10 && parseInt(check_dummy.slice(-1)) > 0 &&
                parseInt(check_dummy.slice(-1)) < 9 && parseInt(check_dummy.slice(0, 1)) > 0 &&
                parseInt(check_dummy.slice(0, 1)) < 9) { //盤面外はチェックしない

                mystone_check = document.getElementById(String(parseInt(cellid) + direction[i] * j)).innerText;
                // alert(mystone_check);
                if (mystone_check !== "") { //mystone_checkが空じゃない場合
                  if (mystone_check == "✖") {
                    alert("そこに置けます");
                    document.getElementById(cellid).innerText = "✖";
                    document.getElementById("player").innerText = 1;
                    break check1; //置けるなら周囲の確認終了
                  }
                } else {//mystone_checkが空の場合、その方向はチェックする必要ない
                  alert("この方向には自分の石がありません");
                  break;
                }
              } else {//先が盤面外ならそれ以上先は調べる必要ない
                alert("この方向には自分の石がありません");
                break;
              }
              if (j == 7) {
                alert("この方向には自分の石がありません");
              }
            }
          }
        } //neighbor[i]が空なら次の方向をチェックi++
      } //盤面外なら無視
      if (i == 7) {
        alert("このマスには置けません。");
      }
    }

  } else { //選択したセルにすでに置かれている
    alert("この場所にはすでに置かれています！　別の場所を選択してください");
  }
}



/*置ける場所がない時はパス*/
/*相手の石の色を変える*/
