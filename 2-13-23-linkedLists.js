// Head node (first node)
// tail node (last node)
// "pointer" is the piece of data that points to other pieces.

// contiguous slots in memory...arrays take up contiguous slots in memory so they're really good at.....ACCESSING INFO. Random access to our memery is blazing fast bc we can use the indices of these contig. blocks of memory. 
// arrays are not good at adding data. 
// linked lists ARE. adding and deleting become so much easier with LINKED LISTS!
// all you have to do is change the 'pointers' and then the data works just fine.

// you lose the super blaZING FAST access to the memory , but you gain a lot of flexibility with being able to add and delete things.

// linked lists are good for:
// chaotic small amounts of data that may need to move around a bunch

// big data sets? do an array probably. 

// what is a doubly linked list?
// a LL where the pointer can go forward and backward at the same time.

// train schedules are a common interview question that uses linked lists. "this stop to this stop to this stop" like Gmaps
// if you see:
// music playlist problems
// browser navigation problems
// airline reservations...

// ...USE LINKED LISTS!


//doubly linked list class

class LinkedList {
    constructor () {
      this.head = this.tail = null
    }
  
    // add to the end of the list / tail
    append(value) {
      // if list is empty
      if (!this.tail) {
        this.head = this.tail = new Node(value)
      }
      // if linkedlist has >= one node
      else {
        let oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
        this.tail.prev = oldTail
      }
    }
  
    //add to beginning of list / head
    prepend(value) {
      // if list is empty
      if (!this.head) {
        this.head = this.tail = new Node(value)
      }
      // if linkedlist has >= one node
      else {
        let oldHead = this.head
        this.head = new Node(value)
        oldHead.prev = this.head
        this.head.next = oldHead
      }
    }
  
    deleteHead() {
      // if list is empty (no head)
      if (!this.head) {
        return null
      }
      // if linkedlist has >= 1 node
      else {
        let removedHead = this.head
        // if list has only 1 node left
        if (this.head === this.tail) {
          this.head = this.tail = null
        }
        //if list has >1 node
        else {
          this.head = this.head.next
          this.head.prev = null
        }
        return removedHead.value
      }
    }
  
    deleteTail() {
      // if list is empty (no tail)
      if (!this.tail) {
        return null
      }
      // if linkedlist has >= one node
      else {
        let removedTail = this.tail
        // if list has only 1 node left
        if (this.head === this.tail) {
          this.tail = this.head = null
        }
        //if list has >1 node
        else {
          this.tail = this.tail.prev
          this.tail.next = null
        }
        return removedTail.value
      }
    }
  
    search(value) {
      let currentNode = this.head
  
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode
        }
        currentNode = currentNode.next
      }
  
      return null
    }
  }
  
  class Node {
    constructor (value, prev, next) {
      this.value = value
      this.next = next || null
      this.prev = prev || null
    }
  }
  
  const list = new LinkedList()
  
  list.append(1)
  list.append(2)
  list.append(3)
  
  // list.prepend(0)
  // list.prepend(-1)
  
  // list.search(1) 
  // list.search(3) 
  // list.search(999) 
  
  // list.deleteHead() // -1
  // list.deleteTail() // 3
  // list.deleteTail() // 2
  // list.deleteHead() // 0
  
  // list.deleteHead() // 1
  
  // list.deleteTail() // null
  