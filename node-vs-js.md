### Write in your own words the following:

-   What are 3 things node.js has that the client side javascript doesn’t
    have. And the reasons why.
    -   Browser - Node.js is a runtime environment that doesn't require a browser to run.
    -   File System/OS - Node.js has access to the file system and other OS features and therefore can read and write files. Javascript doesn't have same access to the OS for security reasons.
    -   Non-blocking I/O - Node.js is non-blocking I/O because it has the ability to run code in the background without blocking the main thread(it uses the event loop to do so).
-   What are 3 things the client side javascript has that node.js doesn’t
    have. And the reasons why.
    -   Different engines - Node.js uses V8 as its engine. Javascript can run on different engines(based on the browser it runs in) and therefore can use features implemented in those engines.
    -   DOM - Javascript is run by the browser and therefore can access the DOM and render elements.
    -   Frameworks - Client side Javascript can use different frameworks while Node is a framework in itself and therefore can only use imported modules(libraries).
