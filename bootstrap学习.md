# Bootstrap
### 容器
1. 流体容器 (container-fluid) `width=auto`
2. 固定容器 (container)  
    槽宽(`grid-gutter-width`)=30px  

    |  类型   | 阈值 |  width|
    |  ----  | ----  | ---- |
    | lg 大屏PC | 大于等于1200  | 1170(1140+槽宽) |
    | md 中屏PC | 大于等于992 小于1200 | 970(940+槽宽) |
    | sm 平板 | 大于等于768 小于992 | 750(720+槽宽) |
    | xs 移动手机 | 小于768 | auto |  

### 栅格源码分析
1. 流体容器&固定容器 公共样式    
     ```css
        <!-- 左右外边距 -->
        margin-right: auto
        margin-left:auto
        <!-- 左右内边距 -->
        padding-left:15px
        padding-right:15px
     ```

2. 固定容器媒体查询(顺序不可变，需要从小到大查询)
     
     ```css
     <!-- 大于等于768px -->
     @media(min-width:@screen-sm-min){
         width:@container-sm;
     } 
     <!-- 大于等于992px -->
     @media(min-width:@screen-md-min){
         width:@container-md;
     } 
     <!-- 大于等于1200px -->
     @media(min-width:@screen-lg-min){
         width:@container-lg;
     } 
     ```