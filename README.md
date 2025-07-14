# movie_tracking

## 安装与启动

1. 安装依赖（只需执行一次）：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 浏览器访问 http://localhost:5173 查看页面。

---

## 目录结构

- `src/`
  - `App.jsx`：主应用组件
  - `index.jsx`：入口文件
  - `components/`
    - `Header.jsx`：头部组件
    - `SearchBar.jsx`：搜索框组件（受控组件，使用 useState）
    - `MovieList.jsx`：电影列表组件
    - `MovieItem.jsx`：单个电影项组件
- `index.html`：HTML 模板
- `package.json`、`vite.config.js`：项目配置

---

## 课后作业建议

1. 完成 React 环境搭建并运行 Hello World。
2. 新建一个计数器组件，使用 useState 实现加减。
3. 尝试将电影列表数据拆分为单独组件并用 props 传递。