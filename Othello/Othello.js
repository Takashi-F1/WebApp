var direction = [-11, -10, -9, -1, 1, 9, 10, 11];
var SymbolList = ["〇", "●"];

/*count*/
function count_stone() {
  var count_P1 = 0;
  var count_P2 = 0;
  var count_empty = 0;
  for (x = 1; x < 9; x++) {
    for (y = 1; y < 9; y++) {
      var cell_id = String(x) + String(y);
      var cell = document.getElementById(cell_id).innerText;
      if (cell == "〇") {
        count_P1++;
      } else if (cell == "●") {
        count_P2++;
      }
    }
  }
  count_empty = 64 - count_P1 - count_P2;
  document.getElementById("num_p1").innerText = count_P1;
  document.getElementById("num_p2").innerText = count_P2;
  document.getElementById("empty").innerText = count_empty;

}

/*check cell*/
function check_cell(selected) {
  //選択されたセルに置くことができない場合は[-1,-1]を、置ける場合はdirection[i]のインデックスiと、自分のマスまでのセル数jを配列[i,j]で返す。
  var playernum = document.getElementById("player").innerText;
  var cellid = selected.id;
  var cell = document.getElementById(cellid).innerText;
  var CheckOppCell;
  var CheckMyCell;

  /*check setting possibility */
  if (!cell) { //選択したセルが空か確認
    var neighbor = [];

    CheckLoop:
    for (var i = 0; i < 8; i++) {      /*周囲８方向に相手の石があるかチェック*/
      CheckOppCell = String(parseInt(cellid) + direction[i]);

      if (parseInt(CheckOppCell) < 11 || parseInt(CheckOppCell.slice(-1)) < 1 || parseInt(CheckOppCell.slice(-1)) > 8 ||
        parseInt(CheckOppCell.slice(0, 1)) < 1 || parseInt(CheckOppCell.slice(0, 1)) > 8) { //盤面外の場合はbreakして次のdirectionを確認
        if (i == 7) {
          //alert("このマスには置けません。");
          return [-1, -1];
        }
        continue;
      }

      //alert("neighbor" + (i + 1) + "の確認");
      neighbor[i] = document.getElementById(CheckOppCell).innerText;
      if (neighbor[i] == SymbolList[playernum % 2]) { //周囲8方向に相手の石があった場合
        for (var j = 2; j < 8; j++) {
          /*その方向の先に自分の石があるか確認*/
          CheckMyCell = String(parseInt(cellid) + direction[i] * j);

          if (parseInt(CheckMyCell) < 11 || parseInt(CheckMyCell.slice(-1)) < 1 || parseInt(CheckMyCell.slice(-1)) > 8 ||
            parseInt(CheckMyCell.slice(0, 1)) < 1 || parseInt(CheckMyCell.slice(0, 1)) > 8) {  //盤面外はbreak
            break;
          }
          CheckMyCell_value = document.getElementById(CheckMyCell).innerText;
          if (CheckMyCell_value !== "") { //CheckMyCell_valueが空じゃない場合
            if (CheckMyCell_value == SymbolList[playernum - 1]) {//自分の石が見つかった場合
              // for (var k = 0; k <= j; k++) {
              //   /*選択されたセルに石を置く＆挟んだ相手の石の色を変える*/
              //   document.getElementById(String(parseInt(cellid) + direction[i] * k)).innerText = SymbolList[playernum - 1];
              // }
              //document.getElementById("player").innerText = playernum % 2 + 1;
              //break CheckLoop; //置けるなら周囲の確認終了
              return [i, j];
            }
          } else {//CheckMyCell_valueが空セルの場合、その方向はチェックする必要ない
            //alert("この方向には自分の石がありません");
            break;
          }
        }
      }
      if (i == 7) {
        //alert("このマスには置けません。");
        return [-1, -1];
      }
    }
  } else { //選択したセルにすでに置かれている
    //alert("この場所にはすでに置かれています！　別の場所を選択してください");
    return [-1, -1];
  }
}

function all_check(){
  var cell_list = document.getElementsByTagName("td");
  //console.log(cell_list)
  var count_ok = 0;//置くことができるセル数

  for (c = 0; c < cell_list.length; c++) {//cell_list.length=64
    if (check_cell(cell_list[c])[0] > 0) {
      count_ok++;
    }
  }
  document.getElementById("num_ok").innerText = count_ok;
}

/*set stone*/
function setstone(selected) {
  var check_func = check_cell(selected);
  var i = check_func[0];
  var j = check_func[1];
  var playernum = document.getElementById("player").innerText;
  //alert(i+" "+j);
  if (i < 0) {
    alert("このマスには置けません！　別のマスを選択してください");
  } else if (i >= 0) {
    for (var k = 0; k <= j; k++) {
      /*選択されたセルに石を置く＆挟んだ相手の石の色を変える*/
      document.getElementById(String(parseInt(selected.id) + direction[i] * k)).innerText = SymbolList[playernum - 1];
    }
    document.getElementById("player").innerText = playernum % 2 + 1;
  }
  count_stone();
  all_check();
}


/*置ける場所がない時はパス*/
if(document.getElementById("num_ok").innerText=="0"){
  alert("プレイヤー"+document.getElementById("player").innerText+"：　現在どこのマスにも置くことができません！")
}

/*勝利判定 */
