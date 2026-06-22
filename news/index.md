---
layout: default
title: Updates
---

<p class="section-label">Updates</p>

<div class="news-grid">
{% for item in site.data.news %}
  <figure class="news-tile{% if item.wide %} news-tile--wide{% endif %}">
    {% if item.image %}<img src="{{ item.image }}" alt="">{% endif %}
    <figcaption>
      <span class="news-tile-text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' | strip }}</span>
      <span class="news-tile-date">{{ item.date | date: "%Y-%m-%d" }}</span>
    </figcaption>
  </figure>
{% endfor %}
</div>
