$(function () {

    $('#start').on('click', function () {
    //     // https://www.sysbird.jp/webapi/?apikey=guest&keyword=%E3%82%AB%E3%83%AC%E3%83%BC&max=10&order=r

        

        let data = {
           keyword:'snack',
           apikey:'guest',
           format:'jsonp',
           order:'r'
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
                
                $('.snack1').children('img').attr('src',response.item[0].image);
                $('.snack2').children('img').attr('src',response.item[1].image);
                $('.snack3').children('img').attr('src',response.item[2].image);


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
})
