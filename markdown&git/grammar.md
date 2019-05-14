# **MarkDown语法学习**

# 一级标题
写一段文字
## 二级标题
### 三级标题
#### 四级标题

- 列表
- 列表1
- 列表2
1. 有序1
2. 有序2
3. 有序3

- 一级无序列表内容
   - 二级无序列表内容
   - 二级无序列表内容
   - 二级无序列表内容
1. 一级有序列表内容
   1. 二级有序列表内容
   2. 二级有序列表内容
   3. 二级有序列表内容
      1. 三级有序列表内容
      2. 三级有序列表内容
      3. 三级有序列表内容

### 表格

| 表头  | 表头  | 表头|
| ---  | :-:  |--: |
|默认居左| 我是居中| 我是居右 |
|left   |center | right  |


### 流程图
github实现的MarkDown语法叫GFM,GFM比普通的MarkDown语法增加了表格和完成列表等语法。
但是,GFM并没有实现流程图的MarkDown的语法。
 
```flow
st=>start:开始
op=>operation:输入x
op2=>operation:输入y
op3=>operation:计算z=x+y
e=>end:输出z

st->op->op2->op3
op3->e
```



- *斜体*
- **加粗**
- ***斜体加粗***
- ~~加删除线~~

>>引用
>>>引用1
>>>>引用2

```javascript
window.onload = function() {
  console.log("Fine");
}
```
[百度](http://baidu.com)

<a href="https://www.jianshu.com/" target="_blank">简书</a>
---
### 添加图片

![钢铁侠](https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1557797631&di=daa94a2921e883ce8fa4446b2164612c&src=http://img1.gtimg.com/hb/pics/hv1/248/180/2182/141930698.jpg "钢铁侠")

### git command

- git init(将本地文件夹初始化为一个仓库)
- git add .(也可以是其他的要添加的文件)
- git commit -a -m "xxx备注" 
- git remote add origin 地址(xxxx.git)关联远程仓库
- git push
- git pull 地址 (更新到本地)
- git fetch 地址 (结合merge一起用)
- git clone 地址
- git status (查看仓库状态)
- git diff fileName (查看具体修改了什么内容)
- git log
- git branch (查看分支)
- git branch <name> 创建分支
- git branch -d <name> 删除分支
- git checkout --fileName 撤销工作区的修改
- git reset HEAD fileName 撤销暂存区的修改
- git reset --hard HEAD^ 版本回退
- git checkout <name> 切换分支
- git checkout -b <name>创建+切换分支
- git merge <branchName> 将某一分支合并到当前分支
- git update (更新git)
- and so on

---
### svn
**TortoiseSVN**
- svn checkout 类似于 git clone
- svn commit 类似于 git add + git commit + git push
- svn update 类似于 git pull

