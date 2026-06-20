---
layout: project
title: "(Internship) Automating purchasing workflows at Emerson"
description: "Full-stack web engineering internship at Emerson Process Management"
date: "29 August 2024"
---

During my third year in the CMI program, I completed a three-month internship at [Emerson Process Management](https://www.emerson.com/en/final-control) in Cernay, France. I worked with the purchasing department to understand a fragmented workflow built around spreadsheets, manual status updates, quote requests, supplier follow-ups, and repeated data checks across internal tools.

The goal was to reduce repetitive work and give buyers a more reliable way to track purchasing workflows. I first implemented short-term automation with Excel macros and Power Automate, then designed and built a longer-term full-stack web platform.

<figure>
    <img src="/assets/projects/emerson_internship/emerson_architecture.svg" alt="Simplified architecture of the Emerson internship platform: enterprise data sources, Express API, MySQL database, and Angular user interface"/>
    <figcaption>Simplified public architecture of the platform</figcaption>
</figure>

The application used an Angular frontend, an Express backend, and a MySQL database. It synchronized purchasing workflow data from enterprise sources, exposed REST APIs for workflow management, and gave users an interface for filtering, assigning, commenting on, and tracking purchasing tasks. I also worked on authentication, buyer profiles, supplier management, request-for-quote automation, Docker-based deployment, and technical documentation.

This project taught me how to translate operational problems into software architecture, how to work with non-technical users, and how to defend engineering choices inside a real industrial environment. The resulting platform removed a major amount of manual coordination work and was estimated to save more than 800 hours per year.

I am not publishing the full internship report because it contains internal workflow details, tool names, contact information, and implementation specifics that are better kept private.
