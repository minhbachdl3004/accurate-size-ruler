// Complete Apple device database with PPI and release years
const devices = {
    iphones: [
        { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', screenSize: 6.9, scaleFactor: 3, ppi: 458, year: 2025 },
        { id: 'iphone-16-pro', name: 'iPhone 16 Pro', screenSize: 6.3, scaleFactor: 3, ppi: 460, year: 2025 },
        { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', screenSize: 6.7, scaleFactor: 3, ppi: 460, year: 2023 },
        { id: 'iphone-15-pro', name: 'iPhone 15 Pro', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2023 },
        { id: 'iphone-15-plus', name: 'iPhone 15 Plus', screenSize: 6.7, scaleFactor: 3, ppi: 460, year: 2023 },
        { id: 'iphone-15', name: 'iPhone 15', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2023 },
        { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', screenSize: 6.7, scaleFactor: 3, ppi: 460, year: 2022 },
        { id: 'iphone-14-pro', name: 'iPhone 14 Pro', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2022 },
        { id: 'iphone-14-plus', name: 'iPhone 14 Plus', screenSize: 6.7, scaleFactor: 3, ppi: 460, year: 2022 },
        { id: 'iphone-14', name: 'iPhone 14', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2022 },
        { id: 'iphone-se-3', name: 'iPhone SE (3rd gen)', screenSize: 4.7, scaleFactor: 2, ppi: 326, year: 2022 },
        { id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', screenSize: 6.7, scaleFactor: 3, ppi: 458, year: 2021 },
        { id: 'iphone-13-pro', name: 'iPhone 13 Pro', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2021 },
        { id: 'iphone-13-mini', name: 'iPhone 13 mini', screenSize: 5.4, scaleFactor: 3, ppi: 476, year: 2021 },
        { id: 'iphone-13', name: 'iPhone 13', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2021 },
        { id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', screenSize: 6.7, scaleFactor: 3, ppi: 458, year: 2020 },
        { id: 'iphone-12-pro', name: 'iPhone 12 Pro', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2020 },
        { id: 'iphone-12-mini', name: 'iPhone 12 mini', screenSize: 5.4, scaleFactor: 3, ppi: 476, year: 2020 },
        { id: 'iphone-12', name: 'iPhone 12', screenSize: 6.1, scaleFactor: 3, ppi: 460, year: 2020 },
        { id: 'iphone-se-2', name: 'iPhone SE (2nd gen)', screenSize: 4.7, scaleFactor: 2, ppi: 326, year: 2020 },
        { id: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max', screenSize: 6.5, scaleFactor: 3, ppi: 458, year: 2019 },
        { id: 'iphone-11-pro', name: 'iPhone 11 Pro', screenSize: 5.8, scaleFactor: 3, ppi: 458, year: 2019 },
        { id: 'iphone-11', name: 'iPhone 11', screenSize: 6.1, scaleFactor: 2, ppi: 326, year: 2019 }
    ],
    ipads: [
        { id: 'ipad-pro-13', name: 'iPad Pro 13"', screenSize: 13, scaleFactor: 2, ppi: 264, year: 2025 },
        { id: 'ipad-pro-12.9-6', name: 'iPad Pro 12.9" (6th gen)', screenSize: 12.9, scaleFactor: 2, ppi: 264, year: 2022 },
        { id: 'ipad-pro-11-6', name: 'iPad Pro 11" (6th gen)', screenSize: 11, scaleFactor: 2, ppi: 264, year: 2022 },
        { id: 'ipad-10', name: 'iPad (10th gen)', screenSize: 10.9, scaleFactor: 2, ppi: 264, year: 2022 },
        { id: 'ipad-air-5', name: 'iPad Air (5th gen)', screenSize: 10.9, scaleFactor: 2, ppi: 264, year: 2022 },
        { id: 'ipad-mini-6', name: 'iPad mini (6th gen)', screenSize: 8.3, scaleFactor: 2, ppi: 326, year: 2021 },
        { id: 'ipad-9', name: 'iPad (9th gen)', screenSize: 10.2, scaleFactor: 2, ppi: 264, year: 2021 }
    ],
    ipods: [
        { id: 'ipod-touch-7', name: 'iPod touch (7th gen)', screenSize: 4, scaleFactor: 2, ppi: 326, year: 2019 },
        { id: 'ipod-touch-6', name: 'iPod touch (6th gen)', screenSize: 4, scaleFactor: 2, ppi: 326, year: 2015 },
        { id: 'ipod-touch-5', name: '::contentReference[oaicite:0]{index=0'}
    ],
    samsung: [
        { id: 'galaxy-s21-ultra', name: 'Samsung Galaxy S21 Ultra', screenSize: 6.8, scaleFactor: 4, ppi: 515, year: 2021 },
        { id: 'galaxy-s20', name: 'Samsung Galaxy S20', screenSize: 6.2, scaleFactor: 3, ppi: 563, year: 2020 },
        { id: 'galaxy-note-20-ultra', name: 'Samsung Galaxy Note 20 Ultra', screenSize: 6.9, scaleFactor: 3, ppi: 496, year: 2020 },
        { id: 'galaxy-s22', name: 'Samsung Galaxy S22', screenSize: 6.1, scaleFactor: 3, ppi: 425, year: 2022 },
        { id: 'galaxy-s23-ultra', name: 'Samsung Galaxy S23 Ultra', screenSize: 6.8, scaleFactor: 4, ppi: 500, year: 2023 }
    ],
    google: [
        { id: 'pixel-5', name: 'Google Pixel 5', screenSize: 6.0, scaleFactor: 2, ppi: 432, year: 2020 },
        { id: 'pixel-6-pro', name: 'Google Pixel 6 Pro', screenSize: 6.7, scaleFactor: 3, ppi: 512, year: 2021 },
        { id: 'pixel-7', name: 'Google Pixel 7', screenSize: 6.3, scaleFactor: 3, ppi: 416, year: 2022 },
        { id: 'pixel-8-pro', name: 'Google Pixel 8 Pro', screenSize: 6.7, scaleFactor: 3, ppi: 489, year: 2023 },
        { id: 'pixel-8', name: 'Google Pixel 8', screenSize: 6.2, scaleFactor: 3, ppi: 428, year: 2023 }
    ],
    oneplus: [
        { id: 'oneplus-8-pro', name: 'OnePlus 8 Pro', screenSize: 6.78, scaleFactor: 3, ppi: 513, year: 2020 },
        { id: 'oneplus-9', name: 'OnePlus 9', screenSize: 6.55, scaleFactor: 3, ppi: 402, year: 2021 },
        { id: 'oneplus-10-pro', name: 'OnePlus 10 Pro', screenSize: 6.7, scaleFactor: 3, ppi: 525, year: 2022 },
        { id: 'oneplus-11', name: 'OnePlus 11', screenSize: 6.7, scaleFactor: 3, ppi: 525, year: 2023 }
    ],
    xiaomi: [
        { id: 'mi-10', name: 'Xiaomi Mi 10', screenSize: 6.67, scaleFactor: 3, ppi: 386, year: 2020 },
        { id: 'mi-11', name: 'Xiaomi Mi 11', screenSize: 6.81, scaleFactor: 3, ppi: 515, year: 2021 },
        { id: 'mi-12', name: 'Xiaomi Mi 12', screenSize: 6.28, scaleFactor: 3, ppi: 419, year: 2022 },
        { id: 'mi-13-lite', name: 'Xiaomi 13 Lite', screenSize: 6.55, scaleFactor: 3, ppi: 402, year: 2023 }
    ],
    sony: [
        { id: 'xperia-1-ii', name: 'Sony Xperia 1 II', screenSize: 6.5, scaleFactor: 3, ppi: 643, year: 2020 },
        { id: 'xperia-5-iii', name: 'Sony Xperia 5 III', screenSize: 6.1, scaleFactor: 3, ppi: 449, year: 2021 },
        { id: 'xperia-1-iv', name: 'Sony Xperia 1 IV', screenSize: 6.5, scaleFactor: 3, ppi: 643, year: 2022 },
        { id: 'xperia-5-iv', name: 'Sony Xperia 5 IV', screenSize: 6.1, scaleFactor: 3, ppi: 449, year: 2023 }
    ]
};



// Initialize device selector dropdown
function initDeviceSelector() {
    const select = document.getElementById('device-select');

    // Clear existing options
    select.innerHTML = '';

    // Add categories and devices
    for (const category in devices) {
        const group = document.createElement('optgroup');
        group.label = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize category name
        devices[category].forEach(device => {
            const option = new Option(`${device.name} (${device.year})`, device.id);
            group.appendChild(option);
        });
        select.appendChild(group);
    }

    // Handle selection changes
    select.addEventListener('change', handleDeviceSelection);
}


// Handle device selection
function handleDeviceSelection(event) {
    const deviceId = event.target.value;
    if (!deviceId) return;

    // Find the selected device in all categories
    let selectedDevice = null;
    for (const category in devices) {
        selectedDevice = devices[category].find(d => d.id === deviceId);
        if (selectedDevice) break;
    }

    console.log(selectedDevice.id);
    
    if (selectedDevice) {
        updateDeviceInfo(selectedDevice);
        createRuler(selectedDevice.ppi, selectedDevice.scaleFactor);
        updateDeviceCard(selectedDevice);
    }
}


// Update device information display
function updateDeviceInfo(device) {
    document.getElementById('selected-device').textContent = `${device.name} (${device.year})`;
    document.getElementById('device-ppi').textContent = device.ppi;
    document.getElementById('release-year').textContent = device.year;
    updateDeviceCard(device)
    setSliderWidth(device.id)
}

// Update device card display
function updateDeviceCard(device) {
    const pxPerCm = (device.ppi / 2.54) / device.scaleFactor;

    document.getElementById('device-name').textContent = device.name;
    document.getElementById('screen-info').textContent = `Screen: ${device.screenSize}" ${device.ppi} PPI`;
    document.getElementById('scale-factor').textContent = `Scale Factor: ${device.scaleFactor}x`;
    document.getElementById('px-per-cm').textContent = `Calculated: ${pxPerCm.toFixed(2)} px/cm`;

    const slider = document.getElementById('measure-slider');
        const measurement = document.getElementById('measurement-value');
        const pixelValue = document.getElementById('pixel-value');
        
        function initSlider() {
            // Set slider max based on ruler length
            const maxValue = deviceConfig.rulerLengthCm * 10; // 1 = 0.1cm
            slider.max = maxValue;
            
            // Set slider width in physical cm
            const sliderWidthPx = deviceConfig.rulerLengthCm * pxPerCm;
            slider.style.width = `${sliderWidthPx}px`;
            
            // Update measurements
            slider.addEventListener('input', function() {
                const cm = this.value / 10; // Convert to cm (0.0 - 5.0)
                const px = cm * pxPerCm;
                
                measurement.textContent = cm.toFixed(1);
                pixelValue.textContent = Math.round(px);
            });
            
            // Trigger initial update
            slider.dispatchEvent(new Event('input'));
        }
        
        // Initialize on load
        window.addEventListener('load', initSlider);
        
        // Recalculate on resize
        window.addEventListener('resize', initSlider);



}

// Create ruler with specific PPI
function createRuler(ppi, scaleFactor) {
    const pxPerCm = (ppi / 2.54) / scaleFactor;
    const ruler = document.getElementById('ruler');
    const rulerWidth = pxPerCm * 2;
    const units = 2; // Numbers from 0 to 10
    
    // Clear existing ticks
    ruler.innerHTML = '';

    // Set ruler width
    ruler.style.width = rulerWidth + 'px';
    
    // Create ruler ticks (2cm ruler with mm markings)
    for (let i = 0; i <= 20; i++) {
        const tick = document.createElement('div');
        const position = (i / 10) * pxPerCm;
        tick.className = `tick ${i % 10 === 0 ? 'major' : ''}`;
        tick.style.left = `${position}px`;
        
        if (i % 10 === 0) {
            const label = document.createElement('div');
            label.className = 'tick-label';
            label.textContent = `${i/10}`;
            tick.appendChild(label);
        }
        
        ruler.appendChild(tick);
    }
    
    initSlider(pxPerCm);
}

// Initialize slider functionality
function initSlider(pxPerCm) {
    const slider = document.getElementById('slider');
    const ruler = document.getElementById('ruler');
    const measurement = document.getElementById('measurement');
    let isDragging = false;

    function updatePosition(clientX) {
        const rect = ruler.getBoundingClientRect();
        let pos = Math.max(0, Math.min(clientX - rect.left, rect.width));
        slider.style.left = `${pos + 25}px`; // 25px for container padding
        measurement.textContent = `${(pos / pxPerCm).toFixed(1)} cm`;
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) updatePosition(e.clientX);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch events
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) updatePosition(e.touches[0].clientX);
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Initialize slider position
    slider.style.left = '25px';
    measurement.textContent = '0.0 cm';
}

const slider = document.getElementById('measure-slider');
const measurement = document.getElementById('measurement-value');
        
// Simply display the range input's value
slider.addEventListener('input', function() {
    measurement.textContent = this.value;
});


// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDeviceSelector();
});


// Function to detect Apple device from user agent
function detectAppleDevice() {
    const ua = navigator.userAgent;
    if (/iPhone/.test(ua)) return 'iphone-15';
    if (/iPad/.test(ua)) return 'ipad-pro-13';
    return null;
}

// Function to find device data from devices structure
function getDeviceData(deviceId) {
    for (const category in devices) {
        const device = devices[category].find(d => d.id === deviceId);
        if (device) return device;
    }
    return null;
}

// Function to calculate pxPerCm
function calculatePxPerCm(devicePPI, scaleFactor) {
    return (devicePPI / 2.54) / scaleFactor;
}

// Function to set the slider width dynamically
function setSliderWidth(deviceId) {
    // const deviceId = detectAppleDevice();
    const deviceData = getDeviceData(deviceId);

    if (deviceData) {
        const { ppi, scaleFactor } = deviceData;
        const pxPerCm = calculatePxPerCm(ppi, scaleFactor);
        console.log(pxPerCm);
        
        const sliderWidth = 2 * pxPerCm; // 2 cm in pixels
        const slider = document.getElementById('measure-slider');
        const ruler = document.getElementById('ruler');
        const ruler_slider = document.getElementById('ruler slider');
        
        
        slider.style.width = `${sliderWidth}px`;
        ruler.style.width = `${sliderWidth}px`;
        ruler_slider.style.width = `${sliderWidth}px`;
        console.log(`Device: ${deviceData.name}, pxPerCm: ${pxPerCm.toFixed(2)}, Slider width: ${sliderWidth.toFixed(2)}px`);
    } else {
        console.warn('Device not recognized. Default slider width applied.');
    }
}

// Initialize slider width on page load
window.onload = setSliderWidth;
