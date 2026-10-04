# Slovensko – veľká výprava

Interaktívny kurz geografie Slovenska pre všetky vekové kategórie.

## Obsah priečinka
- `index.html` – rozcestník (úvodná stránka ako appka)
- `male-objavitelia.html` – MŠ až 3. ročník (14 zastávok)
- `cestovatelia.html` – 4. a 5. ročník (16 zastávok)
- `experti.html` – stredná škola a maturita (3 bloky, 10 tém vrátane maturitného trenažéra)
- `badatelia.html` – 6. až 9. ročník (3 bloky, 15 tém)
- `manifest.webmanifest`, `sw.js`, `icons/` – inštalácia na plochu a offline režim

## Zverejnenie na GitHub Pages
1. Nahrajte **celý obsah priečinka** do repozitára (napr. `slovensko-vyprava`), aby `index.html` bol v koreni.
2. V repozitári: **Settings → Pages → Source: Deploy from a branch → main / (root)** → Save.
3. Po chvíli bude kurz na adrese `https://<pouzivatel>.github.io/slovensko-vyprava/`.

## Pridanie ďalšej úrovne alebo aktualizácia
1. Nahrajte nový súbor (napr. `badatelia.html`) do toho istého priečinka.
2. V `index.html` v zozname `LEVELS` pri danej úrovni zmažte `soon:true` a doplňte `total:` (počet zastávok).
3. V `sw.js` pridajte názov súboru do zoznamu `SUBORY` a zvýšte `VERZIA` (napr. `vyprava-v2`).

## Poznámky
- Pokrok (pečiatky) sa ukladá v prehliadači daného zariadenia; rozcestník ho zobrazuje pri každej úrovni.
- Po aktualizácii súborov vždy zvýšte `VERZIA` v `sw.js`.
- Mapové podklady: Natural Earth (voľné dielo).

## Úvodné animácie a dynamické úlohy
- Pri prvom vstupe do každého celku (balík, trasa, blok) sa prehrá krátka úvodná animácia; kedykoľvek ju možno spustiť tlačidlom „▶ Úvod“ pri názve celku.
- Kvízy a úlohy sa pri každom vstupe premiešajú, výpočtové úlohy majú nové hodnoty.

## Vloženie do článku (Zavretá škola)
- Kód iframe je v súbore `vlozenie-iframe.html` – nahraďte v ňom POUZIVATEL adresou svojej GitHub Pages stránky.
- V iframe sa dá prepínať medzi všetkými úrovňami: rozcestník → úroveň → tlačidlo ⌂ späť na rozcestník.
- Parameter `?embed` skryje tlačidlo inštalácie a zobrazí odkaz na celú obrazovku.
- `hero.png` (1600 × 900) a `og.png` (1200 × 630) sú titulné obrázky pre článok a sociálne siete.
