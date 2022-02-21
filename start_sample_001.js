// ボタン情報を取得
const myfunc = document.getElementById("myfunc");
let msg = document.getElementById("msg");
// 確認ボタン押下した時の処理
myfunc.onclick = function() {
    const sei = document.getElementById("sei").value;
    // 姓が未入力の場合
    if (sei == "") {
        // alert("姓が入力されていません！！");
        msg.innerHTML = "姓が入力されていません！！"
        // return false;
    }
    // メールの入力情報を取得
    let mail = document.getElementById("mail").value;
    mail = mail.replace("@", "");
    // 確認用メールの先頭情報を取得
    const re_mail1 = document.getElementById("re_mail1").value;
    // 確認用メールの後ろの情報を取得
    const re_mail2 = document.getElementById("re_mail2").value;
    let re_mail = re_mail1 + re_mail2;
    // メールアドレスが違う場合
    if (mail != re_mail) {
        alert("メールアドレスが違います");
    }
}

https://yubinbango.github.io/yubinbango/yubinbango.js

