---
layout: default
---

<p class="section-label">News</p>

<ul class="card-list card-list--multiline">
{% for item in site.data.news %}
  <li>
    <div class="card-link">
      <span class="card-title">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' | strip }}</span>
      <span class="card-date">{{ item.date | date: "%Y-%m-%d" }}</span>
    </div>
  </li>
{% endfor %}
</ul>
