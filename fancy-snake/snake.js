const { createApp, ref, onMounted } = Vue;
createApp({
    setup() {
        const score = ref(0);
        let ctx;
        const width = 20, height = 20;
        const grassHorizontalImg = new Image();
        grassHorizontalImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_horizontal.png";
        const grassVerticalImg = new Image();
        grassVerticalImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_vertical.png";
        const grassTopLeftImg = new Image();
        grassTopLeftImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_top_left.png";
        const grassTopRightImg = new Image();
        grassTopRightImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_top_right.png";
        const grassBottomLeftImg = new Image();
        grassBottomLeftImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_bottom_left.png";
        const grassBottomRightImg = new Image();
        grassBottomRightImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_bottom_right.png";
        const grassBottomImg = new Image();
        grassBottomImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_bottom.png";
        const grassTopImg = new Image();
        grassTopImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_top.png";
        const grassLeftImg = new Image();
        grassLeftImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_left.png";
        const grassRightImg = new Image();
        grassRightImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/grass_right.png";

        const foodImg = new Image();
        foodImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/food.png";

        const snakeHeadImg = new Image();
        snakeHeadImg.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/snake_head.png";
        const snakeBody1Img = new Image();
        snakeBody1Img.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/snake_body_1.png";
        const snakeBody2Img = new Image();
        snakeBody2Img.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/snake_body_2.png";
        const snakeTail0Img = new Image();
        snakeTail0Img.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/snake_tail_0.png";
        const snakeTail1Img = new Image();
        snakeTail1Img.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/snake_tail_1.png";
        const stone02Img = new Image();
        stone02Img.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/stone_02.png";
        const stone03Img = new Image();
        stone03Img.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/stone_03.png";
        const stone04Img = new Image();
        stone04Img.src = "https://lmusic-1302280959.cos.ap-chengdu.myqcloud.com/snake/stone_04.png";

        /**
         * 地图
         * @desc 类型：0: 空地, 1: 草墙, 2-4: 石头 9:不生成食物
         */
        const map = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 9, 9, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 9, 9, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 9, 9, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 9, 9, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 9, 9, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1],
            [1, 0, 0, 2, 9, 9, 9, 9, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2, 9, 9, 9, 9, 9, 9, 9, 2, 0, 0, 0, 1],
            [1, 0, 0, 2, 9, 9, 9, 9, 9, 2, 0, 0, 0, 0, 0, 0, 2, 9, 2, 2, 2, 2, 2, 9, 9, 2, 0, 0, 0, 1],
            [1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 9, 9, 9, 2, 9, 9, 2, 0, 0, 0, 1],
            [1, 0, 0, 2, 2, 9, 9, 9, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 9, 9, 2, 9, 9, 2, 0, 0, 0, 1],
            [1, 0, 0, 0, 2, 2, 9, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 9, 2, 2, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 9, 9, 9, 9, 9, 2, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 9, 9, 9, 9, 9, 9, 2, 0, 0, 1],
            [1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 9, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 9, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 9, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 9, 1, 1, 9, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 9, 1, 1, 9, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
        const drawMap = () => {
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[i].length; j++) {
                    if (map[i][j] === 1) {
                        let image = grassTopImg; //默认是上草墙
                        // 上(草墙)
                        if (map[i - 1]?.[j] === 1) {
                            image = grassBottomImg; //默认是垂直草墙
                            // 右(草墙)
                            if (map[i][j + 1] === 1) { //上、右都是草墙
                                image = grassBottomLeftImg;
                            }
                            // 下(草墙)
                            if (map[i + 1]?.[j] === 1) { //上、下都是草墙
                                image = grassVerticalImg;
                            }
                            // 左(草墙)
                            if (map[i][j - 1] === 1) { //上、左都是草墙
                                image = grassBottomRightImg;
                            }
                        }
                        // 右(草墙)
                        if (map[i][j + 1] === 1) {
                            image = grassLeftImg;
                            // 上(草墙)
                            if (map[i - 1]?.[j] === 1) {
                                image = grassBottomLeftImg;
                            }
                            // 下(草墙)
                            if (map[i + 1]?.[j] === 1) {
                                image = grassTopLeftImg;
                            }
                            // 左(草墙)
                            if (map[i][j - 1] === 1) {
                                image = grassHorizontalImg;
                            }
                        }
                        // 左(草墙)
                        if (map[i][j - 1] === 1) {
                            image = grassRightImg;
                            // 上(草墙)
                            if (map[i - 1]?.[j] === 1) {
                                image = grassBottomRightImg;
                            }
                            // 右(草墙)
                            if (map[i][j + 1] === 1) {
                                image = grassHorizontalImg;
                            }
                            // 下(草墙)
                            if (map[i + 1]?.[j] === 1) {
                                image = grassTopRightImg;
                            }
                        }
                        ctx.drawImage(image, j * width, i * height, width, height);
                    }
                    if ([2, 3, 4].includes(map[i][j])) {
                        // 绘制石头
                        if (map[i][j] === 2) {
                            ctx.drawImage(stone02Img, j * width, i * height, width, height);
                        }
                        if (map[i][j] === 3) {
                            ctx.drawImage(stone03Img, j * width, i * height, width, height);
                        }
                        if (map[i][j] === 4) {
                            ctx.drawImage(stone04Img, j * width, i * height, width, height);
                        }
                    }
                }
            }
        };

        const snake = {
            // 蛇身
            body: [[]],
            // 被移除的蛇尾（用来清除样式）
            last: [[]],
            // 方向（top right bottom left）
            direction: 'right',
            // 食物
            food: [10, 8],
            // 定时器
            timer: null,
            // 绘制蛇
            drawSnake() {
                // 清空上一次蛇身的位置
                for (let i = 0; i < this.last.length; i++) {
                    const item = this.last[i];
                    ctx.clearRect(item[1] * width, item[0] * height, width + 4, height + 4);
                }
                for (let i = 0; i < this.body.length; i++) {
                    const node = this.body[i];
                    const prev = this.body[i - 1] ?? [];
                    const next = this.body[i + 1] ?? [];
                    const isBody = i !== this.body.length - 1;
                    const item = this.body[i];
                    // 蛇头
                    if (i === 0) {
                        if (this.direction === 'right') { //向右
                            this.snakeHeadChange(item[1], item[0], 90);
                        } else if (this.direction === 'left') { //向左
                            this.snakeHeadChange(item[1], item[0], -90);
                        } else if (this.direction === 'top') { //向上
                            this.snakeHeadChange(item[1], item[0], 0);
                        } else if (this.direction === 'bottom') { //向下
                            this.snakeHeadChange(item[1], item[0], 180);
                        }
                        continue;
                    }
                    // 上（判定上方是不是蛇节点）
                    if (node[0] - 1 === prev[0] || node[0] - 1 === next[0]) {
                        if (isBody) {
                            // 右（判定右方是不是蛇节点）
                            if (node[1] + 1 === prev[1] || node[1] + 1 === next[1]) {
                                this.snakeBody2Change(item[1], item[0], 270) // 如果上方、右方是蛇节点
                            }
                            // 左（判定左方是不是蛇节点）
                            if (node[1] - 1 === prev[1] || node[1] - 1 === next[1]) {
                                this.snakeBody2Change(item[1], item[0], 180) // 如果上方、左方是蛇节点
                            } else { // 如果上方是蛇节点，默认采用 snake_body1 图案
                                this.snakeBody1Change(item[1], item[0], 0);
                            }
                        } else {
                            if ((node[0] + node[1]) % 2 === 0) { // 蛇尾，通过坐标的 (x + y) % 2 来达到摇晃尾巴的目的
                                this.snakeTail0Change(item[1], item[0], 0);
                            } else {
                                this.snakeTail1Change(item[1], item[0], 0);
                            }
                        }
                    }
                    // 右
                    if (node[1] + 1 === prev[1] || node[1] + 1 === next[1]) {
                        if (isBody) {
                            // 上
                            if (node[0] - 1 === prev[0] || node[0] - 1 === next[0]) {
                                this.snakeBody2Change(item[1], item[0], 270)
                            }
                            // 下
                            if (node[0] + 1 === prev[0] || node[0] + 1 === next[0]) {
                                this.snakeBody2Change(item[1], item[0], 0)
                            } else {
                                this.snakeBody1Change(item[1], item[0], 90);
                            }
                        } else {
                            if ((node[0] + node[1]) % 2 === 0) { // 蛇尾，通过坐标的 (x + y) % 2 来达到摇晃尾巴的目的
                                this.snakeTail0Change(item[1], item[0], 90);
                            } else {
                                this.snakeTail1Change(item[1], item[0], 90);
                            }
                        }
                    }
                    // 下
                    if (node[0] + 1 === prev[0] || node[0] + 1 === next[0]) {
                        if (isBody) {
                            // 右
                            if (node[1] + 1 === prev[1] || node[1] + 1 === next[1]) {
                                this.snakeBody2Change(item[1], item[0], 0)
                            }
                            // 左
                            if (node[1] - 1 === prev[1] || node[1] - 1 === next[1]) {
                                this.snakeBody2Change(item[1], item[0], 90)
                            } else {
                                this.snakeBody1Change(item[1], item[0], 0);
                            }
                        } else {
                            if ((node[0] + node[1]) % 2 === 0) { // 蛇尾，通过坐标的 (x + y) % 2 来达到摇晃尾巴的目的
                                this.snakeTail0Change(item[1], item[0], 180);
                            } else {
                                this.snakeTail1Change(item[1], item[0], 180);
                            }
                        }
                    }
                    // 左
                    if (node[1] - 1 === prev[1] || node[1] - 1 === next[1]) {
                        if (isBody) {
                            // 上
                            if (node[0] - 1 === prev[0] || node[0] - 1 === next[0]) {
                                this.snakeBody2Change(item[1], item[0], 180)
                            }
                            // 下
                            if (node[0] + 1 === prev[0] || node[0] + 1 === next[0]) {
                                this.snakeBody2Change(item[1], item[0], 90)
                            } else {
                                this.snakeBody1Change(item[1], item[0], 90);
                            }
                        } else {
                            if ((node[0] + node[1]) % 2 === 0) { // 蛇尾，通过坐标的 (x + y) % 2 来达到摇晃尾巴的目的
                                this.snakeTail0Change(item[1], item[0], 270);
                            } else {
                                this.snakeTail1Change(item[1], item[0], 270);
                            }
                        }
                    }

                }
            },
            // 绘制食物
            drawFood() {
                // 清除旧位置食物
                ctx.clearRect(this.food[1] * width, this.food[0] * height, width, height);

                // 生成新位置食物
                while (
                    // 地图中的障碍物
                map[this.food[0]][this.food[1]] !== 0 ||
                // 蛇自身
                this.body.find((item) => item[0] === this.food[0] && item[1] === this.food[1])
                    ) {
                    // 生成 (1-28, 1-28) 的坐标，因为 0 和 29 是墙
                    this.food = [Math.floor(Math.random() * 28 + 1), Math.floor(Math.random() * 28 + 1)]
                }

                ctx.drawImage(foodImg, this.food[1] * width, this.food[0] * height, width, height);
            },
            // 初始化
            init() {
                this.pause();
                score.value = 0;
                ctx = document.getElementById("canvas").getContext('2d');
                ctx.imageSmoothingEnabled = true; // 开启抗锯齿

                this.body = [[10, 4], [10, 3], [10, 2]];
                this.direction = 'right';
                drawMap();
                snake.drawSnake();
                snake.drawFood();
            },
            // 暂停游戏
            pause() {
                clearTimeout(this.timer);
                this.timer = null;
            },
            // 开始游戏
            start() {
                this.pause();
                this.timer = setTimeout(() => {
                    // 蛇头
                    const head = [];

                    switch (this.direction) {
                        case 'top': // 向上移动
                            head.push(this.body[0][0] - 1, this.body[0][1]);
                            break;
                        case 'right': // 向右移动
                            head.push(this.body[0][0], this.body[0][1] + 1);
                            break;
                        case 'bottom': // 向下移动
                            head.push(this.body[0][0] + 1, this.body[0][1]);
                            break;
                        case 'left': // 向左移动
                            head.push(this.body[0][0], this.body[0][1] - 1);
                            break;
                    }

                    this.last = this.body.slice();
                    // 判断是否撞墙
                    if (
                        // 地图中的障碍物
                        (map[head[0]][head[1]] !== 0 && map[head[0]][head[1]] !== 9) ||
                        // 蛇自身
                        this.body.find((item) => item[0] === head[0] && item[1] === head[1])
                    ) {
                        alert('Game Over! \n' + "你的得分：" + score.value);
                        return this.init();
                    }
                    // 将蛇头添加
                    this.body.unshift(head);

                    // 如果吃到食物，就重绘食物、不移除蛇尾
                    if (head[0] === this.food[0] && head[1] === this.food[1]) {
                        this.drawFood();
                        score.value++;
                    } else {
                        // 将蛇尾移除
                        this.body.pop();
                    }

                    // 重绘蛇
                    snake.drawSnake();

                    this.start();
                }, 150);
            },
            //蛇头转换
            snakeHeadChange(i, j, rotate) {
                // 保存当前绘图状态
                ctx.save();
                const myWidth = 22, myHeight = 22;
                // 计算旋转中心，假设图像中心为旋转中心
                const centerX = (i * width) + myWidth / 2;
                const centerY = (j * height) + myHeight / 2;
                // 平移到旋转中心
                ctx.translate(centerX, centerY);
                // 旋转操作，将角度转换为弧度
                ctx.rotate(rotate * Math.PI / 180);
                // 绘制图像，以旋转中心为原点绘制
                ctx.drawImage(snakeHeadImg, -myWidth / 2, -myHeight / 2, myWidth, myHeight);
                // 恢复之前保存的绘图状态
                ctx.restore();
            },
            //蛇身1转换
            snakeBody1Change(i, j, rotate) {
                // 保存当前绘图状态
                ctx.save();
                const myWidth = 20, myHeight = 20;
                // 计算旋转中心，假设图像中心为旋转中心
                const centerX = (i * width) + myWidth / 2;
                const centerY = (j * height) + myHeight / 2;
                // 平移到旋转中心
                ctx.translate(centerX, centerY);
                // 旋转操作，对应 CSS 的 transform: rotate(0deg) translate(-7px, -11px);
                ctx.rotate(rotate * Math.PI / 180);
                // 将角度转换为弧度，0 度保持不变
                // 绘制图像，控制图像的大小，对应 CSS 的 width: 13px; height: 21px;
                ctx.drawImage(snakeBody1Img, -myWidth / 2, -myHeight / 2, myWidth, myHeight);
                // 恢复之前保存的绘图状态
                ctx.restore();
            },
            //蛇身2转换
            snakeBody2Change(i, j, rotate) {
                // 保存当前绘图状态
                ctx.save();
                const myWidth = 20, myHeight = 20;
                // 计算旋转中心，假设图像中心为旋转中心
                const centerX = (i * width) + myWidth / 2;
                const centerY = (j * height) + myHeight / 2;
                // 平移到旋转中心
                ctx.translate(centerX, centerY);
                // 旋转操作，对应 CSS 的 transform: rotate(0deg) translate(-7px, -11px);
                ctx.rotate(rotate * Math.PI / 180);
                // 将角度转换为弧度，0 度保持不变
                // 绘制图像，控制图像的大小，对应 CSS 的 width: 13px; height: 21px;
                ctx.drawImage(snakeBody2Img, -myWidth / 2, -myHeight / 2, myWidth, myHeight);
                // 恢复之前保存的绘图状态
                ctx.restore();
            },
            //蛇尾0转换
            snakeTail0Change(i, j, rotate) {
                // 保存当前绘图状态
                ctx.save();
                const myWidth = 20, myHeight = 20;
                // 计算旋转中心，假设图像中心为旋转中心
                const centerX = (i * width) + myWidth / 2;
                const centerY = (j * height) + myHeight / 2;
                // 平移到旋转中心
                ctx.translate(centerX, centerY);
                // 旋转操作，将角度转换为弧度
                ctx.rotate(rotate * Math.PI / 180);
                // 绘制图像，以旋转中心为原点绘制
                ctx.drawImage(snakeTail0Img, -myWidth / 2, -myHeight / 2, myWidth, myHeight);
                // 恢复之前保存的绘图状态
                ctx.restore();
            },
            //蛇尾1转换
            snakeTail1Change(i, j, rotate) {
                // 保存当前绘图状态
                ctx.save();
                const myWidth = 20, myHeight = 20;
                // 计算旋转中心，假设图像中心为旋转中心
                const centerX = (i * width) + myWidth / 2;
                const centerY = (j * height) + myHeight / 2;
                // 平移到旋转中心
                ctx.translate(centerX, centerY);
                // 旋转操作，将角度转换为弧度
                ctx.rotate(rotate * Math.PI / 180);
                // 绘制图像，以旋转中心为原点绘制
                ctx.drawImage(snakeTail1Img, -myWidth / 2, -myHeight / 2, myWidth, myHeight);
                // 恢复之前保存的绘图状态
                ctx.restore();
            }
        };

        onMounted(() => {
            stone04Img.onload = function () {
                snake.init();
            };

            document.addEventListener('keydown', (ev) => {
                if (snake.timer === null) return;

                // 上
                if (ev.key === 'ArrowUp' && snake.direction !== 'bottom') {
                    snake.direction = 'top';
                }
                // 右
                else if (ev.key === 'ArrowRight' && snake.direction !== 'left') {
                    snake.direction = 'right';
                }
                // 下
                else if (ev.key === 'ArrowDown' && snake.direction !== 'top') {
                    snake.direction = 'bottom';
                }
                // 左
                else if (ev.key === 'ArrowLeft' && snake.direction !== 'right') {
                    snake.direction = 'left';
                }
            });
        });
        return {
            score,
            snake,
        };
    }
}).mount('#app');
