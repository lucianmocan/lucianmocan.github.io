---
layout: default
title: Resume
---

<p class="section-label">Resume</p>

<div class="resume-viewer">
    <iframe src="{{ '/assets/projects/resume/resume_latest.pdf' | relative_url }}" width="100%" height="800px"></iframe>
    <a class="resume-download" href="{{ '/assets/projects/resume/resume_latest.pdf' | relative_url }}" target="_blank">Open PDF</a>
</div>

<script>
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    document.querySelector('.resume-viewer iframe').style.display = 'none';
    document.querySelector('.resume-download').style.display = 'block';
}
</script>
