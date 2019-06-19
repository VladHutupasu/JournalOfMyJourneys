# LYNX API Documentation

### Introduction

The LYNX Trading API is a simple yet powerful interface through which LYNX clients can automate their trading strategies, request market data and monitor your account balance and portfolio in real time.

### Audience

Our LYNX Trading API components are aimed at experienced professional developers willing to enhance the current TWS functionality. Regrettably, LYNX cannot offer any programming consulting. Before contacting our API support, please always refer to our available documentation and sample applications.

### How to use this guide

This guide reflects the very latest version of the LYNX Trading API -**9.72 and higher**- and constantly references the Java and Python **Testbed** sample projects to demonstrate the LYNX Trading API functionality. All code snippets are extracted from these projects and we suggest all those users new to the LYNX Trading API to get familiar with them in order to quickly understand the fundamentals of our programming interface. The **Testbed** sample projects can be found within the **samples** folder of the LYNX Trading API's installation directory.

### Requirements

1. To obtain the LYNX Trading API source and sample code, download the [API Components](API_versions.md) (API version 9.73 or higher is required).
2. To make use of LYNX Trading API 9.73+, will require TWS Build 952.x or higher.
3. A working knowledge of the programming language our **Testbed** sample projects are developed in.
4. **Python version 3.1** or higher is required to interpret Python API client.

### Limitations

Our programming interface is designed to automate some of the operations a user normally performs manually within the TWS Software such as placing orders, monitoring your account balance and positions, viewing an instrument's live data... etc. There is no logic within the API other than to ensure the integrity of the exchanged messages. Most validations and checks occur in the backend of TWS and our servers. Because of this it is highly convenient to familiarize with the TWS itself, in order to gain a better understanding on how our platform works. Before spending precious development time troubleshooting on the API side, it is recommended to first experiment with the TWS directly.

**Remember:** If a certain feature or operation is not available in the TWS, it will not be available on the API side either!

### Requests

The TWS is designed to accept up to **fifty** messages per second coming from the **client** side. Anything coming from the client application to the TWS counts as a message (i.e. requesting data, placing orders, requesting your portfolio... etc.). This limitation is applied to **all** connected clients in the sense were all connected client applications to the same instance of TWS combined cannot exceed this number. On the other hand, there are **no limits** on the amount of messages the TWS can send to the client application.

### Paper Trading

If your regular trading account has been approved and funded, you can use your Account Management page to open a [Paper Trading Account](https://www.lynx.nl/service/hoe-een-testrekening-openen/) which lets you use the full range of trading facilities in a simulated environment using real market conditions. Using a Paper Trading Account will allow you not only to get familiar with the LYNX Trading API but also to test your trading strategies without risking your capital. Note the paper trading environment has inherent limitations.
