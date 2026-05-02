---
layout: default
title: Blog
---

<p class="section-label">Writing</p>

<ul class="card-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="card-link">
        <span class="card-title">{{ post.title }}</span>
        <span class="card-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
