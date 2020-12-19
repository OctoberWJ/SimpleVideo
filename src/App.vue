<template>
  <div id="app">
    <video
      class="video-js"
      poster="../src/assets/img/face.jpg"
      id="video"
      controls="controls"
      format="yy:MM:dd"
      @canplay="getDuration"
      ref="vueMiniPlayer"
      autoplay
      muted
    >
      <source :src="videoList[0].url" type="video/mp4"/>
    </video>

    <div class="bottom">
      <div id="divLeft">
        请输入开始时间：<input type="text" ref="getStartValue">
        请输入结束时间：<input type="text" ref="getEndValue">
        <!--播放-->
        <div
          id="img"
          @click.stop="subBtn"
        >
          <img src="../src/assets/img/btn_play.svg" >
        </div>

      </div>
      <div class="divRight">
        <button id="last" @click="lastVideo">上一段</button>
        <button id="next" @click="nextVideo">下一段</button>
        <button id="getTime" @click="updateTime">获取时间</button>
      </div>
    </div>
  </div>
</template>

<script>
  import index from "./router";
  export default {
    name: 'App',
    data(){
      return{
        visible:'false',
        videoList:[
          {id:'1', title:"test1", isplay:false, type:"video/mp4", url: "../src/assets/videoList/1.mp4"},
          {id:'2', title:"test2", isplay:false, type:"video/mp4", url: "../src/assets/videoList/2.mp4"},
          {id:'3', title:"test3", isplay:false, type:"video/mp4", url: "../src/assets/videoList/3.mp4"}
        ]
      }
    },
    mounted:function(){
      this.show();
    },
    methods: {
      show: function () {
        this.visible = true;
      },
      //播放上一个
      lastVideo(){
        this.videoList.index--
        if(index < 0){
          this.videoList.index = this.videoList.index.length - 1
        }
        this.$refs.vueMiniPlayer.src = this.videoList.index.url
      },

      //播放下一个
      nextVideo(){
        this.videoList.index++
        if(index > 2){
          this.videoList.index = 0
        }
        this.$refs.vueMiniPlayer.src = this.videoList.index.url
      },

      //获取当前时间
      updateTime(){
        let nowTime = this.$refs.vueMiniPlayer.currentTime.toFixed(2);
        alert('当前时间为' + nowTime + 's')
      },

      //获取视频的总时长
      getDuration(){
        let totalTime=this.$refs.vueMiniPlayer.duration;
        console.log(totalTime)
      },

      //播放按钮
      subBtn(){
        this.$refs.vueMiniPlayer.volume = 0;
        console.log(this.$refs.getStartValue.value)
        console.log(this.$refs.getEndValue.value)

        if(this.$refs.getStartValue.value >= this.$refs.getEndValue.value){
          this.$refs.vueMiniPlayer.play();
          alert("开始时间必须大于结束时间");
        }
        else if(this.$refs.getStartValue.value < this.totalTime){
          this.$refs.vueMiniPlayer.pause();
          alert("开始时间必须小于总时长");
        }

        //设置当前播放时间
        this.$refs.vueMiniPlayer.currentTime = this.$refs.getStartValue.value
        let end = (this.$refs.getEndValue.value - this.$refs.getStartValue.value) * 1000;
        this.$refs.vueMiniPlayer.play();
        // this.video.play();
        setTimeout(function () {
          this.$refs.vueMiniPlayer.pause();
        }, end);
      }
    }
  }
</script>

<style>
  @import "/assets/css/style.css";

</style>
