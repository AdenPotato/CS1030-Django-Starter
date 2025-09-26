<template><div><h1 id="linux-mac" tabindex="-1"><a class="header-anchor" href="#linux-mac"><span>Linux / Mac</span></a></h1>
<p>Before you start this process make sure that Python3 is installed.
On my machine i had to install python3-full to get my virutal enviroment set up.
That is done by entering this into the terminal:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3-full</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now lets create your virtual enviorment, you can setup the file structure
however you would like, personally i set up mine as such</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">/CS1030/portfolio</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is accomplished through</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">mkdir</span> CS1030</span>
<span class="line"><span class="token builtin class-name">cd</span> CS1030</span>
<span class="line"><span class="token function">mkdir</span> portfolio</span>
<span class="line"><span class="token builtin class-name">cd</span> portfolio</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will lead you into the portfolio folder. we will create our virtual enviorment from there,
we do this with the command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">python3 <span class="token parameter variable">-m</span> venv djvenv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command tells python to create a virtual enviroment in that directory called djvenv.
we tell our system we want that as our source directory by doing:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">source</span> djvenv/bin/activate</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>this will result into your terminal to be in this virtual enviorment.
we can now install update pip and install django.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip</span>
<span class="line"></span>
<span class="line">pip <span class="token function">install</span> django</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that django installed we can now start our django project.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">django-admin startproject django_project</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>this command tells django to start a project called django_project.
we will now reorder our file structure to make it easier to use.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">mv</span> django_project/manage.py ./</span>
<span class="line"><span class="token function">mv</span> django_project/django_project/* django_project</span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-r</span> django_project/django_project/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>we can now run the command to start the server:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">python3 manage.py runserver</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is where you will use your prefered editor for your machine.
If you are using WSL (windows subsystem for linux) you can type <code v-pre>code .</code> to run VSCode</p>
<p>You can open <a href="http://localhost:8000/" target="_blank" rel="noopener noreferrer">http://localhost:8000/</a>to see if the server is now running!</p>
</div></template>


