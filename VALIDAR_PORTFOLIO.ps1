$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "=== PORTFOLIO ALDRIN - VALIDACAO ===" -ForegroundColor Cyan

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js nao foi encontrado. Instale o Node.js antes de continuar."
}

if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm.cmd install
}

Write-Host "Verificando TypeScript..." -ForegroundColor Yellow
& npm.cmd run lint
if ($LASTEXITCODE -ne 0) { throw "Falha na validacao TypeScript." }

Write-Host "Gerando build de producao..." -ForegroundColor Yellow
& npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw "Falha no build." }

Write-Host "" 
Write-Host "VALIDACAO CONCLUIDA COM SUCESSO." -ForegroundColor Green
Write-Host "Build gerado em: $PSScriptRoot\dist" -ForegroundColor Green
