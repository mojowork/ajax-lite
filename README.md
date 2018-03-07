一个最小可用的ajax库，~~基于promiese~~，~~支持跨域~~
---
## 特点 
    .精巧
    .简单

## Usage

**HTTP Methods**

```js
var request = ajax({
  method: 'post',
  url: '/api/users',
  data: {
    user: 'john'
  },
  success: function (res) {
      console.log('成功 =>', res)
  },
  fail:function (err) {
      console.log('失败 =>', err)
  }
})
```
 