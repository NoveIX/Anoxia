# File: NoveLib\Func\Public\Copy-File.ps1

using namespace System
using namespace System.IO

function Copy-File {
    param (
        [Parameter(Mandatory)]
        [ValidateScript({ Test-Path $_ })]
        [DirectoryInfo]$Source,

        [Parameter(Mandatory)]
        [DirectoryInfo]$Destination,

        # Overwrite files at the destination
        [switch]$Force,

        # Preserver Attribute
        [switch]$PreserveAttributes,

        [ValidateNotNullOrEmpty()]
        [int]$DecimalPlace = 2
    )

    # Create the destination or check if contains files
    if (-not (Test-Path -Path $Destination -PathType Container)) { New-Item -Path $Destination -ItemType Directory -Force | Out-Null }
    else {
        if ((Get-ChildItem -Path $Destination -Force).Count -gt 0 -and -not $Force) {
            $excMsg = @"
The path '$Destination' already exists and is not empty.
Operation aborted to prevent data loss.
Use the 'Force' parameter to overwrite the existing contents.
"@
            throw [InvalidOperationException]::new($excMsg)
        }
    }

    # Get all items to copy
    [array]$items = Get-ChildItem -Path $Source -Recurse -Force

    #Counter
    [int]$curItem = 0
    [int]$totItem = $items.Count

    [int]$curByte = 0
    [double]$totByte = 0
    foreach ($item in $items) { $totByte += if (-not $item.PSIsContainer) { $item.Length } else { 1 } }

    # Iterate through all items and copy them to the destination
    foreach ($item in $items) {
        # Progress bar
        $curItem++
        $curByte += if (-not $item.PSIsContainer) { $item.Length } else { 1 }
        [double]$percent = ((($curItem / $totItem) + ($curByte / $totByte)) / 2) * 100
        [double]$percentComplete = [math]::Round($percent, $DecimalPlace)
        [string]$status = "Item $curItem of $totItem ($($percentComplete.ToString("N$DecimalPlace")) `%) - $($item.Name)"
        Write-Progress -Id 0 -Activity "Copy file in progress..." -Status $status -PercentComplete $percentComplete

        # Build the destination path using the relative path from the source
        [string]$DestinationFullPath = Join-Path -Path $Destination -ChildPath $item.FullName.Substring((Resolve-Path $Source).Path.Length)

        # Copy item to destination (handle directories and files differently)
        if ($item.PSIsContainer) { Copy-Item -Path $item.FullName -Destination (Split-Path $DestinationFullPath -Parent) -Force }
        else { Copy-Item -Path $item.FullName -Destination $DestinationFullPath -Force }

        # restore attribute
        if ($PreserveAttributes) {
            [FileSystemInfo]$sourceItem = Get-Item -Path $item.FullName -Force
            [FileSystemInfo]$destinationItem = Get-Item -Path $DestinationFullPath -Force
            if ($sourceItem -and $destinationItem) {
                try { $destinationItem.Attributes = $sourceItem.Attributes }
                catch { Write-Warning -Message "($curItem / $totItem) Failed to set attributes on: $DestinationFullPath - $($_.Exception.Message)" }
            }
        }
    }

    Write-Progress -Id 0 -Activity "Copy completed" -Completed
}
