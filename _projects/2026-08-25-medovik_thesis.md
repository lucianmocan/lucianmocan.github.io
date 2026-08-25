---
layout: project
title: "(Master's Thesis) Medovik: Simplifying Porting to Trusted Execution Environments"
description: "Master's thesis internship at the Prescience Lab, Northwestern University"
date: "25 August 2026"
---

For my second-year master's internship and thesis (CMI, University of Strasbourg), I spent six months at the [Prescience Lab](http://www.presciencelab.org/), in the Computer Science Department at Northwestern University, supervised by Professor [Peter Dinda](http://www.pdinda.org/). The work sits inside the lab's [Privacy Backplane](https://privacy-backplane.org/) project, which aims to give people control over how IoT devices capture and use their data. The concrete question I worked on: how do you get an existing application, not written for a Trusted Execution Environment (TEE), to run inside one?

TEEs like ARM TrustZone isolate code from the rest of the system, including the operating system, and can prove what they are running through attestation. That makes them a natural place to run privacy-sensitive code, such as [ERASE](https://privacy-backplane.org/papers/qiao25sep.pdf), a lab video-redaction application that tracks people at the edge and redacts anyone who hasn't opted into image capture. But porting to a TEE is hard: Secure World operating systems lack the Linux runtimes, shared libraries, and device drivers that ordinary applications assume, which usually forces a difficult manual rewrite.

The result of this work is Medovik, a model and prototype for porting applications to TEEs without an upfront manual port. Medovik first runs the original application unmodified, through emulation layers hosted inside the TEE, so the developer gets a correct, working system immediately. It then uses profiling to find the small number of functions that dominate runtime and replaces only those through a "punch-through" mechanism, recovering most of the lost performance without touching the rest of the application. I built the prototype on a ROCKPro64 board, running an x86_64 emulator (Bochs) compiled to WebAssembly inside OP-TEE, with punch-through handlers for compute-heavy workloads and for ERASE itself.

<figure>
    <img src="/assets/projects/medovik_thesis/medovik_model.png" alt="Diagram comparing a traditional TEE port, which splits the application, OS, and drivers across Normal and Secure Worlds, with the Medovik model, which preserves the original stack inside TEE-hosted compatibility layers and adds profiling-guided punch-through for hot code paths."/>
    <figcaption>Medovik preserves the original application stack inside TEE-hosted compatibility layers, then uses profiling-guided punch-through for the functions that matter most.</figcaption>
</figure>

Across CoreMark, the NAS benchmark suite, SPEC CPU2017, and ERASE, the compatibility-first path ran every workload without any porting effort, at a geometric-mean slowdown of about 125x relative to native. Profiling showed that a handful of functions typically account for most of the runtime, which made punch-through worthwhile: for two SPEC workloads and for ERASE, replacing the hottest functions cut the slowdown by roughly an order of magnitude. Alongside Medovik, I also explored a secondary thread on using LLMs to predict a program's hot functions from source code alone, without running it. This work became my first paper as lead author, submitted with Professor Dinda and Michael Polinski to the [14th Workshop on Programming Languages and Operating Systems (PLOS 2026)](https://www.plos-workshop.org/2026/), co-located with [SOSP](https://sigops.org/s/conferences/sosp/2026/).

#### Related Documents

- [Thesis](../../assets/projects/medovik_thesis/thesis.pdf)
- [Defense Presentation](../../assets/projects/medovik_thesis/defense_presentation.pdf)
- [Poster (GCASR 2026)](https://gcasr.org/2026/pdfs/posters/Mocan_Lucian_MedovikEnablingx86Linux%20-%20Lucian%20Mocan.pdf)
