# AI 审查测试文件

这是一个用于测试自动化流程的测试文件。

## 测试内容
- [ ] AI 是否会自动审查并评论
- [ ] 人工合并后是否自动创建 main PR
- [ ] main PR 是否带唯一标识
- [ ] main PR 是否自动合并

## 测试代码
```javascript
function testFunction() {
  // 这里有一些"优化空间"让AI发现
  let x = 1;
  let y = 2;
  let z = x + y;
  console.log(z);
  return z;
}
