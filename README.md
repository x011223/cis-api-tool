# cis-api-tool

> 此项目来源于[yapi-to-typescript](https://github.com/fjc0k/yapi-to-typescript.git)，根据项目要求进行了代码改造。

## 与原版的区别

1. 解决了项目TS报错，支持 TS 4.9.5
2. 移除了 `vtils` 、`haoma`依赖
3. serviceType 支持 apifox 项目。有两种配置方式

    1. 可写死 `https://api.apifox.com` ，然后配置 `apifoxProjectId`
    2. 使用全路径，`https://api.apifox.com/v1/projects/6720131/export-openapi` ，此时可以不设置  `apifoxProjectId`，代码会从URL中自动提取。
4. 采用按模块生成 request 方法以及 interface 类型（文件夹名称为模块名称的拼音），随后在 `index.ts` 中导出，因此 `outputFilePath` 不再起作用，目前生成目录写死的 `src/service` ，后续改成配置。

## 许可

[MIT](https://github.com/x011223/cis-api-tool.git/blob/master/LICENSE) © [x011223](https://github.com/x011223)
