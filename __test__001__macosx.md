# TEST ON MAC OS X -- 11/05/2016

################################################################################

➜  post-stream git:(master) ✗ node -v
v6.0.0
➜  post-stream git:(master) ✗ tsc -v
Version 1.8.5
➜  post-stream git:(master) ✗ npm -v
3.8.8


################################################################################


➜  post-stream git:(master) ✗ sw_vers
ProductName:	Mac OS X
ProductVersion:	10.10.5
BuildVersion:	14F1021
➜  post-stream git:(master) ✗ system_profiler SPSoftwareDataType
Software:

    System Software Overview:

      System Version: OS X 10.10.5 (14F1021)
      Kernel Version: Darwin 14.5.0
      Boot Volume: Macintosh HD
      Boot Mode: Normal
      Computer Name: Alberto’s MacBook Pro (2)
      User Name: Alberto Massa (Alberto)
      Secure Virtual Memory: Enabled
      Time since boot: 27 minutes


################################################################################


➜  post-stream git:(master) ✗ npm start

> post-stream@1.0.0 start /Users/Alberto/Code/tmp/post-stream
> node index.js

****** error on starting server: undefined
****** post on /foo:  {}
****** end on pump input: undefined
****** end on pump receive:  undefined
****** end post input: null "OK"
^C
➜  post-stream git:(master) ✗
