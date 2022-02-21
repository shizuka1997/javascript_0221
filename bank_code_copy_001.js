import $ from 'jquery';
const zenginCode = require('zengin-code');

$(function() {
    // 銀行コードの入力イベント
    $("input[name='bank_code']").on('input', function() {
      $("input[name='bank_name']").val('');
      const bankCode = $(this).val();
  
        if (zenginCode[bankCode] !== undefined) {
        // 銀行データがあれば銀行名をセットする
        $("input[name='bank_name']").val(zenginCode[bankCode]['name']);
        $("input[name='branch_code']").val('');
        $("input[name='branch_name']").val('');
        }
    });
  
    // 支店コードの入力イベント
    $("input[name='branch_code']").on('input', function() {
      $("input[name='branch_name']").val('');
      const bankCode = $("input[name='bank_code']").val();
      const branchCode = $(this).val();
  
        if (zenginCode[bankCode] !== undefined && zenginCode[bankCode]['branches'][branchCode] !== undefined) {
        // 支店データがあれば支店名をセットする
        $("input[name='branch_name']").val(zenginCode[bankCode]['branches'][branchCode]['name']);
        }
    });
})

