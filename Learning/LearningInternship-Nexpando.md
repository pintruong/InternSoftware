### Data structure and Algothrims

## Data structure 

# Array (Static Data Structure)

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
    |     An array is a collection of elements of a similar data type. | A linked list is a collection of objects known as a node where node consists of two parts, i.e., data and address.|
    |     Array elements store in a contiguous memory location. | Linked list elements can be stored anywhere in the memory or randomly stored.   |
  
    
    </details>

- What's the difference between Array and Map?
    - An Array is a collection of elements of the same data type.	
    The map is a hashed structure of key and value pairs.
The indices of the list are integers starting from 0.	
The keys of the Map can be of any data type.
The elements are accessed via indices.
	The elements are accessed via key-values.

- What's the difference between Array and Set?