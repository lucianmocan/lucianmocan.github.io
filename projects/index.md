---
layout: default
title: Projects
---

<ul class="card-list">
  {% for project in site.projects reversed%}
    <li class="card-list-item">
      <a href="{{ project.url }}" class="card-link">
        <span class="card-title">{{ project.title }}</span>
        <span class="card-date">{{ project.date | date: "%B %d, %Y" }}</span>
      </a>
    </li>
  {% endfor %}
</ul>