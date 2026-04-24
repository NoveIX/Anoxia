# File: NoveLib\Func\Public\Invoke-DonwloadFile.ps1

function Invoke-DonwloadFile {
    param (
        [Parameter(Mandatory, Position = 0)]
        [string]$URL,

        [Parameter(Mandatory, Position = 1)]
        [string]$File
    )

    try { Start-BitsTransfer -Source $URL -Destination $File -ErrorAction Stop }
    catch {
        try { Invoke-WebRequest -Uri $URL -OutFile $File -UseBasicParsing -ErrorAction Stop }
        catch { Write-Host "Download failed $File. SysErr: $($_.Exception.Message)" ; exit 1 }
    }
}
