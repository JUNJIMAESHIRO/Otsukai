$(function () {

  // submitボタンを押したら、input当箱を作って入力された値を入れてください
  // その後、consoleに出力してください。
  // Jqueryにおいて値の取得は、要素.val()でとれます。
  $(".btn").on("click", function () {
    let input = $("#input").val();
    let data = {
      zipcode:input
    }
    // console.log(input);

    // 非同期通信の記述
    $.ajax({
      url: 'https://zipcloud.ibsnet.co.jp/api/search', //アクセスするURL
      type: 'get',　　 //post or get
      cache: false,        //cacheを使うか使わないかを設定
      dataType: 'json',     //data type script・xmlDocument・jsonなど
      data: data,           //アクセスするときに必要なデータを記載  連想配列でデータ渡しする！！！    
    })
      .done(function (response) {
        //通信成功時の処理
        //成功したとき実行したいスクリプトを記載
        // console.log(response);
        // console.log(response["results"][0]["address1"]);
        // console.log(response.results[0].address1);
        // console.log(response.results[0].address2);
        // console.log(response.results[0].address3);
        // var paragraph1 = $('<p>');
        // var paragraph2 = $('<p>');
        // var paragraph3 = $('<p>');
        // paragraph1.html(response.results[0].address1);
        // paragraph2.html(response.results[0].address2);
        // paragraph3.html(response.results[0].address3);
        // $('.btn').after(paragraph1,paragraph2,paragraph3);
        
        // for( i = 0; i <= 3; i++){
        //   var paragraph = $('<p>');
        //   paragraph.html(response.results[0]["address"+i]);
        //   $('.oya').append(paragraph);
        // }

        // ルイスさんのやり方4種類
        // その１
        // $(".oya").append(response.results[0].address1)
        // $(".oya").append(response.results[0].address2)
        // $(".oya").append(response.results[0].address3)

        // // その２
        // let post = response.results[0];
        // $(".oya").append(post.address1,post.address2,post.address3);

        // その３
        // let post = response.results[0];
        // for(var i=1 ; i<4;i++){
        //   $(".oya").append(post["address"+i])
        // }

        // その４
        let post = response.results[0];
        for (const key in post) {
          $(".oya").append(post[key]);
        }
      })
      .fail(function (xhr) {
        //通信失敗時の処理
        //失敗したときに実行したいスクリプトを記載
        console.log(xhr);
      })
  })
})