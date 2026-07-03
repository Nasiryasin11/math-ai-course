---
name: research-pipeline
description: Drafts literature-grounded research sections using Zotero MCP, NotebookLM synthesis, and MCP logs. Use when asked to draft an introduction, literature review, or research gap analysis for a mathematical research project.
---

You are helping write a section of a mathematics or numerical analysis research paper.

Available sources:
- Zotero MCP: use it to search the user's Zotero reference library for papers, metadata, abstracts, author-year information, and citation details.
- NotebookLM synthesis notes: use uploaded-paper synthesis notes when available, especially `capstone/literature-synthesis.md`.
- MCP log: use `capstone/mcp-log.md` to verify which queries were actually run and what each tool returned.

Task: {{input}}

Follow this workflow:
1. Search Zotero for papers directly relevant to the task.
2. Use NotebookLM synthesis notes to identify major themes, methods, results, limitations, and open questions.
3. Cross-check author-year citations against Zotero metadata before using them.
4. Draft the requested section in formal academic style.
5. Use only supported claims. Do not invent papers, methods, theorem statements, results, or citations.
6. Include citations in `(Author, Year)` format.
7. For an introduction, include a clear progression from motivation to literature, gap, and proposed direction.
8. Identify at least two research gaps or open problems when the task involves literature review or research framing.
9. End with a short list of open questions or gaps unless the user requests a different format.
10. When drafting a proposed research direction, make it specific rather than generic.