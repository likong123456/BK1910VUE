<template>
  <div class="page">
      <HeaderCom/>
    <div id="content">
      <div class="search_movie_body">
        <div class="search_movie_input">
          <input type="text" />
        </div>
        <h2>电影/电视剧/综艺</h2>
        <div class="movie_item">
          <div class="movie_item_pic">
            <img src="https://p0.meituan.net/128.180/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg">
          </div>
          <div class="movie_item_info">
            <h2>无名之辈</h2>
            <p>
              <span class="person">67554</span>人想看
            </p>
            <p>
              主演:
              <span>Alley 吴彦祖 胡歌</span>
            </p>
            <p>
              <span>2019-05-20上映</span>
            </p>
          </div>
          <div class="movie_item_btn person">想看</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
    .page{
    height:100%;
    }
    /*conent*/
    #content{
        position:absolute;
        width:100%;
        height:100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    /*movie_body*/
    #content .search_movie_body{
        height:100%;
        padding-bottom: 1rem;
        padding-left: .2rem;
        padding-right: .2rem;
        overflow-x:hidden;
    }
    #content .search_movie_body .search_movie_input{
        padding: .16rem .2rem;
        background-color:#f5f5f5;
        border-bottom:1px solid #e5e5e5;
    }
     #content .search_movie_body .search_movie_input>input{
        border:none;
        font-size: .3rem;
        color: #333;
        padding: .1rem 0;
        outline: none;
        margin-left: 5px;
        width:100%;
    }
     #content .search_movie_body>h2{
         font-size: .3rem;
         color: #999;
         padding: .18rem 0;
         border-bottom: 1px solid #e6e6e6;
     }
    #content .search_movie_body .movie_item{
        padding: .2rem 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    #content .search_movie_body .movie_item .movie_item_pic{
        width: 1.28rem;
        height: 1.8rem;
    }
    #content .search_movie_body .movie_item .movie_item_pic img{
        width:100%;
        height:100%;
    }
     #content .search_movie_body .movie_item .movie_item_info{
         margin-left: .2rem;
         flex: 1;
         height: 100%;
    }
     #content .search_movie_body .movie_item .movie_item_info h2{
         font-size: .34rem;
         line-height: .5rem;
         width: 3rem;
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
     }
      #content .search_movie_body .movie_item .movie_item_info p{
          font-size: .26rem;
          line-height: .45rem;
          color: #666;
          width: 4rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
      }
       #content .search_movie_body .movie_item .movie_item_info p .person{
           font-weight: 700;
           color: #faaf00;
           font-size: .3rem;
       }
     #content .search_movie_body .movie_item .movie_item_btn{
         width: 1rem;
         height: .6rem;
         line-height: .6rem;
         text-align: center;
         color: #fff;
         border-radius: 4px;
         font-size: .26rem;
         cursor: pointer;
     }
     #content .search_movie_body .movie_item>.person{
         background-color: #faaf00;
     }         

</style>