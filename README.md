# linxl-log

## 使用

### JavaScript

```js
const logger = require('linxl-log')
logger.info("This is info")
logger.warn("This is warning")
logger.error("This is error")
logger.debug("This is debug")
logger.prompt("This is prompt")
logger.verbose("This is verbose")
logger.silly("This is silly")
```

### TypeScript

```ts
import { info } from "linxl-log"
info('hello world')
```

### 禁用或启用颜色

```js
// 默认开启
logger.setColor(false) // 关闭
```
