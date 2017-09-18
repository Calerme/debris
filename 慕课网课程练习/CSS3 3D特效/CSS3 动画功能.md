# CSS3 动画功能

* transition: 创建从一个状态平滑过渡到另一个状态的动画
* animation: 通过关键帧技术创建复杂的动画

## transition

```css
transition: <过渡动画属性名> <过渡时间> <过渡模式>;
transition-property: width;
transition-duration: 2s;
transition-timing-function: ease-in-out;
```

**多个属性创建多个动画**

方法一：

```css
transition: width 1s, height 2s, background-color .5s;
```

方法二：

```css
transition: width 1s;
transition: height 2s;
transition: background-color .5s;
```

### transition-timing-function 参数

* ease: 缓慢地开始，缓慢地结束（默认值）
* ease-in: 缓慢地开始
* ease-out: 缓慢地结束
* ease-in-out: 缓慢地开始，缓慢地结束（与 ease 稍有区别）
* linear: 匀速