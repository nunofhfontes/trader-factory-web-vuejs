    This project consists on a Vue.js web application, to support the common people with the right tools and information to help analyze financial markets.

    The base features will be:
    -> dashboard
    -> portfolio builder
    -> fundamentals
    -> financial analysis

    About the tech, this is just a regular Vue.js webapplication with a store (VueX) and a router (Vue router).
    It will also integrate components from other apps in the form of web components (W3C specification), fully encapsulated in a Shadow DOM and represented by their custom element (example: <trader-factory-portfolio></trader-factory-portfolio>).

    To support this web application, there is an API (trader-factory-quotes project), built in Node which in turns is supported by a hybrid Database system. This DB system is composed by a PostegreSQL for CRUD and a Mondodb for queries. Alongside the Node backend, there will be another (future project in Python) to analyse and work on data to provides financial analysis.
