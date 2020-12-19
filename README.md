Vue实现视频播放器| 上一段，下一段视频，获取当前视频时间位置，

界面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201219111027761.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTAzMDc4Nw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201219111053326.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTAzMDc4Nw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201219111103124.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTAzMDc4Nw==,size_16,color_FFFFFF,t_70)

```
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
```
