# LeetCode刷题笔记
- [LeetCode刷题笔记](#leetcode刷题笔记)
  - [2021.3.6](#202136)
    - [169.多数元素（哈希表）](#169多数元素哈希表)
    - [232.用栈实现队列（栈）](#232用栈实现队列栈)
    - [354.俄罗斯套娃信封问题(动态规划)](#354俄罗斯套娃信封问题动态规划)
  - [2021.3.7](#202137)
    - [131.分割回文串(回溯+动态规划预处理)](#131分割回文串回溯动态规划预处理)
    - [136.只出现一次的数字(位运算)](#136只出现一次的数字位运算)
    - [240.搜索二维矩阵||(数组)](#240搜索二维矩阵数组)
    - [503.下一个更大元素||(单调栈+循环数组)](#503下一个更大元素单调栈循环数组)
    - [304.二维区域和检索 - 矩阵不可变(动态规划)](#304二维区域和检索---矩阵不可变动态规划)
    - [338.比特位计数(动态规划)](#338比特位计数动态规划)
  - [2021.3.8](#202138)
    - [132.分割回文串||(动态规划)](#132分割回文串动态规划)
  - [2021.3.9](#202139)
    - [1047.删除字符串中的所有相邻重复项(栈、字符串)](#1047删除字符串中的所有相邻重复项栈字符串)
  - [2021.3.10](#2021310)
    - [224.基本计算器(栈)](#224基本计算器栈)
  - [2021.3.11](#2021311)
    - [227.基本计算器||(栈)](#227基本计算器栈)
  - [2021.3.14](#2021314)
    - [705.设计哈希集合(c++容器)](#705设计哈希集合c容器)
    - [706.设计哈希映射(c++容器)](#706设计哈希映射c容器)
    - [331.验证二叉树的前序序列化(栈、计数)](#331验证二叉树的前序序列化栈计数)
  - [2021.3.15](#2021315)
    - [54.螺旋矩阵(数组)](#54螺旋矩阵数组)
  - [2021.3.16](#2021316)
    - [59.螺旋矩阵||(数组)](#59螺旋矩阵数组)
  - [2021.3.17](#2021317)
    - [115.不同的子序列(动态规划)](#115不同的子序列动态规划)
  - [2021.3.18](#2021318)
    - [92.反转链表||(链表)](#92反转链表链表)
  - [2021.3.19](#2021319)
    - [1603.设计停车系统(简单题)](#1603设计停车系统简单题)
    - [217.存在重复元素(哈希集合)](#217存在重复元素哈希集合)
  - [2021.3.20](#2021320)
    - [150.逆波兰表达式求值(栈)](#150逆波兰表达式求值栈)
  - [2021.3.21](#2021321)
    - [73.矩阵置零(矩阵、原地算法)](#73矩阵置零矩阵原地算法)
      - [原地算法](#原地算法)
  - [2021.3.22](#2021322)
    - [191.位1的个数(位运算)](#191位1的个数位运算)
  - [2021.3.23](#2021323)
    - [341.扁平化嵌套列表迭代器(深度优先搜索)](#341扁平化嵌套列表迭代器深度优先搜索)
  - [2021.3.24](#2021324)
    - [456.132模式(单调栈)](#456132模式单调栈)
  - [2021.3.25](#2021325)
    - [82.删除排序链表中的重复元素||(链表)](#82删除排序链表中的重复元素链表)
  - [2021.3.27](#2021327)
    - [83.删除排序链表中的重复元素(链表)](#83删除排序链表中的重复元素链表)
    - [61.旋转链表(链表)](#61旋转链表链表)
  - [2021.4.2](#202142)
    - [面试题17.21.直方图的水量(双指针)](#面试题1721直方图的水量双指针)
    - [1006.笨阶乘(数学)](#1006笨阶乘数学)
  - [2021.4.4](#202144)
    - [781.森林中的兔子(贪心)](#781森林中的兔子贪心)
  - [2021.4.5](#202145)
    - [88.合并两个有序数组(双指针)](#88合并两个有序数组双指针)
  - [2021.4.6](#202146)
    - [80.删除有序数组中的重复项||](#80删除有序数组中的重复项)
  - [2021.4.7](#202147)
    - [81.搜索旋转排序数组||](#81搜索旋转排序数组)
  - [2021.4.11](#2021411)
    - [264.丑数||(动态规划)](#264丑数动态规划)
  - [2021.7.9](#202179)
    - [5.最长回文子串(动态规划)](#5最长回文子串动态规划)
    - [17.10 主要元素(map、Boyer-Moore 投票算法)](#1710-主要元素mapboyer-moore-投票算法)
  - [2021.7.10](#2021710)
    - [21.合并两个有序链表(迭代法)](#21合并两个有序链表迭代法)
    - [22.括号生成(回溯法)](#22括号生成回溯法)
  - [2021.7.12](#2021712)
    - [275.H指数Ⅱ(2分法)](#275h指数ⅱ2分法)
  - [2021.8.2](#202182)
    - [94.二叉树的中序遍历(递归、Morris)](#94二叉树的中序遍历递归morris)
    - [95.不同的二叉搜索树Ⅱ(回溯)](#95不同的二叉搜索树ⅱ回溯)
    - [104.二叉树的最大深度(dfs)](#104二叉树的最大深度dfs)
    - [671.二叉树中第二小的节点(dfs)](#671二叉树中第二小的节点dfs)
    - [1337.矩阵中战斗力最弱的K行(纵向遍历)](#1337矩阵中战斗力最弱的k行纵向遍历)
  - [2021.8.6](#202186)
    - [27.移除元素](#27移除元素)
    - [31.下一个序列](#31下一个序列)
    - [847.访问所有节点的最短路径](#847访问所有节点的最短路径)
  - [8.10](#810)
    - [413.等差数列划分](#413等差数列划分)
  - [8.12](#812)
    - [53.最大子序和](#53最大子序和)
    - [516.最长回文子序列](#516最长回文子序列)
  - [8.13](#813)
    - [143.重排链表](#143重排链表)
  - [8.15](#815)
    - [576.出界的路径数](#576出界的路径数)
  - [8.18](#818)
    - [剑指offer09.用两个栈实现队列](#剑指offer09用两个栈实现队列)
    - [剑指offer30.包含min函数的栈](#剑指offer30包含min函数的栈)
  - [8.19](#819)
    - [345.反转字符串中的元音字母](#345反转字符串中的元音字母)
    - [剑指offer06.从尾到头打印链表](#剑指offer06从尾到头打印链表)
    - [剑指offer24.反转链表](#剑指offer24反转链表)
  - [8.20](#820)
    - [541.反转字符串2](#541反转字符串2)
    - [剑指offer05.替换空格](#剑指offer05替换空格)
    - [剑指offer35.复杂链表的复制](#剑指offer35复杂链表的复制)
    - [剑指offer58-二.左旋转字符串](#剑指offer58-二左旋转字符串)
  - [8.21](#821)
    - [443.压缩字符串](#443压缩字符串)
  - [8.22](#822)
    - [789.逃脱阻碍者](#789逃脱阻碍者)
    - [剑指offer03.数组中重复的数字](#剑指offer03数组中重复的数字)
    - [剑指offer04.二维数组中的查找](#剑指offer04二维数组中的查找)
    - [剑指offer11.旋转数组的最小数字](#剑指offer11旋转数组的最小数字)
    - [剑指offer53-I.在排序数组中查找数字I](#剑指offer53-i在排序数组中查找数字i)
    - [剑指offer53-Ⅱ.0~n-1中缺失的数字](#剑指offer53-ⅱ0n-1中缺失的数字)
## 2021.3.6
### 169.多数元素（哈希表）
[多数元素](https://leetcode-cn.com/problems/majority-element/)

```c++
#include<iostream>
#include<vector>
#include<map>
#include<cstdlib>
#include<ctime>
using namespace std;
//1.map存储每个数组元素的出现次数 
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        if(nums.size()==1)return nums[0];
        map <int,int> myMap;
        for(int i=0;i<nums.size();i++)
        {
            map<int, int>::iterator iter=myMap.find(nums[i]);
            if(iter!=myMap.end())
            {
                if((++iter->second)>(nums.size()/2))
                {
                    return iter->first;
                }
                
            }
            else
            {
                myMap.insert(pair<int,int>(nums[i],1));
            }
        }
        return 0;
    }
};
//2.随机法
//随机一个下标 遍历获得该元素出现次数 大于n/2即为众数
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unsigned seed;
        seed=time(0);
        srand(seed);
        while(true)
        {
            int index=rand()%nums.size();
            int cnt=0;
            for(int i=0;i<nums.size();i++)
            {
                if(nums[index]==nums[i])
                {
                    cnt++;
                }
                if(cnt>(nums.size()/2))
                {
                    return nums[index];
                }
            }
        }
    }
};
//3.分治法
//数组的众数也一定是对半分子数组的众数
//4.Boyer-Moore 投票算法
//因为超过2/n个的数，所以多数为A 其他数为B。
// 公式如下就满足题意 A - B > 1
// 所以遍历数组，如果是A就count++,如果是B就count--。
// 如果count为0，就说明不是多数就将当前的值设置成多数，并重新去count++。
// 这样遍历完成后的数一定是多数。


```

### 232.用栈实现队列（栈）
[用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

```c++
#include<iostream>
#include<vector>
#include <algorithm>
#include<stack>
using namespace std;
//双栈 一个作push操作 一个作pop peek操作
class MyQueue {
    private:
    stack<int> inStack,outStack;
    //进栈元素反转进入出栈
    void inToOut()
    {
        while(!inStack.empty())
        {
            outStack.push(inStack.top());
            inStack.pop();
        }
    }
public:
    /** Initialize your data structure here. */
    MyQueue() {

    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        inStack.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        if(outStack.empty())
        {
            inToOut();
        }
        int num=outStack.top();
        outStack.pop();
        return num;
    }
    
    /** Get the front element. */
    int peek() {
        if(outStack.empty())
        {
            inToOut();
        }
        return outStack.top();
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        return inStack.empty() && outStack.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
```

### 354.俄罗斯套娃信封问题(动态规划)
[俄罗斯套娃信封问题](https://leetcode-cn.com/problems/russian-doll-envelopes/)

```c++
#include<iostream>
#include<vector>
#include <algorithm>
using namespace std;
//动态规划 时On2 空On
class Solution {
public:
    int maxEnvelopes(vector<vector<int> >& envelopes) {
        //高位关键字优先升序排序
        //低位关键字降序排列（为了通过求最长严格递增子序列的长度得出答案）
        if(envelopes.empty())return 0;
        int len=envelopes.size();
        vector<int> ans(len,1);
        sort(envelopes.begin(), envelopes.end(), [](const auto& e1, const auto& e2) {
            return e1[0] < e2[0] || (e1[0] == e2[0] && e1[1] > e2[1]);
        });
        for(int i=1;i<len;i++)
        {
            for(int j=0;j<i;j++)
            {
                if(envelopes[j][1]<envelopes[i][1])
                {
                    ans[i]=max(ans[i],ans[j]+1);
                }
            }
        }
        return *max_element(ans.begin(), ans.end());
    }
};

```

## 2021.3.7
### 131.分割回文串(回溯+动态规划预处理)
[分割回文串](https://leetcode-cn.com/problems/palindrome-partitioning/)

```c++
//131.分割回文串
//2021.3.7
//回溯+动态规划预处理
class Solution {
public:
    vector<vector<string>> res;
    vector<string> ans;
    vector<vector<int>> pre;
    int n;
    void dfs(const string& str,int i)
    {
        //一种分割方案完成
        if(i==n)
        {
            res.push_back(ans);
        }
        else
        {
            //找寻从当前下标开始之后的所有分割可能
            for(int j=i;j<str.size();j++)
            {
                //下标i~j为回文串
                if(pre[i][j])
                {
                    ans.push_back(str.substr(i,j-i+1));
                    //找寻这次分割后的后续分割方案
                    dfs(str,j+1);
                    //回溯时将ans容器中的该分割方案移除
                    ans.pop_back();
                }
            }
        }
    }
    vector<vector<string>> partition(string s) {
        n=s.size();
        pre.assign(n,vector<int>(n,true));
        for(int i=n-1;i>=0;i--)
        {
            //j初始值设为i+1是为了直接跳过单个字符的判断 默认符合回文
            for(int j=i+1;j<n;j++)
            {
                pre[i][j]=((s[i]==s[j])&&pre[i+1][j-1]);
            }
        }
        dfs(s,0);
        return res;
    }
};
```

### 136.只出现一次的数字(位运算)
[只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

```c++
//136.只出现一次的数字
//异或运算
// 异或运算有以下三个性质。

// 任何数和 00 做异或运算，结果仍然是原来的数，即a⊕0=a。
// 任何数和其自身做异或运算，结果是 0，即 a⊕a=0。
// 异或运算满足交换律和结合律，即 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b
// 所以数组所有元素相异或即为答案
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans=0;
        for(int i=0;i<nums.size();i++)
        {
            ans^=nums[i];
        }
        return ans;
    }
};
```

### 240.搜索二维矩阵||(数组)
[搜索二维矩阵||](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)

```c++
//240.搜索二维矩阵||
//2021.3.6
//由于矩阵元素 向右 向下递增
//那么以矩阵左下角为起点 若target>cur 向右遍历 若target<cur 向上遍历
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int row=matrix.size()-1;
        int col=0;
        while(row>=0 && col<matrix[0].size())
        {
            if(matrix[row][col]==target)return true;
            else if(matrix[row][col]>target)row--;
            else col++;
        }
        return false;
    }
};
```

### 503.下一个更大元素||(单调栈+循环数组)
[下一个更大元素||](https://leetcode-cn.com/problems/next-greater-element-ii/)

```c++
//503.下一个更大元素||
//2021.3.6
//1.暴力法 On2 会超时 n个数 每个数遍历n次 n*n
// class Solution {
// public:
//     vector<int> nextGreaterElements(vector<int>& nums) {
//         vector<int> ans;
//         if(nums.size()==0 || nums.size()==1)
//         {
//             ans.push_back(-1);
//             return ans;
//         }
//         for(int i=0;i<nums.size();i++)
//         {
//             int next=i+1;
//             while((next%nums.size())!=i)
//             {
//                 if(nums[next%nums.size()]>nums[i])
//                 {
//                     ans.push_back(nums[next%nums.size()]);
//                     break;
//                 }
//                 next++;
//             }
//             if((next%nums.size())==i)
//             {
//                 ans.push_back(-1);
//             }
//         }
//         return ans;
//     }
// };
//2.单调栈+循环数组 On 每个数最多遍历到两次 最多进栈两次 最多出栈两次
//2 2 4 2 2 后面两个2就需再循环一次数组找到较大值
//遍历数组 将栈中索引指向元素小于遍历到的元素 就弹出 并在答案vector对应索引设置该值
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        vector<int> ans(nums.size(),-1);
        stack<int> myStack;
        if(nums.size()==0 || nums.size()==1)
        {
            return ans;
        }
        for(int i=0;i<(2*nums.size());i++)
        {
            
            while(!myStack.empty() && (nums[myStack.top()]<nums[i%nums.size()]))
            {
                ans.at(myStack.top())=nums[i%nums.size()];
                myStack.pop();
            }
            
           
            myStack.push(i%nums.size());
        }
        return ans;
    }
};
```

### 304.二维区域和检索 - 矩阵不可变(动态规划)
[二维区域和检索 - 矩阵不可变](https://leetcode-cn.com/problems/range-sum-query-2d-immutable/)

```c++
//304.二维区域和检索 - 矩阵不可变
//一维前缀和 时间复杂度 n
// class NumMatrix {
// public:
//     vector<vector<int> > sums;
//     NumMatrix(vector<vector<int> >& matrix) {
//         int row=matrix.size();
//         if(row>0)
//         {
//             int col=matrix[0].size();
//             sums.resize(row,vector<int>(col+1)); 
//             for(int i=0;i<row;i++)
//             {
//                 for(int j=0;j<col;j++)
//                 {
//                     sums[i][j+1]=sums[i][j]+matrix[i][j];
//                 }
//             }
//         }
//     }
    
//     int sumRegion(int row1, int col1, int row2, int col2) {
//         int sum=0;
//         if(row1>=0 && col1>=0)
//         {
//             for(int i=row1;i<=row2;i++)
//             {
//                 sum+=(sums[i][col2+1]-sums[i][col1]);
//             }
//         }
//         return sum;
//     }
// };
//二维前缀和 时间复杂度 1
class NumMatrix {
public:
    vector<vector<int> > sums;
    NumMatrix(vector<vector<int> >& matrix) {
        int row=matrix.size();
        if(row>0)
        {
            int col=matrix[0].size();
            if(col>0)
            {
                sums.resize(row+1,vector<int>(col+1));
                for(int i=0;i<row;i++)
                {
                    for(int j=0;j<col;j++)
                    {
                        sums[i+1][j+1]=sums[i][j+1]+sums[i+1][j]-sums[i][j]+matrix[i][j];
                    }
                }
            }
        }
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        return sums[row2+1][col2+1]-sums[row2+1][col1]-sums[row1][col2+1]+sums[row1][col1];
    }
};
/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * int param_1 = obj->sumRegion(row1,col1,row2,col2);
 */
```

### 338.比特位计数(动态规划)
[比特位计数](https://leetcode-cn.com/problems/counting-bits/)

```c++
//338.比特位计数
//利用库函数 直接求
// class Solution {
// public:
//     vector<int> countBits(int num) {
//         vector<int> ans;
//         for(int i=0;i<=num;i++)
//         {
//             int cnt=__builtin_popcount(i);
           
//             ans.push_back(cnt);
//         }
//         return ans;
//     }
    
// };
//动态规划
//最高有效位 状态转移方程 ans[i]=ans[i-highBit]+1
class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> ans(num+1);
        ans[0]=0;
        int highBit=0;
        for(int i=1;i<=num;i++)
        {
            //若是只有最高位为1 100 和 011 相与必为0
            if((i&(i-1))==0)
            {
                highBit=i;
                ans[i]=1;
            }
            //若不是 比如 111（7） 111-100（最高有效位）=011的1的个数+1
            else
            {
                ans[i]=ans[i-highBit]+1;
            }
        }
        return ans;
    }
};
```

## 2021.3.8
### 132.分割回文串||(动态规划)
[分割回文串||](https://leetcode-cn.com/problems/palindrome-partitioning-ii/solution/fen-ge-hui-wen-chuan-ii-by-leetcode-solu-norx/)

```c++
//132.分割回文串||
//2021.3.8
//1.dfs会栈溢出 递归太多
// class Solution {
// public:
//     vector<vector<int>> pre;
//     int n;
//     int cnt=0;
//     int ans=INT_LEAST32_MAX;
//     void dfs(const string& s,int i)
//     {
//         if(i==n)
//         {
//             ans=min(cnt,ans);
//             return;
//         }
//         for(int j=n-1;j>=0;j--)
//         {
//             if(pre[i][j])
//             {
//                 cnt++;
//                 dfs(s,j+1);
//                 cnt--;
//             }
//         }
        
        
//     }
//     int minCut(string s) {
//         n=s.size();
//         if(n==1)return 0;
//         pre.assign(n,vector<int>(n,true));
//         for(int i=n-1;i>=0;i--)
//         {
//             for(int j=i+1;j<n;j++)
//             {
//                 pre[i][j]=(s[i]==s[j]&&pre[i+1][j-1]);
//             }
//         }
//         dfs(s,0);
//         ans--;
//         return ans;
//     }
// };
//2.动态规划
//状态转移方程 
//我们枚举最后一个回文串的起始位置 j+1，保证 s[j+1..i] 是一个回文串，那么 f[i] 就可以从 f[j] 转移而来，附加 1 次额外的分割次数。
class Solution {
public:
    vector<vector<int>> pre;
    int n;
    
    int minCut(string s) {
        n=s.size();
        if(n==1)return 0;
        pre.assign(n,vector<int>(n,true));
        for(int i=n-1;i>=0;i--)
        {
            for(int j=i+1;j<n;j++)
            {
                pre[i][j]=(s[i]==s[j]&&pre[i+1][j-1]);
            }
        }
        vector<int> ans(n,INT_LEAST32_MAX);
        for(int i=0;i<n;i++)
        {
            if(pre[0][i])
            {
                ans[i]=0;
            }
            else
            {
                for(int j=0;j<i;j++)
                {
                    //若有最后一个回文子串
                    if(pre[j+1][i])
                    {
                        ans[i]=min(ans[i],ans[j]+1);
                    }
                }
            }
        }
        return ans[n-1];
    }
};
```

## 2021.3.9
### 1047.删除字符串中的所有相邻重复项(栈、字符串)
[删除字符串中的所有相邻重复项](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)

```c++
//1047.删除字符串中的所有相邻重复项
//2021.3.9
//1.用stack容器
// class Solution {
// public:
//     stack<int> st;
//     string removeDuplicates(string S) {
//         int i=0;
//         while(i<S.size())
//         {
//             if(!st.empty() && S[st.top()]==S[i])
//             {
//                 S.erase(st.top(),2);
//                 st.pop();
//                 i--;
//             }
//             else
//             {
//                 st.push(i);
//                 i++;
//             }
//         }
//         return S;
//     }
// };
//2.由于 std::string 类本身就提供了类似「入栈」和「出栈」的接口，因此我们直接将需要被返回的字符串作为栈即可。
class Solution {
public:
    string removeDuplicates(string S) {
        string stk;
        for (char ch : S) {
            if (!stk.empty() && stk.back() == ch) 
            {
                stk.pop_back();
            } 
            else 
            {
                stk.push_back(ch);
            }
        }
        return stk;
    }
};
```

## 2021.3.10
### 224.基本计算器(栈)
[基本计算器](https://leetcode-cn.com/problems/basic-calculator/)

```c++
//224.基本计算器
//2021.3.10
//括号展开+栈
class Solution {
public:
    int calculate(string s) {
        stack<int> ops;
        int ans=0;
        int sign=1;
        ops.push(1);
        int i=0;
        int n=s.size();
        while(i<n)
        {
            if (s[i] == ' ') {
                i++;
            } else if (s[i] == '+') {
                sign = ops.top();
                i++;
            } else if (s[i] == '-') {
                sign = -ops.top();
                i++;
            } else if (s[i] == '(') {
                ops.push(sign);
                i++;
            } else if (s[i] == ')') {
                ops.pop();
                i++;
            } else {
                long num = 0;
                //可能有连续几位数
                while (i < n && s[i] >= '0' && s[i] <= '9') {
                    num = num * 10 + s[i] - '0';
                    i++;
                }
                ans += sign * num;
            }
        }
        return ans;
    }
};
```

## 2021.3.11
### 227.基本计算器||(栈)
[基本计算器||](https://leetcode-cn.com/problems/basic-calculator-ii/)

```c++
//227.基本计算器||
//2021.3.11
//栈
//1+2-3*4
//前置符号+ 数字入栈 - 相反数入栈 */直接与栈顶元素计算
class Solution {
public:
    int calculate(string s) {
        vector<int> temp;
        char prechar='+';
        int num=0;
        int n=s.size();
        for(int i=0;i<n;i++)
        {
            if(isdigit(s[i]))
            {
                //连续数字处理
                num=num*10+int(s[i]-'0');
            }
            if(!isdigit(s[i]) && s[i]!=' ' || i==n-1)
            {
                switch (prechar)
                {
                    case '+':
                    temp.push_back(num);
                        break;
                    case '-':
                    temp.push_back(-num);
                        break;
                    case '*':
                    temp.back()*=num;
                        break;
                    case '/':
                    temp.back()/=num;
                        break;
                }
                prechar=s[i];
                num=0;
            }
        }
        return accumulate(temp.begin(),temp.end(),0);
        
    }
};
```

## 2021.3.14

### 705.设计哈希集合(c++容器)
[设计哈希集合](https://leetcode-cn.com/problems/design-hashset/)

```c++
//705.建立哈希集合
//2021.3.14
class MyHashSet {
public:
    vector<int> hashset;
    /** Initialize your data structure here. */
    MyHashSet() {

    }
    
    void add(int key) {
        if(!contains(key))
        {
            hashset.push_back(key);
        }

    }
    
    void remove(int key) {
        if(contains(key))
        {
            for(auto it=hashset.begin();it<hashset.end();it++)
            {
                if((*it)==key)
                {
                    hashset.erase(it);
                    return;
                }
            }
        }
        else 
        {
            return;
        }
        
        
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        for(auto it=hashset.begin();it<hashset.end();it++)
        {
            if((*it)==key)
            {
                return true;
            }
        }
        return false;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */
```
### 706.设计哈希映射(c++容器)
[设计哈希映射](https://leetcode-cn.com/problems/design-hashmap/)

```c++
//706.设计哈希映射
//2021.3.14
//1.vector<vector<int>>
class MyHashMap {
public:
    vector<vector<int>> hash;
    /** Initialize your data structure here. */
    MyHashMap() {

    }
    
    /** value will always be non-negative. */
    //二维数组遍历法
    void put(int key, int value) {
        for(int i=0;i<hash.size();i++)
        {
            if(hash[i][0]==key)
            {
                hash[i][1]=value;
                return;
            }
        }
        vector<int> temp;
        temp.push_back(key);
        temp.push_back(value);
        hash.push_back(temp);
        return;

    }
    
    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    //迭代器遍历法
    int get(int key) {
        for(auto it=hash.begin();it<hash.end();it++)
        {
            if((*it).front()==key)
            {
                return (*it).back();
            }
        }
        return -1;
    }
    
    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    void remove(int key) {
        for(int i=0;i<hash.size();i++)
        {
            if(hash[i][0]==key)
            {
                vector<vector<int>>::iterator it=hash.begin();
                it+=i;
                hash.erase(it);
                return;
            }
        }
        return;
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */


//2.vector<list<pair<int,int>>>
// class MyHashMap {
// private:
//     vector<list<pair<int, int>>> data;
//     static const int base = 769;
//     static int hash(int key) {
//         return key % base;
//     }
// public:
//     /** Initialize your data structure here. */
//     MyHashMap(): data(base) {}
    
//     /** value will always be non-negative. */
//     void put(int key, int value) {
//         int h = hash(key);
//         for (auto it = data[h].begin(); it != data[h].end(); it++) {
//             if ((*it).first == key) {
//                 (*it).second = value;
//                 return;
//             }
//         }
//         data[h].push_back(make_pair(key, value));
//     }
    
//     /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
//     int get(int key) {
//         int h = hash(key);
//         for (auto it = data[h].begin(); it != data[h].end(); it++) {
//             if ((*it).first == key) {
//                 return (*it).second;
//             }
//         }
//         return -1;
//     }
    
//     /** Removes the mapping of the specified value key if this map contains a mapping for the key */
//     void remove(int key) {
//         int h = hash(key);
//         for (auto it = data[h].begin(); it != data[h].end(); it++) {
//             if ((*it).first == key) {
//                 data[h].erase(it);
//                 return;
//             }
//         }
//     }
// };
```

### 331.验证二叉树的前序序列化(栈、计数)
[验证二叉树的前序序列化](https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/)

```c++
//331.验证二叉树的前序序列化
//2021.3.14
//1.用vector模拟stack 每个节点有两个槽位
//遇到空节点 将栈顶节点的槽位-1
//遇到正常节点 先将栈顶节点槽位-1 然后将自己push进栈 槽位为2
//栈顶节点槽位为0则出栈
//在字符串遍历完前 栈为空 或遍历完后 栈不为空 则为false

// class Solution {
// public:
//     bool isValidSerialization(string preorder) {
//         if(preorder.size()==0)return false;
//         int cnt=0;
//         for(char ch:preorder)
//         {
//             if(ch!=',')
//             {
//                 cnt++;
//             }
//         }
//         //偶数个节点是错误的
//         if(cnt%2==0)return false;
        
//         vector<pair<int,int>> v;
//         bool firstNum=true;
//         for(int i=0;i<preorder.size();i++)
//         {
//             if(v.empty() && i!=0)return false;
//             if(preorder.at(i)==',')continue;
//             else if(preorder.at(i)=='#')
//             {
//                 v.back().second--;
//                 while(v.back().second<=0)
//                 {
//                     v.pop_back();
//                 }
//             }
//             else
//             {
//                 int num=0;
//                 while(preorder.at(i)>='0' && preorder.at(i)<='9')
//                 {
//                     num=num*10+preorder.at(i)-'0';
//                     i++;
//                 }
//                 i--;
//                 if(!firstNum)
//                 {
//                     v.back().second--;
//                 }
//                 else
//                 {
//                     firstNum=false;
//                 }
                
//                 v.push_back(make_pair(num,2));
//             }
//         }
//         if(v.empty())return true;
//         else return false;
//     }
// };
//2.计数
//第一种方法可看出 实际上遇到 # 槽位-1 遇到数字槽位 +1 在遍历完前槽位<=0 则为false
//遍历完后槽位>0 也为false
//cnt初始值设为1 这样第一个是数字 cnt+1 刚好为2 
//第一个是空节点 cnt-1 刚好为0 如果后面还有字符 就判断false 没有字符正常跳出循环 cnt==0 为true
class Solution {
public:
    bool isValidSerialization(string preorder) {
        int cnt=1;
        int n=preorder.size();
        int i=0;
       
        while(i<n)
        {
            if(cnt<=0)return false;
            if(preorder.at(i)==',')
            {
                i++;
            }
            else if(preorder.at(i)=='#')
            {
                cnt--;
                i++;
            }
            else
            {
                while(i<n && (preorder.at(i)>='0' && preorder.at(i)<='9'))
                {
                    i++;
                }
                cnt++;
            }
                
        }
        return cnt==0;

    }
};
```

## 2021.3.15
### 54.螺旋矩阵(数组)
[螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)

```c++
//54.螺旋矩阵
//2021.3.15
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int row=matrix.size();
        int col=matrix[0].size();
        //检测矩阵元素是否被读取
        vector<vector<int> > hasOut;
        hasOut.assign(row,vector<int>(col,0));
        vector<int> ans;
        int cnt=1,i=0,j=0;
        //方向 0-右 1-下 2-左 3-上
        int dir=0;
        ans.push_back(matrix[0][0]);
        hasOut[0][0]=1;
        while(cnt<(row*col))
        {
            switch (dir)
            {
                //向右
            case 0:
            //检测是否超出边界 或者 该方向上下一个数已取出
                if((j+1)>=col || hasOut[i][j+1]==1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    ans.push_back(matrix[i][++j]);
                    hasOut[i][j]=1;
                    cnt++;
                }
                break;
                //向下
            case 1:
                if((i+1)>=row || hasOut[i+1][j]==1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    ans.push_back(matrix[++i][j]);
                    hasOut[i][j]=1;
                    cnt++;
                }
                break;
                //向左
            case 2:
                if((j-1)<0 || hasOut[i][j-1]==1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    ans.push_back(matrix[i][--j]);
                    hasOut[i][j]=1;
                    cnt++;
                }
                break;
                //向上
            case 3:
                if((i-1)<0 || hasOut[i-1][j]==1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    ans.push_back(matrix[--i][j]);
                    hasOut[i][j]=1;
                    cnt++;
                }
                break;
            }
        }
        return ans;
    }
};
```

## 2021.3.16
### 59.螺旋矩阵||(数组)
[螺旋矩阵||](https://leetcode-cn.com/problems/spiral-matrix-ii/)

```c++
//59.螺旋矩阵||
//2021.3.16

using namespace std;
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> ans;
        ans.assign(n,vector<int>(n,-1));
        int cnt=1,i=0,j=0;
        //方向 0-右 1-下 2-左 3-上
        int dir=0;
        ans[0][0]=1;
        while(cnt<(n*n))
        {
            switch (dir)
            {
                //向右
            case 0:
            //检测是否超出边界 或者 该方向上下一个数已赋值
                if((j+1)>=n || ans[i][j+1]!=-1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    cnt++;
                    ans[i][++j]=cnt;
                }
                break;
                //向下
            case 1:
                if((i+1)>=n || ans[i+1][j]!=-1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    cnt++;
                    ans[++i][j]=cnt;
                }
                break;
                //向左
            case 2:
                if((j-1)<0 || ans[i][j-1]!=-1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    cnt++;
                    ans[i][--j]=cnt;
                }
                break;
                //向上
            case 3:
                if((i-1)<0 || ans[i-1][j]!=-1)
                {
                    dir=(dir+1)%4;
                }
                else
                {
                    cnt++;
                    ans[--i][j]=cnt;
                }
                break;
            }
        }
        return ans;
    }
};
```

## 2021.3.17
### 115.不同的子序列(动态规划)
[不同的子序列](https://leetcode-cn.com/problems/distinct-subsequences/)

```c++
//115.不同的子序列
//2021.3.17
//1.深度优先搜索 时On2
// class Solution {
// public:
//     int ans=0;
//     void dfs(string s, string t)
//     {
//         for(int i=0;i<s.size();i++)
//         {
//             if(s[i]==t[0])
//             {
//                 //若已找到t的最后一个字符
//                 if(t.size()==1)
//                 {
//                     ans++;
//                 }
//                 else
//                 {
//                     dfs(s.substr(i+1),t.substr(1));
//                 }
//              }
//         }
//         return;
//     }
//     int numDistinct(string s, string t) {
//         dfs(s,t);
//         return ans;
//     }
// };
//2.动态规划
//从后往前遍历
//sch==tch dp[i][j]=dp[i+1][j+1]+dp[i+1][j]
//sch!=tch dp[i][j]=dp[i+1][j]
class Solution {
public:
    int numDistinct(string s, string t) {
        int m=s.size(),n=t.size();
        if(m<n)return 0;
        vector<vector<long>> dp(m+1,vector<long>(n+1));
        for(int i=0;i<=m;i++)
        {
            dp[i][n]=1;
        }
        for(int i=m-1;i>=0;i--)
        {
            char sch=s.at(i);
            for(int j=n-1;j>=0;j--)
            {
                char tch=t.at(j);
                if(sch == tch)
                {
                    dp[i][j]=dp[i+1][j+1]+dp[i+1][j];
                }
                else
                {
                    dp[i][j]=dp[i+1][j];
                }
            }
        }
        return dp[0][0];
    }
};
```

## 2021.3.18
### 92.反转链表||(链表)
[反转链表||](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

```c++
//92.反转链表||
//2021.3.18
//一次遍历 头插法
//具体看官网动画
//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        ListNode *dummyNode=new ListNode(-1);
        dummyNode->next=head;
        ListNode *pre=dummyNode;
        for(int i=0;i<left-1;i++)
        {
            pre=pre->next;
        }
        ListNode *cur=pre->next;
        ListNode *next;
        for(int i=0;i<right-left;i++)
        {
            next=cur->next;
            cur->next=next->next;
            next->next=pre->next;
            pre->next=next;
        }
        return dummyNode->next;
    }
};
```

## 2021.3.19
### 1603.设计停车系统(简单题)
[设计停车系统](https://leetcode-cn.com/problems/design-parking-system/)

```c++
//1603.设计停车系统
//2021.3.19
//太简单了 没必要多说
class ParkingSystem {
public:
    vector<int> park;
    ParkingSystem(int big, int medium, int small) {
        park.assign(4,0);
        park[1]=big;
        park[2]=medium;
        park[3]=small;
    }
    
    bool addCar(int carType) {
        if(park[carType]>0)
        {
            park[carType]--;
            return true;
        }
        else
        {
            return false;
        }
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem* obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj->addCar(carType);
 */
```

### 217.存在重复元素(哈希集合)
[存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

```c++
//217.存在重复元素
//2021.3.19
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> has;
        for(int i=0;i<nums.size();i++)
        {
            if(has.find(nums[i])!=has.end())return true;
            else has.insert(nums[i]);
        }        
        return false;
    }
};
```

## 2021.3.20
### 150.逆波兰表达式求值(栈)
[逆波兰表达式求值](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)

```c++
//150.逆波兰表达式求值
//2021.3.20
//1.栈 碰到数字入栈 碰到运算符 连续两个数字出栈 再将结果入栈
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> st;
        for(int i=0;i<tokens.size();i++)
        {
            if(tokens[i]=="+")
            {
                int num2=st.top();
                st.pop();
                int num1=st.top();
                st.pop();
                int ans=num1+num2;
                st.push(ans);
            }
            else if(tokens[i]=="-")
            {
                int num2=st.top();
                st.pop();
                int num1=st.top();
                st.pop();
                int ans=num1-num2;
                st.push(ans);
            }
            else if(tokens[i]=="*")
            {
                int num2=st.top();
                st.pop();
                int num1=st.top();
                st.pop();
                int ans=num1*num2;
                st.push(ans);
            }
            else if(tokens[i]=="/")
            {
                int num2=st.top();
                st.pop();
                int num1=st.top();
                st.pop();
                int ans=num1/num2;
                st.push(ans);
            }
            else
            {
                int num=0,sign=1;
                for(char ch:tokens[i])
                {
                    if(ch=='-')
                    {
                        sign=-1;
                    }
                    else
                    {
                        num=num*10+ch-'0';
                    }
                }
                num*=sign;
                st.push(num);
            }
        }
        return st.top();
    }
};
```

## 2021.3.21
### 73.矩阵置零(矩阵、原地算法)
#### 原地算法
  在计算机科学中，一个原地算法（in-place algorithm）是一种使用小的，固定数量的额外之空间来转换资料的算法。当算法执行时，输入的资料通常会被要输出的部份覆盖掉。不是原地算法有时候称为非原地（not-in-place）或不得其所（out-of-place）。  
[矩阵置零](https://leetcode-cn.com/problems/set-matrix-zeroes/)

```c++
//73.矩阵置零
//2021.3.21
//列置零时遇到本来就是0的就在那个位置开始行置零
//行置零时就列置零
//相当于递归 会栈溢出
// class Solution {
// public:
//     void setZeroes(vector<vector<int>>& matrix) {
//         for(int i=0;i<matrix.size();i++)
//         {
//             for(int j=0;j<matrix[0].size();j++)
//             {
//                 if(matrix[i][j]==0)
//                 {
//                     setColZeros(matrix,i,j);
//                     setRowZeros(matrix,i,j);
//                     return;
//                 }
//             }
//         }
//     }
//     void setColZeros(vector<vector<int>>& matrix ,int row,int col)
//     {
//         int rowDe=row;
//         int rowIn=row;
//         while(rowDe>=0 || rowIn<matrix.size())
//         {
//             if(matrix[rowDe][col]==0)
//             {
//                 setRowZeros(matrix,rowDe,col);
//             }
//             if(matrix[rowIn][col]==0)
//             {
//                 setRowZeros(matrix,rowIn,col);
//             }
//             matrix[rowDe][col] = 0;
//             matrix[rowIn][col] = 0;
//             rowDe--;
//             rowIn++;
//         }
//     }
//     void setRowZeros(vector<vector<int>>& matrix ,int row,int col)
//     {
//         int colDe=col;
//         int colIn=col;
//         while(colDe>=0 || colIn<matrix[0].size())
//         {
//             if(matrix[row][colDe]==0)
//             {
//                 setColZeros(matrix,row,colDe);
//             }
//             if(matrix[row][colIn]==0)
//             {
//                 setColZeros(matrix,row,colIn);
//             }
//             matrix[row][colDe] = 0;
//             matrix[row][colIn] = 0;
//             colDe--;
//             colIn++;
//         }
//     }
// };
//2.双标志位 时Omn 空O1
//第一行和第一列用来标记该行/列中有无0 至于第一行/列本身用两个标志
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int row0Flag=false,col0Flag=false;
        int row=matrix.size(),col=matrix[0].size();
        for(int i=0;i<col;i++)
        {
            if(matrix[0][i] == 0)
            {
                row0Flag=true;
                break;
            }
        }
        for(int i=0;i<row;i++)
        {
            if(matrix[i][0] == 0)
            {
                col0Flag=true;
                break;
            }
        }
        for(int i=1;i<row;i++)
        {
            for(int j=1;j<col;j++)
            {
                if(matrix[i][j] == 0)
                {
                    matrix[i][0]=matrix[0][j]=0;
                }
            }
        }
        for(int i=1;i<row;i++)
        {
            for(int j=1;j<col;j++)
            {
                if(matrix[i][0] == 0 || matrix[0][j] == 0)
                {
                    matrix[i][j]=0;
                }
            }
        }
        if(row0Flag)
        {
            for(int i=0;i<col;i++)
            {
                matrix[0][i]=0;
            }
        }
        if(col0Flag)
        {
            for(int i=0;i<row;i++)
            {
                matrix[i][0]=0;
            }
        }
    }
};
```

## 2021.3.22
### 191.位1的个数(位运算)
[位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)

```c++
//191.位1的个数
//2021.3.22
//让 n与 2^i2 进行与运算，当且仅当 n 的第 i 位为 1 时，运算结果不为 0
// class Solution {
// public:
//     int hammingWeight(uint32_t n) {
//         int cnt = 0;
//         for(int i=0;i<32;i++)
//         {
//             if(n & (1<<i))
//             {
//                 cnt++;
//             }
//         }
//         return cnt;
//     }
// };
//n & (n−1)，其预算结果恰为把 n 的二进制位中的最低位的 1 变为 0 之后的结果
//6&(6-1) = 4, 6 = (110), 4 = (100) 
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int cnt = 0;
        while(n)
        {
            n=n&(n-1);
            cnt++;
        }
        return cnt;
    }
};
```

## 2021.3.23
### 341.扁平化嵌套列表迭代器(深度优先搜索)
[扁平化嵌套列表迭代器](https://leetcode-cn.com/problems/flatten-nested-list-iterator/)

```c++
//341.扁平化嵌套列表迭代器
//2021.3.23
//深度优先搜索
// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
 class NestedInteger {
    public:
     // Return true if this NestedInteger holds a single integer, rather than a nested list.
      bool isInteger() const;
 
      // Return the single integer that this NestedInteger holds, if it holds a single integer
      // The result is undefined if this NestedInteger holds a nested list
      int getInteger() const;
 
      // Return the nested list that this NestedInteger holds, if it holds a nested list
      // The result is undefined if this NestedInteger holds a single integer
      const vector<NestedInteger> &getList() const;
  };
 

class NestedIterator {
public:
    vector<int> vals;
    vector<int>::iterator cur;
    void dfs(const vector<NestedInteger> &nestedList)
    {
        for(auto &nest:nestedList)
        {
            if(nest.isInteger())
            {
                vals.push_back(nest.getInteger());
            }
            else
            {
                dfs(nest.getList());
            }
        }
    }
    NestedIterator(vector<NestedInteger> &nestedList) {
        dfs(nestedList);
        cur = vals.begin();
    }
    
    int next() {
        return *cur++;
    }
    
    bool hasNext() {
        return cur != vals.end();
    }
};

/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i(nestedList);
 * while (i.hasNext()) cout << i.next();
 */
```

## 2021.3.24
### 456.132模式(单调栈)
[132模式](https://leetcode-cn.com/problems/132-pattern/)

```c++
//456.132模式
//2021.3.24
//双指针 左右定好后 找中间的数 若找不到 右指针移动 找到比之前的数小时 再动左指针
//会超时
// class Solution {
// public:
//     bool find132pattern(vector<int>& nums) {
//         vector<int>::iterator left,right;
//         left=nums.begin();
//         right=nums.end();
//         int lastRight = INT32_MAX;
//         while(left<right)
//         {
//             if(*right < lastRight)
//             {
//                 if(*left < *right)
//                 {
//                     lastRight = *right;
//                     for(auto middle = left+1;middle < right;middle++)
//                     {
//                         if((*middle > *left) && (*middle < *right))
//                         {
//                             return true;
//                         }
//                     }
//                     right--;
//                 }
//                 else
//                 {
//                     left++;
//                 }
//             }
//             else
//             {
//                 right--;
//             }
//         }
//         return false;
//     }
// };
//2.单调栈 栈底到栈顶严格单调递减
//132 {0,4,2,1} 中有042 041 021
class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        int n = nums.size();
        stack<int> temp;
        int max2=INT_MIN;
        temp.push(nums[n-1]);
        for(int i=n-2;i>=0;i--)
        {
            //检查该元素能否当1
            if(nums[i]<max2)return true;
            else
            {
                //找出最大能当2的元素 2越大 1越容易找到
                while(!temp.empty() && nums[i]>temp.top())
                {
                    if(temp.top()>max2)
                    {
                        max2=temp.top();
                    }
                    temp.pop();
                }
            }
            //如果当前元素没有大于当前最大2 它就没有做2的潜质
            if(nums[i]>max2)
            {
                temp.push(nums[i]);
            }
        }
        return false;
    }
};
```

## 2021.3.25
### 82.删除排序链表中的重复元素||(链表)
[https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/](删除排序链表中的重复元素||)

```c++
//82.删除排序链表中的重复元素||
//2021.3.25
// cur.next.val == cur.next.next.val 则 cur.next = cur.next.next
//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
 };

class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (!head) {
            return head;
        }
        ListNode* dummy = new ListNode(0, head);
        ListNode* cur = dummy;
        while (cur->next && cur->next->next) {
            if (cur->next->val == cur->next->next->val) {
                int x = cur->next->val;
                while (cur->next && cur->next->val == x) {
                    //把相同元素删去
                    cur->next = cur->next->next;
                }
            }
            else {
                cur = cur->next;
            }
        }
        return dummy->next;
    }
};
```

## 2021.3.27

### 83.删除排序链表中的重复元素(链表)
[删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

```c++
//83.删除排序链表中的重复元素
//2021.3.27
//一个前置指针 指向新出现的数 后面一个指针遍历 遇到相同 则跳过 遇到新数字 将pre赋值
//Definition for singly-linked list.
  struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
  };

class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(head == nullptr || head->next == nullptr)return head;
        ListNode* pre;
        ListNode* cur;
        pre = head;
        cur = head->next;
        while(cur != nullptr)
        {
            if(pre->val != cur->val)
            {
                pre = cur;
                cur = cur->next;
            }
            else
            {
                pre->next = cur->next;
                cur = cur->next;
            }
        }
        return head;
    }
};
```
### 61.旋转链表(链表)
[旋转链表](https://leetcode-cn.com/problems/rotate-list/)

```c++
//61.旋转链表
//2021.3.27
//旋转k次 实际就是 将k mod len(指链表长度) 个元素向右移动一次
//形成环形链表后 在 len - (k mod len) 处切断链表即可

//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if( k == 0 || head == nullptr || head->next == nullptr)
        {
            return head;
        }
        int len = 1;
        ListNode* cur;
        cur = head;
        while(cur->next != NULL)
        {
            cur = cur->next;
            len++;
        }
        //形成环形链表
        cur->next = head;
        cur = head;
        int cnt = len - k%len;
        //找到对应地方切断
        while(cnt > 1)
        {
            cur = cur->next;
            cnt--;
        }
        head = cur->next;
        cur->next = nullptr;
        return head;
    }
};
```

## 2021.4.2
### 面试题17.21.直方图的水量(双指针)
[面试题17.21.直方图的水量](https://leetcode-cn.com/problems/volume-of-histogram-lcci/)

```c++
//面试题17.21.直方图的水量
//2021.4.2
//双指针左指针维持左边的最大值 右指针维持右边 哪个最大值小 就是其-当前遍历值
// 时On 空O1
class Solution {
public:
    int trap(vector<int>& height) {
        if(height.size() <=2 )return 0;
        int ans = 0;
        int left = 0;
        int right = height.size() - 1;
        int leftMax = height[left];
        int rightMax = height[right];
        while(left < right)
        {
            if(leftMax < rightMax)
            {
                ans += (leftMax - height[left]);
                left++;
                leftMax = max(leftMax,height[left]);
            }
            else
            {
                ans += (rightMax - height[right]);
                right--;
                rightMax = max(rightMax,height[right]);
            }
        }
        return ans;
    }
};
```

### 1006.笨阶乘(数学)
[笨阶乘](https://leetcode-cn.com/problems/clumsy-factorial/)
```c++
//1006.笨阶乘
//2021.4.2
//观察数学规律 N对4取余 可判断最后一项运算符号
class Solution {
public:
    int clumsy(int N) {
        if(N == 1)return 1;
        else if(N == 2)return 2;
        else if(N == 3)return 6;
        else if(N == 4)return 7;
        if (N % 4 == 0) {
            return N + 1;
        } else if (N % 4 <= 2) {
            return N + 2;
        } else {
            return N - 1;
        }
    }
};
```

## 2021.4.4
### 781.森林中的兔子(贪心)
[森林中的兔子](https://leetcode-cn.com/problems/rabbits-in-forest/)

```c++
//781.森林中的兔子
//2021.4.4
//先按升序排序 说法相同的 尽可能归为同色兔子
//用canAppear 判别还能不能是同色兔子
//贪心 将每种说法相同的计算好加起来即可
class Solution {
public:
    int numRabbits(vector<int>& answers) {
        if(answers.size() == 0)return 0;
        int ans = 0;
        int pre = -1;
        int canAppear = -1;
        sort(answers.begin(),answers.end());
        for(int i = 0;i < answers.size();i++)
        {
            if(answers[i] != pre || canAppear <= 0)
            {
                ans += (1 + answers[i]);
                pre = answers[i];
                canAppear = answers[i];
            }
            else
            {
                canAppear--;
            }
        }
        return ans;
    }
};
```

## 2021.4.5
### 88.合并两个有序数组(双指针)
[合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

```c++
//88.合并两个有序数组
//2021.4.5
//双指针 构建一个中间数组 然后再赋值给nums1
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p1 = 0, p2 = 0;
        int sorted[m + n];
        int cur;
        while (p1 < m || p2 < n) {
            if (p1 == m) {
                cur = nums2[p2++];
            } else if (p2 == n) {
                cur = nums1[p1++];
            } else if (nums1[p1] < nums2[p2]) {
                cur = nums1[p1++];
            } else {
                cur = nums2[p2++];
            }
            sorted[p1 + p2 - 1] = cur;
        }
        for (int i = 0; i != m + n; ++i) {
            nums1[i] = sorted[i];
        }
    }
};
```

## 2021.4.6
### 80.删除有序数组中的重复项||
[删除有序数组中的重复项||](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)

```c++
//80.删除有序数组中的重复项||
//2021.4.6
//计数 第三次出现就删掉
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int cnt = 1;
        int len = nums.size();
        if(len <= 2)return len;
        for(int i=1;i<len;i++)
        {
            if(nums[i] == nums[i-1])
            {
                cnt++;
                // 第三次出现相同数字
                if(cnt>2)
                {
                    for(int j=i;j<len-1;j++)
                    {
                        nums[j] = nums[j+1];
                    }
                    i--;
                    len--;
                }
            }
            else
            {
                cnt = 1;
            }
        }
        return len;
    }
};
//双指针
// class Solution {
// public:
//     int removeDuplicates(vector<int>& nums) {
//         int n = nums.size();
//         if (n <= 2) {
//             return n;
//         }
//         int slow = 2, fast = 2;
//         while (fast < n) {
//             if (nums[slow - 2] != nums[fast]) {
//                 nums[slow] = nums[fast];
//                 ++slow;
//             }
//             ++fast;
//         }
//         return slow;
//     }
// };
```

## 2021.4.7
### 81.搜索旋转排序数组||
[搜索旋转排序数组||](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/submissions/)

```c++
//81.搜索旋转排序数组||
//2021.4.7
//二分法
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int len = nums.size();
        if(len == 1)return nums[0] == target;
        int left = 0, right = len - 1;
        int middle = (left + right)/2;
        while(left <= right)
        {
            middle = (left + right)/2;
            if(nums[middle] == target)return true;
            if(nums[middle] == nums[left] && nums[middle] == nums[right])
            {
                left++;
                right--;
            }
            else if(nums[left] <= nums[middle])
            {
                if(nums[middle] > target && target >= nums[left])
                {
                    right = middle - 1;
                }
                else
                {
                    left = middle + 1;
                }
            }
            else
            {
                if(nums[middle] < target && target <= nums[len-1])
                {
                    left = middle + 1; 
                }
                else
                {
                    right = middle - 1;
                }
            }
        }
        return false;
    }
};
```

## 2021.4.11
### 264.丑数||(动态规划)
[丑数||](https://leetcode-cn.com/problems/ugly-number-ii/)

```c++
//264.丑数||
//2021.4.11
//动态规划 后面的丑数由前面的丑数 *2 *3 或*5得到
//三个指针
class Solution {
public:
    int nthUglyNumber(int n) {
       vector<int> col(n+1);
       col[1] = 1;
       int p2 = 1, p3  = 1, p5 = 1;
       for(int i = 2;i <= n;i++)
       {
           int num2 = col[p2] * 2;
           int num3 = col[p3] * 3;
           int num5 = col[p5] * 5;
           col[i] = min(min(num2,num3), num5);
           if(col[i] == num2)p2++;
           if(col[i] == num3)p3++;
           if(col[i] == num5)p5++;
       }
       return col[n];
    }
};
```

## 2021.7.9
### 5.最长回文子串(动态规划)
[最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

```c++
class Solution {
public:
//1.动态规划
//s[i][j]=s[i+1][j-1] & s[i]==s[j]
//时间复杂度On2 空间复杂度On2
    // string longestPalindrome1(string s) {
    //     int len = s.size();
    //     if(len <= 1)return s;
    //     int beginIndex = 0;
    //     int maxLength = 1;
    //     vector<vector<int>> dp(len, vector<int>(len));
    //     for(int i = 0;i < len;i++)
    //     {
    //         dp[i][i] = true;
    //     }
    //     for (int L = 2;L <= len;L++)
    //     {
    //         for(int i = 0;i < len;i++)
    //         {
    //             int j = i + L - 1;
    //             //越界返回
    //             if(j >= len)break;
    //             if(s[i] == s[j])
    //             {
    //                 if((j - i + 1) < 3)
    //                 {
    //                     dp[i][j] = true;
    //                 }
    //                 else
    //                 {
    //                     dp[i][j] = dp[i+1][j-1];
    //                 }
    //             }
    //             else
    //             {
    //                 dp[i][j] = false;
    //             }
    //             if(dp[i][j] == true && (j - i + 1) > maxLength)
    //             {
    //                 maxLength = (j - i + 1);
    //                 beginIndex = i;
    //             }
    //         }
    //     }
    //     return s.substr(begin,maxLength);
    // }

    //2.中心扩散算法
    pair<int, int> fun(const string& s,int left, int right)
    {
        while(left>=0 && right<s.size() && s[left] == s[right])
        {
            left--;
            right++;
        }
        return {left+1, right-1};
    }
    string longestPalindrome2(string s) {
        int len = s.size();
        if(len <= 1)return s;
        int start = 0;
        int end = 0;
        for(int i=0;i<len;i++)
        {
            auto[left1, right1] = fun(s, i, i); //单个字符的中心点
            auto[left2, right2] = fun(s, i, i+1);//两个字符的中心点 若两个字符不同 则会返回1
            if((right1 - left1)>(end - start))
            {
                start = left1;
                end = right1;
            }
            if((right2 - left2)>(end - start))
            {
                start = left2;
                end = right2;
            }
        }
        return s.substr(start,end - start + 1);
        
    }
};
```

### 17.10 主要元素(map、Boyer-Moore 投票算法)
[主要元素](https://leetcode-cn.com/problems/find-majority-element-lcci/)

```c++
class Solution {
//1. map存储每个元素出现的次数
public:
    int majorityElement1(vector<int>& nums) {
        if (nums.size() <= 1) return nums[0];
        map <int, int> mymap;
        for (int i = 0; i < nums.size(); i++)
        {
            map<int, int>::iterator iter = mymap.find(nums[i]);
            // map中已有该元素
            if (iter != mymap.end())
            {
                if(++(iter->second) > nums.size() / 2)return iter->first;
            }
            else
            {
                // 插入该元素
                mymap.insert(pair<int,int>(nums[i], 1));
            }
        }
        return -1;
    }
    //2.Boyer-Moore 投票算法
    //维护一个候选者元素 遇到相同count++ 不同-- count=0时替换新候选者 若为主要元素 与不同元素抵消后一定还剩一个以上
    //时间复杂度On 空间复杂度O1
    int majorityElement2(vector<int>& nums) {
        if (nums.size() <= 1) return nums[0];
        int candidate = 0, count = 0;//候选者和其出现次数
        for (int i = 0; i < nums.size(); i++)
        {
            if(count == 0)
            {
                candidate = nums[i];
                count++;
            }
            else if(candidate == nums[i])
            {
                count++;
            }
            else
            {
                count--;
            }
        }
        count = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            if(candidate == nums[i])
            {
                count++;
            }
        }
        if(count > nums.size()/2)
        {
            return candidate;
        }
        return -1;
    }
};
```

## 2021.7.10
### 21.合并两个有序链表(迭代法)
[合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

```c++
class Solution {
public:
//迭代法
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode* ans = new ListNode(-1);
        ListNode* temp = ans;
        while(l1 != nullptr || l2 != nullptr)
        {
            if(l1 != nullptr && l2 != nullptr)
            {
                if(l1->val <= l2->val)
                {
                    temp -> next = l1;
                    l1 = l1 -> next;
                }
                else
                {
                    temp -> next = l2;
                    l2 = l2 -> next;
                }
            }
            else if(l1 != nullptr)
            {
                temp -> next = l1;
                l1 = l1 -> next;
            }
            else
            {
                temp -> next = l2;
                l2 = l2 -> next;
            }
            temp = temp -> next;
        }
        return ans -> next;
    }
    
};
```

### 22.括号生成(回溯法)
[括号生成](https://leetcode-cn.com/problems/generate-parentheses/)

```c++
class Solution {
public:
//回溯法
    void back2(vector<string>& result, string& cur, int open,int close,int n)
    {
        //完成一种组合
        if(cur.size() == (n*2))
        {
            result.push_back(cur);
            return;
        }
        //左括号数小于n
        if(open < n)
        {
            cur.push_back('(');
            back2(result, cur, open + 1, close, n);
            //回溯
            cur.pop_back();
        }
        //左括号数大于右括号数
        if(open > close)
        {
            cur.push_back(')');
            back2(result, cur, open, close + 1, n);
            cur.pop_back();
        }
    }

    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string cur;
        back2(result, cur, 0, 0, n);
        return result;
    }
};
```

## 2021.7.12
### 275.H指数Ⅱ(2分法)
[H指数Ⅱ](https://leetcode-cn.com/problems/h-index-ii/)
```c++
class Solution {
public:
//2分法
    int hIndex(vector<int>& citations) {
        int h = 0;
        int len = citations.size();
        int left = 0, right = len - 1;
        int mid = 0;
        while(left <= right)
        {
            mid = left + (right - left)/2;
            if(citations[mid] >= (len - mid))
            {
                right = mid - 1;
            }
            else
            {
                left = mid + 1;
            }
        } 
        return citations[mid];
    }
};
```

## 2021.8.2

### 94.二叉树的中序遍历(递归、Morris)
[二叉树的中序遍历]()
```c++
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
//1.递归 时On 空On
class Solution {
public:
    vector<int> ans;
    void midBianLi(TreeNode* node)
    {
        if(node)
        {
            if(node->left)
            {
                midBianLi(node->left);
            }
            ans.push_back(node->val);
            if(node->right)
            {
                midBianLi(node->right);
            }
        }
        return;
    }
    vector<int> inorderTraversal(TreeNode* root) {
        midBianLi(root);
        return ans;
    }
//2.Morris 中序遍历 时间On 空间O1
    vector<int> MorrisinorderTraversal(TreeNode* root) {
        while(root != nullptr)
        {
            //有左子树
            if(root->left)
            {
                TreeNode* predecessor = root->left;
                //找到最右节点 若检查到最右节点已将其右子树指向当前节点就退出循环
                while(predecessor->right != nullptr && predecessor->right != root)
                {
                    predecessor = predecessor->right;
                }
                //未赋值则赋值
                if(predecessor->right == nullptr)
                {
                    predecessor->right = root;
                    root = root->left;
                }
                //已赋值表示该左子树已全部遍历 将当前值插入再遍历右子树即可
                else
                {
                    ans.push_back(root->val);
                    //用完注意需要将predecessor->right重置 不然就有回路就不是树了
                    predecessor->right = nullptr;
                    root = root->right;
                }
            }
            //无左子树 则直接该值插入 再遍历右子树
            //注意！！！ 此处的右子树有两种情况
            //1.真右子树
            //2.走回之前的节点
            else
            {
                ans.push_back(root->val);
                root = root->right;
            }
            return ans;
        }
    }
};
```

### 95.不同的二叉搜索树Ⅱ(回溯)
[不同的二叉搜索树Ⅱ]()

```c++
    //回溯
    //emplace_back() 和 push_back() 的区别，就在于底层实现的机制不同。
    //push_back() 向容器尾部添加元素时，首先会创建这个元素，然后再将这个元素拷贝或者移动到容器中（如果是拷贝的话，事后会自行销毁先前创建的这个元素）；
    //而 emplace_back() 在实现时，则是直接在容器尾部创建这个元素，省去了拷贝或移动元素的过程。
    //Definition for a binary tree node.
    struct TreeNode {
        int val;
        TreeNode *left;
        TreeNode *right;
        TreeNode() : val(0), left(nullptr), right(nullptr) {}
        TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
        TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
    };

    class Solution {
    public:
        
        vector<TreeNode*> build(int start,int end)
        {
            if(start>end)return {nullptr};
            vector<TreeNode*> allTrees;
            for(int i=start;i<=end;i++)
            {
                //左子树集合
                vector<TreeNode*> leftTrees = build(start,i-1);
                //右子树集合
                vector<TreeNode*> rightTrees = build(i+1,end);
                for(auto& left:leftTrees)
                {
                    for(auto& right:rightTrees)
                    {
                        TreeNode* curTreeNode = new TreeNode(i,left,right);
                        allTrees.emplace_back(curTreeNode);
                    }
                }
            }
            return allTrees;
        }
        vector<TreeNode*> generateTrees(int n) {
            vector<TreeNode*> ans = build(1,n);
            return ans;
        }
    };
```

### 104.二叉树的最大深度(dfs)
[二叉树的最大深度]()
```c++
    //104.二叉树的最大深度
    //2021.7.30
    //递归 深度优先遍历
    struct TreeNode {
        int val;
        TreeNode *left;
        TreeNode *right;
        TreeNode() : val(0), left(nullptr), right(nullptr) {}
        TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
        TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
    };
    
    class Solution {
    public:
        int maxDep = 0;
        int cnt = 0;
        void dfs(TreeNode* node)
        {
            if(node)
            {
                cnt++;
                if((!node->left) && (!node->right))
                {
                    if(cnt>maxDep)
                    {
                        maxDep = cnt;
                    }
                return;
                }
                if(node->left)
                {
                    dfs(node->left);
                    cnt--;
                }
                if(node->right)
                {
                    dfs(node->right);
                    cnt--;
                }
            }
        }
        int maxDepth(TreeNode* root) {
            // write code here
            dfs(root);
            return maxDep;
        }
    };
```

### 671.二叉树中第二小的节点(dfs)
[二叉树中第二小的节点]()
```c++
//dfs深度优先遍历
//Definition for a binary tree node.
struct TreeNode {
     int data;
     TreeNode *left;
      TreeNode *right;
      TreeNode() : data(0), left(nullptr), right(nullptr) {}
      TreeNode(int x) : data(x), left(nullptr), right(nullptr) {}
      TreeNode(int x, TreeNode *left, TreeNode *right) : data(x), left(left), right(right) {}
  };

class Solution {
public:
    int findSecondMinimumValue(TreeNode* root) {
        int ans = -1;
        int rootValue = root->data;
        function<void(TreeNode*)> dfs = [&](TreeNode* node)
        {
            if(!node)
            {
                return;
            }
            if(ans != -1 && node->data >= ans)
            {
                return;
            }
            if(node->data > rootValue)
            {
                ans = node->data;
            }
            dfs(node->left);
            dfs(node->right);
        };
        dfs(root);
        return ans;
    }
};
```

### 1337.矩阵中战斗力最弱的K行(纵向遍历)
[矩阵中战斗力最弱的K行]()
```c++
//纵向遍历 时Omn
class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        vector<int> ans;
        int row = mat.size();
        if(row == 0)return ans;
        int col = mat[0].size();
        
        for(int i = 0;i < col;i++)
        {
            if(k<=0)break;
            for(int j = 0;j < row;j++)
            {
                if(k<=0)break;
                //将对应行数推入数组
                auto it = find(ans.cbegin(),ans.cend(),j);
                if(mat[j][i] == 0 && it == ans.cend())
                {
                    ans.push_back(j);
                    k--;
                }
            }
        }
        //全部都是1也要算入的情况
        if(k>0)
        {
            for(int i=0;i<row;i++)
            {
                if(k<=0)break;
                if(mat[i][col-1] == 1)
                {
                    ans.push_back(i);
                    k--;
                }
            }
        }
        return ans;
        
    }
};
```

## 2021.8.6

### 27.移除元素
[移除元素]()

```c++
//27.移除元素
//2021.8.6
//原地算法

class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int index = 0;
        int n = nums.size();
        for(int i=0;i<n;i++)
        {
            if(nums[i]!=val)
            {
                nums[index++] = nums[i];
            }
        }
        return index;
    }
};
```

### 31.下一个序列
[下一个序列]()

```c++
//1,3,2 下一个字典序为 2,1,3
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size();
        int flag = 0;
        for(int i =n-2;i>=0;i--)
        {   
            //从右往左找非递减序列
            if(nums[i]<nums[i+1])
            {
                for(int j=n-1;j>i;j--)
                {
                    //找最小的较大值
                    if(nums[j]>nums[i])
                    {
                        //交换即可
                        flag = 1;
                        int temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                        break;
                    }
                }
                sort(nums.begin()+i+1,nums.end());
                break;
            }
        }
        if(flag == 0)
        {
            sort(nums.begin(),nums.end());
        }
        return;
    }
};
```

### 847.访问所有节点的最短路径
[访问所有节点的最短路径]()

```c++
//状态压缩+广度优先搜索
//时On2*2n 空n*2n
class Solution {
public:
    int shortestPathLength(vector<vector<int>>& graph) {
        int n = graph.size();
        queue<tuple<int,int,int>> myQueue;
        vector<vector<int>> hasSeen(n, vector<int>(1<<n));
        for(int i=0;i<n;i++)
        {
            myQueue.emplace(i,1<<i,0);
            hasSeen[i][1<<i] = true;
        }
        int ans = 0;
        while(!myQueue.empty())
        {
            auto [index, flag, dis] = myQueue.front();
            myQueue.pop();
            if(flag == (1<<n) - 1)
            {
                ans = dis;
                break;
            }
            //搜索连通节点
            for(int v:graph[index])
            {
                //位或 |
                int newFlag = flag | (1<<v);
                if(!hasSeen[v][newFlag])
                {
                    myQueue.emplace(v,newFlag,dis+1);
                    hasSeen[v][newFlag] = true;
                }
            }
        }
        return ans;
    }
};
```
## 8.10
### 413.等差数列划分
[等差数列划分]()

```c++
//动态规划
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int ans = 0,len = 0;
        if(nums.size()<3)return 0;
        for(int i = 2;i<nums.size();i++)
        {
            //三个数差相同 不同则len=0
            (nums[i] - nums[i-1]) == (nums[i-1] - nums[i-2])?ans+=++len:len = 0;
        }
        return ans;
    }
};
```
## 8.12
### 53.最大子序和
[最大子序和]()

```c++
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int curMax = -100000,ans = -100000;
        if(nums.size()==1)return nums[0];
        for(int i=0;i<nums.size();i++)
        {
            curMax = nums[i]>(curMax+nums[i])?nums[i]:curMax+nums[i];
            ans = max(ans,curMax);
        }
        return ans;
    }
};
```

### 516.最长回文子序列
[最长回文子序列]
```c++
//动态规划 s[i]==s[j] dp[i][j]=dp[i+1][j-1]+2
//s[i]!=s[j] dp[i][j]=max(dp[i+1][j],dp[i][j-1])
class Solution {
public:
    int longestPalindromeSubseq(string s) {
        int len = s.size();
        vector<vector<int>> dp(len,vector<int>(len));
        for(int i=len - 1;i>=0;i--)
        {
            dp[i][i] = 1;
            for(int j=i + 1;j < len;j++)
            {
                if(s.at(i) == s.at(j))
                {
                    dp[i][j] = dp[i+1][j-1] + 2;
                }
                else
                {
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }
        return dp[0][len-1];
    }
};
```
## 8.13
### 143.重排链表
[重排链表]()
```c++
//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    void reorderList(ListNode* head) {
        vector<ListNode*> temp;
        ListNode* cur = head;
        while(cur!=nullptr)
        {
            temp.emplace_back(cur);
            cur = cur->next;
        }
        int l = 0,r = temp.size() - 1;
        while(l<r)
        {
            temp[l]->next = temp[r];
            l++;
            if(l==r)break;
            temp[r]->next = temp[l];
            r--;
        }
        temp[l]->next = nullptr;//关键 不然会形成环
        return;
    }
};
```

## 8.15
### 576.出界的路径数
[出界的路径数]()

```c++
//不能递归 递归一定栈溢出
//动态规划 dp[i][j][k] 表示移动i次后到达(j,k)的路径数
class Solution {
public: 
    static constexpr int MOD = 1'000'000'007;
    int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        vector<vector<int>> dir{{0,1},{1,0},{0,-1},{-1,0}};
        vector<vector<vector<int>>> dp(maxMove+1,vector<vector<int>>(m,vector<int>(n)));
        int outputs = 0;
        dp[0][startRow][startColumn] = 1;
        for(int i = 0;i < maxMove;i++)
        {
            for(int j = 0;j < m;j++)
            {
                for(int k = 0;k < n;k++)
                {
                    int count = dp[i][j][k];
                    if(count > 0)
                    {
                        for(auto &d:dir)
                        {
                            int j1 = j + d[0];
                            int k1 = k + d[1];
                            if(j1 >= 0 && j1 < m && k1 >= 0 && k1 < n)
                            {
                                dp[i+1][j1][k1] = (dp[i+1][j1][k1] + count) % MOD;
                            }
                            else
                            {
                                outputs = (outputs + count)%MOD;
                            }
                        }
                    }
                }
            }
        }
        return outputs;
        
    }
};
```

## 8.18
### 剑指offer09.用两个栈实现队列
[剑指offer09.用两个栈实现队列]()
```c++
class CQueue {
public:
    stack<int> inStack;
    stack<int> outStack;
    CQueue() {
        
    }
    
    void appendTail(int value) {
        inStack.push(value);
    }
    
    int deleteHead() {
        if(outStack.empty())
        {
            while(!inStack.empty())
            {
                int num = inStack.top();
                outStack.push(num);
                inStack.pop();
            }
        }
       
        if(outStack.empty())
        {
            return -1;
        }
        else
        {
            int num = outStack.top();
            outStack.pop();
            return num;
        }
    }
};
```

### 剑指offer30.包含min函数的栈
[剑指offer30.包含min函数的栈]()
```c++
class MinStack {
public:
    /** initialize your data structure here. */
    stack<int> myStack;
    stack<int> sup;
    MinStack() {
    
    }
    
    void push(int x) {
        myStack.push(x);
        if(!sup.empty())
        {
            int num = sup.top();
            if(x <= num)
            {
                sup.push(x);
            }
        }
        else
        {
            sup.push(x);
        }
    }
    
    void pop() {
        int num  = myStack.top();
        if(num == sup.top())sup.pop();
        myStack.pop();
    }
    
    int top() {
        return myStack.top();
    }
    
    int min() {
        return sup.top();
    }
};

```

## 8.19
### 345.反转字符串中的元音字母
[345.反转字符串中的元音字母]()
```c++
//双指针
class Solution {
public:
    unordered_set<char> mySet{'a','e','i','o','u','A','E','I','O','U'};
    string reverseVowels(string s) {
        int l = 0;
        int r = s.size() - 1;
        while(l<r)
        {
            char lc = s.at(l);
            char rc = s.at(r);
            if(mySet.find(lc) != mySet.end())
            {
                if(mySet.find(rc) != mySet.end())
                {
                    s[l] = rc;
                    s[r] = lc;
                    l++;
                    r--;
                }
                else
                {
                    r--;
                }
            }
            else
            {
                l++;
            }
        }
        return s;
    }
};
```

### 剑指offer06.从尾到头打印链表
[剑指offer06.从尾到头打印链表]()
```c++
//递归 也等同于用栈
//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    vector<int> ans;
    vector<int> reversePrint(ListNode* head) {
        if(head!=nullptr)
        {
            reversePutIn(head);
        }
        return ans;
    }
    void reversePutIn(ListNode* node)
    {
        if(node->next == nullptr)
        {
            ans.push_back(node->val);
            return;
        }
        else
        {
            reversePutIn(node->next);
            ans.push_back(node->val);
        }
    }
};
```

### 剑指offer24.反转链表
[剑指offer24.反转链表]()
```c++
//递归
//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
//递归
    ListNode* reverseList(ListNode* head) {
        if(!head || !head->next)
        {
            return head;
        }
        else
        {
            ListNode *newHead = reverseList(head->next);
            head->next->next = head;
            head->next = nullptr;
            return newHead;
        }
    }
//迭代
    ListNode* reverseList(ListNode* head) {
        ListNode* pre = nullptr;
        ListNode* cur = head;
        while(cur)
        {
            ListNode* next = cur->next;
            cur->next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
};
```
## 8.20
### 541.反转字符串2
[541.反转字符串2]()
```c++
class Solution {
public:
    string reverseStr(string s, int k) {
        int len = s.size();
        for(int i = 0;i < len;i+=2*k)
        {
            reverse(s.begin() + i, s.begin() + min(i+k,len));//剩余字符少于k个的情况
        }
        return s;
    }
};
```

### 剑指offer05.替换空格
[剑指offer05.替换空格]()
```c++
class Solution {
public:
    string replaceSpace(string s) {
        string ans;
        for(char ch:s)
        {
            if(ch == ' ')
            {
                ans.push_back('%');
                ans.push_back('2');
                ans.push_back('0');
            }
            else
            {
                ans.push_back(ch);
            }
        }
        return ans;
    }
};
```

### 剑指offer35.复杂链表的复制
[剑指offer35.复杂链表的复制]()
```c++
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
//递归
class Solution {
public:
    map<Node*,Node*> myMap;
    Node* copyRandomList(Node* head) {
        if(!head)return nullptr;
        if(!myMap.count(head))
        {
            //还未复制过该节点
            Node * newHead = new Node(head->val);
            myMap[head] = newHead;
            newHead->next = copyRandomList(head->next);
            newHead->random = copyRandomList(head->random);
        }
        return myMap[head];
    }
};
```

### 剑指offer58-二.左旋转字符串
[剑指offer58-二.左旋转字符串]()
```c++
//string类方法
class Solution {
public:
    string reverseLeftWords(string s, int n) {
        string temp = s.substr(0,n);
        s.erase(0,n);
        s.append(temp);
        return s;
    }
};
```

## 8.21
### 443.压缩字符串
[443.压缩字符串]()
```c++
//由于是原地算法 常量额外空间
class Solution {
public:
    int compress(vector<char>& chars) {
        if(chars.size()==1)return 1;
        int write = 0,read = 0,left = 0;
        for(read = 0;read < chars.size();read++)
        {
            if(read == chars.size()-1 || chars[read + 1] != chars[read]) 
            {
                chars[write++] = chars[read];
                int cnt = read - left + 1;
                int temp = write;
                if(cnt > 1)
                {
                    while(cnt)
                    {
                        chars[write++] = cnt%10 + '0';
                        cnt/=10;
                    }
                    //reverse函数 前闭后开 即不包括最后一个元素
                    reverse(&chars[temp],&chars[write]);
                }
                left = read + 1;
            }
        }
        chars.erase(chars.begin()+write,chars.end());
        return chars.size();
    }
};
```

## 8.22
### 789.逃脱阻碍者
[789.逃脱阻碍者]()
```c++
//数学 曼哈顿距离 |xt-x|+|yt-y|
class Solution {
public:
    bool escapeGhosts(vector<vector<int>>& ghosts, vector<int>& target) {
        int xt = target[0],yt = target[1];
        int myDistance = abs(xt) + abs(yt);
        for(int i = 0;i < ghosts.size();i++)
        {
            int gxt = abs(ghosts[i][0] - xt);
            int gyt = abs(ghosts[i][1] - yt);
            int gDistance = gxt + gyt;
            if(gDistance <= myDistance)return false;
        }
        return true;
    }
};
```

### 剑指offer03.数组中重复的数字
[剑指offer03.数组中重复的数字]()
```c++
class Solution {
public:
    int findRepeatNumber(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        for(int i=1;i<nums.size();i++)
        {
            if(nums[i] == nums[i-1])return nums[i];
        }
        return 0;
    }
};
```

### 剑指offer04.二维数组中的查找
[剑指offer04.二维数组中的查找]()
```c++
//从右下角开始查找
class Solution {
public:
    bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
        if(matrix.size() == 0)return false;
        int row = matrix.size(),col = matrix[0].size();
        for(int r = row - 1;r >= 0;r--)
        {
            for(int c = 0;c < col;c++)
            {
                if(target == matrix[r][c])return true;
                if(target < matrix[r][c])
                {
                    break;
                }
            }
        }
        return false;
    }
};
```

### 剑指offer11.旋转数组的最小数字
[剑指offer11.旋转数组的最小数字]()
```c++
//二分查找
class Solution {
public:
    int minArray(vector<int>& numbers) {
       int left = 0, right = numbers.size() - 1;
       while(left <= right)
       {
           int mid = left + (right-left)/2;
           if(numbers[mid] < numbers[right])
           {
               right = mid - 1
           }
           else if(numbers[mid] >  numbers[right])
           {
               left = mid + 1;
           }
           else
           {
               right = mid;
           }
       }
       return numbers[left];
    }
};
```

### 剑指offer53-I.在排序数组中查找数字I
[剑指offer53-I.在排序数组中查找数字I]()
```c++
class Solution {
public:
    int binarySearch(vector<int>& nums, int target, bool lower)
    {
        int left = 0,right = (int)nums.size()-1,ans = (int)nums.size();
        while(left <= right)
        {
            int mid = (left + right)/2;
            if(nums[mid] > target || (lower && nums[mid] >= target))
            {
                right = mid - 1;
                ans = mid;
            }
            else
            {
                left = mid + 1;
            }
        }
        return ans;
    }
    int search(vector<int>& nums, int target) {
        //普通查找On
        // int cnt = 0;
        // for(int i = 0;i < nums.size();i++)
        // {
        //     if(nums[i] > target)return cnt;
        //     if(nums[i] == target)
        //     {
        //         cnt++;
        //     }
        // }
        // return cnt;
        //二分查找Ologn
        if(nums.size() == 0)return 0;
        int left = binarySearch(nums,target,true);
        int right = binarySearch(nums,target,false) - 1;
        if(left <= right && left >= 0 && right < nums.size() && nums[left] == target && nums[right] == target)
        {
            return right - left + 1;
        }
        else
        {
            return 0;
        }
    }
};
```

### 剑指offer53-Ⅱ.0~n-1中缺失的数字
[剑指offer53-Ⅱ.0~n-1中缺失的数字]()
```c++
//二分法
class Solution {
public:
    int missingNumber(vector<int>& nums) {
       int left = 0,right = nums.size() - 1;
       while(left<=right)
       {
           int mid = (left+right)/2;
           if(nums[mid] == mid)
           {
               left = mid + 1;
           }
           else
           {
               right = mid - 1;
           }
       }
       return left;
    }
};
```

