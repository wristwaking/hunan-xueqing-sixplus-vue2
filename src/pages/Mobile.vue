<template>
    <div class="phone-container">
        <div class="header">
            <img class="header-logo" src="./../assets/图标.jpg" alt="">
            <div class="header-title">XUEQING BOT 2024</div>
            <!-- <a class="header-button">TIMER : {{ setting.timer ? FormatTime(remainingTime) : "不限时" }}</a> -->
        </div>
        <div class="content" v-if="page == 'INIT'">
            <img src="./../assets/图标.jpg" alt="">
            <div class="content-title">XUEQING BOT</div>
            <div class="content-tip">
                亲爱的同学：<br>欢迎参与本次实验！请按照屏幕上的指示，与AI聊天机器人展开自然流畅的英文对话。保持对话连贯且深入，<span
                    style="color: crimson;">避免中途退出</span>。请尽量<span
                    style="color: crimson;">投入</span>，运用您的英语知识进行交流。对话时，请留意自身感受，看是否感到更加投入。对话结束后，您将收到一份问卷，请基于真实体验，<span
                    style="color: crimson;">如实回答</span>所有问题，您的反馈对我们的研究至关重要。实验过程中如遇疑问或需协助，请随时联系实验人员。祝您实验愉快！
                <!-- 亲爱的同学：欢迎您参与本次实验。请按照屏幕上的指示，与AI聊天机器人进行自然、流畅的<span style="color: crimson;">英文对话</span>。请尽量保持对话的连贯性和深度，就像您与真实的人交流一样。请尽量<span style="color: crimson;">投入</span>到与AI聊天机器人的对话中，尝试使用您所学的英语知识来交流。在对话过程中，请注意观察自己的感受，是否感到更加投入。对话结束后，您将看到一份问卷。请根据您的实际体验，<span style="color: crimson;">如实</span>填写问卷中的问题，您的回答将对我们的研究起到关键作用。如果您在实验过程中有任何疑问或需要帮助，请随时与实验人员联系。祝您实验顺利！ -->
            </div>

            <div class="content-button">
                <button @click="StartLogin" style="font-family: 'alibaba';">登录验证</button>
            </div>
        </div>

        <div class="content" v-if="page == 'LOGIN'">
            <div class="content-title" style="font-size: 25px;">填写你的昵称</div>

            <div class="content-input">
                <input media="text" maxlength="32" :disabled="loading" placeholder="请填写您的昵称（不超过 32 字）" v-model="user_id">
            </div>

            <div class="content-button">
                <button @click="StartGame" style="font-family: 'alibaba';">开始对话</button>
            </div>
        </div>

        <div class="content" v-if="page == 'CHOOSE'">
            <div class="content-title" style="font-size: 25px;">选择您感兴趣的主题</div>
            <div class="content-choose">
                <div class="content-choose-item" @click="StartChooseTest('学校生活与学术讨论')">
                    <svg style="margin-right: 10px;" t="1716021017341" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2048" width="30" height="30">
                        <path
                            d="M510.3616 513.1264m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z"
                            fill="#E9F4FF" p-id="2049"></path>
                        <path
                            d="M657.92 341.1968a22.2208 22.2208 0 0 1-22.2208-22.2208V240.64a22.272 22.272 0 0 1 44.4928 0v78.336a22.2208 22.2208 0 0 1-22.272 22.2208z"
                            fill="#59ADF8" p-id="2050"></path>
                        <path
                            d="M709.376 258.7136V318.976c0 25.6-25.9072 46.08-51.456 46.08s-51.2-20.48-51.2-46.08V258.4064H417.4848V318.976c0 25.6-25.9072 46.08-51.2 46.08s-51.2-20.48-51.2-46.08V258.5088a90.8288 90.8288 0 0 0-87.04 90.7264v71.168h565.0944v-71.168a90.8288 90.8288 0 0 0-83.7632-90.5216z"
                            fill="#3A9CED" p-id="2051"></path>
                        <path
                            d="M366.08 341.1968a22.2208 22.2208 0 0 1-22.272-22.2208V240.64a22.272 22.272 0 0 1 44.4928 0v78.336a22.2208 22.2208 0 0 1-22.2208 22.2208z"
                            fill="#6BC2FC" p-id="2052"></path>
                        <path
                            d="M665.2928 364.6464a43.8784 43.8784 0 0 1-7.3728 0.6144c-25.6 0-51.2-20.48-51.2-46.08V258.4064H417.4848V318.976c0 25.6-25.9072 46.08-51.2 46.08s-51.2-20.48-51.2-46.08V258.5088a90.8288 90.8288 0 0 0-87.04 90.7264v71.168h409.9072a446.3104 446.3104 0 0 0 27.3408-55.7568z"
                            fill="#59ADF8" p-id="2053"></path>
                        <path
                            d="M510.1056 258.4064H417.4848V318.976c0 25.6-25.9072 46.08-51.2 46.08s-51.2-20.48-51.2-46.08V258.5088a90.8288 90.8288 0 0 0-87.04 90.7264v71.168h112.64a453.4272 453.4272 0 0 0 169.4208-161.9968z"
                            fill="#6BC2FC" p-id="2054"></path>
                        <path
                            d="M227.584 465.92v237.7216a90.8288 90.8288 0 0 0 90.7776 90.8288h384a90.8288 90.8288 0 0 0 90.8288-90.8288V465.92zM629.76 596.0704L493.7728 706.56a39.2192 39.2192 0 0 1-24.6784 8.704 36.4544 36.4544 0 0 1-5.7344-0.4096 39.0144 39.0144 0 0 1-26.624-16.7936l-52.224-77.2608a30.72 30.72 0 0 1 50.688-34.4064l38.5536 57.0368 117.1456-95.0784a30.72 30.72 0 1 1 38.7072 47.7184z"
                            fill="#2595E8" p-id="2055"></path>
                        <path
                            d="M227.584 465.92v237.7216a90.8288 90.8288 0 0 0 90.7776 90.8288h152.1152a451.6864 451.6864 0 0 0 322.56-281.088V465.92zM629.76 596.0704L493.7728 706.56a39.2192 39.2192 0 0 1-24.6784 8.704 36.4544 36.4544 0 0 1-5.7344-0.4096 39.0144 39.0144 0 0 1-26.624-16.7936l-52.224-77.2608a30.72 30.72 0 0 1 50.688-34.4064l38.5536 57.0368 117.1456-95.0784a30.72 30.72 0 1 1 38.7072 47.7184z"
                            fill="#3A9CED" p-id="2056"></path>
                        <path
                            d="M384.512 620.8a30.72 30.72 0 0 1 50.688-34.4064l9.216 13.6192A452.608 452.608 0 0 0 607.7952 465.92H227.584v179.2c6.656 0.3072 13.4144 0.512 20.1728 0.512a450.56 450.56 0 0 0 138.5472-21.8112z"
                            fill="#59ADF8" p-id="2057"></path>
                    </svg>
                    <span>学校生活与学术讨论</span>
                    <svg style="margin-left: auto;" t="1716020045619" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5165" width="20" height="20">
                        <path
                            d="M709.717333 546.901333a46.805333 46.805333 0 0 0 0-69.802666L368.981333 181.077333C340.949333 156.757333 298.666667 177.749333 298.666667 216.021333v591.957334c0 38.272 42.282667 59.306667 70.314666 34.944l340.736-296.021334z"
                            fill="#318EC8" p-id="5166"></path>
                    </svg>
                </div>
                <div class="content-choose-item" @click="StartChooseTest('兴趣爱好与日常生活')">
                    <svg style="margin-right: 10px;" t="1716020323678" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1451" width="30" height="30">
                        <path
                            d="M510.5152 510.8224m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z"
                            fill="#FFE3DB" p-id="1452"></path>
                        <path
                            d="M421.376 808.96h196.1472c57.2928 0 151.7568-47.2576 151.7568-151.7568S682.6496 412.16 510.8736 412.16s-258.4576 149.248-258.4576 261.12c0 99.84 75.8784 135.68 168.96 135.68z"
                            fill="#F23D4F" p-id="1453"></path>
                        <path
                            d="M379.6992 295.7312m-81.0496 0a81.0496 81.0496 0 1 0 162.0992 0 81.0496 81.0496 0 1 0-162.0992 0Z"
                            fill="#FF716E" p-id="1454"></path>
                        <path
                            d="M227.4304 442.4704m-62.2592 0a62.2592 62.2592 0 1 0 124.5184 0 62.2592 62.2592 0 1 0-124.5184 0Z"
                            fill="#FF716E" p-id="1455"></path>
                        <path
                            d="M636.2624 295.7312m-81.0496 0a81.0496 81.0496 0 1 0 162.0992 0 81.0496 81.0496 0 1 0-162.0992 0Z"
                            fill="#FC4956" p-id="1456"></path>
                        <path
                            d="M793.6512 442.4704m-62.2592 0a62.2592 62.2592 0 1 0 124.5184 0 62.2592 62.2592 0 1 0-124.5184 0Z"
                            fill="#F23D4F" p-id="1457"></path>
                        <path
                            d="M731.392 442.4704a62.208 62.208 0 0 0 25.1904 49.9712 453.12 453.12 0 0 0 9.472-92.16v-13.2608a62.0544 62.0544 0 0 0-34.6624 55.4496zM741.0176 548.5056c-38.144-73.1136-114.9952-136.3456-230.144-136.3456-171.8272 0-258.4576 149.248-258.4576 261.12 0 99.84 75.8784 135.68 168.96 135.68h83.6608a452.1472 452.1472 0 0 0 235.9808-260.4544z"
                            fill="#FC4956" p-id="1458"></path>
                        <path
                            d="M555.2128 295.7312a80.9984 80.9984 0 0 0 66.56 79.7696 450.56 450.56 0 0 0 20.736-135.4752c0-8.3968-0.256-16.7424-0.7168-25.0368-1.9456 0-3.84-0.3072-5.7856-0.3072a81.0496 81.0496 0 0 0-80.7936 81.0496zM602.1632 427.1616a274.0736 274.0736 0 0 0-91.2896-15.0016c-171.8272 0-258.4576 149.248-258.4576 261.12 0 4.7104 0 9.216 0.5632 13.6192a451.2768 451.2768 0 0 0 349.184-259.7376z"
                            fill="#FF5C64" p-id="1459"></path>
                    </svg>
                    <span>兴趣爱好与日常生活</span>
                    <svg style="margin-left: auto;" t="1716020045619" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5165" width="20" height="20">
                        <path
                            d="M709.717333 546.901333a46.805333 46.805333 0 0 0 0-69.802666L368.981333 181.077333C340.949333 156.757333 298.666667 177.749333 298.666667 216.021333v591.957334c0 38.272 42.282667 59.306667 70.314666 34.944l340.736-296.021334z"
                            fill="#318EC8" p-id="5166"></path>
                    </svg>
                </div>
                <div class="content-choose-item" @click="StartChooseTest('跨文化交流与观点分析')">
                    <svg style="margin-right: 10px;" t="1716021106111" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2246" width="30" height="30">
                        <path
                            d="M512.2048 508.928m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z"
                            fill="#E3FFF3" p-id="2247"></path>
                        <path
                            d="M814.9504 530.5856l-86.5792-263.5776a39.1168 39.1168 0 0 0-37.1712-27.2896H332.8a39.1168 39.1168 0 0 0-37.0176 27.2896L209.408 530.5856a41.9328 41.9328 0 0 0-2.048 12.8512v174.08a39.6288 39.6288 0 0 0 39.0656 40.2432h67.6352a39.2704 39.2704 0 0 0 37.632-29.44l10.24-39.2704a4.8128 4.8128 0 0 1 4.3008-3.84h287.232a4.352 4.352 0 0 1 3.7888 2.6112l25.088 48.5888a38.7584 38.7584 0 0 0 34.5088 21.3504h60.8256a39.6288 39.6288 0 0 0 39.0656-40.1408v-174.08a40.448 40.448 0 0 0-1.792-12.9536zM339.4048 414.2592L360.7552 327.68a16.64 16.64 0 0 1 14.8992-11.008h271.6672a16.6912 16.6912 0 0 1 14.8992 11.008l21.2992 86.6304c5.6832 13.3632-2.4064 29.2864-14.8992 29.2864H354.3552c-12.544-0.0512-20.6336-15.9744-14.9504-29.3376z m47.5648 188.9792H320.8192a21.1968 21.1968 0 0 1-21.1968-21.1968v-29.696a21.248 21.248 0 0 1 21.1968-21.1968h7.8336a58.3168 58.3168 0 0 1 58.3168 58.3168z m341.7088-21.1968a21.1968 21.1968 0 0 1-21.1968 21.1968h-66.1504v-13.7728a58.3168 58.3168 0 0 1 58.3168-58.3168h7.8336a21.1968 21.1968 0 0 1 21.1968 21.1968z"
                            fill="#05C46D" p-id="2248"></path>
                        <path
                            d="M728.3712 267.008a39.1168 39.1168 0 0 0-37.1712-27.2896H332.8a39.1168 39.1168 0 0 0-37.0176 27.2896L209.408 530.5856a41.8304 41.8304 0 0 0-2.048 12.8v174.08a39.6288 39.6288 0 0 0 39.0656 40.2944h67.6352a39.2704 39.2704 0 0 0 37.632-29.44l10.24-39.2704a4.8128 4.8128 0 0 1 4.3008-3.84h287.232a4.352 4.352 0 0 1 3.7888 2.6112l0.8704 1.6384a450.56 450.56 0 0 0 129.6896-240.64z m-389.12 147.2512L360.7552 327.68a16.64 16.64 0 0 1 14.8992-11.008h271.6672a16.6912 16.6912 0 0 1 14.8992 11.008l21.2992 86.6304c5.6832 13.3632-2.4064 29.2864-14.8992 29.2864H354.3552c-12.544-0.0512-20.6336-15.9744-14.9504-29.3376z m47.5648 188.9792H320.8192a21.1968 21.1968 0 0 1-21.1968-21.1968v-29.696a21.248 21.248 0 0 1 21.1968-21.1968h7.8336a58.3168 58.3168 0 0 1 58.3168 58.3168z m320.512 0h-65.9968v-13.7728a58.3168 58.3168 0 0 1 58.3168-58.3168h7.8336a21.1968 21.1968 0 0 1 21.1968 21.1968v29.696a21.1968 21.1968 0 0 1-21.1968 21.1968z"
                            fill="#1DCE75" p-id="2249"></path>
                        <path
                            d="M221.6448 655.9744A450.56 450.56 0 0 0 604.16 443.5456H354.3552c-12.544 0-20.48-15.9232-14.9504-29.2864L360.7552 327.68a16.64 16.64 0 0 1 14.8992-11.008h271.6672a14.8992 14.8992 0 0 1 10.24 4.1984 450.9696 450.9696 0 0 0 13.6704-81.1008H332.8a39.1168 39.1168 0 0 0-37.0176 27.2896L209.408 530.5856a41.8304 41.8304 0 0 0-2.048 12.8v112.3328c4.7616 0.1536 9.5232 0.256 14.2848 0.256z m77.9776-103.6288a21.248 21.248 0 0 1 21.1968-21.1968h7.8336a58.3168 58.3168 0 0 1 58.3168 58.3168v13.7728H320.8192a21.1968 21.1968 0 0 1-21.1968-21.1968z"
                            fill="#3CD38E" p-id="2250"></path>
                        <path
                            d="M339.5072 432.64a23.552 23.552 0 0 1 0-18.3808L360.7552 327.68a16.64 16.64 0 0 1 14.8992-11.008h92.8768a452.864 452.864 0 0 0 46.6944-76.8H332.8a39.1168 39.1168 0 0 0-37.0176 27.2896L225.6896 480.9216a446.7712 446.7712 0 0 0 113.8176-48.2816z"
                            fill="#48E1AA" p-id="2251"></path>
                    </svg>
                    <span>跨文化交流与观点分析</span>
                    <svg style="margin-left: auto;" t="1716020045619" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5165" width="20" height="20">
                        <path
                            d="M709.717333 546.901333a46.805333 46.805333 0 0 0 0-69.802666L368.981333 181.077333C340.949333 156.757333 298.666667 177.749333 298.666667 216.021333v591.957334c0 38.272 42.282667 59.306667 70.314666 34.944l340.736-296.021334z"
                            fill="#318EC8" p-id="5166"></path>
                    </svg>
                </div>
                <div class="content-choose-item" @click="StartChooseTest('未来规划与职业发展')">
                    <svg style="margin-right: 10px;" t="1716020206486" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1056" width="30" height="30">
                        <path
                            d="M513.2288 514.7136m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z"
                            fill="#FFF1DC" p-id="1057"></path>
                        <path
                            d="M818.7904 467.2512a51.2 51.2 0 0 0-28.5184-87.7568l-77.6704-11.3152a32 32 0 0 1-3.1232 5.12l-147.6096 196.6592a32.9216 32.9216 0 0 1-14.336 10.8032l-93.0816 35.84a32.5632 32.5632 0 0 1-43.7248-36.5056l17.4592-90.9312A32.3584 32.3584 0 0 1 434.1248 476.16l154.112-205.312-29.2352-59.392a51.456 51.456 0 0 0-92.16 0L407.1936 331.9808a51.2 51.2 0 0 1-38.5536 28.16l-133.12 19.3536a51.2 51.2 0 0 0-28.5184 87.7568l96.256 93.8496a51.456 51.456 0 0 1 14.7968 45.568l-22.7328 132.5056A51.456 51.456 0 0 0 369.92 793.6l118.9888-62.5664a51.2 51.2 0 0 1 47.872 0L655.8208 793.6a51.2 51.2 0 0 0 74.6496-54.2208l-22.7328-132.5056a51.456 51.456 0 0 1 14.7968-45.568z"
                            fill="#FF8E12" p-id="1058"></path>
                        <path
                            d="M678.99392 237.66016l39.77728 29.7472a9.5744 9.5744 0 0 1 1.77664 13.60384l-186.33728 249.16992-55.1936-41.2672 186.3424-249.17504a9.5744 9.5744 0 0 1 13.39904-1.93536z"
                            fill="#FCA315" p-id="1059"></path>
                        <path d="M469.1968 503.808l51.6608 40.0896L466.2784 573.44a8.2432 8.2432 0 0 1-11.9296-9.2672z"
                            fill="#FCB138" p-id="1060"></path>
                        <path
                            d="M745.3696 372.9408l-32.768-4.7616a32 32 0 0 1-3.1232 5.12l-147.6096 196.6592a32.9216 32.9216 0 0 1-14.336 10.8032l-93.0816 35.84a32.5632 32.5632 0 0 1-43.7248-36.5056l17.4592-90.9312A32.3584 32.3584 0 0 1 434.1248 476.16l154.112-205.312-29.2352-59.392a51.456 51.456 0 0 0-92.16 0L407.1936 331.9808a51.2 51.2 0 0 1-38.5536 28.16l-133.12 19.3536a51.2 51.2 0 0 0-28.5184 87.7568l96.256 93.8496a51.456 51.456 0 0 1 14.7968 45.568l-22.7328 132.5056A51.456 51.456 0 0 0 369.92 793.6l118.9888-62.5664a51.2 51.2 0 0 1 47.872 0l23.9616 12.5952a397.6704 397.6704 0 0 0 186.112-336.9472c0-11.4688-0.5632-22.6816-1.4848-33.7408z"
                            fill="#FCA315" p-id="1061"></path>
                        <path
                            d="M309.2992 657.1008a395.7248 395.7248 0 0 0 118.9888-41.472 32.4096 32.4096 0 0 1-17.5616-35.328l17.4592-90.9312A32.3584 32.3584 0 0 1 434.1248 476.16l154.112-205.312-29.2352-59.392a51.456 51.456 0 0 0-92.16 0L407.1936 331.9808a51.2 51.2 0 0 1-38.5536 28.16l-133.12 19.3536a51.2 51.2 0 0 0-28.5184 87.7568l96.256 93.8496a51.456 51.456 0 0 1 14.7968 45.568z"
                            fill="#FCB138" p-id="1062"></path>
                        <path d="M479.1808 488.7552l55.1424 41.216 53.5552-71.68a395.5712 395.5712 0 0 0 49.7664-181.4528z"
                            fill="#FCB138" p-id="1063"></path>
                        <path
                            d="M532.8896 186.7264a51.5072 51.5072 0 0 0-66.2016 24.7296L407.1936 331.9808a51.2 51.2 0 0 1-38.5536 28.16l-133.12 19.3536a51.2 51.2 0 0 0-28.5184 87.7568l40.96 40.0384a398.5408 398.5408 0 0 0 284.928-320.5632z"
                            fill="#FFC65E" p-id="1064"></path>
                    </svg>
                    <span>未来规划与职业发展</span>
                    <svg style="margin-left: auto;" t="1716020045619" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5165" width="20" height="20">
                        <path
                            d="M709.717333 546.901333a46.805333 46.805333 0 0 0 0-69.802666L368.981333 181.077333C340.949333 156.757333 298.666667 177.749333 298.666667 216.021333v591.957334c0 38.272 42.282667 59.306667 70.314666 34.944l340.736-296.021334z"
                            fill="#318EC8" p-id="5166"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="chat-box" v-if="page == 'CHAT'">
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
                <div class="message-time-loading" v-if="loading">
                    <svg t="1725351317728" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5168" width="20" height="20">
                        <path
                            d="M511.957333 128c-17.92 0-32.469333 14.72-32.469333 32.896v98.730667c0 18.218667 14.506667 32.938667 32.426667 32.938666 17.962667 0 32.469333-14.72 32.469333-32.938666V160.896A32.64 32.64 0 0 0 512 128zM369.92 300.074667L307.370667 224.426667a32.128 32.128 0 0 0-45.696-4.053334 33.28 33.28 0 0 0-4.053334 46.378667l62.592 75.648a32.128 32.128 0 0 0 45.696 4.053333 33.194667 33.194667 0 0 0 4.010667-46.378666zM288.256 482.944a32.853333 32.853333 0 0 0-26.325333-38.144l-95.872-17.152a32.512 32.512 0 0 0-37.632 26.666667 32.853333 32.853333 0 0 0 26.368 38.101333l95.829333 17.194667a32.512 32.512 0 0 0 37.632-26.666667zM270.933333 626.048L186.538667 675.413333a33.194667 33.194667 0 0 0-11.861334 44.928c8.96 15.786667 28.8 21.162667 44.330667 12.074667l84.309333-49.365333a33.109333 33.109333 0 0 0 11.861334-44.970667 32.128 32.128 0 0 0-44.330667-12.032zM434.261333 739.413333a32.298667 32.298667 0 0 0-41.6 19.626667l-33.28 92.757333c-6.144 17.109333 2.56 36.010667 19.413334 42.24a32.341333 32.341333 0 0 0 41.557333-19.712l33.28-92.757333a32.981333 32.981333 0 0 0-19.370667-42.197333zM631.210667 759.04a32.341333 32.341333 0 0 0-41.557334-19.626667 33.024 33.024 0 0 0-19.413333 42.154667l33.28 92.757333c6.144 17.066667 24.789333 25.898667 41.6 19.669334a33.066667 33.066667 0 0 0 19.413333-42.197334l-33.28-92.757333zM837.290667 675.413333l-84.309334-49.365333a32.170667 32.170667 0 0 0-44.288 12.032c-8.96 15.786667-3.712 35.84 11.818667 44.970667l84.352 49.365333a32.213333 32.213333 0 0 0 44.330667-12.074667 33.237333 33.237333 0 0 0-11.904-44.928zM895.445333 454.314667a32.512 32.512 0 0 0-37.632-26.666667l-95.872 17.152a32.853333 32.853333 0 0 0-26.282666 38.144 32.512 32.512 0 0 0 37.589333 26.666667l95.829333-17.152a32.853333 32.853333 0 0 0 26.368-38.144zM762.197333 220.416a32.170667 32.170667 0 0 0-45.653333 4.010667l-62.549333 75.648a33.194667 33.194667 0 0 0 3.968 46.378666 32.170667 32.170667 0 0 0 45.696-4.053333l62.592-75.605333a33.237333 33.237333 0 0 0-4.053334-46.378667z"
                            fill="#318EC8" p-id="5169"></path>
                    </svg>
                    <span>机器人思考中请稍后</span>
                </div>
                <div class="qrcode" v-if="qrcodeState">
                    <div class="qrcode-tip">Fill in the questionnaire</div>
                    <img src="../assets/问卷星二维码.jpg" alt="">
                    <a class="qrcode-button" href="https://www.wjx.cn/vm/tORHD2k.aspx">START FILL IN</a>
                </div>
                <div class="message-bottom-tip"></div>
            </div>
            <div class="chat-input-box">
                <div class="chat-input-box-template">
                    <input media="text" maxlength="1000" :disabled="loading" placeholder="请填写您需要发送的消息内容" v-model="answer">
                    <div @click="SendChatMessage">
                        发送消息
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            startTime: 0,
            user_id: "",
            serial_id: "",
            mode: 0,
            subject: "",
            setting: {
                choose: false,
                timer: false,
                tip: false,
                feedback: false,
                emoij: false
            },
            page: "INIT",
            answer: "",
            messageList: [],
            currentProbelm: "",
            loading: false,
            qrcodeState: false,
            pageScrollTimer: null,
            remainingTime: 600,
            index: 0,
            historyMessage: []
        };
    },
    methods: {
        GenerateRandomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        StartChooseTest(subject) {
            this.subject = subject
            this.InitProblem()
            this.StartCountDown()
            this.page = 'CHAT'
        },
        StartFeedBack() {
            this.qrcodeState = true
            setTimeout(() => {
                window.location.href = "https://www.wjx.cn/vm/tORHD2k.aspx"
            }, 6000)
        },
        StartCountDown() {
            if (this.timer) { clearInterval(this.timer) }
            // 判断设置是否开启定时
            if (this.setting.timer == false) {
                return
            }
            this.timer = setInterval(() => {
                if (this.remainingTime > 0) {
                    this.remainingTime--;
                } else {
                    clearInterval(this.timer);
                    this.timer = null;
                    this.StartFeedBack()
                }
            }, 1000);
        },
        StartTestTip() {
            let msg = {
                text: "大家好！那么接下来的十分钟内，我们将进行一项有趣的英文对话实验。在这个实验中，您将与聊天机器人进行十分钟的<span style='color: red; font-size: 12px'>英文交流</span>。聊天机器人会主动与您发起对话。请尽量保持对话的流畅和自然，就像和真实的伙伴交流一样。在这十分钟内，您可以谈论任何您感兴趣的话题，如日常生活、学习经历、未来规划等。聊天机器人会尽量模拟真实的对话环境，提供有趣和富有启发性的回应。完成对话后，您需要<span style='color: red; font-size: 12px'>填写一份问卷</span>。您的回答无关对错，请根据自己的真实体验，认真填写问卷。",
                time: moment().format("HH:mm:ss"),
                isme: false
            }
            this.messageList.push(msg)
        },
        FormatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        },
        StartLogin() {
            this.serial_id = this.GenerateRandomString(8)
            this.page = "LOGIN"
        },
        StartGame() {
            if (this.user_id == "") {
                return
            }
            // 判断是否开启选择
            if (this.setting.choose == true) {
                // 获取当前时间的时间戳（毫秒）  
                let currentTimeMillis = Date.now();
                // 将毫秒转换为秒  
                let currentTimeSeconds = Math.floor(currentTimeMillis / 1000);
                this.startTime = currentTimeSeconds
                console.log(this.startTime)
                this.page = "CHOOSE"
            } else {
                // 获取当前时间的时间戳（毫秒）  
                let currentTimeMillis = Date.now();
                // 将毫秒转换为秒  
                let currentTimeSeconds = Math.floor(currentTimeMillis / 1000);
                this.startTime = currentTimeSeconds
                console.log(this.startTime)
                this.page = "CHAT"
                let prefixProblemList = [
                    "学校生活与学术讨论",
                    "兴趣爱好与日常生活",
                    "跨文化交流与观点分析",
                    "未来规划与职业发展"
                ]
                let randomIndex = Math.floor(Math.random() * prefixProblemList.length);
                this.subject = prefixProblemList[randomIndex]
                this.InitProblem()
            }
        },
        ScrollBottom() {
            let chatContainer = document.getElementById('content-window');
            if (this.pageScrollTimer) { clearTimeout(this.pageScrollTimer) }
            this.pageScrollTimer = setTimeout(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 500)
        },
        SendChatMessage() {
            if (this.loading) { return }
            let msg = { text: this.answer, time: moment().format("HH:mm:ss"), isme: true }
            this.messageList.push(msg)

            this.historyMessage.push({
                "role": "user",
                "content": this.answer
            })

            this.loading = true

            if (this.setting.feedback) {
                this.$axios.post("/answer", {
                    problem: this.currentProbelm,
                    answer: this.answer,
                    history: this.historyMessage,
                    emoji: this.setting.emoij,
                    user_id: this.user_id,
                    serial_id: this.serial_id
                }).then(res => {
                    if (res.data.code == 200) {
                        this.messageList.push({
                            text: res.data.data,
                            time: moment().format("HH:mm:ss"),
                            isme: false
                        })
                        this.ScrollBottom()
                        if (this.initTimer) { clearTimeout(this.initTimer) }
                        this.initTimer = setTimeout(() => { this.InitProblem() }, 5000)
                    }
                })
            } else {
                this.InitProblem()
            }
        },
        FinishSaveData() {
            // 获取当前时间的时间戳（毫秒）  
            let currentTimeMillis = Date.now();
            // 将毫秒转换为秒  
            let currentTimeSeconds = Math.floor(currentTimeMillis / 1000);

            this.$axios.post("/xueqing/db/submit", {
                user_id: this.user_id,
                serial_id: this.serial_id,
                message_list: this.messageList,
                time: currentTimeSeconds - this.startTime,
                date: moment().format("YYYY-mm-dd")
            }).then(res => {
                if (res.data.code == 200) {
                    console.log("success")
                }
            })
        },
        InitProblem() {
            if (this.index >= 4) {
                // 提交数据保存
                this.FinishSaveData()
                setTimeout(() => {
                    this.messageList.push({
                        text: "答题结束！恭喜你完成答题测试！",
                        time: moment().format("HH:mm:ss"),
                        isme: false
                    })
                    this.StartFeedBack()
                }, 5000)
                return
            }
            this.$axios.post("/problem", {
                index: this.index,
                subject: this.subject,
                history: this.historyMessage,
                emoji: this.setting.emoij,
                user_id: this.user_id
            }).then(res => {
                if (res.data.code == 200) {
                    this.messageList.push({
                        text: res.data.data,
                        time: moment().format("HH:mm:ss"),
                        isme: false
                    })

                    this.historyMessage.push({
                        "role": "assistant",
                        "content": res.data.data
                    })

                    this.currentProbelm = res.data.data
                    this.loading = false
                    this.answer = ""
                    this.index = this.index + 1
                    this.ScrollBottom()
                }
            })
        }
    },
    mounted() {
        this.setting.choose = true
        this.setting.timer = false
        this.setting.tip = true
        this.setting.feedback = true
        this.setting.emoij = true
    }
}
</script>

<style scoped>
@font-face {
    font-family: "alibaba";
    src: url("./../assets/alibaba.ttf") format("woff"), url("./../assets/alibaba.ttf") format("truetype");
}

.phone-container {
    background-color: #F1F6FD;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: "english", "alibaba";
    overflow-y: scroll;
    min-width: 360px;
    max-width: 768px;
    margin: 0 auto;
    box-sizing: border-box;
    background-size: cover;
}

.header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
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

.content {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    margin-right: 20px;
    padding: 20px 0;
    padding-bottom: 0;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    overflow: hidden;
    box-sizing: border-box;
}

.content img {
    width: 100px;
    height: 100px;
    border-radius: 75px;
    margin-top: 20px;
    border: 10px solid #FFFFFF;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    box-sizing: border-box;
}

.content-title {
    font-size: 30px;
    margin-top: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    background-image: linear-gradient(45deg, #175D88, #45B3F9, #337fae);
    display: flex;
    align-items: center;
    color: transparent;
    -webkit-background-clip: text;
}

.content-tip {
    margin-top: 20px;
    color: #a7b0c7;
    padding: 0 20px;
    text-align: justify;
    margin-bottom: auto;
    line-height: 25px;
    font-size: 13px;
    margin-bottom: 20px;
}

.content-choose {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 20px;
}

.content-choose-item {
    margin: 0 10px;
    height: 60px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;
    background-color: transparent;
    font-size: 20px;
    color: #2689B7;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
}

.content-button {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: white;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    font-family: "english";
}

.content-button button {
    flex: 1;
    color: #2689B7;
    margin: 0 10px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    font-size: 20px;
    color: #d5e1e8;
    background-color: #2689B7;
    font-family: "english";
}

.content-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
}

.content-input input {
    padding: 0 20px;
    width: calc(100% - 40px);
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: "english", "alibaba";
    font-size: 12px;
    border-radius: 0;
    background-color: #F1F6FD;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #2689B7;
}

.chat-box {
    background-color: #FFFFFF99;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.chat-box-content {
    box-sizing: border-box;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 20px 0;
    text-align: center;
    height: calc(100vh - 160px);
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

.message-time-loading {
    background-color: #ffffff;
    display: inline-flex;
    margin: 10px auto;
    padding: 0 20px;
    padding-left: 5px;
    height: 30px;
    align-items: center;
    color: #b3d1e3;
    border-radius: 15px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    font-size: 12px;
}

.message-time-loading svg {
    animation: rotate 2s linear infinite;
}

.message-time-loading span {
    margin-left: 20px;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.qrcode {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px 0;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    box-sizing: border-box;
}

.qrcode-tip {
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.qrcode img {
    width: 300px;
    height: 300px;
}

.qrcode-button {
    color: #2689B7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    font-size: 20px;
    color: #d5e1e8;
    background-color: #2689B7;
    font-family: "english";
    height: 50px;
    width: 300px;
    margin-top: 20px;
    text-decoration: none;
}

.chat-input-box {
    background-color: rgb(255, 255, 255);
    height: 40px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    padding: 20px;
    padding-bottom: 40px;
}

.chat-input-box-template {
    display: flex;
    justify-content: space-between;
    background-color: #F1F6FD;
    height: 40px;
    border-radius: 20px;
}

.chat-input-box-template input {
    padding: 0 20px;
    border: none;
    outline: none;
    flex: 1;
    font-family: "english", "alibaba";
    font-size: 12px;
    border-radius: 0;
    background-color: #F1F6FD;
    border-radius: 20px 0 0 20px;
}

.chat-input-box-template div {
    padding: 0 20px;
    height: 40px;
    background-color: #3D9AD4;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 12px;
}

.chat-input-box-template button:hover {
    background-color: #296c96;
}
</style>