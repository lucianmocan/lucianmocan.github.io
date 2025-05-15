---
layout: default
title: Projects
---

{% for project in site.projects %}
[{{ project.title }}]({{ project.url }}) <span class="post-date-md"> {{ project.date | date: "%B %d, %Y" }}</span>
{% endfor %}