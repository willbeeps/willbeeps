---
layout: home
title: Now
permalink: /now/
---

## Where I'm at now

I am **working on** a problem in healthcare. Heavily regulated industries are the design equivalent of keyhole surgery.  

I am **reading** *Metaphysics as a Guide to Morals* by Iris Murdoch.   

I am **still reading** *The Rise of The Machines* by Patrick Rid. I have become very slow at reading. 

I am **watching** a multitude of films, streaming platforms allow you to create a stack of shame in a new medium. But I recently enjoyed:
- Civil War
- The Batman

I am **growing** a number of perennials and grasses from seed. They went into the propagator on January 12th. Asters, gauras and panicum have all popped their heads up. Fingers crossed. 

I have recently been **looking at**...

{% assign image_path = "/assets/images/0225_halo.jpg" %}
<img src="{{ image_path }}" alt="A halo">

{% for file in site.static_files %}
  {% if file.path == image_path %}
    Last modified: {{ file.modified_time | date: "%B %d, %Y" }}
    {% endif %}
{% endfor %}




