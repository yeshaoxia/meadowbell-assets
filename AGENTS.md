# Repository organization rules

The user requires all current and future design work in this repository to be grouped under designs/.

1. Put every distinct design in designs/<project-slug>/. Never place new design assets or demo files at the repository root.
2. Keep assets/, code/, prompts/, previews/, docs/, downloads/ and optional versions/ separated. Categorize assets by use or medium; use existing project conventions.
3. Start new projects from designs/_template/. Use lowercase English kebab-case paths and descriptive filenames.
4. Update the root and designs/ indexes when adding a project. Explain missing deliverables instead of inventing them.
5. Preserve original source assets. Preserve historical versions under versions/<version>/ when requested or needed; never silently overwrite unrelated designs.
6. When relocating files, update all known live URLs, relative references, dynamic asset loaders, prompts, manifests, project README links and download packages. Check reference targets and relevant runtime syntax. Keep commit-pinned historical URLs unchanged unless deliberately regenerating a current prompt.
7. Record future migrations in designs/migration-map.json. Clearly report externally copied old main-branch URLs that cannot redirect automatically.
8. Never commit credentials, authentication material, caches, node_modules, or scratch scripts. README files and these instructions can live at root; design deliverables must stay inside designs/.
