# Memili — deploy to GitHub (no GitHub CLI required)
# Run: .\scripts\deploy.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host ""
Write-Host "=== Memili — Deploy to GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: GitHub username
$defaultUser = ""
if (Test-Path "$env:USERPROFILE\.gitconfig") {
    $email = git config --global user.email 2>$null
    if ($email -match "^([^@]+)@") {
        $defaultUser = $Matches[1]
    }
}

Write-Host "Step 1: Your GitHub username"
Write-Host "  (Find it at github.com — top-right profile, or your profile URL)"
$username = Read-Host "GitHub username$(if ($defaultUser) { " [$defaultUser]" })"
if ([string]::IsNullOrWhiteSpace($username)) { $username = $defaultUser }
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Username is required." -ForegroundColor Red
    exit 1
}

$repoName = "memili"
$remoteUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Step 2: Create the repository on GitHub (if you have not already)"
Write-Host "  1. Open: https://github.com/new" -ForegroundColor Yellow
Write-Host "  2. Repository name: $repoName" -ForegroundColor Yellow
Write-Host "  3. Choose Public" -ForegroundColor Yellow
Write-Host "  4. Do NOT add README, .gitignore, or license" -ForegroundColor Yellow
Write-Host "  5. Click Create repository" -ForegroundColor Yellow
Write-Host ""
$ready = Read-Host "Press Enter when the repo exists on GitHub (or type 'skip' if it already exists)"
if ($ready -eq "q") { exit 0 }

# Step 3: Remote
$existing = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Remote 'origin' already set: $existing"
    $change = Read-Host "Replace with $remoteUrl? (y/N)"
    if ($change -match "^[yY]") {
        git remote set-url origin $remoteUrl
    }
} else {
    git remote add origin $remoteUrl
    Write-Host "Added remote: $remoteUrl" -ForegroundColor Green
}

# Step 4: Push
Write-Host ""
Write-Host "Step 3: Pushing code to GitHub..."
Write-Host "  A sign-in window may open (Git Credential Manager)."
Write-Host "  If asked for a password, use a Personal Access Token, NOT your GitHub password."
Write-Host "  Create one: https://github.com/settings/tokens (scope: repo)" -ForegroundColor Yellow
Write-Host ""

git branch -M main
git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Push failed. Common fixes:" -ForegroundColor Red
    Write-Host "  - Create the repo first at https://github.com/new"
    Write-Host "  - Use a Personal Access Token as the password"
    Write-Host "  - Wrong username? Run this script again"
    exit 1
}

Write-Host ""
Write-Host "=== Code pushed successfully ===" -ForegroundColor Green
Write-Host ""
Write-Host "Step 4: Enable GitHub Pages (one-time)"
Write-Host "  1. Open: https://github.com/$username/$repoName/settings/pages" -ForegroundColor Yellow
Write-Host "  2. Under 'Build and deployment', set Source to: GitHub Actions" -ForegroundColor Yellow
Write-Host "  3. Wait 1–2 minutes for the workflow to finish" -ForegroundColor Yellow
Write-Host ""
Write-Host "Your live site will be at:" -ForegroundColor Cyan
Write-Host "  https://$username.github.io/$repoName/" -ForegroundColor White
Write-Host ""
