---
name: "git-one-click-push"
description: "一键完成 git add/commit/pull(rebase)/push，并给出常见报错处理指引。用户想把本地更新同步到 GitHub（含 GitHub Pages 更新）时调用。"
---

# Git 一键提交推送

将本地改动同步到远端（GitHub）的一套最短流程，并在遇到常见错误时给出直接可执行的处理步骤。

## 适用场景（何时调用）

- 用户说“本地更新了怎么同步到 GitHub”“Pages 怎么更新”“git push 报错”
- 需要把当前目录的改动提交并推送到 `origin/main`

## 标准一键流程（推荐）

在仓库根目录执行（能看到 `.git` 的目录）：

```powershell
git status
git add .
git commit -m "update"
git pull origin main --rebase
git push origin main
```

## 首次初始化并推送（目录还不是仓库时）

```powershell
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<USER>/<REPO>.git
git push -u origin main
```

## 常见报错速查

### 1) `fatal: not a git repository`

- 说明当前目录不是仓库根目录，先进入正确目录：

```powershell
cd "<你的仓库目录>"
git status
```

### 2) `Author identity unknown`

```powershell
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

然后重新提交：

```powershell
git add .
git commit -m "update"
```

### 3) `src refspec main does not match any`

- 通常是还没 commit 或分支名不是 main：

```powershell
git add .
git commit -m "init"
git branch -M main
git push -u origin main
```

### 4) `non-fast-forward` / `fetch first`

- 远端比本地新，先拉再推：

```powershell
git pull origin main --rebase
git push origin main
```

### 5) `cannot pull with rebase: Your index contains uncommitted changes`

- 先提交或暂存后再拉：

```powershell
git add .
git commit -m "wip"
git pull origin main --rebase
git push origin main
```

或临时收起改动（不想提交时）：

```powershell
git stash -u
git pull origin main --rebase
git stash pop
```

### 6) 进入 Vim 编辑提交信息，无法退出

- 保存退出：按 `Ctrl + [`（或多按几次 `Esc`）→ 输入 `:wq` → 回车
- 以后默认用记事本：

```powershell
git config --global core.editor notepad
```

### 7) `Recv failure: Connection was reset`

- 常见为网络/代理/HTTP2 问题，优先做这两步：

```powershell
git remote set-url origin https://github.com/<USER>/<REPO>.git
git config --global http.version HTTP/1.1
git push origin main
```

## GitHub Pages 自动更新说明

- Pages 如果配置为 `main / (root)` 或 `main / docs`，每次 `git push origin main` 成功后会自动重新部署
- 部署失败可在仓库 `Actions` 里查看日志

