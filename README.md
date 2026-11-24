[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/mediabeyondatlas-dev/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/mediabeyondatlas-dev/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# The World Today — Tuesday 24 November 2026

A newspaper-style infographic (1024×1024 PNG) summing up the world news of
Tuesday 24 November 2026. Six stories, each with a short headline, a one-to-two
line summary and a simple drawn illustration.

## The six stories

1. **Markets: Asia stocks surge as Nvidia roars back** — Asian shares jump on
   Tuesday: Taiwan +9.1%, South Korea +7.5% and Japan's Nikkei +4.5%, after
   Nvidia soars 31% on Monday as Jensen Huang returns as chief executive.
   (Reuters, 24 Nov 2026)
2. **Pacific: Kiribati evacuates remote Kanton Island** — All 40 to 50
   residents are moved to Tarawa with 24 hours' notice. Officials cite a
   strong El Niño, poor housing and the atoll's remoteness; the move may last
   four years. (PINA / 1News, 24 Nov 2026)
3. **Europe: Portugal votes on budget as unions strike** — Parliament holds
   its final vote on the 2027 budget on Tuesday as four unions strike and
   trains halt. The government offers a 2.3% pay rise; unions demand up to
   15%. (The Portugal Brief, TML News, Downriver, 24 Nov 2026)
4. **South Asia: India marks Guru Nanak Jayanti** — Sikhs mark the birth
   anniversary of Guru Nanak, founder of Sikhism. Stock markets close and
   schools shut across Punjab, Haryana, Uttar Pradesh, Bihar, Delhi and other
   states. (Kotak Neo, Reuters, 24 Nov 2026)
5. **Climate: COP31 fallout — Pacific goes it alone** — Two days after the
   climate talks in Turkey collapsed with no deal, Pacific island nations say
   they will form their own climate coalitions. Critics call the summit the
   "worst COP ever". (PINA, 24 Nov 2026)
6. **Sport: Hudson Young signs for PNG Chiefs** — New South Wales Origin
   back-rower Hudson Young, 28, ends months of speculation by signing with
   the PNG Chiefs for their inaugural season, leaving Canberra.
   (PINA, 24 Nov 2026)

Stories were checked against their reporting dates: Monday 23 November events
(Nvidia's reinstatement itself, the CrowdStrike–Zscaler deal, AirAsia's
results, the Bayan Resources board change, the ICJ Myanmar statement, the
India–New Zealand Test draw) were deliberately left out — only events that
happened, or were first reported, on Tuesday 24 November 2026 are shown, with
the COP31 item framed explicitly as Tuesday's fallout.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
No network access and no randomness, so two runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see `LICENSE`.
