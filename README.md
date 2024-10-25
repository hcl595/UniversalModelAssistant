<div align="center"><img src="res/IntelliFusion_icon_Sketch_20230923f_small.png" width="7%"></div>
<div align="center">IntlliFusion</div>

<div align="center">

[![Fork me on Gitee](https://gitee.com/argonserver/IntelliFusion/widgets/widget_6.svg?color=00d4d4)](https://gitee.com/argonserver/IntelliFusion)</div>

<div align="center">

[![star](https://gitee.com/argonserver/IntelliFusion/badge/star.svg?theme=gray)](https://gitee.com/argonserver/IntelliFusion/stargazers)</div>
----
## 关于IntelliFusion
#### intelliFusion的性质
一个开源的、高自由度、支持多种模型库的AI模型库的使用平台。为方便不通用库的使用，我们拥有用户可自行导入不同的模型库。
#### intelliFusion的底层逻辑 
运用flask形成webui处理前端。使用[Ajax](https://encyclopedia.thefreedictionary.com/Ajax+(programming))，异步获取数据，使用[echarts](https://echarts.apache.org)进行了数据可视化，使用户可以根据自己电脑的硬件使用率，实时检测电脑使用状况，自行规划使用率。
#### IntelliFusion的发布
我们发行的Preview版本为单文件，因此部分功能会因为无法导入文件而无法使用附加功能，如自行添加提示词，自行更改代码高亮文件等功能，所以推荐安装IntelliFusion Release版本。
#### IntelliFusion的支持平台
我们所发行的这款软件目前仅支持windows x64用户和Macos用户，我们在文件中都有加入适用系统。

## IntelliFusion所支持的模型
*<u>以下所举均为举例，用户亦可自行添加模型进行使用，皆可通用</u>*

#### 通过webui调用的所有模型
- [Midjourney](https://www.midjourney.com)
- [Stable Diffusion](https://stability.ai)

#### 通过api调用的语言模型
- [ChatGPT](https://chat.openai.com) ([GPT-4](https://openai.com/product/gpt-4))

#### 通过OpenAI插件调用的语言模型
- [ChatGPT](https://chat.openai.com) ([GPT-4](https://openai.com/product/gpt-4))
- [ChatGLM](https://github.com/THUDM/ChatGLM-6B) ([ChatGLM2](https://github.com/THUDM/ChatGLM2-6B))

## 更新信息
**[2023/08/27]** 发布[intelliFusion 0.2.1](https://github.com/hcl595/IntelliFusion/releases/tag/Rel.0.2.1),intelliFusion 的升级版本，在保留了之前带有的功能的基础之上，intelliFusion 引入了如下新特性：

1. **更好的体验**：修复已知bug
2. **更美观的UI**：更新模型修改界面的UI
3. **更好的支持**：发行macos版本的Alpha第二次测试版本

----
**[2023/08/26]** 发布[intelliFusion 0.2.0](https://github.com/hcl595/IntelliFusion/releases/tag/pre0.2.0),intelliFusion 的升级版本，在保留了之前带有的功能的基础之上，intelliFusion 引入了如下新特性：

1. **更好的体验**：修复已知的bug
2. **更真实的输出模式**：新增流式传输和流式响应，更符合人体思考的输出方式
3. **更便捷的会话**：新增会话历史记录，可便使用者查询
4. **更方便的输入**：去除上一版本的提示词更换，改为使用者可自行新建提示词，我们提供了少部分的基础提示词，分为中英双文
5. **更便捷的修改**：对于开发者编写了开发文档助于开发，添加了内置函数库
6. **新支持**：开发macos版本的Alpha测试版

----
**[2023/08/05]** 发布[intelliFusion 0.1.9.1](https://github.com/hcl595/IntelliFusion/releases/tag/0.1.9.1-alpha),intelliFusion 的升级版本，在保留了之前带有的功能的基础之上，intelliFusion 引入了如下新特性：

1. **更好的体验**：修复了已知的bug
2. **优化小组件**：新增内置GPU占用监测
3. **更好的背景**：添加了深浅模式切换按钮，可以按照用户需求切换背景色
4. **更好的对胡**：提示词可更换语言（目前仅支持日语和中文）
5. **优化底层代码**：使用ajax，代替jinjia2和form表单

----
**[2023/08/01]** 发布[intelliFusion 0.1.8.1](https://github.com/hcl595/IntelliFusion/releases/tag/0.1.8.1),intelliFusion 的升级版本，在保留了之前带有的功能的基础之上，intelliFusion 引入了如下新特性：

1. **优化小组件**：我们优化了小插件的显示，更新了一部分的内容.
2. **更好的优化**：修复了bug.
3. **更好的调用**：添加了活跃检测，实时监测您所启用的模型，可以只调用在线模型.
4. **更好的沟通**：内置多语言提示词库，拥有提示词框，可以辅助您更方便的调用模型.

----
**[2023/07/29]** 发布[intelliFusion 0.1.5](https://github.com/hcl595/IntelliFusion/releases/tag/0.1.5),intelliFusion 的升级版本，在保留了之前带有的功能的基础之上，intelliFusion 引入了如下新特性：

1. **更方便的使用**：基于上一个版本的内测反应情况，我们全面升级了 intelliFusion 的基础功能。使用户可以在账户界面控制模型的开启与关闭
2. **更流畅的沟通**：我们改善了用户与ai交流之间的延迟

----
**[2023/06/23]** 发布[intelliFusion Alpha测试](https://github.com/hcl595/IntelliFusion/releases/tag/alpha)

### 了解更多

- 想反馈问题？ 开发者邮箱：3545742020@qq.com