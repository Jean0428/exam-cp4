// Definition of the Node class representing each element in the linked list
class Node {
    constructor(new_data) {
      this.data = new_data; // Assign new data to the node
      this.next = null; // Next pointer is initially null
    }
  }
  
  // Definition of the LinkedList class to manage the list
  class LinkedList {
    constructor() {
      this.head = null; // Head initially points to null
      this.size = 0; // Initialize size to 0
    }
  
    // Method to add a new node at the front of the list
    insert(newData) {
      let newNode = new Node(newData); // Create a new node with newData
      newNode.next = this.head; // Point new node to the current head
      this.head = newNode; // Update the head to be the new node
      this.size++; // Increment the size of the list
    }
  
    // Method to traverse the list and print each node's data
    traverseList() {
      let current = this.head; // Start from the head
      while (current != null) { // Loop until the end of the list
        process.stdout.write(current.data + " "); // Print the current node's data
        current = current.next; // Move to the next node
      }
      console.log(); // New line after printing all nodes
    }
  
    // Method to print the list in a formatted way
    printList() {
      let curr = this.head; // Start from the head
      let result = ""; // Initialize an empty string for the result
  
      while (curr !== null) { // Loop through the entire list
        result += " " + curr.data; // Append data to the result string
        curr = curr.next; // Move to the next node
      }
      console.log(result); // Print the final result
    }
  }
  
  // Function to create a new linked list and perform operations on it
  function newList() {
    let list = new LinkedList(); // Create a new linked list instance
    list.head = new Node(1); // Add the first node to the list
    list.head.next = new Node(2); // Add the second node
    list.head.next.next = new Node(3); // Add the third node
  
    list.traverseList(); // Traverse and print the initial list
  
    const data = 10; // Data to be inserted at the front
    list.insert(data); // Insert the new data at the front
    list.printList(); // Print the list after insertion
  }
  
  // Execute the newList function
  newList();
  