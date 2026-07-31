# Releases directory

No installer is included in Build 15.

When the signed production EXE or MSI is ready, follow `../RELEASE-GUIDE.md`.
The website activates download only when `release-manifest.json` has
`"available": true`, a valid `.exe` or `.msi` filename, a 64-character SHA-256
checksum, and the referenced file exists.

Do not add placeholder executables, rename an unverified archive to EXE/MSI, or
ask customers to bypass operating-system warnings.
