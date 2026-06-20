---
layout: project
title: "(Internship) Improving the Modularity
and Robustness of the Althread Language"
description: "Internship within the Computer Science Department at the University of Strasbourg"
date: "6 September 2025"
---

During my first-year master's internship, supervised by Professor [Quentin Bramas](https://bramas.fr/), my main objective was to level up [Althread](https://althread.github.io), an educational language for modeling and verifying distributed systems, and make it a truly modular platform.

To figure out the best approach, I compared how several languages and modeling tools handle modules and imports, from Promela and TLA+ to Python, JavaScript, and Go. That study helped me design a namespace-based import system for Althread with local file imports, remote dependencies, circular-import detection, proper namespace qualification, and visibility rules for private functions and programs.

<figure>
    <img src="/assets/projects/althread_import/language_comparison.001.png" alt="Table comparing Promela, TLA+, Python, Go and Althread import system designs."/>
    <figcaption>Key aspects of Promela, TLA+, Python, Go and Althread import system designs.</figcaption>
</figure>

The project bridged compiler engineering and web development. On the language side, I finished user-defined functions with cross-function calls, nested calls, implicit returns, and control-flow analysis to ensure non-void functions return on every path. On the platform side, I adapted the [Althread web IDE](https://althread.github.io/editor/) around a virtual file system and package manager so imported modules and remote dependencies could work inside a WebAssembly-based environment.

Together, these changes made Althread much more usable for writing and organizing concurrent and distributed-system models, while keeping the language approachable for students.

#### Related Documents

- [Defense Presentation](../../assets/projects/althread_import/internship_defense.pdf)
- [Report](../../assets/projects/althread_import/internship_report.pdf)
