$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js nao foi encontrado. Instale o Node.js antes de continuar."
}

if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm.cmd install
}

Write-Host "Iniciando o portfolio em http://localhost:3000" -ForegroundColor Green
& npm.cmd run dev
