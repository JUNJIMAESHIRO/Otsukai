$(function(){

  $("#start").on("click",function(){
      let input = $("#input").val()
      console.log(input);

      let data = {
        keyword:"チョコ"
      }
 
  $.ajax({
  url: "https://sysbird.jp/toriko/api/",
  type: "get",　　 //post or get
  cache: false,        //cacheを使うか使わないかを設定
  dataType:"jsonp",     //data type script・xmlDocument・jsonなど
  data:data,   
  })  

.done(function(response) { 
   //通信成功時の処理
   //成功したとき実行したいスクリプトを記載
   console.log(response);

})
.fail(function(xhr) {  
  //通信失敗時の処理
   //失敗したときに実行したいスクリプトを記載
   console.log(xhr);

})
})
})