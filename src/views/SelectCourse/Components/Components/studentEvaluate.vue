<template>
<div class="course_evaluate">
    <div class="courseScore">课程综合分数<span>9.9分</span></div>
    <div class="course_evaluate_input_wrap">
        <div class="evaluate_hint" >
            <span>{{isEvaluate?'发表您的学习评价或疑问':'你需要学习后才能评价'}}</span>
            <span v-show="!isEvaluate" @click="nowStudy">立即学习</span>
        </div>
        <div v-show="isEvaluate" class="evaluate_input_wrap">
            <div class="course_score">
                <span>为课程评分：</span>
                <span v-for="(item,index) in courseScoreList" :key="index" @click="selectCourseScore(index)">
                    <img src="@/assets/images/star_no.png" alt="" v-show="!item.isActive">
                    <img src="@/assets/images/star.png" alt="" v-show="item.isActive">
                </span>
            </div>
            <div class="course_grade">
                <span>难易度程度：</span>
                <span v-for="(item,index) in gradeList" :class="{'grade_active':currentGrade == item}" :key="index" @click="cutGrade(item)">{{item}}</span>
            </div>
            <div class="course_eval_input">
                <textarea v-model="textareaText" class="input_wrap" placeholder="请发表您对课程的评价或疑问，至少5个字哦！" cols="30" rows="10"></textarea>
                <span>{{textareaText.length}} / 200</span>
            </div>
            <div class="course">
                <div class="uploading_homework">
                    <span>
                        <input type="file">
                    </span>
                    <span>0/5    上传作业（小于10M）</span>
                </div>
                <div :class="textareaText.length>0?'publish_eval_active':'publish_eval'">发表评论</div>
            </div>
        </div>
    </div>
    <div class="course_evaluate">
        <ul>
            <li v-for="(item) in 2 " :key="item">
                <div class="eval_top">
                    <div class="eval_left">
                        <div class="eval_user_info">
                            <div><img src="@/assets/images/touxian1.png" alt=""></div>
                            <div>
                                <p>魔兽争霸</p>
                                <p>初级插画师</p>
                            </div>
                        </div>
                        <p>
                            <span><img src="@/assets/images/shouchang.png" alt=""></span>
                            <span>XXX认证</span>
                        </p>
                        <p>
                            <span><img src="@/assets/images/xunzhang.png" alt=""></span>
                            <span>XXX认证</span>
                        </p>
                    </div>

                    <div class="eval_right">
                        <div class="right_top">
                            <div>
                                <p>课程评分</p>
                                <p>
                                    <span><img src="@/assets/images/star.png" alt=""></span>
                                    <span><img src="@/assets/images/star.png" alt=""></span>
                                    <span><img src="@/assets/images/star.png" alt=""></span>
                                    <span><img src="@/assets/images/star.png" alt=""></span>
                                </p>
                            </div>
                            <div>
                                课程难度：      
                                <span>太简单</span> /
                                <span>简单</span> /
                                <span>适中</span> /
                                <span>有点难</span> /
                                <span>有点难</span>
                            </div>
                        </div>
                        <p class="eval_date">02月01日     17:02</p>
                        <p class="eval_content">评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget</p>
                        <div class="eval_img_wrap">
                            <ul>
                                <li class="one"><img src="" alt=""></li>
                                <li><img src="" alt=""></li>
                                <li><img src="" alt=""></li>
                                <li><img src="" alt=""></li>
                                <li><img src="" alt=""></li>
                            </ul>
                            <div>
                                <span>回复</span>丨<span>999赞</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="eval1">
                    <div><img src="@/assets/images/touxian1.png" alt=""></div>
                    <div class="eval_user_info">
                        <p>魔兽争霸 <span>回复</span> 魔兽争霸</p>
                        <p>2020年02月01日     17:02</p>
                        <p>评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc </p>
                        <p><span>回复</span>丨<span>999赞</span></p>
                    </div>
                </div>

                <div class="eval1">
                    <div><img src="@/assets/images/touxian2.png" alt=""></div>
                    <div class="eval_user_info">
                        <p>魔兽争霸 <span>回复</span> 魔兽争霸</p>
                        <p>2020年02月01日     17:02</p>
                        <p>评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc </p>
                        <p><span>回复</span>丨<span>999赞</span></p>
                    </div>
                </div>

                <div class="eval1">
                    <div><img src="@/assets/images/touxian1.png" alt=""></div>
                    <div class="eval_user_info">
                        <p>魔兽争霸 <span>回复</span> 魔兽争霸</p>
                        <p>2020年02月01日     17:02</p>
                        <p>评论内容：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc </p>
                        <p><span>回复</span>丨<span>999赞</span></p>
                    </div>
                </div>

                <p>共100条回复<span>点击查看</span></p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            isEvaluate:false,
            gradeList:['太简单','简单','适中','有点难','太难了'],
            currentGrade:'适中',
            textareaText:'',
            courseScoreList:[{isActive:false},{isActive:false},{isActive:false},{isActive:false},{isActive:false}]
        }
    },
    methods:{
        cutGrade(name){
            this.currentGrade = name;
        },
        selectCourseScore(index){
            this.courseScoreList.forEach((el,idx) => {
                if(idx<=index){
                    this.courseScoreList[idx].isActive = true;
                }else{
                    this.courseScoreList[idx].isActive = false;
                }
            });
        },
        nowStudy(){
            this.isEvaluate = true;
        }
    },
    watch:{
        textareaText(newVal){
            if(newVal.length>200){
                console.log(111);
                this.textareaText = newVal.slice(0,200);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.course_evaluate{
    width: 100%;
    padding: 0 13px;
    box-sizing: border-box;

    .courseScore{
        height: 77px;
        line-height: 77px;
        font-size: 24px;
        color: #FFFFFF;
        >span{
            margin-left: 30px;
            color: #0099CC;
        }
    }

    .course_evaluate_input_wrap{
        width: 100%;
        .evaluate_hint{
            height: 93px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28px;
            color: #FFFFFF;
            border-top: 1px solid #336699;
            border-bottom: 1px solid #336699;
            box-sizing: border-box;
            >span:last-child{
                display: flex;
                width:158px;
                height:62px;
                display:flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                margin-left: 40px;
                background: #0E86CA;
                cursor: pointer;
            }
        }

        .evaluate_input_wrap{
            padding: 37px 50px;

            .course_score{
                font-size: 22px;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                >span:first-child{
                    margin-right: 44px;
                }
                >span:nth-child(n+2){
                    display: inline-block;
                    width: 34px;
                    height: 34px;
                    margin-right: 10px;
                    cursor: pointer;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .course_grade{
                font-size: 22px;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                margin-top: 12px;
                margin-bottom: 46px;
                >span:first-child{
                    margin-right: 75px;
                }
                >span:nth-child(n+2){
                    display: inline-block;
                    padding: 0 44px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 22px;
                    color: #0E86CA;
                    cursor: pointer;
                }
                .grade_active{
                    box-shadow: 0px 4px 5px 0px rgba(4, 23, 34, 0.2);
                    border-radius: 4px;
                    color: #fff !important;
                    background:#0E86CA;
                }
            }

            .course_eval_input{
                position: relative;
                .input_wrap{
                    width: 1431px;
                    height: 230px;
                    line-height: 30px;
                    font-size: 20px;
                    padding: 28px 31px;
                    border-radius: 4px;
                    color: #FFFFFF;
                    background: #16202D;
                    box-sizing: border-box;
                    resize: none;
                    outline: none;
                    &::placeholder{
                        color:  #FFFFFF;
                        opacity: 0.5;
                    }
                }
                >span{
                    position: absolute;
                    bottom: 16px;
                    right: 22px;
                    font-size: 22px;
                    color: #FFFFFF;
                    opacity: 0.5;
                }
            }

            .course{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
                margin-bottom: 76px;
                .uploading_homework{
                    color: #FFFFFF;
                    font-size: 18px;
                    
                    >span:first-child{
                        display: inline-block;
                        width: 87px;
                        height: 87px;
                        line-height: 87px;
                        margin-right: 27px;
                        text-align: center;
                        background-color: #16202D;
                        border-radius: 4px;
                        position: relative;
                        &::before{
                            content: '';
                            display: block;
                            width: 32px;
                            height: 32px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            background: url('~@/assets/images/add.png') no-repeat;
                            background-size: 100% 100%;
                        }
                        >input{
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                        }
                    }

                    >span:last-child{
                        opacity: 0.6;
                    }

                }
                .publish_eval,.publish_eval_active{
                    display: inline-block;
                    width: 128px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 22px;
                    text-align: center;
                    border-radius: 4px;
                    color: #FFFFFF;
                    background-color: #999999;
                    cursor: pointer;
                }
                .publish_eval_active{
                    background-color:#0E86CA;
                }
            }
        }
    }

    .course_evaluate{
        margin-top: 24px;
        >ul{
            >li{
                border-top: 2px solid #336699;
                background: #16202D;
                border-radius: 4px;
                padding: 46px 36px;
                margin-bottom: 34px;
                box-sizing: border-box;

                .eval_top{
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #666666;
                    margin-bottom: 30px;
                    .eval_left{
                        .eval_user_info{
                            display: flex;
                            align-items: center;
                            >div:first-child{
                                width: 51px;
                                height: 51px;
                                >img{
                                    width:100%;
                                    height:100%;
                                }
                            }
                            >div:last-child{
                                margin-left: 8px;
                                font-size: 22px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                color: #CCCCCC;
                                >p:first-child{
                                    color: #0099CC;
                                }
                            }
                        }
                        >p{
                            width: 172px;
                            height: 41px;
                            border-radius: 4px;
                            font-size: 18px;
                            color: #66CCFF;
                            background: #212C3D;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-left: 33px;
                            >span:first-child{
                                display: inline-block;
                                width: 26px;
                                height: 26px;
                                >img{
                                    width:100%;
                                    height:100%;
                                }
                            }
                        }
                        >p:first-of-type{
                            margin-top: 40px;
                            margin-bottom: 11px;
                        }

                    }

                    .eval_right{
                        width: 1159px;
                        box-sizing: border-box;
                        .right_top{
                            height: 70px;
                            border-radius: 4px;
                            display: flex;
                            align-items: center;
                            background: #121A24;
                            >div:first-of-type{
                                font-size: 22px;
                                margin-left: 30px;
                                display: flex;
                                color: #0E86CA;
                                >p{
                                    >span{
                                        display: inline-block;
                                        width: 22px;
                                        height: 22px;
                                        margin-left: 10px;
                                        >img{
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                }
                            }

                            >div:last-of-type{
                                margin-left: 102px;
                                font-size: 22px;
                                color: #0E86CA;
                                >span:nth-of-type(1){color:#FFFFFF;}
                                >span:nth-of-type(2){color:#33CCFF;}
                                >span:nth-of-type(3){color:#33FF99;}
                                >span:nth-of-type(4){color:#FF9933;}
                                >span:nth-of-type(5){color:#CC3333;}
                            }
                        }

                        .eval_date{
                            font-size: 16px;
                            color: #999999;
                            margin-top: 31px;
                            margin-bottom: 21px;
                        }
                        .eval_content{
                            font-size: 18px;
                            color: #FFFFFF;
                            line-height: 32px;
                        }
                        .eval_img_wrap{
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            margin-top: 20px;
                            margin-bottom: 52px;
                            >ul{
                                width: 800px;
                                overflow: hidden;
                                clear: both;
                                >li{
                                    float: left;
                                    width: 130px;
                                    height: 130px;
                                    margin-right: 7px;
                                    margin-bottom: 7px;
                                    background: burlywood;
                                    cursor: pointer;
                                }
                                .one{
                                    width: 478px;
                                    height: 268px;
                                }
                            }
                            >div{
                                color:#0E86CA;
                                font-size: 20px;
                                margin-bottom: 10px;
                                cursor: pointer;
                                >span:first-of-type{
                                    margin-right: 10px;
                                }
                                >span:last-of-type{
                                    margin-left: 40px;
                                    position: relative;
                                    &::before{
                                        content:'';
                                        display: block;
                                        width: 26px;
                                        height: 26px;
                                        background: url('~@/assets/images/zang1.png') no-repeat;
                                        background-size: 100% 100%;
                                        position: absolute;
                                        left: -30px;
                                        top: 0;
                                    }
                                }
                            }
                        }
                    }
                }

                .eval1{
                    padding-left: 203px;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;

                    >div:first-of-type{
                        width: 47px ;
                        height: 47px;
                        margin-right: 12px;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    >div:last-of-type{

                        >p{
                            width: 1140px;
                            white-space: normal;
                        }
                        >p:nth-of-type(1){
                            font-size: 20px;
                            color: #0099CC;
                            >span{
                                color: #FFFFFF;
                            }
                        }
                        >p:nth-of-type(2){
                            font-size: 16px;
                            margin-top: 10px;
                            color: #CCCCCC;
                        }
                        >p:nth-of-type(3){
                            min-height: 114px;
                            line-height: 25px;
                            padding: 22px 37px;
                            margin-top: 19px;
                            border-radius: 4px;
                            font-size: 16px;
                            box-sizing: border-box;
                            color: #fff;
                            background-color: #1F2D3E;
                        }
                        >p:nth-of-type(4){
                            color:#0E86CA;
                            font-size: 20px;
                            text-align: right;
                            margin-top: 26px;
                            margin-bottom: 10px;
                            >span:first-of-type{
                                margin-right: 10px;
                            }
                            >span:last-of-type{
                                margin-left: 40px;
                                position: relative;
                                &::before{
                                    content:'';
                                    display: block;
                                    width: 26px;
                                    height: 26px;
                                    background: url('~@/assets/images/zang1.png') no-repeat;
                                    background-size: 100% 100%;
                                    position: absolute;
                                    left: -30px;
                                    top: 0;
                                }
                            }
                        }
                    }
                }
                >p{
                    padding-left: 260px;
                    font-size: 20px;
                    color: #FFFFFF;
                    margin-top: 30px;
                    margin-bottom: 62px;
                    >span{
                        color:#0099CC;
                        margin-left: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
  }
</style>