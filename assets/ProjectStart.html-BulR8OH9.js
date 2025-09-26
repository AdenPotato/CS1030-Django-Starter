import{_ as s,c as a,e,o as t}from"./app-C7Rm6vR6.js";const l={};function i(p,n){return t(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="ge02-project-start" tabindex="-1"><a class="header-anchor" href="#ge02-project-start"><span>GE02 Project Start</span></a></h1><p>Starting the project is quite simple, we are just going to understand what we installed and what we need.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">pip freeze &gt; requirements.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Running this in our virutal enviorment in a termnial lets us see what prerequistes we need for our project.</p><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><p>We will make a new branch for our project, this lets us make a seperate section of code that lets us modify code while keeping a old backup of our code.</p><p>running <code>git checkout -b GE02</code> will create a new branch of code called GE02. we will also create a <code>.gitignore</code> file that will tell github to ignore files to our repo</p><p>the file will look like this:</p><details><summary>.gitignore</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># Byte-compiled / optimized / DLL files</span>
<span class="line">__pycache__/</span>
<span class="line">django_project/__pycache__/</span>
<span class="line">*.py[codz]</span>
<span class="line">*$py.class</span>
<span class="line"></span>
<span class="line"># C extensions</span>
<span class="line">*.so</span>
<span class="line"></span>
<span class="line"># Distribution / packaging</span>
<span class="line">.Python</span>
<span class="line">build/</span>
<span class="line">develop-eggs/</span>
<span class="line">dist/</span>
<span class="line">downloads/</span>
<span class="line">eggs/</span>
<span class="line">.eggs/</span>
<span class="line">lib/</span>
<span class="line">lib64/</span>
<span class="line">parts/</span>
<span class="line">sdist/</span>
<span class="line">var/</span>
<span class="line">wheels/</span>
<span class="line">share/python-wheels/</span>
<span class="line">*.egg-info/</span>
<span class="line">.installed.cfg</span>
<span class="line">*.egg</span>
<span class="line">MANIFEST</span>
<span class="line"></span>
<span class="line"># PyInstaller</span>
<span class="line">#  Usually these files are written by a python script from a template</span>
<span class="line">#  before PyInstaller builds the exe, so as to inject date/other infos into it.</span>
<span class="line">*.manifest</span>
<span class="line">*.spec</span>
<span class="line"></span>
<span class="line"># Installer logs</span>
<span class="line">pip-log.txt</span>
<span class="line">pip-delete-this-directory.txt</span>
<span class="line"></span>
<span class="line"># Unit test / coverage reports</span>
<span class="line">htmlcov/</span>
<span class="line">.tox/</span>
<span class="line">.nox/</span>
<span class="line">.coverage</span>
<span class="line">.coverage.*</span>
<span class="line">.cache</span>
<span class="line">nosetests.xml</span>
<span class="line">coverage.xml</span>
<span class="line">*.cover</span>
<span class="line">*.py.cover</span>
<span class="line">.hypothesis/</span>
<span class="line">.pytest_cache/</span>
<span class="line">cover/</span>
<span class="line"></span>
<span class="line"># Translations</span>
<span class="line">*.mo</span>
<span class="line">*.pot</span>
<span class="line"></span>
<span class="line"># Django stuff:</span>
<span class="line">*.log</span>
<span class="line">local_settings.py</span>
<span class="line">db.sqlite3</span>
<span class="line">db.sqlite3-journal</span>
<span class="line"></span>
<span class="line"># Flask stuff:</span>
<span class="line">instance/</span>
<span class="line">.webassets-cache</span>
<span class="line"></span>
<span class="line"># Scrapy stuff:</span>
<span class="line">.scrapy</span>
<span class="line"></span>
<span class="line"># Sphinx documentation</span>
<span class="line">docs/_build/</span>
<span class="line"></span>
<span class="line"># PyBuilder</span>
<span class="line">.pybuilder/</span>
<span class="line">target/</span>
<span class="line"></span>
<span class="line"># Jupyter Notebook</span>
<span class="line">.ipynb_checkpoints</span>
<span class="line"></span>
<span class="line"># IPython</span>
<span class="line">profile_default/</span>
<span class="line">ipython_config.py</span>
<span class="line"></span>
<span class="line"># pyenv</span>
<span class="line">#   For a library or package, you might want to ignore these files since the code is</span>
<span class="line">#   intended to run in multiple environments; otherwise, check them in:</span>
<span class="line"># .python-version</span>
<span class="line"></span>
<span class="line"># pipenv</span>
<span class="line">#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.</span>
<span class="line">#   However, in case of collaboration, if having platform-specific dependencies or dependencies</span>
<span class="line">#   having no cross-platform support, pipenv may install dependencies that don&#39;t work, or not</span>
<span class="line">#   install all needed dependencies.</span>
<span class="line">#Pipfile.lock</span>
<span class="line"></span>
<span class="line"># UV</span>
<span class="line">#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.</span>
<span class="line">#   This is especially recommended for binary packages to ensure reproducibility, and is more</span>
<span class="line">#   commonly ignored for libraries.</span>
<span class="line">#uv.lock</span>
<span class="line"></span>
<span class="line"># poetry</span>
<span class="line">#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.</span>
<span class="line">#   This is especially recommended for binary packages to ensure reproducibility, and is more</span>
<span class="line">#   commonly ignored for libraries.</span>
<span class="line">#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control</span>
<span class="line">#poetry.lock</span>
<span class="line">#poetry.toml</span>
<span class="line"></span>
<span class="line"># pdm</span>
<span class="line">#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.</span>
<span class="line">#   pdm recommends including project-wide configuration in pdm.toml, but excluding .pdm-python.</span>
<span class="line">#   https://pdm-project.org/en/latest/usage/project/#working-with-version-control</span>
<span class="line">#pdm.lock</span>
<span class="line">#pdm.toml</span>
<span class="line">.pdm-python</span>
<span class="line">.pdm-build/</span>
<span class="line"></span>
<span class="line"># pixi</span>
<span class="line">#   Similar to Pipfile.lock, it is generally recommended to include pixi.lock in version control.</span>
<span class="line">#pixi.lock</span>
<span class="line">#   Pixi creates a virtual environment in the .pixi directory, just like venv module creates one</span>
<span class="line">#   in the .venv directory. It is recommended not to include this directory in version control.</span>
<span class="line">.pixi</span>
<span class="line"></span>
<span class="line"># PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm</span>
<span class="line">__pypackages__/</span>
<span class="line"></span>
<span class="line"># Celery stuff</span>
<span class="line">celerybeat-schedule</span>
<span class="line">celerybeat.pid</span>
<span class="line"></span>
<span class="line"># Redis</span>
<span class="line">*.rdb</span>
<span class="line">*.aof</span>
<span class="line">*.pid</span>
<span class="line"></span>
<span class="line"># RabbitMQ</span>
<span class="line">mnesia/</span>
<span class="line">rabbitmq/</span>
<span class="line">rabbitmq-data/</span>
<span class="line"></span>
<span class="line"># ActiveMQ</span>
<span class="line">activemq-data/</span>
<span class="line"></span>
<span class="line"># SageMath parsed files</span>
<span class="line">*.sage.py</span>
<span class="line"></span>
<span class="line"># Environments</span>
<span class="line">.env</span>
<span class="line">.envrc</span>
<span class="line">.venv</span>
<span class="line">.djvenv/</span>
<span class="line">djvenv/</span>
<span class="line">djvenv/*</span>
<span class="line">env/</span>
<span class="line">venv/</span>
<span class="line">ENV/</span>
<span class="line">env.bak/</span>
<span class="line">venv.bak/</span>
<span class="line"></span>
<span class="line"># Spyder project settings</span>
<span class="line">.spyderproject</span>
<span class="line">.spyproject</span>
<span class="line"></span>
<span class="line"># Rope project settings</span>
<span class="line">.ropeproject</span>
<span class="line"></span>
<span class="line"># mkdocs documentation</span>
<span class="line">/site</span>
<span class="line"></span>
<span class="line"># mypy</span>
<span class="line">.mypy_cache/</span>
<span class="line">.dmypy.json</span>
<span class="line">dmypy.json</span>
<span class="line"></span>
<span class="line"># Pyre type checker</span>
<span class="line">.pyre/</span>
<span class="line"></span>
<span class="line"># pytype static type analyzer</span>
<span class="line">.pytype/</span>
<span class="line"></span>
<span class="line"># Cython debug symbols</span>
<span class="line">cython_debug/</span>
<span class="line"></span>
<span class="line"># PyCharm</span>
<span class="line">#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can</span>
<span class="line">#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore</span>
<span class="line">#  and can be added to the global gitignore or merged into this file.  For a more nuclear</span>
<span class="line">#  option (not recommended) you can uncomment the following to ignore the entire idea folder.</span>
<span class="line">#.idea/</span>
<span class="line"></span>
<span class="line"># Abstra</span>
<span class="line"># Abstra is an AI-powered process automation framework.</span>
<span class="line"># Ignore directories containing user credentials, local state, and settings.</span>
<span class="line"># Learn more at https://abstra.io/docs</span>
<span class="line">.abstra/</span>
<span class="line"></span>
<span class="line"># Visual Studio Code</span>
<span class="line">#  Visual Studio Code specific template is maintained in a separate VisualStudioCode.gitignore</span>
<span class="line">#  that can be found at https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore</span>
<span class="line">#  and can be added to the global gitignore or merged into this file. However, if you prefer,</span>
<span class="line">#  you could uncomment the following to ignore the entire vscode folder</span>
<span class="line"># .vscode/</span>
<span class="line"></span>
<span class="line"># Ruff stuff:</span>
<span class="line">.ruff_cache/</span>
<span class="line"></span>
<span class="line"># PyPI configuration file</span>
<span class="line">.pypirc</span>
<span class="line"></span>
<span class="line"># Marimo</span>
<span class="line">marimo/_static/</span>
<span class="line">marimo/_lsp/</span>
<span class="line">__marimo__/</span>
<span class="line"></span>
<span class="line"># Streamlit</span>
<span class="line">.streamlit/secrets.toml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>after this i would commit your stage and commit those files. I do this through my VScode but you can do this through your termnial as well. <a href="https://education.github.com/git-cheat-sheet-education.pdf" target="_blank" rel="noopener noreferrer">This Link</a> will help you understand git commands and will be a useful resource for using git.</p><h1 id="creating-the-portfolio-app" tabindex="-1"><a class="header-anchor" href="#creating-the-portfolio-app"><span>Creating the Portfolio App</span></a></h1><p>We will first make our portfolio app. This is done with running <code>django-admin startapp portfolio_app</code> in our terminal.</p><p>This creates our protfiol app and adds files into it. After that we will need to edit or django_project&#39;s settings.py file, adding portfolio_app to our installed apps and adding an authentication backend:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token comment"># ...</span></span>
<span class="line"><span class="token string">&#39;django.contrib.auth&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token string">&#39;django.contrib.contenttypes&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token string">&#39;django.contrib.sessions&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token string">&#39;django.contrib.messages&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token string">&#39;Django.contrib.staticfiles&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment"># Add your app name here</span></span>
<span class="line"><span class="token string">&#39;portfolio_app&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Add support for authenticating users</span></span>
<span class="line">AUTHENTICATION_BACKENDS <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token string">&#39;django.contrib.auth.backends.ModelBackend&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="defining-url-path-and-view" tabindex="-1"><a class="header-anchor" href="#defining-url-path-and-view"><span>Defining URL path and view</span></a></h1><p>#TODO ADD RESOURCES</p><p>Open django_project urls.py to add our admin path to include specfiic urls that will be created in the portfolio_app urls.py. You need to import include:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin</span>
<span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path<span class="token punctuation">,</span> include</span>
<span class="line">urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">path<span class="token punctuation">(</span><span class="token string">&#39;admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">#connect path to portfolio_app urls</span></span>
<span class="line">path<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;portfolio_app.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After this we will update our <code>portfolio_app/views.py</code> by defining the following view for the home page:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render</span>
<span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse</span>
<span class="line"><span class="token comment"># Create your views here.</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token comment"># Render the HTML template index.html with the data in the</span></span>
<span class="line">context variable<span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&#39;home page&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and we will now create a urls.py file in our portfolio_app that contains a path to the defined view:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path</span>
<span class="line"><span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views</span>
<span class="line">urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token comment">#path function defines a url pattern</span></span>
<span class="line"><span class="token comment">#&#39;&#39; is empty to represent based path to app</span></span>
<span class="line"><span class="token comment"># views.index is the function defined in views.py</span></span>
<span class="line"><span class="token comment"># name=&#39;index&#39; parameter is to dynamically create url</span></span>
<span class="line"><span class="token comment"># example in html &lt;a href=&quot;{% url &#39;index&#39; %}&quot;&gt;Home&lt;/a&gt;.</span></span>
<span class="line">path<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>index<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>now running the server with <code>python3 manage.py runserer</code> on linux or <code>py manage.py runserver</code> on windows. Now open <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8000</a> and you should see a home page.</p><p>#TODO add picture example of what it should look like</p><p>Now we will update <code>portfolio_apps/views.py</code> views by defining the following view for the home page</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render</span>
<span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse</span>
<span class="line"><span class="token comment"># Create your views here.</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token comment"># Render index.html</span></span>
<span class="line"><span class="token keyword">return</span> render<span class="token punctuation">(</span> request<span class="token punctuation">,</span> <span class="token string">&#39;portfolio_app/index.html&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>openning <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8000</a> will result in a issue which we will fix next part.</p><h1 id="creating-the-template" tabindex="-1"><a class="header-anchor" href="#creating-the-template"><span>Creating the Template</span></a></h1><p>First lets create a folder called templates in our portfolio_app folder, then create a folder called portfolio app in that templates folder, the directory should look like <code>portfolio_app/templates/portfolio_app</code>.</p><p>Now create a <code>base_template.html</code> file in <code>templates/portfolio_app</code> folder. This will contain the html needed on every page, such as the navigation menu. Paste the following into it:</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">{% load static %}</span>
<span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>UCCS CS Students<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,</span>
<span class="line">initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Bootstrap demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span></span>
<span class="line"><span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap</span>
<span class="line">.min.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDE</span>
<span class="line">XuppvnDJzQIu9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anonymous<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container-fluid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- Navbar--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbar navbar-expand-lg bg-body-tertiary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{% static &#39;images/uccs_logo.gif&#39; %}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container-fluid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbar-toggler<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token attr-name">data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>collapse<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#navbarNavAltMarkup<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbarNavAltMarkup<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Toggle navigation<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbar-toggler-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>collapse navbar-collapse<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbarNavAltMarkup<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbar-nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- {% url &#39;index&#39; %} is defined in url path to</span>
<span class="line">dynamically create url --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-link active<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{%</span>
<span class="line">url &#39;index&#39; %}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Menu 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Menu 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">{% if user.is_authenticated %}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{% url &#39;logout&#39; %}?next={{</span>
<span class="line">request.path }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Logout {{user}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">{% else %}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{% url &#39;login&#39; %}?next={{</span>
<span class="line">request.path }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">{% endif %}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-sm-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- add block content from html template --&gt;</span></span>
<span class="line">{% block content %}</span>
<span class="line">{% endblock %}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>in this piece of code you will notice <code>{% codeblock %}</code>, these sections are where django will fill in the data provided form the database. for now we don&#39;t have to worry to much at these, but later these are the basis of using this framework.</p><p>now lets create a index html in the same folder as the last directory, title it <code>index.html</code>, we will put this:</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token comment">&lt;!-- inherit from base.html--&gt;</span></span>
<span class="line">{% extends &quot;portfolio_app/base_template.html&quot; %}</span>
<span class="line"><span class="token comment">&lt;!-- Replace block content in base_template.html --&gt;</span></span>
<span class="line">{% block content %}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Computer Science Portfolios<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>More to come from [and your name goes here]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">{% endblock %}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Make sure to fill in your name.</p><p>Restarting our server results in seeing an error. Try and investigate why this error occured and try to fix it. (Hint look at the login field in the html)</p><p>Now your website should look good and should be functioning.</p><h1 id="static-content" tabindex="-1"><a class="header-anchor" href="#static-content"><span>Static Content</span></a></h1><p>Static content is content such as pictures. To add static content we first need to add to our <code>settings.py</code></p><p>We need the top of the <code>settings.py</code> file to look like this:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> os</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>next, near the bottom of the file we need to add settings that tell Django where to find the static content of the website. this is built from the BASE_DIR defined in <code>settings.py</code> already.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># Static files (CSS, JavaScript, Images)</span></span>
<span class="line"><span class="token comment"># https://docs.djangoproject.com/en/4.2/howto/static-files/</span></span>
<span class="line">STATIC_URL <span class="token operator">=</span> <span class="token string">&#39;static/&#39;</span></span>
<span class="line">STATICFILES_DIRS <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line">MEDIA_URL <span class="token operator">=</span> <span class="token string">&#39;/images/&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At the top of our <code>base_template.html</code> we add <code>{% load static %}</code> above <code>&lt;!DOCTYPE html&gt;</code></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">{% load static %}</span>
<span class="line"></span>
<span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if you want to test this out you can download <a href="https://brand.uccs.edu/sites/g/files/kjihxj1416/files/inline-images/uccs-signature-email.gif" target="_blank" rel="noopener noreferrer">This Picture</a></p><p>and replace</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbar-brand<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Navbar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>with</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{% static &#39;images/uccs_logo.gif&#39; %}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After this, open <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8000</a> and you should see the logo.</p><p>Now version on your branch and update your remote repository. You can merge with your main branch and tag the code as GE02.</p><p>We have now finished the first section of our website!</p><p><a href="https://docs.google.com/document/d/1qFe5nsJ5JPfvojJ15Mr6Z49xBQXN5AvY/edit#heading=h.1fob9te" target="_blank" rel="noopener noreferrer">orignal Resource</a></p>`,54)])])}const o=s(l,[["render",i]]),u=JSON.parse(`{"path":"/ProjectStart/ProjectStart.html","title":"GE02 Project Start","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1758911533000,"contributors":[{"name":"AdenPotato","username":"AdenPotato","email":"AdenKappa403@gmail.com","commits":6,"url":"https://github.com/AdenPotato"}],"changelog":[{"hash":"443970a16a6cecea9661c08cdbf2c45519d6dd16","time":1758911533000,"email":"adenkappa403@gmail.com","author":"AdenPotato","message":"commit didn't work"},{"hash":"03dab7286f634b57610e4a623920674daa047401","time":1758566987000,"email":"AdenKappa403@gmail.com","author":"AdenPotato","message":"Finished GE02 Content"},{"hash":"42c9735600842f4cfef3abdb4912495161aa30db","time":1758557956000,"email":"AdenKappa403@gmail.com","author":"AdenPotato","message":"fixing sidebar and added projectstart"},{"hash":"6a5c75a68525416bda6f27fd9fd8d0048bfeb233","time":1758556920000,"email":"AdenKappa403@gmail.com","author":"AdenPotato","message":"added git section to projectStart"},{"hash":"3d846d3af4ea232761357bd00304c84cdd54d5ff","time":1758341156000,"email":"AdenKappa403@gmail.com","author":"AdenPotato","message":"added git and new sidebar"},{"hash":"b4d7227583b22f6f50275c482f63ad41ca18cb23","time":1758340270000,"email":"AdenKappa403@gmail.com","author":"AdenPotato","message":"adding Project start and pre added understanding django"}]},"filePathRelative":"ProjectStart/ProjectStart.md"}`);export{o as comp,u as data};
