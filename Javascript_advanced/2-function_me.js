function welcomeMessage(fullName) {
  return function() {
    alert(`Welcome ${fullName}`);
  }
}

const guillaume = welcomeMessage('guillaume');
const alex = welcomeMessage('alex');
const fred = welcomeMessage('fred');