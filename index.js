function writeCards(names, eventName) {
    const thankYouMessages = []; // Create an empty array to hold the messages
    for (let i = 0; i < names.length; i++) {
      // Iterate through the input array
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Create the message
      thankYouMessages.push(message); // Add the message to the new array
    }
    return thankYouMessages; // Return the new array of messages
  }
  
  // Example call
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  
  // Log the generated thank you messages
  messages.forEach((message, index) => {
    console.log(`Message ${index + 1}: ${message}`);
  });
function countDown(startingNumber) {
    // Ensure the input is a positive integer
    if (typeof startingNumber === "number" && startingNumber > 0) {
      while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
      }
    } else {
      console.log("Please provide a positive integer as the starting number.");
    }
  }
  
  // Example: Count down from 10
countDown(10);
