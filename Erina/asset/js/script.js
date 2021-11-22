$(function () {

  $('#start').on('click', function () {
    //     // https://www.sysbird.jp/webapi/?apikey=guest&keyword=%E3%82%AB%E3%83%AC%E3%83%BC&max=10&order=r

    // let a = $('input:radio[name="Oyatsu"]:checked').val();

    // let data = {
    //   keyword: a,
    //   apikey: 'guest',
    //   format: 'jsonp',
    //   order: 'r'
    // }


    let data = {
      keyword: 'snack',
      apikey: 'guest',
      format: 'jsonp',
      order: 'r'
    }


    $.ajax({
      url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
      type: 'get',　　 //post or get
      cache: false,        //cacheを使うか使わないかを設定
      dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
      data: data,           //アクセスするときに必要なデータを記載   連想配列でデータを渡す   
    })
      .done(function (response) {
        //通信成功時の処理
        //成功したとき実行したいスクリプトを記載
        // console.log(response);
        // console.log(response.item[0]);

        $('.snack1').children('img').attr('src', response.item[0].image);
        $('.snack2').children('img').attr('src', response.item[1].image);
        $('.snack3').children('img').attr('src', response.item[2].image);


        // $('.snack').append(response.item[0].image);
      })
      .fail(function (xhr) {
        //通信失敗時の処理
        //失敗したときに実行したいスクリプトを記載
      })
      .always(function (xhr, msg) {
        //通信完了時の処理
        //結果に関わらず実行したいスクリプトを記載
      });
  })

  // タイマー

  var sec = 0;
  var min = 0;
  var hour = 0;

  var timer;

  // スタート
  $('#start').click(function () {
    // 00:00:00から開始
    sec = 0;
    min = 0;
    hour = 0;
    $('#clock').html('00:00:00');
    timer = setInterval(countup, 1000);

    $(this).prop('disabled', true);
    $('#stop,#reset').prop('disabled', false);
  });

  // ストップ
  $('#stop').click(function () {
    // 一時停止
    clearInterval(timer);

    $(this).prop('disabled', true);
    $('#restart').prop('disabled', false);
  });

  // リスタート
  $('#restart').click(function () {
    // 一時停止から再開
    timer = setInterval(countup, 1000);

    $(this).prop('disabled', true);
    $('#stop').prop('disabled', false);
  });

  // リセット
  $('#reset').click(function () {
    // 初期状態
    sec = 0;
    min = 0;
    hour = 0;
    $('#clock').html('00:00:00');
    clearInterval(timer);

    $('#stop,#restart,#reset').prop('disabled', true);
    $('#start').prop('disabled', false);
  });

  /**
   * カウントアップ
   */
  function countup() {
    sec += 1;

    if (sec > 59) {
      sec = 0;
      min += 1;
    }

    if (min > 59) {
      min = 0;
      hour += 1;
    }

    // 0埋め
    sec_number = ('0' + sec).slice(-2);
    min_number = ('0' + min).slice(-2);
    hour_number = ('0' + hour).slice(-2);

    $('#clock').html(hour_number + ':' + min_number + ':' + sec_number);
  }
})
