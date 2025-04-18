<template>
    <div class="container">
        <div class="header">
            <img class="header-logo" src="./../assets/图标.jpg" alt="">
            <div class="header-title">XUEQING BOT 2024</div>
        </div>
        <div class="main">
            <div class="user-data-box">
                <el-table :data="tableData" border height="560">
                    <el-table-column align="center" fixed prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column align="center" prop="serial_id" label="编号" width="120">
                    </el-table-column>
                    <el-table-column align="center" prop="user_id" label="昵称" width="200">
                    </el-table-column>
                    <el-table-column align="center" prop="time" label="花费时间" width="100">
                    </el-table-column>
                    <el-table-column align="center" fixed="right" label="操作" width="220">
                        <template slot-scope="scope">
                            <el-button style="font-family: 'alibaba';" size="mini" type="primary"
                                @click="ChooseMessageList(scope.$index, scope.row)">查看对话记录</el-button>
                            <el-button style="font-family: 'alibaba';" size="mini" type="danger"
                                @click="DeleteMessage(scope.$index, scope.row)">删除</el-button>
                        </template>

                    </el-table-column>
                </el-table>
            </div>

            <div class="chat-message-box">
                <div class="chat-box-content" id="content-window">
                    <div v-for="(msg, index) in messageList" :key="index">
                        <div class="message-time">{{ msg.time }}</div>
                        <div class="message robot" v-if="!msg.isme">
                            <img class="message-obj-image" src="../assets/图标.jpg" alt="">
                            <div class="message-text" v-html="msg.text"></div>
                        </div>

                        <div class="message mine" v-if="msg.isme">
                            <img class="message-obj-image" src="../assets/默认头像.png" alt="">
                            <div class="message-text" v-html="msg.text"></div>
                        </div>
                    </div>
                    <div class="message-bottom-tip"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            messageList: [],
        };
    },
    methods: {
        ChooseMessageList(index, message) {
            this.messageList = message.message_list
        },
        DeleteMessage(index, message) {
            this.$confirm('是否删除当前对话记录', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$axios.post("/xueqing/db/delete", {
                    serial_id: message.serial_id
                }).then(res => {
                    if (res.data.code == 200) {
                        this.InitTableData()
                        this.$message({
                            type: 'success',
                            message: '删除成功'
                        });
                    } else {
                        this.$message({
                            type: 'info',
                            message: '删除异常'
                        });
                    }
                })

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消删除'
                });
            });
        },
        InitTableData() {
            this.$axios.get("/xueqing/db/read").then(res => {
                this.tableData = res.data
            })
        }
    },
    mounted() {
        this.InitTableData()
    }
}
</script>

<style scoped>
@font-face {
    font-family: "alibaba";
    src: url("./../assets/alibaba.ttf") format("woff"), url("./../assets/alibaba.ttf") format("truetype");
}

.container {
    background-color: #F1F6FD;
    width: 100vw;
    max-width: 1920px;
    min-width: 1280px;
    height: 100vh;
    font-family: "english", "alibaba";
    overflow-y: scroll;
    margin: 0 auto;
    box-sizing: border-box;
    background-size: cover;
}

.header {
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    background-color: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
}

.header:hover {
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    background-color: rgba(255, 255, 255, 0.5);
}

.header-logo {
    width: 35px;
    height: 35px;
    display: flex;
    cursor: pointer;
    border-radius: 35px;
    border: 2px solid #FFFFFF;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    box-sizing: border-box;
}

.header-title {
    margin-left: 20px;
    margin-right: auto;
}

.header-button {
    margin-left: 20px;
    padding: 0 10px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    border: 2px solid #0079BA;
    box-sizing: border-box;
    color: #0079BA;
    cursor: pointer;
    text-decoration: none;
}

.header-button:hover {
    background-color: #0079BA;
    color: white;
}

.main {
    width: 100%;
    box-sizing: border-box;
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: space-between;
}

.user-data-box {
    margin: 20px;
    height: 600px;
    background-color: #FFFFFF;
    padding: 20px;
    box-sizing: border-box;
}

.chat-message-box {
    flex: 1;
    background-color: #FFFFFF;
    padding: 20px;
    box-sizing: border-box;
    height: 600px;
    margin: 20px;
    margin-left: 0;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    padding: 20px;
}


.chat-box {
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.chat-box-content {
    background-color: #F1F6FD;
    box-sizing: border-box;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 20px 0;
    text-align: center;
    height: 560px;
}

.message {
    display: flex;
    padding: 10px 20px;
    text-align: left;
}

.mine {
    flex-direction: row-reverse;
}

.message-obj-image {
    height: 35px;
    width: 35px;
    border-radius: 35px;
    border: 2px solid #FFFFFF;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    box-sizing: border-box;
}

.message-text {
    flex-shrink: 0;
    line-height: 25px;
    max-width: calc(100% - 85px);
    background-color: white;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 12px;
    color: #6c7894;
    margin: 0 20px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    text-align: justify;
    font-family: "english", "alibaba";
}


.message-time {
    width: 100%;
    line-height: 20px;
    color: #929eba;
    font-size: 12px;
    text-align: center;
}
</style>