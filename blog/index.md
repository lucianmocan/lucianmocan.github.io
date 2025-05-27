---
layout: default
title: Blog
---

<ul class="card-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="card-link">
        <span class="card-title">{{ post.title }}</span>
        <span class="card-date">{{ post.date | date: "%B %d, %Y" }}</span>
      </a>
    </li>
  {% endfor %}
</ul>