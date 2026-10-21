# Penny Ren — Portfolio

A responsive, card-based design and research portfolio, rebuilt from penny-ren.com for GitHub Pages.

## Publish

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main**, **/ (root)**, and **Save**.
4. Wait for GitHub's Pages deployment to complete.
5. Visit https://xr0721.github.io/penny-s-portfolio/.

No build command, paid hosting plan, package installation, or API keys are needed.

## Edit your website

- `index.html`: homepage introduction, cards, and contact links.
- `style.css`: colors, fonts, spacing, desktop and mobile layouts.
- `app.js`: category filters and accessible photo viewer.
- `brainbud.html`, `hopin.html`, `fitmatch.html`, `arl.html`, `shanshiping.html`: full project case studies.
- `whoami.html`: biography.
- `photos.html`: photography gallery.
- `assets/`: local copies of images, project posters, CV, and five MP4 prototype videos.

To make a small change on GitHub, open the file, select the pencil icon, edit the text, and choose **Commit changes**. GitHub Pages republishes the website after changes to the publishing branch.

## Your domain

Keep Squarespace running until the new website has been reviewed. Then verify your domain in GitHub, add `www.penny-ren.com` in Pages settings, and update the domain's DNS using GitHub's current instructions:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Domain registration can remain with its current provider. Keep renewing the domain. Do not remove email-related DNS records. No custom-domain setting has been added to this repository yet.

The existing `/brainbud`, `/hopin`, `/arl`, `/fitmatch`, `/shanshiping`, `/whoami`, `/photos`, and `/works` paths have redirects. The old Squarespace `/s/` download URLs will need their own redirects if preserving external links to old PDFs/posters is important.

## Content and migration notes

- Text and artwork come from Penny's public portfolio; the visual layout is newly implemented.
- The biography and project dates retain the source site's information. Review references to being a Cornell senior, ongoing projects, and "Present" before final launch.
- All displayed images, CV, posters, and five embedded video demonstrations are local. The paper-prototype recording is compressed for web delivery.
- YouTube, the HopIn Canva report, LinkedIn, the lab website, and the Shanshiping museum remain external links. Their permissions and availability are managed by their respective services.
- Use properly descriptive alternative text when replacing images. The gallery currently labels photographs by collection number.
- This is a static website: the email link opens a visitor's email application. There is no contact-form backend or tracking service.

## Local preview

Open a terminal in this folder and run `python3 -m http.server 8765`, then visit http://localhost:8765/. This is optional; GitHub Pages can publish the files directly.

## Ownership

Portfolio text, photographs, CV, and project assets remain the property of Penny Ren and their respective credited contributors. This repository does not grant a reuse license for those assets.
