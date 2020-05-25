(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{210:function(t,s,n){"use strict";n.r(s);var e=n(28),a=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"how-to-ping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-ping"}},[t._v("#")]),t._v(" How to Ping")]),t._v(" "),n("p",[t._v("The Ping API is an easy way to integrate your scheduled jobs with Cronhub monitors.")]),t._v(" "),n("p",[n("strong",[t._v("To integrate your job with a Cronhub monitor, you need to ping from your cron job every time it runs.")])]),t._v(" "),n("p",[t._v("The ping can be any HTTP request. If you only want to monitor the schedule of your job, then you need to ping only once after your job has successfully run. However, If you're going to monitor the schedule as well as the running time you need to ping twice, when your job starts and when your job finishes. This way Cronhub will be able to track the running time (or processing time) of your job and alert you if it takes longer than expected to finish.")]),t._v(" "),n("h2",{attrs:{id:"ping-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ping-api"}},[t._v("#")]),t._v(" Ping API")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Endpoint")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("https://cronhub.io/ping/<monitor-uuid>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Use this endpoint if you only want to monitor the successful runs of your job on schedule.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("https://cronhub.io/start/<monitor-uuid>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Use this endpoint to acknowledge the start of your job. Use this endpoint if you additionally want to monitor the running time of your job.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("https://cronhub.io/finish/<monitor-uuid>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Use this endpoint to acknowledge the finish of your job. Use this endpoint if you additionally want to monitor the running time of your job.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("https://cronhub.io/fail/<monitor-uuid>")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v('Use this endpoint to acknowledge the failure of your job. After pinging this endpoint Cronhub will change the state of your monitor to "ALERT" and notify you or your team.')])])])]),t._v(" "),n("h2",{attrs:{id:"making-pings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#making-pings"}},[t._v("#")]),t._v(" Making pings")]),t._v(" "),n("p",[t._v("Below I have some handy examples that you can use for integration. I've started with "),n("code",[t._v("Crontab")]),t._v(" integration because most of the cron jobs on unix based systems are defined with this program.")]),t._v(" "),n("h2",{attrs:{id:"crontab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontab"}},[t._v("#")]),t._v(" Crontab")]),t._v(" "),n("p",[t._v("Crontab is a UNIX program that helps you to communicate with the cron deamon on a unix based system. The cron daemon is a long-running process that runs commands at specific dates and times. In order to tell cron daemon what commands it should run and when you need crontab entries.")]),t._v(" "),n("p",[t._v("On your UNIX system, you can run "),n("code",[t._v("crontab -l")]),t._v(" to display crontab and see if there are any scheduled tasks. Run "),n("code",[t._v("crontab -e")]),t._v(" to edit the crontab.")]),t._v(" "),n("p",[t._v("Below we have an example of a crontab entry that you can add to your system's crontab entry. Of course, you will have to replace the script name as well as the ping URL with your own script and the monitor URL.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("* * * * * "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsS --retry 3 https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" your_script.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsS --retry 3 https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("Please note the difference between "),n("code",[t._v(";")]),t._v(" and "),n("code",[t._v("&&")]),t._v(".")]),t._v(" "),n("p",[n("code",[t._v('echo "Hello" ; echo "world"')]),t._v(" means run "),n("code",[t._v('echo "world"')]),t._v(' no matter what the exit status of the previous command echo "Hello".')]),t._v(" "),n("p",[t._v("Whereas in case of echo "),n("code",[t._v('"Hello " && echo "world"')]),t._v(", "),n("code",[t._v('echo "world"')]),t._v(' will only run if the first command (echo "Hello") is a success (i.e. exit status 0).')])]),t._v(" "),n("h2",{attrs:{id:"php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[t._v("#")]),t._v(" PHP")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ping when your job starts")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_get_contents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your code goes here...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ping when your job is finished")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_get_contents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"bash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[t._v("#")]),t._v(" Bash")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping when your job starts")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsS --retry 3 https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031\n\nyour_script.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping when your job is finished")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsS --retry 3 https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031\n")])])]),n("h2",{attrs:{id:"python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" urllib2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping when your job starts")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  urllib2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urlopen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your code goes here...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping when your job is finished")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  urllib2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urlopen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),n("h2",{attrs:{id:"node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" https "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ping when your job starts")]),t._v("\nhttps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cronhub.io/start/1f5e3410-254c-11e8-b61d-55875966d031"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your code goes here...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ping when your job is finished")]),t._v("\nhttps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cronhub.io/finish/1f5e3410-254c-11e8-b61d-55875966d031"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=a.exports}}]);