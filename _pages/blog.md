---
layout: default
title: Blog
permalink: /blog/
---

<div class="section">
    <div class="section-wrap">
        <ul>
            {% for post in site.posts %}
                <li>
                    <a href="{{ post.url }}">{{ post.title }}</a> | {{ post.categories }}
                </li>
            {% endfor %}
        </ul>
    </div>
</div>


