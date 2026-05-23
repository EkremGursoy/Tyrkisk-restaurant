# Run after: gh auth login
$gh = "$env:TEMP\gh-cli\bin\gh.exe"
if (-not (Test-Path $gh)) {
    Write-Host "GitHub CLI not found. Install from https://cli.github.com/"
    exit 1
}

Set-Location $PSScriptRoot\..

& $gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please log in first:"
  & $gh auth login -h github.com -p https -w
}

$user = & $gh api user -q .login
$repoName = "memili"

if (& $gh repo view "$user/$repoName" 2>$null) {
    git remote add origin "https://github.com/$user/$repoName.git" 2>$null
    git push -u origin main
} else {
    & $gh repo create $repoName --public --source=. --remote=origin --push --description "Memili Turkish restaurant website"
}

Write-Host ""
Write-Host "Enable GitHub Pages: Repo Settings -> Pages -> Source: GitHub Actions"
Write-Host "Live URL: https://$user.github.io/$repoName/"
