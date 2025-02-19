---
layout: default
title: Songs
---

{% for song in site.songs %}
* [{{ song.title }}]({{ song.url }}) - {{ song.artist }}
{% endfor %}