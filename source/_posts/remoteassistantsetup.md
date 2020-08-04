---
title: Remote-Assistant Setup
date: 2020-05-26 15:39:50
tags:
- remote-assistant
- google
---

## What is remote assistant?
Remote-Assistant is an API server that combined with an old Android phone and a server, you can run google commands and integrate this server into other devices.
Remote-Assistant generates API endpoints for routines you setup.

So say you've made a Google Home routine that gets your room ready to watch a movie. It might look like:
```
turn on the lights
make the lights 20 percent brightness
turn on the tv
open netflix
```

You can enter that routine into Remote-Assistant, and Remote-Assistant will generate an API endpoint to call to activate this (```/api/v1/call_routine?id=movie_time```).
This endpoint can be then called by any internal applications you write (Android homescreen widget, Rainmeter, simply visiting the URL on your phone, etc)

## Setup
### Hardware
You will need
- a server: for this guide, and for my own home implmentation, I use a Raspberry Pi. To make these API's externally reachable outside of your home network, you can setup a Digital Ocean VPS or something
- An old Android phone. For this to work with your home devices (smart bulbs, etc), you will want this device to be on your home network, NOT an emulator. I'm using my old Moto G5 Plus, but any cheap old thing will do

### Install Remote-Assistant server
On the server, run the following commands
```bash Install Remote-Assistant https://github.com/install_remote_assistant Github
$ git clone https://github.com/bendotbike/remote-assistant.git ~/remote-assistant
$ cd ~/remote-assistant
$ chmod +x *.sh
$ ./add_auth_device.sh --test_device
$ pm2 add index.js --name "Remote-Assistant" 
$ pm2 start Remote-Assistant
$ ./server_status.sh --verbose
```