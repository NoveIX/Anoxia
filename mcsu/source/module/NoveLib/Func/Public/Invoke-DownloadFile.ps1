# File: NoveLib\Func\Public\Invoke-DonwloadFile.ps1

function Invoke-DonwloadFile {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Url,

        [Parameter(Mandatory = $true, Position = 1)]
        [string]$File
    )

    # Try downloading the file using Start-BitsTransfer, if it fails, fallback to Invoke-WebRequest
    try { Start-BitsTransfer -Source $Url -Destination $File -ErrorAction Stop }
    catch {
        try { Invoke-WebRequest -Uri $Url -OutFile $File -UseBasicParsing -ErrorAction Stop }
        catch { Write-Host "Download failed $File. Exception: $($_.Exception.Message)" ; exit 1 }
    }
}
