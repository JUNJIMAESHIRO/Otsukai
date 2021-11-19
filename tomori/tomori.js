$(function(){

    $(".btn").on("click",function(){
        let input = $("#input").val()
        console.log(input);
    })

    $.ajax({
    url: "https://sysbird.jp/toriko/api/",
    type: "get",　　 //post or get
    cache: false,        //cacheを使うか使わないかを設定
    dataType:"jsonp",     //data type script・xmlDocument・jsonなど
    data:data,   
})
$.ajax({
    url: 'https://zipcloud.ibsnet.co.jp/api/search', //アクセスするURL
    type: 'get',　　 //post or get
    cache: false,        //cacheを使うか使わないかを設定
    dataType:'json',     //data type script・xmlDocument・jsonなど
    data:data,           //アクセスするときに必要なデータを記載     連想配列でデータ渡しをする！！！  
  })
  
  .done(function(response) { 
     //通信成功時の処理
     //成功したとき実行したいスクリプトを記載
     console.log(response);
     console.log(response["results"][0]["address1"]);
     console.log(response.results[0].address1);
     console.log(response.results[0].address2);
     console.log(response.results[0].address3);
    //  ↑連想配列（respons）の中の配列（results）の中の一番目([0])の中のアドレス1、2，3をコンソールログする↑
    
    // for(let i = 1 ; i < 4; i++){
    // $(".sumika").eq(i-1).text(response.results[0]["address"+i]);
    // $(".sumika").text(response.results[0].address2);
    // $(".sumika").text(response.results[0].address3);
    

    // その他やり方①
    // $(".sumika").append(response.results[0].address1);
    // $(".sumika").append(response.results[0].address2);
    // $(".sumika").append(response.results[0].address3);

    // その他やり方②
    // let post = response.results[0];
    // $(".sumika").append(post.address1,post.address2,post.address3);

    // その他やり方③
    // let post = response.results[0];
    // for(var i=1;i<4;i++){
    //     $('.sumika').append(post["address"+i])
    // }


    // その他やり方その④
    let post = response.results[0];
    for(const key in post){
        $('.sumika').append(post[key]);
    }
    



  })
  .fail(function(xhr) {  
　　　　　 //通信失敗時の処理
     //失敗したときに実行したいスクリプトを記載
     console.log(xhr);


  })






})