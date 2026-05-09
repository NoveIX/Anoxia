# File: NoveLib\Func\Public\New-Directory.ps1

using namespace System.IO

function New-Directory {
    param (
        [Parameter(Mandatory = $true, Position = 0, ValueFromPipeline = $true)]
        [DirectoryInfo[]]$Path,

        [switch]$OutNull
    )

    # Initialize an array to hold results if not using OutNull
    begin {
        $results = @()
    }

    # Process each path provided in the pipeline
    process {
        foreach ($p in $Path) {
            if (-not (Test-Path -Path $p -PathType Container)) {
                $item = New-Item -Path $p -ItemType Directory

                # If not using OutNull, add the created item to the results array
                if (-not $OutNull) {
                    $results += $item
                }
            }
        }
    }

    # Return the results if not using OutNull
    end {
        return $results
    }
}
