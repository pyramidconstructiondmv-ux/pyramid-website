# Pyramid Construction DMV — Deploy Guide

How to get your website live at **pyramidconstructiondmv.com** in about 20 minutes.
No coding knowledge needed. Every step is spelled out.

---

## Before You Start — Checklist

- [ ] You have a GitHub account (free). Sign up at github.com if not.
- [ ] You have a Cloudflare account (free). Sign up at cloudflare.com if not.
- [ ] You own the domain `pyramidconstructiondmv.com` (via GoDaddy, Namecheap, Google Domains, etc.)
- [ ] You've set up a Formspree account and have your form endpoint URL (see Step 4 below)

---

## Step 1 — Put the Website Folder on GitHub

GitHub stores your website files so Cloudflare can deploy them.

1. Go to **github.com** and log in
2. Click the **+** button (top right) → **New repository**
3. Name it: `pyramid-construction-dmv` (or anything you like)
4. Set it to **Private** (recommended — keeps your code off public search)
5. Click **Create repository**
6. On the next screen, click **uploading an existing file**
7. Drag your entire `Pyramid Website` folder contents into the upload area
   - Upload ALL files and folders: `index.html`, all `.html` pages, `css/`, `js/`, `assets/`, `sitemap.xml`, `robots.txt`, `_redirects`, `_headers`
8. Scroll down, click **Commit changes**

Your files are now on GitHub.

---

## Step 2 — Connect GitHub to Cloudflare Pages

Cloudflare Pages reads your GitHub repo and publishes the website automatically.

1. Go to **cloudflare.com** → log in → click **Pages** in the left sidebar
2. Click **Create a project** → **Connect to Git**
3. Authorize Cloudflare to access your GitHub account
4. Select your `pyramid-construction-dmv` repository → click **Begin setup**
5. On the build settings page:
   - **Project name**: `pyramidconstructiondmv` (this determines your temp URL)
   - **Framework preset**: None
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (a single forward slash)
6. Click **Save and Deploy**
7. Wait about 60 seconds — Cloudflare will show "Success"

Your site is now live at: `https://pyramidconstructiondmv.pages.dev`
(temporary URL — the real domain comes next)

---

## Step 3 — Connect Your Custom Domain

1. In Cloudflare Pages, go to your project → click **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter: `pyramidconstructiondmv.com` → click **Continue**
4. Cloudflare will show you DNS records to add

**If your domain is registered at GoDaddy, Namecheap, or similar:**
- Log in to your domain registrar
- Go to DNS settings for `pyramidconstructiondmv.com`
- Add the records Cloudflare shows you (usually a CNAME or A record)
- Save

**Easier option — Transfer DNS to Cloudflare (recommended):**
- In Cloudflare, click **Add a site** → enter `pyramidconstructiondmv.com`
- Cloudflare scans existing DNS records
- Update your domain's **nameservers** at your registrar to Cloudflare's nameservers
- DNS propagation takes 10 minutes to a few hours

5. Once connected, Cloudflare automatically provisions an **SSL certificate** (HTTPS) — free.

Your site is live at `https://pyramidconstructiondmv.com`.

---

## Step 4 — Set Up the Contact Form (Formspree)

The estimate form on `/contact` needs a Formspree endpoint to actually send emails.

1. Go to **formspree.io** → create a free account
2. Click **New Form** → name it "Pyramid Construction Estimate Form"
3. Copy your form endpoint — it looks like: `https://formspree.io/f/xabc1234`
4. Open `contact.html` in a text editor (TextEdit on Mac, or Notepad on Windows)
5. Find this line:
   ```
   action="https://formspree.io/YOUR_FORMSPREE_ENDPOINT"
   ```
6. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint path, e.g.:
   ```
   action="https://formspree.io/f/xabc1234"
   ```
7. Save the file
8. In GitHub, navigate to `contact.html` → click the pencil (edit) icon → make the same change → click **Commit changes**
9. Cloudflare will automatically redeploy (takes ~30 seconds)

Submissions will now arrive at your Formspree dashboard and be forwarded to your email.

---

## Step 5 — Post-Launch Checklist

Do these after your site is live:

### Google Search Console
1. Go to **search.google.com/search-console** → Add property
2. Enter `https://pyramidconstructiondmv.com`
3. Verify ownership (Cloudflare/DNS method is easiest)
4. Go to **Sitemaps** → submit `https://pyramidconstructiondmv.com/sitemap.xml`
5. This tells Google your site exists and to index all pages

### Google Business Profile
1. Go to **business.google.com** → find your Pyramid Construction DMV listing
2. Update the **Website** field to `https://pyramidconstructiondmv.com`
3. This improves local search rankings significantly

### Test the Live Site
- [ ] Open `https://pyramidconstructiondmv.com` — does it load?
- [ ] Check `https://pyramidconstructiondmv.com/roofing` — clean URL works?
- [ ] On a phone: does the sticky call bar appear at the bottom?
- [ ] Submit a test estimate form — do you receive the email?
- [ ] Check the hamburger menu works on mobile

---

## Updating the Website Later

Whenever you want to change something:

1. Edit the file locally on your Mac
2. Go to GitHub → navigate to the file → click the pencil icon → paste your changes → Commit
3. Cloudflare auto-deploys within 30–60 seconds

Or install the **GitHub Desktop** app for easier drag-and-drop file management.

---

## Need Help?

Call or text Zaid directly — but if you need technical help with the website:
- Cloudflare support: cloudflare.com/help
- Formspree support: help.formspree.io
- GitHub support: support.github.com

---

*Website built June 2026 — Pyramid Construction DMV*
