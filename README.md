# 算法练习笔记
牛客网前端面试题 https://www.nowcoder.com/activity/oj  

- 2021.04.15
  - 获取url参数
    > + exec：全局匹配，while(r.exec())将正则表达式的结果循环输出
    > + RegExp.$1/2/3 返回正则表达式匹配结果

- 2021.04.17
  - dom节点查找
    > + parentNode 可返回某节点的父节点
    > + Node.contains() 返回一个布尔值，表示传入的节点是否为该节点的后代节点
  - 数组去重
    > + Set: ES6新出的数据结构
  - 斐波那契数列

---  

leetCode 算法入门 https://leetcode-cn.com/study-plan/algorithms/?progress=pg3u6dc
- 2021.11.08
  - 二分查找
    > 前提条件：
    > + 有序数组
    > + 无重复项

- 2021.11.09
  - 704 单链表
    > + 添加操作
    > + 删除操作
  - 141/142 环形链表
    > I: 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。  
    > II: 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
  - 160 相交链表
    > 链式结构中不存在环  
    > 使用双指针将两个列表各走一次，走过的长度相等。当相等时，就是相交的节点

- 2021.11.10
  - 977 双指针排序
    > 一头一尾比较插入
  - 189 旋转数组
    > 1. 全部翻转
    > 2. 分区翻转 

- 2021.11.11
  - 283 移动零
  - 167 两数之和：找两个数满足相加之和等于目标数
    > 前提条件：数组有序  
    > 二分查找 + 双指针 
  - 344 反转字符串
    > 双指针一把嗦
  - 557 反转字符串中的单词
    > 切开对单个单词翻转后合并
    > + Array.from()
    > + Array.join()
  - 876 链表的中间结点
    > 快慢指针一把嗦  
    > + 题目要求结点个数为偶数时： `white(fast && fast.next)`  
    > + 题目要求结点个数为偶数时： `white(fast.next && fast.next.next)` 
    > ![alt 链表的中间结点讲解](pics/876链表的中间结点.png)

- 2021.11.12  
  - 3 无重复字符的最长子串  
    >  移动窗口、双指针一把嗦  
  - 567 字符串的排列    
    > 一开始没有理解题目  
    > 题目要求s1是任意排序，我以为要求正序或倒序复合就行  
    > 此题的参考答案有点不理解，待复盘  

- 2021.11.13
  - 733 图像渲染  
    > 深度优先搜索递归实现  
    > 不走回头路  
  - 695 岛屿的最大面积  
    > 深度优先搜索递归一把嗦  
    > 已遍历的设为0，就不会重复遍历了  

- 2021.11.14  
  - 617 合并二叉树  
    > 递归时，需要明确返回的值  
  - 116 填充每个节点的下一个右侧节点指针
    > 使用层次遍历  
    > 重点在于弄清题目意思:
    > + “填充每个节点的next指针，初始状态下，所有 next 指针都被设置为 NULL。”
    > + 我们要做的工作就是遍历每个节点，然后修改每个节点的左测节点和右测节点的next
  - 642 01矩阵
    > 1. 如果(i,j) 的最近点在左上，那么该最近值一定可以通过从左上到右下的遍历得到
    > 2. 如果最近点在左下，假设为(i−a,j−b),a>0,b>0：  
      > + 左上到右下遍历时，我们可以得到从(i−a,i−b) 到 (i,i−b) 这个线段所有点的最近值
      > + 右下到左上遍历时，我们可以得到从 (i,i−b) 到(i,j) 这个线段所有点的最近值
    > 3. 如果最近点在右下，最近值可以从右下到左上的遍历得到
    > 4. 如果最近点在右上，同 2
    > 因此，我们可以通过两次遍历即可得到所有答案。 
  - 994 腐烂的橘子
    > 类似病毒感染，BFS一把嗦
    > + 声明一个“坏橘子队列”`badQueue`，先对整个矩阵进行遍历，记录好橘子的数量`goodNumber`，将坏橘子的坐标记录进队列里。
    > + 声明感染的次数 `time` = 0
    > + 当还有好橘子和坏橘子时执行`while`循环，`time++`
    > + 先记录当前坏橘子队列的长度`n`，`n`是上次新增感染的橘子数量
    > + 使用for循环`n`次，对每个感染的橘子上下左右进行查找，若有好橘子，则感染，并将新感染橘子的坐标记录进队列里，同时剩余好橘子数量`goodNumber--`
    > + 循环`n`次后，若坏橘子长度不为0，说明刚刚有新感染的橘子，此时如果`goodNumber`仍大于0则继续循环感染
    > + 当好橘子数量等于0或坏橘子队列为空时，结束循环
    > + 如果好橘子数量大于0，说明还有橘子没有被感染到，返回-1 。否则返回感染次数 `time`