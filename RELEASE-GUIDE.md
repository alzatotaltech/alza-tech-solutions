# Future EXE or MSI publication guide

The download page is controlled by `releases/release-manifest.json`. It is
unavailable by default.

## 1. Prepare the installer

- Build the production EXE or MSI in the approved application pipeline.
- Code-sign it with the approved publisher certificate.
- Test install, launch, upgrade, repair, uninstall, and rollback behavior on
  every supported Windows version.
- Complete malware, vulnerability, dependency, permissions, logging, privacy,
  and data-flow reviews.
- Finalize system requirements, support details, and release notes.

## 2. Create release metadata

Copy the installer into `releases/` using a versioned filename, for example:

```text
ALZA-M365-Migration-Suite-1.0.0-x64.msi
```

Calculate SHA-256:

```bash
sha256sum releases/ALZA-M365-Migration-Suite-1.0.0-x64.msi
```

Windows PowerShell:

```powershell
Get-FileHash .\releases\ALZA-M365-Migration-Suite-1.0.0-x64.msi -Algorithm SHA256
```

## 3. Update the manifest

```json
{
  "available": true,
  "file": "ALZA-M365-Migration-Suite-1.0.0-x64.msi",
  "version": "1.0.0",
  "releaseDate": "2026-09-15",
  "format": "MSI",
  "size": "42.8 MB",
  "publisher": "ALZA Total Tech Solutions FZ-LLC",
  "sha256": "64_LOWERCASE_HEXADECIMAL_CHARACTERS",
  "releaseNotes": "releases/1.0.0.md"
}
```

The filename and checksum must match the exact binary in the same commit.

## 4. Validate and publish

```bash
npm run build:site
npm run validate
```

Then:

- test the download on the production domain;
- verify size and checksum after downloading;
- confirm the operating-system publisher prompt;
- confirm endpoint protection does not flag the file;
- confirm the release page and documentation agree;
- retain the prior version for rollback if policy allows.

Never replace the bytes under an existing versioned filename. Publish a new
version and checksum.
