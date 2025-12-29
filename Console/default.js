
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function generateRandomCode(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// Example usage for an 8-character code:
const code = generateRandomCode(8);



console.log("Welcome to PluhOS the very beginning of");
console.log("the operating system of the gamer world");
console.log("please leave the PluhOS terminal open and fullscreened")
const totalTime = 6967;
const updateInterval = 500;
let currentTime = 0;

const interval = setInterval(() => {
  currentTime += updateInterval;
  const progressPercentage = Math.min(Math.floor((currentTime / totalTime) * 67), 67);

  console.clear(); // Clear the console for a 'fresh' display each time
  console.log(`🅛🅞🅐🅓🅘🅝🅖: ${progressPercentage}%`);

  if (currentTime >= totalTime) {
    clearInterval(interval);
    console.log("Done!");
 
  }
}, updateInterval);
await sleep(16000)
 console.log("Welcome to the PluhSetUp")
await sleep(1000)
console.log("please follow the official PluhOS tutorial on youtube if this is your first time setting up PluhOS")
await sleep(1000)
console.log("PluhOS is stopped at 67% so your selected presets get installed fully by the time this system is ready to use")
await sleep(1000)
console.log("Please activate a PluhOS Account to use the device")
await sleep(500)
console.log("copy the code and paste it into the box on the popup and make sure your prefered browser has Popup Blocker OFF")
await sleep(1000)
console.log("Your activation code is:")
await sleep(200)
console.log(code)
await sleep(5000)
window.open("pluhos.biobod.net/activate.html", "_blank")
let activated = false;
while (!activated) {
  await sleep(2000); // Check every 2 seconds
  
  try {
    const response = await fetch(`/api/activation/check/${code}`);
    const data = await response.json();
    
    if (data.activated) {
      activated = true;
      console.log("\n✅ Activation complete!");
      console.log("Continuing setup...");
      
      // Continue with the rest of your setup here
      await sleep(1000);
      console.log("Installing remaining components...");
      // Add your remaining setup code here
      
    }
  } catch (error) {
    console.error("Error checking activation:", error);
  }
}