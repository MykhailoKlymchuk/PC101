class processor {
    constructor(name, model, socket, cores, threads, frequency,
                cache, graphics, TDP) {
        this.name = name;
        this.model = model;
        this.socket = socket;
        this.cores = cores;
        this.threads = threads;
        this.frequency = frequency;
        this.cache = cache;
        this.graphics = graphics;
        this.TDP = TDP;
    };
}

class graphicsCard {
    constructor(name, model, interf, frequency,
                memory, mType, mInterface, TDP) {
        this.name = name;
        this.model = model;
        this.interface = interf;
        this.frequency = frequency;
        this.memory = memory;
        this.mType = mType;
        this.mInterface = mInterface;
        this.TDP = TDP;
    };
}

class motherboard {
    constructor(name, model, socket, memorySlots, memoryMax, memoryType,
                pciExpress, sata, audio, usb, formFactor) {
        this.name = name;
        this.model = model;
        this.socket = socket;
        this.memorySlots = memorySlots;
        this.memoryMax = memoryMax;
        this.memoryType = memoryType;
        this.pciExpress = pciExpress;
        this.sata = sata;
        this.audio = audio;
        this.usb = usb;
        this.formFactor = formFactor;
    };
}

class ram {
    constructor(name, model, type, speed, capacity, number) {
        this.name = name;
        this.model = model;
        this.type = type;
        this.speed = speed;
        this.capacity = capacity;
        this.number = number;
    };
}

class storageDevice {
    constructor(name, model, type, speed, capacity, interf, cache) {
        this.name = name;
        this.model = model;
        this.type = type;
        this.speed = speed;
        this.capacity = capacity;
        this.interface = interf;
        this.cache = cache;
    };
}

class powerSupply {
    constructor(name, model, type, power, interf) {
        this.name = name;
        this.model = model;
        this.type = type;
        this.power = power;
        this.interface = interf;
    };
}

let processor_L_1 = new processor("AMD Ryzen 3 2200G", "YD320GC5FHBOX", "Socket AM4",
    4, 4, 3.6, 4, "AMD Radeon Vega 8", 65);
let processor_M_1 = new processor("AMD Ryzen 5 3600", "100-100000031BOX", "Socket AM4",
    6, 12, 3.6, 32, "None", 65);
let processor_M_01 = new processor("AMD Ryzen 5 2400G", "YD2400C5M4MFB", "Socket AM4",
    4, 8, 3.6, 4, "AMD Radeon Vega 11", 65);
let processor_H_1 = new processor("AMD Ryzen 7 3800X", "100-100000025BOX", "Socket AM4",
    8, 16, 3.9, 32, "None", 105);

let processor_L_2 = new processor("Intel Core i3-10300", "BX8070110300",
    "LGA 1200", 4, 8, 3.7, 8, "Intel UHD Graphics 630", 65);
let processor_M_2 = new processor("Intel Core i5-12600K", "BX8071512600K",
    "LGA 1700", 10, 16, 3.7, 20, "Intel UHD Graphics 770", 125);
let processor_H_2 = new processor("Intel Core i7-12700K", "BX8071512700K",
    "LGA 1700", 12, 20, 3.6, 25, "Intel UHD Graphics 770", 125);

let graphicsCard_H_2 = new graphicsCard("ASUS ROG Strix GeForce RTX 3090", "ROG-RTX3090-O24G",
    "PCI Express 4.0", 1890, 24, "GDDR6", 384, 750);
let graphicsCard_M_2 = new graphicsCard("MSI Gaming GeForce RTX 3060", "RTX 3060 Gaming X 12G",
    "PCI Express 4.0", 1837, 12, "GDDR6", 192, 170);
let graphicsCard_HP_2 = new graphicsCard("PNY RTX A5000", "VCQRTX5000-PB",
    "PCI Express 3.0", 1170, 24, "GDDR6", 384, 230);
let graphicsCard_M_1 = new graphicsCard("GIGABYTE Radeon RX 6600", "GV-R66EAGLE-8GD",
    "PCI Express 4.0", 1626, 8, "GDDR6", 128, 170);

let motherboard_L_1 = new motherboard("MSI A320M-A PRO", "A320M-A PRO", "AM4",
    2, 32, "DDR4", "1xPCI Express 3.0 x16", "4xSATA 6Gb/s",
    "Realtek ALC892", 3, "Micro ATX");
let motherboard_M_1 = new motherboard("MSI PRO B450M PRO-VDH MAX", "B450M PRO-VDH MAX", "AM4",
    4, 128, "DDR4", "1xPCI Express 3.0 x16", "4xSATA 6Gb/s",
    "Realtek ALC892", 3, "Micro ATX");
let motherboard_H_1 = new motherboard("MSI X470 GAMING PLUS", "X470 GAMING PLUS", "AM4",
    4, 64, "DDR4", "2xPCI Express 3.0 x16", "6xSATA 6Gb/s",
    "Realtek ALC892", 8, "ATX");

let motherboard_L_2 = new motherboard("ASRock H510M-HDV", "H510M-HDV LGA", "LGA 1200",
    2, 64, "DDR4", "1xPCI Express 4.0 x16", "4xSATA 6Gb/s",
    "Realtek ALC897", 3, "Micro ATX");
let motherboard_M_2 = new motherboard("MSI B560M PRO-E", "B560M PRO-E", "LGA 1200",
    4, 64, "DDR4", "1xPCI Express 4.0 x16", "4xSATA 6Gb/s",
    "Realtek ALC897", 3, "Micro ATX");
let motherboard_H_2 = new motherboard("ASUS TUF Gaming Z690-Plus", "Gaming Z690-Plus",
    "LGA 1700", 4, 128, "DDR4", "1xPCI Express 5.0 x16", "4xSATA 6Gb/s",
    "Realtek ALC897", 8, "ATX");

let ram_L_1 = new ram("Crucial 8GB 288-Pin DDR4 SDRAM", "288-Pin DDR4 SDRAM",
    "DDR4", 2666, 8, 1);
let ram_M_1 = new ram("CORSAIR Vengeance LPX 16GB 288-Pin DDR4 SDRAM", "Vengeance LPX 288-Pin DDR4 SDRAM",
    "DDR4", 3200, 16, 2);
let ram_H_1 = new ram("CORSAIR Vengeance LPX 32GB 288-Pin DDR4 SDRAM", "Vengeance LPX 288-Pin DDR4 SDRAM",
    "DDR4", 3600, 32, 2);

let hdd_L_1 = new storageDevice("WD Blue 1TB", "Blue 1TB", "HDD", 7200,
    1024, "SATA3", 64);
let hdd_M_1 = new storageDevice("WD Black 2TB", "Black 2TB", "HDD", 7200,
    2048, "SATA3", 64);

let ssd_M_1 = new storageDevice("Crucial MX500 1TB", "MX500 1TB", "SSD", 560,
    1024, "SATA3", 0);
let ssd_H_1 = new storageDevice("SAMSUNG 870 EVO Series", "870 EVO Series", "SSD", 560,
    2048, "SATA3", 2048);

let powerSupply_L_1 = new powerSupply("EVGA 450 BR 100-BR-0450-K1 450 W", "450 BR 100-BR-0450-K1 450 W",
    "ATX12V/EPS12V", 450, "24-pin");
let powerSupply_M_1 = new powerSupply("CORSAIR RM650x CP-9020198-NA 650 W", "RMx Series RM650x CP-9020198-NA 650 W",
    "ATX12V/EPS12V", 600, "24-pin");
let powerSupply_H_1 = new powerSupply("CORSAIR RM850 CP-9020235-NA 850 W", "RM850 CP-9020235-NA 850 W",
    "ATX12V/EPS12V", 850, "24-pin");


function loadProcessors() {
    let element = document.getElementById("processors");
    let processors_list = [
        processor_L_1, processor_M_1, processor_M_01, processor_H_1,
        processor_L_2, processor_M_2, processor_H_2
    ];
    let processor;
    for (let i = 0; i < processors_list.length; i++) {
        processor = processors_list[i];
        element.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="/assets/files/images/repository/${processor.name}.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="#">${processor.name}</a>
                        </h5>
                        <p class="card-text">
                            ??????????????: ${processor.frequency} ??????<br>
                            ????????/??????????????: ${processor.cores}/${processor.threads}<br>
                            ??????????: ${processor.socket}<br>
                            ??????????????: ${processor.graphics === 'None' ? '????????????????' : processor.graphics}<br>
                            ??????: ${processor.cache} ????<br>
                            TDP: ${processor.TDP} ????<br>
                            ????????????: ${processor.model}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

function loadGraphicsCards() {
    let element = document.getElementById("graphicsCards");
    let graphicsCards_list = [
        graphicsCard_H_2, graphicsCard_M_2, graphicsCard_M_1, graphicsCard_HP_2
    ];
    let graphicsCard;
    for (let i = 0; i < graphicsCards_list.length; i++) {
        graphicsCard = graphicsCards_list[i];
        element.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="/assets/files/images/repository/${graphicsCard.name}.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="#">${graphicsCard.name}</a>
                        </h5>
                        <p class="card-text">
                            ??????????????: ${graphicsCard.frequency} ??????<br>
                            ??????????????????: ${graphicsCard.interface} ????<br>
                            TDP: ${graphicsCard.TDP} ????<br>
                            ??????'??????: ${graphicsCard.memory} ????<br>
                            ?????? ??????'??????: ${graphicsCard.mType}<br>
                            ???????????? ???????? ??????'??????: ${graphicsCard.mInterface} ??????<br>
                            ????????????: ${graphicsCard.model}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

function loadMotherboards() {
    let element = document.getElementById("motherboards");
    let motherboards_list = [
        motherboard_H_2, motherboard_M_1, motherboard_H_1,
        motherboard_L_2, motherboard_M_2, motherboard_L_1
    ];
    let motherboard;
    for (let i = 0; i < motherboards_list.length; i++) {
        motherboard = motherboards_list[i];
        element.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="/assets/files/images/repository/${motherboard.name}.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="#">${motherboard.name}</a>
                        </h5>
                        <p class="card-text">
                            ??????????????: ${motherboard.frequency} ??????<br>
                            ??????????: ${motherboard.socket}<br>
                            ???????? ???????????? ??????'??????: ${motherboard.memorySlots}<br>
                            ????????. ??????'??????: ${motherboard.memoryMax} ????<br>
                            ?????? ??????'??????: ${motherboard.memoryType}<br>
                            ???????????? PCI: ${motherboard.pciExpress}<br>
                            ???????????? SATA: ${motherboard.sata}<br>
                            ???????????? USB: ${motherboard.usb}<br>
                            ??????????: ${motherboard.audio}<br>
                            ???????? ????????????: ${motherboard.formFactor}<br>
                            ??????????: ${motherboard.socket}<br>
                            ????????????: ${motherboard.model}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

function loadRam() {
    let element = document.getElementById("ram");
    let ram_list = [
        ram_L_1, ram_M_1, ram_H_1
    ];
    let ram;
    for (let i = 0; i < ram_list.length; i++) {
        ram = ram_list[i];
        element.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="/assets/files/images/repository/${ram.name}.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="#">${ram.name}</a>
                        </h5>
                        <p class="card-text">
                            ????????????: ${ram.capacity} ????<br>
                            ?????? ??????'??????: ${ram.type}<br>
                            ??????????????: ${ram.speed} ??????<br>
                            ?????????????????? ????????????: ${ram.number}<br>
                            ????????????: ${ram.model}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

function loadStorage() {
    let element = document.getElementById("storageDevices");
    let storageDevices_list = [
        hdd_L_1, hdd_M_1,
        ssd_M_1, ssd_H_1
    ];
    let storageDevice;
    for (let i = 0; i < storageDevices_list.length; i++) {
        storageDevice = storageDevices_list[i];
        element.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="/assets/files/images/repository/${storageDevice.name}.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="#">${storageDevice.name}</a>
                        </h5>
                        <p class="card-text">
                            ????????????: ${storageDevice.capacity} ????<br>
                            ?????? ??????????: ${storageDevice.type}<br>
                            ??????????????????: ${storageDevice.speed} ????/????<br>
                            ?????????????????? ??????????????????????: ${storageDevice.interface}<br>
                            ??????: ${storageDevice.cache} ????<br>
                            ????????????: ${storageDevice.model}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

function loadPower() {
    let element = document.getElementById("powerSupplies");
    let powerSupplies_list = [
        powerSupply_L_1, powerSupply_M_1, powerSupply_H_1
    ];
    let powerSupply;
    for (let i = 0; i < powerSupplies_list.length; i++) {
        powerSupply = powerSupplies_list[i];
        element.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="/assets/files/images/repository/${powerSupply.name}.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="#">${powerSupply.name}</a>
                        <p class="card-text">
                            ??????: ${powerSupply.type}<br>
                            ????????????????????: ${powerSupply.power} ????<br>
                            ?????????????????? ??????????????????????: ${powerSupply.interface}<br>
                            ????????????: ${powerSupply.model}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

function loadComponents() {
    loadProcessors();
    loadGraphicsCards();
    loadMotherboards();
    loadRam();
    loadStorage();
    loadPower();
}

loadComponents();