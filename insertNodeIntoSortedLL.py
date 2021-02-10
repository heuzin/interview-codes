# DoublyLinkedListNode:
#     int data
#     DoublyLinkedListNode next
#     DoublyLinkedListNode prev
#
#hello world
def sortedInsert(head, data):
  # create a node from data = dataNode
  dataNode = DoublyLinkedListNode(data)
  # EDGE CASES:
  # head is null
    # return dataNode
  if not head:
    return dataNode
  
  # what if we have to insert before the head?
  if dataNode.data < head.data:
    dataNode.next = head
    head.prev = dataNode
    return dataNode
  
  current = head
  # start at the head and then traverse the LL
  # while loop
  while current.next:
    current = current.next
    # compare the data to the node.data
    # if the data less than the current
    if dataNode.data < current.data:
      dataNode.next = current
      dataNode.prev = current.prev
      current.prev.next = dataNode
      current.prev = dataNode
      return head
      
  #if no return, new tail is dataNode
  current.next = dataNode
  dataNode.prev = current 
  return head
      
      # then insert the dataNode before the current
      # use our insert logic
      # and return hte head
    # if not, then move on in our list
  
  # if we make it here without inserting our node, then we need to insert at the end 
  # insert after the tail
    # change the pointers to insert it and return head