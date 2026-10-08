# Leon Kelvin Li — Product Engineer

Personal portfolio at [noctilucenty.github.io](https://noctilucenty.github.io/), focused on substantial product, AI, research and client systems.

The default gallery features **LOQOL & Charlie AI, Curio, Scenara, ATLAS, Mingtu and ALLCPR Site Intelligence**. The All work filter adds BEASTY PAGES, Curio Automation, Continuity and the ONPECY AI Lab proposal. Smaller sites, sticker packs and earlier experiments are omitted.

Project scope is expandable, with clear boundaries for research, educational prototypes, archived simulations and development in progress. LOQOL retains the official Software Engineer Intern title. The downloadable resume remains one page.

## Design and assets

The site uses local Syne and DM Serif Display fonts, a navy/periwinkle palette, a responsive two-column gallery, a mobile navigation menu, visible keyboard focus and reduced-motion support. It has no framework or runtime dependencies.

The ten project covers in `assets/projects/` were created with GPT image generation as **concept artwork**, not product screenshots. They are compressed WebP files with explicit dimensions and descriptive alternative text. The hero image loads first; gallery images load lazily.

## Local development

```sh
python3 -m http.server 5298
```

Open `http://127.0.0.1:5298/`. Run the repository checks with `npm test`.

GitHub Pages publishes from the repository's main branch, root directory.
