<template><div><h1 id="setup-for-windows" tabindex="-1"><a class="header-anchor" href="#setup-for-windows"><span>Setup for Windows</span></a></h1>
<p>First install python from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">here</a>
Click the python download button and follow the install process for the installer.
#TODO add Pictures and make sure path is here</p>
<p>Windows is a little bit more complicated to setup your virtual enviorment for.
If you are using an IDE like pycharm, you shouldn't have to worry about this process.</p>
<p>I would recomend using a bash-like command line interface that would work well with windows or install
a WSL (windows subsystem for linux) Virtual Machine. Use <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener noreferrer">this link</a>and
follow the instructions to install wsl. This will allow you to use The linux install instructions <RouteLink to="/getting-started/Linux.html">here</RouteLink></p>
<p>Doing this process on windows does require you to allow permissions for a script to opperate. if you are not comfortable with this
i would go through the instructions to install WSL and follow the linux install instructions linked above.</p>
<h1 id="now-the-setup" tabindex="-1"><a class="header-anchor" href="#now-the-setup"><span>Now the setup</span></a></h1>
<p>First lets figure out how we want the project structured. Personally i would create a folder on our <code v-pre>C:</code> drive called School.
and in that folder we can create a folder for our class called CS1030. The directory should look like <code v-pre>C:\School\CS1030\Projects</code>.
This is where we will create our projects for the class.</p>
<p>Now create a folder for our portfolio, name it as such as well.
This folder will be the place where all of our portfolio will be held.</p>
<p>now if you right click in the empty folder you can open in terminal, this just opens a terminal in that directory.</p>
<p>To create our Virtual Enviorment we run the command</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code><span class="line">python <span class="token operator">-</span>m venv djvenv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This creates the virtual enviroment, it might take a second so let it run till we return to the termnial.
now is when we allow for scripts to be ran in this powershell. If you don't want to be forced to do this every time you run powershell,
you can run powershell as admin or use a bash interface, such as WSL.</p>
<p>you can run</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code><span class="line"><span class="token function">Set-ExecutionPolicy</span> Unrestricted <span class="token operator">-</span>Scope <span class="token keyword">Process</span></span>
<span class="line"><span class="token punctuation">.</span>\\djvenv\Scripts\activate<span class="token punctuation">.</span>ps1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This just runs a script for powershell that puts your powershell to use that virtual enviroment.</p>
<p>#TODO add picture of what this looks like</p>
<p>This is where we can now run python commands and starting installing python for our install:</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre v-pre><code><span class="line">py <span class="token operator">-</span>m pip install django</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


