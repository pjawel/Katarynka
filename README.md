# Sala Bankietowa Katarynka

Strona internetowa Sali Bankietowej Katarynka w Mońkach.

## Wdrożenie przez GitHub Actions

Strona jest skonfigurowana do automatycznego wdrażania na **GitHub Pages** przy każdym wypchnięciu (push) do gałęzi `main`.

### Instrukcja konfiguracji na GitHubie:
1. Wypchnij kod do swojego repozytorium na GitHub.
2. Wejdź w **Settings** -> **Pages**.
3. W sekcji **Build and deployment** -> **Source** wybierz **GitHub Actions**.
4. Workflow w `.github/workflows/deploy.yml` zajmie się resztą.

### Rozwój lokalny
```bash
npm install
npm run dev
```

### Budowanie produkcyjne
```bash
npm run build
```
