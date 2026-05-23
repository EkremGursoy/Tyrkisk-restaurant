# Deploy Memili to GitHub

You only need **Git** and a **browser**. No GitHub CLI required.

## Quick deploy (recommended)

In PowerShell, from the project folder:

```powershell
cd c:\Users\eogul\Memilio
.\scripts\deploy.ps1
```

Follow the prompts. The script will:

1. Ask for your GitHub username  
2. Tell you to create a repo named `Tyrkisk-restaurant` on GitHub  
3. Push your code  
4. Show how to turn on GitHub Pages  

---

## Manual steps (if the script fails)

### 1. Create the repository

1. Go to [github.com/new](https://github.com/new)  
2. **Repository name:** `memili`  
3. **Public**  
4. **Do not** check “Add a README”  
5. Click **Create repository**  

### 2. Push your code

Replace `YOUR_USERNAME` with your GitHub username:

```powershell
cd c:\Users\eogul\Memilio
git remote add origin https://github.com/YOUR_USERNAME/memili.git
git branch -M main
git push -u origin main
```

**Login:** When Windows asks you to sign in, use your GitHub account.  
If it asks for a **password**, use a **Personal Access Token**:

1. [github.com/settings/tokens](https://github.com/settings/tokens) → **Generate new token (classic)**  
2. Check **repo**  
3. Copy the token and paste it as the password  

### 3. Turn on GitHub Pages

1. Open `https://github.com/YOUR_USERNAME/memili/settings/pages`  
2. **Build and deployment** → **Source:** **GitHub Actions**  
3. Go to **Actions** tab and wait for “Deploy to GitHub Pages” to finish (green checkmark)  

### 4. Open your site

```
https://YOUR_USERNAME.github.io/memili/
```

---

## Troubleshooting

| Problem | Fix |
|--------|-----|
| `remote origin already exists` | `git remote set-url origin https://github.com/YOUR_USERNAME/memili.git` |
| `repository not found` | Create the repo on GitHub first (step 1) |
| `Authentication failed` | Use a [Personal Access Token](https://github.com/settings/tokens), not your GitHub password |
| `gh: command not found` | You don’t need `gh` — use `deploy.ps1` instead |
| Pages shows 404 | Wait 2–5 minutes; confirm Pages source is **GitHub Actions** |
| Images or links broken on live site | Normal for project Pages — site uses `/memili` base path automatically |

---

## Local development (unchanged)

```powershell
npm run dev
```

GitHub Pages uses a static build; that only runs in CI, not when you develop locally.
