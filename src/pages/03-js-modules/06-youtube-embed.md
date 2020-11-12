---

title: Youtube embed
name: youtube-embed
category: modules
subcategory: General modules
layout: q+tq
id: youtube-embed-page

---

<div class="lead"><p>To embed YouTube videos in the site, add a link with a class `.youtube-video-embed` and the `href` pointing to the YouTube page (can be a full link or a youtu.be short link). The `.youtube-video-embed` class can also be applied to the parent element. The link (and its surrounding paragraph, if present) will be replaced with the appropriately-sized video.</p></div>

When the page is resized, the iframe dimensions will be resized to fit the parent's width. The video is always set to use a 16:9 aspect ratio.

At the time of writing, YouTube video URLs usually come in three flavours:

- Regular form, `https://www.youtube.com/watch?v=_8pUffDWFlM`
- Long form, `https://www.youtube.com/watch?v=_8pUffDWFlM&index=1&list=...`
- Short, sharable form, `https://youtu.be/_8pUffDWFlM`

### General use

<p><a class="youtube-video-embed" href="https://www.youtube.com/watch?v=s67Nb0wpcbE">Watch the video here</a></p>

```markup
<p><a class="youtube-video-embed" href="https://www.youtube.com/watch?v=s67Nb0wpcbE">Watch the video here</a></p>
```
&hellip;becomes&hellip;

```markup
<div class="c-video"><iframe width="730" height="410.625" src="//www.youtube.com/embed/e0BLUg7LtiE?rel=0" allowfullscreen=""></iframe></div>
```

### Example with options

<p><a class="youtube-video-embed" data-autoplay="1" data-mute="1" data-cc_load_policy="1" href="https://www.youtube.com/watch?v=e0BLUg7LtiE">Watch the video here</a></p>

```markup
<p><a class="youtube-video-embed" data-autoplay="1" data-mute="1" data-cc_load_policy="1" href="https://www.youtube.com/watch?v=s67Nb0wpcbE">Watch the video here</a></p>
```

## Long form url example
The following example uses the longer form URL type with more parameters added to the query string,

e.g. `https://www.youtube.com/watch?v=_8pUffDWFlM&index=1&list=PLqL9vrHSa70NmzsSg36tnv0dqEueEbifj`

<p><a class="youtube-video-embed" href="https://www.youtube.com/watch?v=_8pUffDWFlM&index=1&list=PLqL9vrHSa70NmzsSg36tnv0dqEueEbifj">Watch the video here</a></p>

## Sharable, short form URL example
Finally, this example uses the shorter, shareable URL,

e.g. `https://youtu.be/G1RFzsCjEYg?t=1m`

<p><a class="youtube-video-embed" href="https://youtu.be/G1RFzsCjEYg" data-t="1m">Watch the video here</a></p>
