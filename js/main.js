const logContent = [
    "[INFO]  Booting bobrOS...",
    "[INFO]  Initiating the Beaver Kernel v2.0...",
    "[INFO]  Detecting attached hardware...",
    "[INFO]  Beaver Tail module detected: 1 unit.",
    "[INFO]  Incisors module detected: 4 units.",
    "[INFO]  Loading Dam Builder Interface...",
    "[INFO]  Verifying Wood Chipping Peripheral...",
    "[INFO]  All peripherals operational.",
    "[INFO]  Applying Fur Smoothness Protocols...",
    "[INFO]  Spinning up the Lodge Drive...",
    "[INFO]  Checking for any Dam leaks... None found.",
    "[INFO]  Initializing the Gnaw Security Suite...",
    "[INFO]  Chewing through initialization scripts... 100% complete.",
    "[INFO]  Ensuring strong and sturdy operation...",
    "[WARNING]  Minor log jam detected, adjusting parameters...",
    "[INFO]  Beaver Energy Boosters activated.",
    "[INFO]  Mounting root filesystem...",
    "[INFO]  Root filesystem mounted successfully.",
    "[INFO]  Starting init process...",
    "[INFO]  Running boot scripts...",
    "[INFO]  Checking disk quotas...",
    "[INFO]  Disk quotas: OK.",
    "[INFO]  Setting up user environment...",
    "[INFO]  Applying user profile configurations...",
    "[INFO]  Configuring network interfaces...",
    "[INFO]  Network interfaces configured successfully.",
    "[INFO]  Starting system services...",
    "[INFO]  Service: BeaverDam - Running",
    "[INFO]  Service: WoodChipper - Running",
    "[INFO]  Service: StreamMonitor - Running",
    "[INFO]  Service: GnawGuard - Running",
    "[INFO]  Applying final system tweaks...",
    "[INFO]  System tweaks applied successfully.",
    "[INFO]  Performing final hardware checks...",
    "[INFO]  All hardware checks passed.",
    "[INFO]  Cleaning up initialization scripts...",
    "[INFO]  Loading desktop environment: BobrGUI...",
    "[INFO]  BobrGUI: Initializing components...",
    "[INFO]  BobrGUI: Setting up widgets...",
    "[INFO]  BobrGUI: Applying theme: RusticWood",
    "[INFO]  BobrGUI: Configuring user preferences...",
    "[INFO]  BobrGUI: Launching desktop...",
    "[INFO]  BobrGUI: Desktop ready.",
    "[INFO]  bobrOS fully operational. Time to get busy!",
    "[INFO]  System ready to build and thrive!"
]
const wrapper = document.querySelector('.boot-log');

let currentLine = 0;

function addLine() {
    if (currentLine < logContent.length) {
        wrapper.innerHTML += logContent[currentLine] + "<br>";
        currentLine++;
        setTimeout(addLine, 30);
    } else {
        document.querySelector('.prompt-screen').style.display = "flex";
    }
}

addLine();