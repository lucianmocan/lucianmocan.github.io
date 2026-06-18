---
layout: project
title: "(Project) PCAP - an incomplete network analyzer "
date: "10 October 2024"
---

I wanted to get a better grasp of how network protocols actually work, so I built a custom network analyzer in C and C++ to process pcap files and live traffic. I structured the code to keep the core packet-parsing logic completely separate from the user interface. It decodes a wide variety of protocols, starting from basics like Ethernet and IPv4 all the way up to DNS, DHCP, and HTTP. 

Right now it runs through a simple command-line interface, but because the backend is isolated, it will be easy to attach a visual interface or a web app later on.

#### Related Documents

You can check out the code and see how I put it together on [GitHub](https://github.com/lucianmocan/pcap-network-analyzer).