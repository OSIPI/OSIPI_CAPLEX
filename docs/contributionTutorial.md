# Contributing to OSIPI CAPLEX

<b><font color=#FF0000>If you follow this tutorial but find yourself stuck, please submit an issue in the <a id="tutorialIssue" href="https://github.com/OSIPI/OSIPI_CAPLEX/issues">github repository</a> and include all steps you have taken and the full traceback to the error you've encountered so we may improve this page.</font></b>

This tutorial will guide you through contributing to the OSIPI CAPLEX website, even if you've never used GitHub, Git, or written code for a website before.

## Quick Start Guide

Choose one of these two approaches to get started:

1. **Remote Development Environment** - Recommended for beginners (no installation required)
2. **Local Development Environment** - For those who prefer working on their own machine

## 1. Remote Development Environment

Using a development container through GitHub Codespaces is the quickest way to start contributing without installing anything on your computer.

### Creating a GitHub Codespace

1. Navigate to the [OSIPI CAPLEX repository](https://github.com/OSIPI/OSIPI_CAPLEX/tree/main-major-development)
2. Click the green `<> Code` button near the top of the page
3. Select the `Codespaces` tab
4. Click `Create codespace on main-major-development`
5. Wait for the environment to build (typically 1-2 minutes)

![codespace gif](tutorialImgs/codespace gif.gif)

### Working in the Codespace

Once your codespace is ready:

1. The repository files will appear in the file explorer on the left
2. Open the terminal at the bottom of the screen
3. Run `mkdocs serve` to build a local version of the website
4. Click on the URL that appears (typically http://127.0.0.1:8000) to view the site
5. Make your changes to any files using the editor
6. The website will automatically update as you save changes

### Committing Your Changes

1. Click the Source Control icon in the left sidebar (third icon from top)
2. Review your changes
3. Add a descriptive commit message
4. Click the checkmark to commit
5. Click the three dots (...) and select "Push" to send your changes to GitHub

!!! warning "Important"
    When you're done working, either stop or delete your codespace to avoid unnecessary usage. Click on the `<> Code` button, find the three dots next to your codespace, and select "Stop codespace" or "Delete codespace".

## 2. Local Development Environment

If you prefer working on your local machine, follow these steps to set up your environment.

### Prerequisites

You'll need to install:
1. A Git client
2. Python environment manager (we recommend Anaconda)
3. Visual Studio Code (or your preferred code editor)

### Step 1: Install Anaconda

[Download and install Anaconda](https://docs.anaconda.com/free/anaconda/install/index.html) to manage your Python environments.

#### Windows Quick Setup (Alternative)

Windows users can use `winget` to install everything with these commands:

```
winget install -e --id Git.Git
winget install -e --id Anaconda.Miniconda3
winget install -e --id Microsoft.VisualStudioCode
```

### Step 2: Create a Python Environment

1. Open Anaconda Prompt (Windows) or Terminal (MacOS/Linux)
2. Create a new environment:
   ```
   conda create -n CAPLEX python
   ```
3. Activate the environment:
   ```
   conda activate CAPLEX
   ```
4. Install MkDocs Material:
   ```
   pip install mkdocs-material
   ```

### Step 3: Set Up Git and GitHub

1. [Create a GitHub account](https://github.com/signup) if you don't have one
2. Fork the [OSIPI CAPLEX repository](https://github.com/OSIPI/OSIPI_CAPLEX)
3. Clone your fork to your local machine:
   ```
   git clone https://github.com/YOUR-USERNAME/OSIPI_CAPLEX.git
   ```
4. Configure Git with your identity:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### Step 4: Work on the Website Locally

1. Navigate to your repository folder:
   ```
   cd OSIPI_CAPLEX
   ```
2. Switch to the development branch:
   ```
   git checkout main-major-development
   ```
3. Start the local server:
   ```
   mkdocs serve
   ```
4. Open http://127.0.0.1:8000 in your browser
5. Make changes to the files using your code editor
6. Save the files to see the changes instantly in your browser

### Step 5: Submit Your Changes

1. Commit your changes:
   ```
   git add .
   git commit -m "Brief description of your changes"
   ```
2. Push to your fork:
   ```
   git push origin main-major-development
   ```
3. Create a pull request:
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Review your changes and click "Create pull request"

## Markdown and Website Editing Guide

Now that you have your environment set up, let's look at how to edit content.

### Understanding the Website Structure

The OSIPI CAPLEX website is built using MkDocs with the Material theme. Here's what you need to know:

- `mkdocs.yml` - Main configuration file that defines the website structure
- `docs/` - Directory containing all the website content as Markdown files
- `docs/stylesheets/` - Custom CSS for styling
- `docs/javascripts/` - Custom JavaScript functionality

### Essential Markdown Syntax

#### 1. Headers

Create headers of different levels using `#` symbols:

```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection Heading (H3)
```

#### 2. Links and Anchors

Create links to other pages or sections:

```markdown
[Link text](destination.md)
[Link to section](#section-id)
[External link](https://example.com){target="_blank"}
```

Create anchor points for deep linking:
```markdown
<a id="unique-id"></a>
```

#### 3. Tables

Create tables using the pipe syntax:

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

For multi-line cell content, use HTML line breaks (`<br>`).

#### 4. Images

Add images with optional width and alignment:

```markdown
![Alt text](path/to/image.png)
![Alt text](path/to/image.png){ width="300" }
![Alt text](path/to/image.png){ align=right }
```

#### 5. Mathematics

Use MathJax for mathematical equations:

```markdown
Inline equation: $E = mc^2$

Block equation:
$$
\frac{d}{dx}f(x) = \lim_{h \to 0}\frac{f(x+h) - f(x)}{h}
$$
```

#### 6. Advanced Features

Create notes, warnings, and expandable sections:

```markdown
!!! note "Optional Title"
    This is a note.

!!! warning
    This is a warning.

??? question "Expandable section"
    This content is hidden until clicked.
```

Create tabs for alternative content:

```markdown
=== "Tab 1"
    Content for tab 1

=== "Tab 2"
    Content for tab 2
```

### Common Tasks

#### Adding a New Page

1. Create a new `.md` file in the appropriate directory
2. Add it to the navigation section in `mkdocs.yml`

#### Adding Interactive Buttons

Use this HTML to add a hyperlink button:

```html
<button class="md-button md-button--hyperlink">COPY LINK</button>
```

#### Adding Abbreviations

Edit the `includes/abbreviations.md` file to add new abbreviations that will be automatically recognized throughout the site.

## Getting Help

If you need assistance:

1. Check the [MkDocs Material Reference](https://squidfunk.github.io/mkdocs-material/reference/)
2. Submit a question in the [GitHub Issues](https://github.com/OSIPI/OSIPI_CAPLEX/issues)
3. For lexicon resources, contact [Ben Dickie](mailto:ben.dickie@manchester.ac.uk)
