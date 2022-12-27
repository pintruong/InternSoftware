# Data structure and Algothrims

### Data structure 
- Array (Static Data Structure)
    - Array: is a single var that is used to store different elements
    - It is often used when we want to store a list of elements and access them by a single variable.
    - Advantages and Disavantages an Array:
        - Advantages: 
            - Arrays help in code optimization. We can store a large number of values in a single array by writing a small piece of code rather than declaring each variable separately.
            - The time complexity to access any element of an array is O(1), i.e, it takes a constant amount of time to access an element.
        - Disadvantages:
            - The size of an array is fixed. Once the memory is allocated to an array, it cannot be increased or decreased. This prevents us from storing extra data in case we want to
            - Not resizable - while the program is executing we cannot change the size of the array which leads to having to pre-allocate a large amount of memory before running the program causing waste.

- Linked List (Dynamic Data strucuture)
    - Linked List: is a collection of nodes that are linked together. The following node contains the link to the previous node

        Exam:
    
     ![alt text](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)
    
    - Linked List used are often used because of their efficient insertion and deletion. They can be used to implement stacks, queues, and other abstract data types.
    - Advantages and Disavantages an Linked List:
        - Advantages:
            - Linked list is a dynamic data structure so it can grow and shrink at runtime by allocating and deallocating memeory. So there is no need to give initial size of linked list
            - Insertion and deletion of nodes are really easier. Unlike array here we don’t have to shift elements after insertion or deletion of an element. In linked list we just have to update the address present in next pointer of a node.
            - No Memory Wastage
            - Data structures such as stack and queues can be easily implemented using linked list.
        - Disadvantages:
            - More memory is required to store elements in linked list as compared to array. Because in linked list each node contains a pointer and it requires extra memory for itself.
            - Elements or nodes traversal is difficult in linked list. We can not randomly access any element as we do in array by index. For example if we want to access a node at position n then we have to traverse all the nodes before it. So, time required to access a node is large.
            - In linked list reverse traversing is really difficult. In case of doubly linked list its easier but extra memory is required for back pointer hence wastage of memory.

- Map
    - Map: is a data structure that allows storing key-value data, same to object. However, they differ in that:
        - Object only allows using String or Symbol as key.
        - Map allows any data type (String, Number, Boolean, NaN, Object,...) can be key.
    - Map can be used when you want to perform an action on each element in a collection, and gather the results into a new array

- Set 
    - Set: is a collection of unique values. Each value can occur only once in the Set. A Set can hold any value of any data type. Simply the "values" of the elements cannot be the same
    - Set use: specifically for working with duplicate values in the data. In a single line we can create a new Array without duplicate values from an Array with duplicate values.
    - Advantages and Disavantages:
        - Advantages: 
            - Set can be used to store unique values in order to avoid duplications of elements present in the set.
            - Elements in a set are stored in a sorted fashion which makes it efficient.
            - Set are dynamic, so there is no error of overflowing of the set.
            - Searching operation takes O(logN) time complexity.
        - Disadvantages:
            - Elements in a set can only be accessed with pointers, there is no indexing in set like arrays.
            - Set is very complex to implement because of its structure and properties.
            - A set takes O(logN) time complexity for basic operations like insertion and deletion.

    <details>

    <summary>What's the difference between Array and Linked List?</summary>

    | Array | Linked List |
    |-----:|-----------|
    |An array is a collection of elements of a similar data type. |A linked list is a collection of objects known as a node where node consists of two parts, i.e., data and address.|
    |Array elements store in a contiguous memory location. |Linked list elements can be stored anywhere in the memory or randomly stored. |
  
    
    </details>

        <details>
    <summary>What's the difference between Array and Linked Map?</summary>

    | Array | Map |
    |-----:|-----------|
    |An Array is a collection of elements of the same data type.|The map is a hashed structure of key and value pairs.|
    |Array elements store in a contiguous memory location. |The indices of the list are integers starting from 0.|
    ||The keys of the Map can be of any data type.|
    
    </details>

    <sumary>What's the difference between Array and Set?</sumary>

     | Array | Set |
    |-----:|-----------|
    |An ordered, random-access collection|An unordered collection of unique elements.|

    </detail>

### Algorithms

- Algorithms complexity: O(n^2)
    - Algorimths complexity: Algorithm complexity is an input dependent function. 
    - Time complexity is defined as the amount of time taken by an algorithm to run, as a function of the length of the input. It measures the time taken to execute each statement of code in an algorithm.
- Sort
    - QuickSort: The algorithm will select an element in the array to be a marker called pivot. After selecting the marker, it splits the array into two subarrays by comparing with the selected pivot. One array will include elements less than or equal to pivot and the other array is always greater than or equal to pivot.
    - Exam:
    ![alt text](https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1266.png)

    </details>

    <sumary>Application Algorithms Quicksort</sumary>

    - Commercial Calculator: Used in government and private organizations for various data classification purposes such as sorting accounts/records by name or by ID, classifying transactions by time or location , sort files by name or creation date, etc.
    - Numerical computation: Most efficiently developed algorithms use priority queues and inturn sort to achieve accuracy in all calculations.
    - Information search: Sorting algorithm makes searching for information faster and more efficient

    </detail>
    

- Search
    - LinearSearch (complexity: O(n)): Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set. It is the easiest searching algorithm
        - Exam:

        ![alt text](https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png)

### Programming
- Data Type
    - Primitive Type: Are a set of basic data types from which all other data types are constructed
        - Exam: Numbers, String, Boolean, v.v
    - Reference Type: Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.
        - Exam: Object, Functions, Collections, Arrays, v.v
- Compiler
    - Compiler:
    - Why compiler needed
- Thread: 
- Lock and Deadlock
    - Lock:
    - Deadlock:
- Race condition: 
    