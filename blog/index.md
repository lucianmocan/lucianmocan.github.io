---
layout: default
title: Blog
---

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }}) <span class="post-date-md"> {{ post.date | date: "%B %d, %Y" }}</span>
{% endfor %}