The structure of this Forms app uses iterable components that map through a data object. There are three parts to each component group:
1. The "Data" component that contains all raw data (text, numbers, url's, etc)
2. The "Props" component that will receive and display all items from a data item as props
3. A "Map" master component that performs the mapping of all data items into individual props components, then displays them as desired inside a bootstrap <Form> element.
Note: this master component may map all prop-data groups in the app, not just the one it is nested with.